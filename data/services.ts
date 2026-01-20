import { Shield, Globe, BarChart3, Zap, Users, TrendingUp } from "lucide-react";
import type { ServiceDataType } from "@/types";

export const serviceData: ServiceDataType[] = [
  {
    icon: Shield,
    title: "Safe & Secure",
    description:
      "Clean installers verified by top antivirus companies. No malware, guaranteed.",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description:
      "Access worldwide traffic with geo-targeting options for maximum ROI.",
  },
  {
    icon: BarChart3,
    title: "Real-time Stats",
    description:
      "Track your campaigns and earnings with detailed analytics dashboard.",
  },
  {
    icon: Zap,
    title: "Fast Payouts",
    description:
      "Weekly and monthly payment cycles with multiple withdrawal methods.",
  },
  {
    icon: Users,
    title: "24/7 Support",
    description: "Dedicated account managers ready to help you succeed.",
  },
  {
    icon: TrendingUp,
    title: "High Performance",
    description: "Optimized conversion rates with industry-leading technology.",
  },
];
