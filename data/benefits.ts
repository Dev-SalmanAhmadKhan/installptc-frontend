import { BenefitDataType } from "@/types";
import { Target, DollarSign } from "lucide-react";

export const benefitData: BenefitDataType[] = [
  {
    type: "advertiser",
    icon: Target,
    title: "Advertiser",
    features: [
      "Targeted global traffic for your software",
      "Pay only for verified installs",
      "Real-time analytics and detailed stats",
      "Custom installer with your branding",
    ],
    buttonText: "Start Campaign",
  },
  {
    type: "publisher",
    icon: DollarSign,
    title: "Publisher",
    features: [
      "Earn up to $4 per install from your traffic",
      "Multiple payment methods available",
      "Weekly or monthly payment cycles",
      "Clean installers, no malware or blockage",
    ],
    buttonText: "Join as Publisher",
  },
];
