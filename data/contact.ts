import { Mail, Phone } from "lucide-react";
import type { ContactDataType } from "@/types";

export const contactData: ContactDataType[] = [
  {
    icon: Mail,
    label: "Email",
    value: "support@installptc.com",
  },
  {
    icon: Phone,
    label: "Skype",
    value: "installptc",
  },
];
