create type public.app_role as enum ('admin', 'moderator', 'user');

create table public.user_roles (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null,
  role public.app_role not null,
  unique (user_id, role)
);

grant select on public.user_roles to authenticated;
grant all on public.user_roles to service_role;

alter table public.user_roles enable row level security;

create policy "Users can view their own roles"
on public.user_roles
for select
to authenticated
using (auth.uid() = user_id);

create table public.inquiries (
  id uuid primary key default gen_random_uuid(),
  full_name text not null,
  email text not null,
  phone text not null,
  program text not null,
  message text,
  source text not null default 'website',
  status text not null default 'new',
  notes text,
  contacted_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

grant insert on public.inquiries to anon;
grant select, insert, update, delete on public.inquiries to authenticated;
grant all on public.inquiries to service_role;

alter table public.inquiries enable row level security;

create policy "Anyone can submit an inquiry"
on public.inquiries
for insert
to anon, authenticated
with check (
  length(trim(full_name)) between 2 and 120
  and length(trim(email)) between 5 and 254
  and length(trim(phone)) between 7 and 40
  and length(trim(program)) between 2 and 200
  and (message is null or length(message) <= 3000)
  and source = 'website'
  and status = 'new'
);

create or replace function public.has_role(_user_id uuid, _role public.app_role)
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1
    from public.user_roles
    where user_id = _user_id
      and role = _role
  )
$$;

grant execute on function public.has_role(uuid, public.app_role) to authenticated;

grant select, update on public.inquiries to authenticated;

create policy "Staff can view inquiries"
on public.inquiries
for select
to authenticated
using (public.has_role(auth.uid(), 'admin') or public.has_role(auth.uid(), 'moderator'));

create policy "Staff can update inquiries"
on public.inquiries
for update
to authenticated
using (public.has_role(auth.uid(), 'admin') or public.has_role(auth.uid(), 'moderator'))
with check (public.has_role(auth.uid(), 'admin') or public.has_role(auth.uid(), 'moderator'));

create policy "Admins can delete inquiries"
on public.inquiries
for delete
to authenticated
using (public.has_role(auth.uid(), 'admin'));

create or replace function public.update_updated_at_column()
returns trigger
language plpgsql
set search_path = public
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

create trigger update_inquiries_updated_at
before update on public.inquiries
for each row execute function public.update_updated_at_column();