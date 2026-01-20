import { statData } from "@/data/stats";

export default function StatsSection() {
  return (
    <section className="pt-20 scroll-section ">
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-gradient-primary rounded-[3rem] p-12 text-white flex flex-col md:flex-row justify-around items-center gap-12 text-center shadow-2xl">
          {statData.map((stat, index) => (
            <div key={stat.label} className="flex flex-col items-center">
              <div className="card-animate hover:scale-110 transition-transform cursor-default">
                <div className="text-5xl font-black mb-2">{stat.value}</div>
                <p className="text-white/80 font-medium uppercase tracking-wider">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
