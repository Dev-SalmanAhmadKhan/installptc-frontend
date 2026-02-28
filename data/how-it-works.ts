import { ROUTES } from "@/lib/routes";

export const howItWorksData = [
  {
    step: "01",
    description:
      "Contact our sales team and share your campaign goals and target audience.",
    buttonText: "Contact Sales",
    buttonLink: ROUTES.CONTACT,
    type: "advertiser" as const,
    isLast: false,
  },
  {
    step: "02",
    description:
      "Discuss budget, targeting options, and performance expectations.",
    type: "advertiser" as const,
    isLast: false,
  },
  {
    step: "03",
    description:
      "Launch your campaign with advanced geo, device, and OS targeting.",
    type: "advertiser" as const,
    isLast: false,
  },
  {
    step: "04",
    description: "Your ads go live across our global publisher network.",
    type: "advertiser" as const,
    isLast: false,
  },
  {
    step: "05",
    description:
      "Track conversions in real-time and scale profitable campaigns.",
    type: "advertiser" as const,
    isLast: true,
  },
  {
    step: "01",
    description:
      "Create a free account and submit your traffic source for review.",
    buttonText: "Sign Up Now",
    buttonLink: "/signup",
    type: "publisher" as const,
    isLast: false,
  },
  {
    step: "02",
    description: "Get manually approved by our quality assurance team.",
    type: "publisher" as const,
    isLast: false,
  },
  {
    step: "03",
    description: "Access high-converting CPC & CPI offers from your dashboard.",
    type: "publisher" as const,
    isLast: false,
  },
  {
    step: "04",
    description: "Promote offers using tracking links or ad codes.",
    type: "publisher" as const,
    isLast: false,
  },
  {
    step: "05",
    description: "Track earnings in real-time and withdraw payments securely.",
    type: "publisher" as const,
    isLast: true,
  },
];
