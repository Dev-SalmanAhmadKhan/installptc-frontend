import { useState, ChangeEvent, FormEvent } from "react";
import { CheckCircle2 } from "lucide-react";
import { contactData } from "@/data/contact";

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API logic
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setIsSuccess(false), 4000);
    }, 1500);
  };

  return (
    <section
      id="contact"
      className="relative py-24 bg-[#f6fbfb] overflow-hidden scroll-section "
    >
      {/* Visual Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 animate-grid-move opacity-40" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#e0f2f2] rounded-full blur-[100px] animate-orb-float-1" />
        <div className="absolute top-1/4 -right-24 w-80 h-80 bg-[#008888]/10 rounded-full blur-[80px] animate-orb-float-2" />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side: Copy and Info */}
          <div className="space-y-10">
            <div className="card-animate">
              <span className="inline-block px-4 py-1.5 mb-4 rounded-full bg-white border border-[#66b2b2]/20 text-[#014d4e] text-xs font-bold uppercase tracking-widest animate-badge-float">
                Direct Support
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight text-[#014d4e]">
                Ready to <br />
                <span className="text-gradient-primary">Join Force?</span>
              </h2>
              <p className="text-[#3b8a7f] text-lg max-w-md leading-relaxed">
                Connect with our account managers for custom rates and exclusive
                high-converting PPI offers.
              </p>
            </div>

            <div className="grid gap-4">
              {contactData.map((info, index) => (
                <ContactInfoCard key={info.label} info={info} index={index} />
              ))}
            </div>
          </div>

          {/* Right Side: Glassmorphism Form */}
          <div className="card-animate" style={{ transitionDelay: "0.2s" }}>
            <div className="relative group">
              {/* Outer Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-primary rounded-[3.5rem] opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-500 shadow-sm bg-white animate-pulse " />

              <form
                onSubmit={handleSubmit}
                className="relative bg-white/90 backdrop-blur-xl p-8 md:p-12 rounded-[3rem] border border-[#008888] space-y-6"
              >
                <div className="space-y-4">
                  <div className="group/input">
                    <input
                      name="name"
                      type="text"
                      placeholder="Full Name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full p-4 bg-[#f6fbfb]/50 rounded-2xl outline-none border border-[#66b2b2]/20 focus:border-[#008888] focus:bg-white focus:ring-4 ring-[#008888]/5 transition-all"
                      required
                    />
                  </div>
                  <input
                    name="email"
                    type="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-4 bg-[#f6fbfb]/50 rounded-2xl outline-none border border-[#66b2b2]/20 focus:border-[#008888] focus:bg-white focus:ring-4 ring-[#008888]/5 transition-all"
                    required
                  />
                  <textarea
                    name="message"
                    placeholder="Tell us about your traffic..."
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full p-4 bg-[#f6fbfb]/50 rounded-2xl outline-none border border-[#66b2b2]/20 focus:border-[#008888] focus:bg-white focus:ring-4 ring-[#008888]/5 resize-none transition-all"
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting || isSuccess}
                  className={`w-full relative py-5 rounded-2xl font-bold transition-all duration-300 flex items-center justify-center gap-3 active:scale-[0.98] overflow-hidden
                    ${
                      isSuccess
                        ? "bg-green-500 text-white"
                        : "bg-gradient-primary text-white shadow-xl hover:shadow-[#008888]/30"
                    }
                  `}
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </span>
                  ) : isSuccess ? (
                    <span className="flex items-center gap-2 animate-fade-in">
                      <CheckCircle2 size={20} /> Message Sent
                    </span>
                  ) : (
                    <>
                      Send Message <Send size={18} />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactInfoCard({ info, index }: { info: any; index: number }) {
  const Icon = info.icon;
  return (
    <div
      className="card-animate flex items-center gap-5 p-4 rounded-3xl bg-white/50 border border-[#66b2b2]/10 hover:bg-white hover:border-[#008888]/30 hover:shadow-lg transition-all duration-300 group cursor-pointer"
      style={{ transitionDelay: `${0.1 * (index + 1)}s` }}
    >
      <div className="w-12 h-12 bg-[#e0f2f2] rounded-2xl flex items-center justify-center text-[#014d4e] group-hover:bg-[#014d4e] group-hover:text-white group-hover:rotate-[10deg] transition-all duration-500">
        <Icon size={22} />
      </div>
      <div>
        <p className="text-[10px] font-black text-[#3b8a7f] uppercase tracking-widest">
          {info.label}
        </p>
        <p className="text-[#014d4e] font-bold">{info.value}</p>
      </div>
    </div>
  );
}

// Simple Send Icon helper
function Send({ size, className }: { size: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <line x1="22" y1="2" x2="11" y2="13" />
      <polygon points="22 2 15 22 11 13 2 9 22 2" />
    </svg>
  );
}
