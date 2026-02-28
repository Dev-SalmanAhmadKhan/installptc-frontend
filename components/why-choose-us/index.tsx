import { serviceData } from "@/data/services";

export default function WhyChooseSection() {
  return (
    <section id="services" className="py-24 scroll-section bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 tracking-tight">
            Why Choose <span className="text-gradient-primary">Adsnes</span>
          </h2>
          <p className="text-[#3b8a7f] max-w-2xl mx-auto">
            A trusted performance advertising network built for real growth and
            measurable results.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {serviceData.map((service, index) => (
            <ServiceCardItem
              key={service.title}
              service={service}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

interface ServiceCardItemProps {
  service: (typeof serviceData)[number];
  index: number;
}

function ServiceCardItem({ service }: ServiceCardItemProps) {
  const IconComponent = service.icon;

  return (
    <div className="card-animate p-8 border border-[#66b2b2]/30 rounded-3xl hover:border-[#008888] hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group bg-[#e0f2f2]">
      <div className="w-12 h-12 bg-white text-[#014d4e] rounded-xl flex items-center justify-center mb-6 group-hover:bg-gradient-primary group-hover:text-white transition-all duration-300">
        <IconComponent size={24} />
      </div>
      <h3 className="text-xl font-bold mb-2 text-[#005f5f] group-hover:text-[#008888] transition-colors">
        {service.title}
      </h3>
      <p className="text-sm text-[#3b8a7f] leading-relaxed">
        {service.description}
      </p>
    </div>
  );
}
