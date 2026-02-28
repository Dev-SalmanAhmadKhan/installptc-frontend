import { howItWorksData } from "@/data/how-it-works";
import { useRouter } from "next/navigation";
import { ROUTES } from "@/lib/routes";

export default function HowItWorksSection() {
  const router = useRouter();

  const advertiserSteps = howItWorksData.filter(
    (step) => step.type === "advertiser"
  );
  const publisherSteps = howItWorksData.filter(
    (step) => step.type === "publisher"
  );

  return (
    <section
      id="how-it-works"
      className="py-24 scroll-section bg-gradient-primary"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            How Adsnes Works
          </h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Join thousands of advertisers and publishers growing with our
            platform
          </p>
        </div>

        {/* Advertiser Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            For Advertisers
          </h3>
          <div className="grid md:grid-cols-5 gap-4 mb-6">
            {advertiserSteps.map((step, index) => (
              <StepCardItem
                key={`advertiser-${index}`}
                step={step}
                index={index}
              />
            ))}
          </div>
          <div className="text-center">
            <button
              onClick={() => router.push(ROUTES.CONTACT)}
              className="group cursor-pointer relative overflow-hidden bg-white text-[#014d4e] px-8 py-3 rounded-2xl font-bold border-2 border-[#66b2b2]/30 hover:border-[#008888] transition-all duration-500 hover:scale-105 hover:shadow-xl min-w-[180px] text-base"
            >
              <span className="relative z-10">Contact Sales</span>
              <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl" />
            </button>
          </div>
        </div>

        {/* Publisher Section */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            For Publishers
          </h3>
          <div className="grid md:grid-cols-5 gap-4 mb-6">
            {publisherSteps.map((step, index) => (
              <StepCardItem
                key={`publisher-${index}`}
                step={step}
                index={index}
              />
            ))}
          </div>
          <div className="text-center">
            <button
              onClick={() => router.push(ROUTES.DASHBOARD)}
              className="group cursor-pointer relative overflow-hidden bg-white text-[#014d4e] px-8 py-3 rounded-2xl font-bold border-2 border-[#66b2b2]/30 hover:border-[#008888] transition-all duration-500 hover:scale-105 hover:shadow-xl min-w-[180px] text-base"
            >
              <span className="relative z-10">Sign Up Now</span>
              <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

interface StepCardItemProps {
  step: (typeof howItWorksData)[number];
  index: number;
}

function StepCardItem({ step, index }: StepCardItemProps) {
  return (
    <div
      className={`card-animate p-6 bg-white rounded-2xl relative border border-[#66b2b2]/20 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group ${
        step.isLast ? "md:col-span-1" : ""
      }`}
    >
      <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center text-white font-bold mb-4 group-hover:scale-110 transition-transform">
        {index + 1}
      </div>

      <p className="text-[#3b8a7f] text-sm leading-relaxed">
        {step.description}
      </p>
    </div>
  );
}
