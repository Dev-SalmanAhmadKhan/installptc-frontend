import { Mail, Phone } from "lucide-react";
import type { ContactDataType } from "@/types";

export const contactData: ContactDataType[] = [
  {
    icon: Mail,
    label: "Email",
    value: "support@adsnes.com",
  },
  {
    icon: Phone,
    label: "Skype",
    value: "adsnes",
  },
];
