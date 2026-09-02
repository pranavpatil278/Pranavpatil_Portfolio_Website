import { Award, CheckCircle2, FileText, Languages, Mail, Sparkles } from 'lucide-react';
import { portfolioData } from '@/data/portfolio';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function Credentials() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="credentials" className="section-padding relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-electric-600/5 rounded-full blur-[110px]" />

      <div ref={ref} className="section-container relative">
        <div
          className={`transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-px bg-electric-500" />
            <span className="text-sm font-mono text-electric-400 uppercase tracking-widest">
              05 / Credentials
            </span>
          </div>
          <h2 className="font-display font-bold text-3xl md:text-5xl heading-gradient mb-4">
            Proof of Practice
          </h2>
          <p className="text-charcoal-400 text-base md:text-lg max-w-2xl mb-12">
            Certifications, strengths, and the continuous learning mindset I bring to every technical challenge.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-6">
          <div
            className={`lg:col-span-3 card-base p-6 md:p-8 transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-11 h-11 rounded-xl bg-electric-500/10 flex items-center justify-center">
                <Award className="w-5 h-5 text-electric-400" />
              </div>
              <div>
                <h3 className="font-display font-semibold text-xl text-white">Certifications</h3>
                <p className="text-xs text-charcoal-500">Verified learning milestones</p>
              </div>
            </div>

            <div className="space-y-3">
              {portfolioData.certifications.map((cert) => (
                <div
                  key={cert.name}
                  className="flex items-start gap-3 p-4 rounded-xl bg-charcoal-800/40 border border-charcoal-700/30 hover:border-electric-500/30 transition-colors"
                >
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-charcoal-100">{cert.name}</p>
                    <p className="text-xs text-charcoal-500 mt-1">Issued by {cert.issuer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            className={`lg:col-span-2 space-y-6 transition-all duration-700 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="card-base p-6">
              <div className="flex items-center gap-3 mb-4">
                <Sparkles className="w-5 h-5 text-cyan-400" />
                <h3 className="font-display font-semibold text-white">Strengths</h3>
              </div>
              <ul className="space-y-2.5">
                {portfolioData.strengths.map((strength) => (
                  <li key={strength} className="flex items-start gap-2 text-sm text-charcoal-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-electric-400 mt-1.5 flex-shrink-0" />
                    {strength}
                  </li>
                ))}
              </ul>
            </div>

            <div className="card-base p-6">
              <div className="flex items-center gap-3 mb-4">
                <Languages className="w-5 h-5 text-electric-400" />
                <h3 className="font-display font-semibold text-white">Languages</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {portfolioData.languages.map((language) => (
                  <span key={language} className="chip text-xs">{language}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div
          className={`mt-8 card-base p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 bg-gradient-to-r from-charcoal-900/80 to-electric-950/20 transition-all duration-700 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="flex items-start gap-4">
            <div className="w-11 h-11 rounded-xl bg-cyan-500/10 flex items-center justify-center flex-shrink-0">
              <FileText className="w-5 h-5 text-cyan-400" />
            </div>
            <div>
              <h3 className="font-display font-semibold text-white mb-1">Want to review my resume?</h3>
              <p className="text-sm text-charcoal-400 max-w-lg">
                I’m happy to share my latest resume for internship and entry-level opportunities in AI/ML.
              </p>
            </div>
          </div>
          <a
            href={`mailto:${portfolioData.social.email}?subject=Resume%20request%20-%20Pranav%20Patil`}
            className="btn-primary whitespace-nowrap"
          >
            <Mail className="w-4 h-4" />
            Request Resume
          </a>
        </div>
      </div>
    </section>
  );
}
