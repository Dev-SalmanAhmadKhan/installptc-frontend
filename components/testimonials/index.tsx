"use client";

import { useState, useEffect, useCallback } from "react";
import {
  Quote,
  Star,
  ChevronLeft,
  ChevronRight,
  Pause,
  Play,
} from "lucide-react";
import { testimonialData } from "@/data/testimonials";

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [visibleCount, setVisibleCount] = useState(3);

  const extendedTestimonials = [
    ...testimonialData,
    ...testimonialData,
    ...testimonialData,
  ];
  const totalItems = testimonialData.length;
  const extendedTotalItems = extendedTestimonials.length;

  const startIndex = totalItems;

  useEffect(() => {
    setCurrentIndex(startIndex);
  }, [startIndex]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVisibleCount(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCount(2);
      } else {
        setVisibleCount(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => {
      const next = prev + 1;
      if (next >= startIndex + totalItems) {
        return startIndex;
      }
      return next;
    });
  }, [startIndex, totalItems]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => {
      const next = prev - 1;
      if (next < startIndex) {
        return startIndex + totalItems - 1;
      }
      return next;
    });
  }, [startIndex, totalItems]);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isAutoPlaying) {
      interval = setInterval(() => {
        nextSlide();
      }, 5000);
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isAutoPlaying, nextSlide]);

  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  const actualIndex = (currentIndex - startIndex + totalItems) % totalItems;

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

        <div
          className="relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <button
            onClick={prevSlide}
            className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg hover:shadow-xl border border-[#66b2b2]/30 hover:border-[#008888] transition-all duration-300 group"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6 text-[#014d4e] group-hover:text-[#008888]" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg hover:shadow-xl border border-[#66b2b2]/30 hover:border-[#008888] transition-all duration-300 group"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6 text-[#014d4e] group-hover:text-[#008888]" />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-500">
            {extendedTestimonials
              .slice(currentIndex, currentIndex + visibleCount)
              .map((testimonial, index) => (
                <TestimonialCardItem
                  key={`${testimonial.name}-${currentIndex + index}`}
                  testimonial={testimonial}
                />
              ))}
          </div>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: totalItems }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(startIndex + index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === actualIndex
                  ? "w-8 bg-[#008888]"
                  : "bg-[#66b2b2]/30 hover:bg-[#008888]/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

interface TestimonialCardItemProps {
  testimonial: (typeof testimonialData)[number];
}

function TestimonialCardItem({ testimonial }: TestimonialCardItemProps) {
  return (
    <div className="card-animate bg-[#e0f2f2] p-10 rounded-[2.5rem] border border-[#66b2b2]/30 hover:bg-white hover:shadow-2xl hover:border-[#008888] transition-all duration-500 group h-full flex flex-col">
      <Quote
        className="text-[#008888]/20 mb-6 group-hover:text-[#008888] transition-colors duration-500"
        size={40}
      />
      <p className="italic text-[#3b8a7f] mb-8 leading-relaxed flex-grow">
        "{testimonial.text}"
      </p>
      <div className="flex items-center gap-4 mt-auto">
        <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-white font-bold">
          {testimonial.name.charAt(0)}
        </div>
        <div>
          <p className="font-bold text-[#002525]">{testimonial.name}</p>
          <p className="text-sm text-[#3b8a7f]">
            {testimonial.role === "Advertiser"
              ? "⭐ Advertiser"
              : "💰 Publisher"}
          </p>
        </div>
      </div>
    </div>
  );
}
