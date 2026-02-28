import { ROUTES } from "@/lib/routes";
import { BenefitDataType } from "@/types";
import { Target, DollarSign } from "lucide-react";

export const benefitData: BenefitDataType[] = [
  {
    type: "advertiser",
    icon: Target,
    title: "Advertiser",
    features: [
      "Reach high-quality global traffic tailored to your target audience",
      "Pay only for real clicks, installs, or impressions",
      "Advanced targeting with geo, device, and OS filters",
      "Real-time tracking with transparent performance reporting",
    ],
    buttonText: "Contact",
    buttonLink: ROUTES.CONTACT,
  },
  {
    type: "publisher",
    icon: DollarSign,
    title: "Publisher",
    features: [
      "Monetize your website or app with high-paying CPC & CPI offers",
      "Earn competitive payouts for every valid click and install",
      "Access exclusive campaigns with high conversion rates",
      "Fast weekly or monthly payments with secure withdrawal options",
    ],
    buttonText: "Signup or login dashboard",
    buttonLink: ROUTES.DASHBOARD,
  },
];
