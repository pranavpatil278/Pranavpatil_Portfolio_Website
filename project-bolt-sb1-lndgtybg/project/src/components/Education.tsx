import { GraduationCap, Calendar, MapPin, CheckCircle2, Clock } from 'lucide-react';
import { portfolioData } from '@/data/portfolio';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function Education() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="education" className="section-padding relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-cyan-500/5 rounded-full blur-[100px]" />

      <div ref={ref} className="section-container relative">
        <div
          className={`transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-px bg-cyan-400" />
            <span className="text-sm font-mono text-cyan-400 uppercase tracking-widest">
              02 / Education
            </span>
          </div>
          <h2 className="font-display font-bold text-3xl md:text-5xl heading-gradient mb-12">
            Academic Journey
          </h2>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div
            className={`absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-electric-500/50 via-charcoal-700 to-transparent transition-all duration-1000 ${
              isVisible ? 'scale-y-100' : 'scale-y-0'
            } origin-top`}
            style={{ transformOrigin: 'top' }}
          />

          <div className="space-y-8 md:space-y-12">
            {portfolioData.education.map((edu, i) => {
              const isLeft = i % 2 === 0;
              return (
                <div
                  key={i}
                  className={`relative flex flex-col md:flex-row items-start gap-6 ${
                    isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                  } transition-all duration-700 ${
                    isVisible
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-12'
                  }`}
                  style={{ transitionDelay: `${300 + i * 200}ms` }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 top-6 z-10">
                    <div className="w-3 h-3 rounded-full bg-electric-400 ring-4 ring-charcoal-950" />
                    <div className="absolute inset-0 w-3 h-3 rounded-full bg-electric-400 animate-ping opacity-40" />
                  </div>

                  {/* Spacer for desktop */}
                  <div className="hidden md:block flex-1" />

                  {/* Card */}
                  <div className="ml-12 md:ml-0 md:w-1/2 md:px-8">
                    <div className="card-base card-hover p-6 group">
                      <div className="flex items-start justify-between gap-3 mb-3">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-electric-500/10 flex items-center justify-center group-hover:bg-electric-500/20 transition-colors">
                            <GraduationCap className="w-5 h-5 text-electric-400" />
                          </div>
                          <div>
                            <span
                              className={`inline-flex items-center gap-1 text-xs font-medium px-2 py-0.5 rounded-full ${
                                edu.status === 'In Progress'
                                  ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20'
                                  : 'bg-green-500/10 text-green-400 border border-green-500/20'
                              }`}
                            >
                              {edu.status === 'In Progress' ? (
                                <Clock className="w-3 h-3" />
                              ) : (
                                <CheckCircle2 className="w-3 h-3" />
                              )}
                              {edu.status}
                            </span>
                          </div>
                        </div>
                      </div>

                      <h3 className="font-display font-semibold text-lg text-white mb-1">
                        {edu.degree}
                      </h3>
                      <div className="flex items-center gap-2 text-charcoal-400 text-sm mb-3">
                        <MapPin className="w-3.5 h-3.5" />
                        <span>{edu.institution}</span>
                      </div>
                      <div className="flex items-center gap-2 text-electric-400 text-sm font-mono mb-4">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{edu.period}</span>
                      </div>
                      <p className="text-charcoal-300 text-sm leading-relaxed">
                        {edu.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
