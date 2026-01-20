import { Quote, Star } from "lucide-react";
import { testimonialData } from "@/data/testimonials";

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-white scroll-section">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 tracking-tight">
            They Said It, We{" "}
            <span className="text-gradient-primary">Believe It</span>
          </h2>
          <div className="flex justify-center gap-1 text-[#008888]">
            {[...Array(5)].map((_, index) => (
              <Star key={index} size={18} fill="currentColor" />
            ))}
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonialData.map((testimonial, index) => (
            <TestimonialCardItem
              key={testimonial.name}
              testimonial={testimonial}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

interface TestimonialCardItemProps {
  testimonial: (typeof testimonialData)[number];
  index: number;
}

function TestimonialCardItem({ testimonial }: TestimonialCardItemProps) {
  return (
    <div className="card-animate bg-[#e0f2f2] p-10 rounded-[2.5rem] border border-[#66b2b2]/30 hover:bg-white hover:shadow-2xl hover:border-[#008888] transition-all duration-500 group">
      <Quote
        className="text-[#008888]/20 mb-6 group-hover:text-[#008888] transition-colors duration-500"
        size={40}
      />
      <p className="italic text-[#3b8a7f] mb-8 leading-relaxed">
        "{testimonial.text}"
      </p>
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-white font-bold">
          {testimonial.name.charAt(0)}
        </div>
        <div>
          <p className="font-bold text-[#002525]">{testimonial.name}</p>
          <p className="text-sm text-[#3b8a7f]">{testimonial.role}</p>
        </div>
      </div>
    </div>
  );
}
