import { GraduationCap, Brain, Code2, Target } from 'lucide-react';
import { portfolioData } from '@/data/portfolio';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const iconMap: Record<string, typeof GraduationCap> = {
  GraduationCap,
  Brain,
  Code2,
  Target,
};

export default function About() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      <div className="absolute top-0 right-0 w-72 h-72 bg-electric-600/5 rounded-full blur-[100px]" />

      <div ref={ref} className="section-container relative">
        <div
          className={`transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-px bg-electric-500" />
            <span className="text-sm font-mono text-electric-400 uppercase tracking-widest">
              01 / About
            </span>
          </div>
          <h2 className="font-display font-bold text-3xl md:text-5xl heading-gradient mb-12">
            {portfolioData.about.heading}
          </h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">
          {/* Text content */}
          <div
            className={`lg:col-span-3 transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
          >
            <div className="space-y-5">
              {portfolioData.about.paragraphs.map((para, i) => (
                <p
                  key={i}
                  className="text-charcoal-300 text-base md:text-lg leading-relaxed"
                >
                  {para}
                </p>
              ))}
            </div>
          </div>

          {/* Terminal card */}
          <div
            className={`lg:col-span-2 transition-all duration-700 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
          >
            <div className="card-base overflow-hidden group">
              {/* Terminal header */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-charcoal-700/50 bg-charcoal-900/80">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                <span className="ml-2 text-xs font-mono text-charcoal-400">
                  pranav@portfolio: ~
                </span>
              </div>
              {/* Terminal body */}
              <div className="p-5 font-mono text-sm space-y-2">
                <div>
                  <span className="text-charcoal-500">$ </span>
                  <span className="text-electric-400">whoami</span>
                </div>
                <div className="text-charcoal-200 pl-4">
                  → {portfolioData.name}
                </div>
                <div className="pt-2">
                  <span className="text-charcoal-500">$ </span>
                  <span className="text-electric-400">cat focus.txt</span>
                </div>
                <div className="text-charcoal-200 pl-4">
                  → {portfolioData.specialization}
                </div>
                <div className="pt-2">
                  <span className="text-charcoal-500">$ </span>
                  <span className="text-electric-400">cat education.json</span>
                </div>
                <div className="text-charcoal-200 pl-4 text-xs leading-relaxed">
                  <span className="text-cyan-400">{'{'}</span>
                  <br />
                  <span className="pl-4">"degree": "M.Sc. CS",</span>
                  <br />
                  <span className="pl-4">"school": "Viva College",</span>
                  <br />
                  <span className="pl-4">"graduation": "2028"</span>
                  <br />
                  <span className="text-cyan-400">{'}'}</span>
                </div>
                <div className="pt-2">
                  <span className="text-charcoal-500">$ </span>
                  <span className="text-electric-400">./status.sh</span>
                </div>
                <div className="text-charcoal-200 pl-4">
                  → <span className="text-green-400">●</span> Open to opportunities
                </div>
                <div className="pt-1">
                  <span className="text-charcoal-500">$ </span>
                  <span className="inline-block w-3 h-4 bg-electric-400 animate-pulse" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Highlight cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
          {portfolioData.about.highlights.map((hl, i) => {
            const Icon = iconMap[hl.icon] ?? GraduationCap;
            return (
              <div
                key={i}
                className={`card-base card-hover p-5 transition-all duration-700 ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${400 + i * 100}ms` }}
              >
                <div className="w-10 h-10 rounded-xl bg-electric-500/10 flex items-center justify-center mb-3 group-hover:bg-electric-500/20 transition-colors">
                  <Icon className="w-5 h-5 text-electric-400" />
                </div>
                <div className="text-white font-semibold text-sm">{hl.label}</div>
                <div className="text-charcoal-400 text-xs mt-0.5">{hl.sub}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
