import { howItWorksData } from "@/data/how-it-works";

export default function HowItWorksSection() {
  return (
    <section
      id="how-it-works"
      className="py-24 scroll-section bg-gradient-primary"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            How InstallPTC Works
          </h2>
        </div>
        <div className="grid md:grid-cols-4 gap-8">
          {howItWorksData.map((step, index) => (
            <StepCardItem key={step.step} step={step} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

interface StepCardItemProps {
  step: (typeof howItWorksData)[number];
  index: number;
}

function StepCardItem({ step }: StepCardItemProps) {
  return (
    <div className="card-animate p-8 bg-white rounded-3xl relative border border-[#66b2b2]/20 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group overflow-hidden">
      <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center text-white font-bold mb-6 group-hover:scale-110 transition-transform">
        {step.step}
      </div>
      <h3 className="text-xl font-bold mb-2 text-[#005f5f] group-hover:text-[#008888] transition-colors">
        {step.title}
      </h3>
      <p className="text-[#3b8a7f] text-sm leading-relaxed">
        {step.description}
      </p>
    </div>
  );
}
