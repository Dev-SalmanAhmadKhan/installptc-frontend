import { LucideIcon } from "lucide-react";

export interface BenefitDataType {
  type: "advertiser" | "publisher";
  icon: LucideIcon;
  title: string;
  features: string[];
  buttonText: string;
}

export interface ServiceDataType {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface ContactDataType {
  icon: LucideIcon;
  label: string;
  value: string;
}

export interface TestimonialDataType {
  name: string;
  role: string;
  text: string;
}

export interface FAQDataType {
  question: string;
  answer: string;
}

export interface NavDataType {
  label: string;
  href: string;
}

export interface HowItWorksDataType {
  step: string;
  title: string;
  description: string;
}

export interface StatDataType {
  value: string;
  label: string;
}

export interface FormDataType {
  name: string;
  email: string;
  message: string;
}
