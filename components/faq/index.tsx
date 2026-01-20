import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { faqData } from "@/data/faq";

// --- Types ---
interface FAQItemCardProps {
  faq: {
    question: string;
    answer: string;
  };
  index: number;
}

// --- Main Section ---
export default function FAQSection() {
  return (
    <section
      id="faq"
      className="py-24 relative overflow-hidden bg-[#f6fbfb] scroll-section"
    >
      {/* Background Vector Elements */}
      <BackgroundVectors />

      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#66b2b2]/20 text-[#014d4e] text-xs font-bold uppercase tracking-widest mb-4 shadow-sm animate-badge-float">
            <HelpCircle size={14} className="text-[#008888]" /> Support Center
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight text-[#014d4e]">
            Common <span className="text-gradient-primary">Queries</span>
          </h2>
          <p className="text-[#3b8a7f] max-w-md mx-auto">
            Everything you need to know about our payout systems and integration
            process.
          </p>
        </div>

        <div className="grid gap-4">
          {faqData.map((faq, index) => (
            <FAQItemCard key={faq.question} faq={faq} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

// --- Sub-Components ---

function BackgroundVectors() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Moving Grid - Defined in your CSS utility */}
      <div className="absolute inset-0 animate-grid-move opacity-[0.4]" />

      {/* Light Orbs for depth */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#e0f2f2] rounded-full blur-[100px] animate-orb-float-1" />
      <div className="absolute top-1/2 -right-24 w-80 h-80 bg-[#008888]/10 rounded-full blur-[80px] animate-orb-float-2" />

      {/* Light subtle lines/dots vector */}
      <div
        className="absolute inset-0 opacity-[0.03] animate-pulse"
        style={{
          backgroundImage: `radial-gradient(#014d4e 1px, transparent 1px)`,
          backgroundSize: "30px 30px",
        }}
      />
    </div>
  );
}

function FAQItemCard({ faq, index }: FAQItemCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      onClick={() => setIsOpen(!isOpen)}
      style={{ animationDelay: `${index * 0.1}s` }}
      className={`group cursor-pointer card-animate bg-white/70 backdrop-blur-md p-6 rounded-3xl border border-[#66b2b2]/20 hover:border-[#008888]/40 hover:bg-white transition-all duration-300 shadow-sm hover:shadow-xl`}
    >
      <div className="flex items-center justify-between gap-4">
        <h3 className="font-bold text-[#005f5f] group-hover:text-[#014d4e] transition-colors leading-tight">
          {faq.question}
        </h3>
        <div
          className={`flex-shrink-0 p-2 rounded-full bg-[#f6fbfb] text-[#008888] transition-all duration-500 ${
            isOpen
              ? "rotate-180 bg-[#008888]! text-white shadow-lg shadow-[#008888]/30"
              : ""
          }`}
        >
          <ChevronDown size={18} />
        </div>
      </div>

      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-[500px] mt-4 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="text-[#3b8a7f] text-sm leading-relaxed border-t border-[#66b2b2]/10 pt-4">
          {faq.answer}
        </p>
      </div>
    </div>
  );
}
