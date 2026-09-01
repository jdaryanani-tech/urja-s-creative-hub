import { supabase } from "@/integrations/supabase/client";

export type InquiryInput = {
  full_name: string;
  email: string;
  phone: string;
  program: string;
  message?: string;
  source?: string;
};

export async function submitInquiry(input: InquiryInput) {
  const { error } = await supabase.from("inquiries").insert({
    full_name: input.full_name.trim(),
    email: input.email.trim(),
    phone: input.phone.trim(),
    program: input.program.trim(),
    message: input.message?.trim() || null,
    source: input.source ?? "website",
    status: "new",
  });

  if (error) throw error;
}