import {
  Mail,
  Facebook,
  MessageSquare,
  MessageCircle,
  Send,
} from "lucide-react";
import type { ContactDataType } from "@/types";

export const contactData: ContactDataType[] = [
  {
    icon: Mail,
    label: "Email",
    value: "support@adsnes.com",
    href: "mailto:support@adsnes.com",
  },
  {
    icon: MessageSquare,
    label: "Teams",
    value: "Join Teams",
    href: "https://teams.live.com/l/invite/FEAuBJ3mJFY77lw4QE?v=g1",
  },
  {
    icon: MessageCircle,
    label: "Discord",
    value: "Join Discord",
    href: "https://discord.gg/R9U9eJYdbr",
  },
  {
    icon: Send,
    label: "Telegram",
    value: "@adsnes_support",
    href: "https://t.me/adsnes_support",
  },
];
