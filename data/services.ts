import {
  Shield,
  Globe,
  BarChart3,
  Clock,
  HeadphonesIcon,
  TrendingUp,
} from "lucide-react";
import type { ServiceDataType } from "@/types";

export const serviceData: ServiceDataType[] = [
  {
    icon: Shield,
    title: "Safe & Secure Platform",
    description:
      "All traffic and installs are carefully monitored and verified. Advanced fraud detection systems ensure clean, malware-free campaigns for both advertisers and publishers.",
  },
  {
    icon: Globe,
    title: "Worldwide Traffic Access",
    description:
      "Reach users across multiple countries with advanced geo, device, and OS targeting to maximize ROI and campaign efficiency.",
  },
  {
    icon: BarChart3,
    title: "Real-Time Performance Tracking",
    description:
      "Track clicks, installs, impressions, and earnings instantly through a powerful dashboard with transparent reporting.",
  },
  {
    icon: Clock,
    title: "On-Time Payments",
    description:
      "Enjoy secure weekly or monthly payouts with multiple withdrawal methods and low minimum thresholds.",
  },
  {
    icon: HeadphonesIcon,
    title: "24/7 Expert Support",
    description:
      "Our experienced account managers are available to help optimize campaigns and maximize your revenue potential.",
  },
  {
    icon: TrendingUp,
    title: "Optimized for Performance",
    description:
      "Industry-leading optimization technology ensures higher conversion rates and better returns for advertisers and publishers alike.",
  },
];
