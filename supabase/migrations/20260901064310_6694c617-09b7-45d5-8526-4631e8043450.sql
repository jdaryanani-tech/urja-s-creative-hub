create schema if not exists private;

create or replace function private.has_role(_user_id uuid, _role public.app_role)
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

drop policy if exists "Staff can view inquiries" on public.inquiries;
drop policy if exists "Staff can update inquiries" on public.inquiries;
drop policy if exists "Admins can delete inquiries" on public.inquiries;

revoke all on function public.has_role(uuid, public.app_role) from public, anon, authenticated;
drop function public.has_role(uuid, public.app_role);

create policy "Staff can view inquiries"
on public.inquiries
for select
to authenticated
using (private.has_role(auth.uid(), 'admin') or private.has_role(auth.uid(), 'moderator'));

create policy "Staff can update inquiries"
on public.inquiries
for update
to authenticated
using (private.has_role(auth.uid(), 'admin') or private.has_role(auth.uid(), 'moderator'))
with check (private.has_role(auth.uid(), 'admin') or private.has_role(auth.uid(), 'moderator'));

create policy "Admins can delete inquiries"
on public.inquiries
for delete
to authenticated
using (private.has_role(auth.uid(), 'admin'));