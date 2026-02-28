import { ROUTES } from "@/lib/routes";
import { ArrowRight, Zap, BarChart3, Sparkles, Award } from "lucide-react";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeStat, setActiveStat] = useState(0);
  const [averageEarnings, setAverageEarnings] = useState(4.0);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveStat((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const earningsInterval = setInterval(() => {
      const randomEarnings = (Math.random() * (15.0 - 3.5) + 3.5).toFixed(2);
      setAverageEarnings(parseFloat(randomEarnings));
    }, 3000);

    return () => clearInterval(earningsInterval);
  }, []);

  const handleRedirect = () => {
    window.location.href = ROUTES.DASHBOARD;
  };

  const handleRedirectNewTab = () => {
    window.open(ROUTES.DASHBOARD, "_blank", "noopener,noreferrer");
  };

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#e0f2f2] via-white to-white flex items-center justify-center lg:pt-36 pt-20 pb-20 px-4"
    >
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#008888]/5 via-transparent to-[#014d4e]/5" />

        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-[#008888]/10 to-[#014d4e]/10 rounded-full blur-3xl animate-orb-float-1" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-tr from-[#014d4e]/10 to-[#008888]/10 rounded-full blur-3xl animate-orb-float-2" />

        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 animate-grid-move" />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full md:pt-0 pt-10">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-24">
          <div className="flex-1 max-w-2xl">
            <div className="relative mb-10">
              <h1 className="text-2xl leading-2xl md:text-5xl lg:text-6xl font-black md:leading-[110%] mb-8">
                <span className="block text-gradient-wave">
                  Monetize Your Traffic with High-Paying CPC & CPI Offers
                </span>
              </h1>

              <div className="absolute -bottom-6 left-0 w-64 h-2 bg-gradient-to-r from-[#008888] via-[#014d4e] to-[#008888] rounded-full animate-line-flow" />
            </div>

            <div className="space-y-8 mb-12">
              <p className="text-2xl text-[#3b8a7f] leading-relaxed animate-text-rise">
                Adsnes is a performance-based advertising network that helps
                publishers earn from{" "}
                <span className="font-bold text-[#014d4e] mx-2">
                  clicks, installs,
                </span>{" "}
                and{" "}
                <span className="font-bold text-[#014d4e] mx-2">
                  impressions,
                </span>{" "}
                while enabling advertisers to scale with high-converting global
                traffic.
              </p>
            </div>

            <div className="flex lg:justify-start justify-center flex-wrap gap-5 mb-16">
              <button
                onClick={handleRedirect}
                className="group cursor-pointer relative overflow-hidden bg-gradient-primary text-white px-10 py-5 rounded-2xl font-bold shadow-xl flex items-center gap-3 min-w-[200px] transition-all duration-500 hover:scale-105 hover:shadow-2xl"
              >
                <span className="relative z-10 flex items-center gap-3">
                  <Zap className="w-6 h-6" />
                  <span>Start Earning Now</span>
                </span>
                <ArrowRight
                  className="relative z-10 transition-all duration-500 group-hover:translate-x-2"
                  size={20}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#008888] via-[#014d4e] to-[#008888] bg-[length:400%_100%] animate-gradient-shift opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute -inset-1 bg-gradient-primary blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
              </button>

              <button
                onClick={handleRedirect}
                className="group cursor-pointer relative overflow-hidden bg-white text-[#014d4e] px-10 py-5 rounded-2xl font-bold border-2 border-[#66b2b2]/30 hover:border-[#008888] transition-all duration-500 hover:scale-105 hover:shadow-xl min-w-[200px]"
              >
                <span className="relative z-10 flex items-center gap-3">
                  <BarChart3 className="w-6 h-6" />
                  <span>View Dashboard</span>
                </span>
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl" />
              </button>
            </div>
          </div>

          <div className="flex-1 max-w-xl">
            <div className="relative">
              <div className="relative overflow-hidden rounded-[3rem] shadow-2xl border-8 border-white bg-gradient-to-br from-white via-white to-[#e0f2f2] transform transition-all duration-700 hover:scale-[1.02] hover:shadow-3xl group">
                <div className="absolute inset-0">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#008888]/5 via-transparent to-[#014d4e]/5" />
                  <div className="absolute inset-0 opacity-10 animate-grid-rotate" />
                </div>

                <div className="absolute inset-0 rounded-[3rem] p-1">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#008888] via-[#014d4e] to-[#008888] rounded-[3rem] opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
                </div>

                <div className="relative z-10 p-6">
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-primary rounded-full mb-6">
                      <Sparkles className="w-5 h-5 text-white animate-sparkle" />
                      <span className="text-white font-bold text-sm tracking-wider">
                        REAL-TIME STATS
                      </span>
                    </div>
                    <h3 className="text-4xl font-black text-[#014d4e] mb-1">
                      Live Performance
                    </h3>
                    <p className="text-[#3b8a7f]">Updated every minute</p>
                  </div>

                  <div className="relative">
                    <div className="text-center">
                      <div className="relative inline-block">
                        <div className="text-4xl md:text-6xl font-black text-gradient-primary animate-pulse-slow mb-1">
                          ${averageEarnings.toFixed(2)}
                        </div>
                      </div>
                      <p className="text-2xl font-semibold text-[#014d4e]">
                        Today's Live Average CPM Rate
                      </p>
                    </div>

                    <div className="relative w-40 h-40 mx-auto mt-5">
                      <div className="absolute inset-0 rounded-full border-[6px] border-[#e0f2f2]" />
                      <div className="absolute inset-4 rounded-full border-[6px] border-[#008888] border-t-transparent animate-spin-slow" />
                      <div className="absolute inset-8 bg-gradient-primary rounded-full flex items-center justify-center shadow-lg">
                        <div className="text-white text-center">
                          <div className="text-xl font-black">98%</div>
                          <div className="text-xs font-bold">Success</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-4 border-t border-[#66b2b2]/20">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                        <span className="text-sm font-semibold text-[#014d4e]">
                          Live Updates
                        </span>
                      </div>
                      <div className="text-sm text-[#3b8a7f]">
                        Updated just now
                      </div>
                    </div>
                    <div className="mt-2 text-xs text-[#3b8a7f] text-right">
                      {averageEarnings > 12
                        ? "🔥 High demand!"
                        : averageEarnings < 5
                        ? "💡 Great time to buy"
                        : "📊 Market stable"}
                    </div>
                  </div>
                </div>

                <div className="absolute -top-5 -right-5 w-24 h-24 bg-gradient-primary rounded-2xl rotate-12 animate-float-smooth opacity-90" />
                <div className="absolute -bottom-5 -left-5 w-20 h-20 bg-gradient-to-br from-[#008888] to-[#014d4e] rounded-full animate-float-delayed opacity-80" />
              </div>

              <div className="absolute -top-6 lg:-right-6 right-2 z-20">
                <div className="bg-gradient-to-r from-[#008888] to-[#014d4e] px-6 py-4 rounded-2xl shadow-2xl text-white animate-badge-float border-4 border-white backdrop-blur-sm">
                  <p className="text-sm font-black tracking-wider uppercase flex items-center gap-2">
                    <Award className="w-4 h-4" />
                    TRUSTED
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
