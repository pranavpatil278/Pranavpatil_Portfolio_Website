import { Cpu, Database, Cloud, Brain, Code2, Wrench, Server, Sparkles, Layers } from 'lucide-react';
import { portfolioData } from '@/data/portfolio';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const iconMap: Record<string, typeof Code2> = {
  Code2,
  Brain,
  Cpu,
  Server,
  Database,
  Sparkles,
  Layers,
  Wrench,
  Cloud,
};

export default function Skills() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="skills" className="section-padding relative overflow-hidden">
      <div className="absolute top-1/4 right-0 w-72 h-72 bg-electric-600/5 rounded-full blur-[100px]" />

      <div ref={ref} className="section-container relative">
        <div
          className={`transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-px bg-electric-500" />
            <span className="text-sm font-mono text-electric-400 uppercase tracking-widest">
              03 / Skills
            </span>
          </div>
          <h2 className="font-display font-bold text-3xl md:text-5xl heading-gradient mb-4">
            Technical Arsenal
          </h2>
          <p className="text-charcoal-400 text-base md:text-lg max-w-2xl mb-12">
            Technologies and tools I work with across AI/ML, full-stack development, and API integration.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {portfolioData.skills.map((cat, i) => {
            const Icon = iconMap[cat.icon] ?? Code2;
            return (
              <div
                key={cat.title}
                className={`card-base card-hover p-6 transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${200 + i * 80}ms` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-electric-500/10 flex items-center justify-center group-hover:bg-electric-500/20 transition-colors">
                    <Icon className="w-5 h-5 text-electric-400" />
                  </div>
                  <h3 className="font-display font-semibold text-white text-sm">{cat.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span key={skill} className="chip text-xs">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
