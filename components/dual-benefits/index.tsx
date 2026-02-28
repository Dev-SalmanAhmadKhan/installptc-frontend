import { CheckCircle } from "lucide-react";
import Image from "next/image";
import { benefitData } from "@/data/benefits";
import { useRouter } from "next/navigation";

export default function DualBenefitsSection() {
  const router = useRouter();

  const handleButtonClick = (buttonLink: string) => {
    if (buttonLink.startsWith("#")) {
      const targetId = buttonLink.substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        const headerHeight = 80;
        const targetPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition =
          targetPosition + window.pageYOffset - headerHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });

        window.history.pushState(null, "", buttonLink);
      }
    } else if (buttonLink.startsWith("http")) {
      // Handle external links
      window.open(buttonLink, "_blank", "noopener,noreferrer");
    } else {
      // Handle internal routes
      router.push(buttonLink);
    }
  };

  return (
    <section
      id="benefits"
      className="py-24 scroll-section benefits relative overflow-hidden"
    >
      {/* Background Image with gradient overlay */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/bg.webp"
          alt="Benefits section background"
          fill
          priority
          className="object-cover"
          sizes="100vw"
          quality={90}
        />
        {/* Gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#014d4e]/80 via-[#014d4e]/60 to-[#014d4e]/80" />

        {/* Animated grid overlay for depth */}
        <div className="absolute inset-0 animate-grid-move opacity-20" />
      </div>

      {/* Floating orbs/animation elements */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-[#008888]/10 rounded-full blur-3xl animate-pulse-slow -z-5" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-[#014d4e]/10 rounded-full blur-3xl animate-pulse-slow -z-5" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-text-rise">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-2 rounded-full mb-6 border border-[#66b2b2]/30">
            <span className="w-2 h-2 bg-[#66b2b2] rounded-full animate-pulse-slow"></span>
            <span className="text-sm font-medium text-white">Benefits</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight text-white">
            Benefit from{" "}
            <span className="text-gradient-wave bg-clip-text text-transparent">
              Adsnes
            </span>
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Comprehensive solutions for both advertisers and publishers to
            maximize performance
          </p>
        </div>

        {/* Benefits Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {benefitData.map((benefit, index) => (
            <BenefitCard
              key={benefit.type}
              benefit={benefit}
              index={index}
              onButtonClick={handleButtonClick}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

interface BenefitCardProps {
  benefit: (typeof benefitData)[number];
  index: number;
  onButtonClick: (buttonLink: string) => void;
}

function BenefitCard({ benefit, index, onButtonClick }: BenefitCardProps) {
  const IconComponent = benefit.icon;

  return (
    <div
      className="card-animate group bg-white/95 backdrop-blur-sm p-8 md:p-10 rounded-[2.5rem] border-2 border-[#66b2b2]/30 hover:border-[#008888]/50 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
      style={{
        animationDelay: `${index * 200}ms`,
        transitionDelay: `${index * 50}ms`,
      }}
    >
      {/* Icon with animated background */}
      <div className="relative mb-8">
        <div className="absolute -inset-4 bg-gradient-to-r from-[#e0f2f2] to-[#c2e5e5] rounded-2xl opacity-50 group-hover:opacity-70 transition-opacity duration-300" />
        <div className="relative w-20 h-20 bg-gradient-to-br from-[#008888] to-[#014d4e] rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
          <IconComponent
            size={36}
            className="text-white group-hover:animate-sparkle"
          />
        </div>

        {/* Badge */}
        <div className="absolute -top-2 -right-2 bg-gradient-to-r from-[#008888] to-[#014d4e] text-white text-xs font-bold px-3 py-1 rounded-full animate-badge-float">
          {benefit.type === "advertiser" ? "Advertisers" : "Publishers"}
        </div>
      </div>

      {/* Title */}
      <h3 className="text-2xl md:text-3xl font-bold mb-6 text-[#005f5f] group-hover:text-[#014d4e] transition-colors duration-300">
        {benefit.title}
      </h3>

      {/* Features List */}
      <ul className="space-y-4 mb-8">
        {benefit.features.map((feature, idx) => (
          <li key={idx} className="flex items-start gap-4 group/feature">
            <div className="relative">
              <CheckCircle
                className="text-[#008888] mt-1 flex-shrink-0 group-hover/feature:animate-sparkle"
                size={22}
              />
              <div className="absolute inset-0 bg-[#008888] rounded-full blur-sm opacity-0 group-hover/feature:opacity-30 transition-opacity duration-300" />
            </div>
            <span className="text-[#3b8a7f] group-hover/feature:text-[#005f5f] transition-colors duration-300">
              {feature}
            </span>
          </li>
        ))}
      </ul>

      {/* Action Button */}
      <div className="relative group/btn">
        <div className="absolute -inset-1 bg-gradient-to-r from-[#008888] to-[#014d4e] rounded-2xl blur opacity-0 group-hover/btn:opacity-70 transition-opacity duration-500" />
        <button
          onClick={() => onButtonClick(benefit.buttonLink)}
          className="relative cursor-pointer w-full bg-gradient-to-r from-[#014d4e] to-[#008888] text-white py-4 px-6 rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 group-hover/btn:scale-[1.02]"
        >
          <span className="flex items-center justify-center gap-2">
            {benefit.buttonText}
            <svg
              className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </span>
        </button>
      </div>

      {/* Decorative corner elements */}
      <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-[#66b2b2]/30 rounded-tr-[2.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-[#66b2b2]/30 rounded-bl-[2.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </div>
  );
}
