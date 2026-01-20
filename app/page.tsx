"use client";

import ContactSection from "@/components/contact-us";
import DualBenefitsSection from "@/components/dual-benefits";
import FAQSection from "@/components/faq";
import Footer from "@/components/footer";
import HeroSection from "@/components/hero";
import HowItWorksSection from "@/components/how-it-works";
import Navigation from "@/components/navigation";
import TestimonialsSection from "@/components/testimonials";
import WhyChooseSection from "@/components/why-choose-us";
import { useEffect } from "react";

export default function InstallPTCLanding() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("section-visible");
        }
      });
    }, observerOptions);

    document
      .querySelectorAll(".scroll-section")
      .forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[#f6fbfb] font-sans text-[#002525] overflow-x-hidden">
      <Navigation />
      <HeroSection />

      <DualBenefitsSection />
      <WhyChooseSection />
      <HowItWorksSection />
      <FAQSection />
      <TestimonialsSection />

      <ContactSection />
      <Footer />
    </div>
  );
}
