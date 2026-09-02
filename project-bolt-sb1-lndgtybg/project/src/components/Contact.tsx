import { Mail, Github, Linkedin, MapPin, Send, Copy, Check } from 'lucide-react';
import { useState } from 'react';
import { portfolioData } from '@/data/portfolio';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function Contact() {
  const { ref, isVisible } = useScrollReveal();
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(portfolioData.social.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-electric-600/5 rounded-full blur-[120px]" />

      <div ref={ref} className="section-container relative">
        <div
          className={`transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-px bg-cyan-400" />
            <span className="text-sm font-mono text-cyan-400 uppercase tracking-widest">
              06 / Contact
            </span>
          </div>
          <h2 className="font-display font-bold text-3xl md:text-5xl heading-gradient mb-4">
            Let's Connect
          </h2>
          <p className="text-charcoal-400 text-base md:text-lg max-w-2xl mb-12">
            I'm actively seeking internship and entry-level opportunities in AI/ML. Whether
            you're a recruiter, a fellow developer, or just want to chat about AI — I'd love to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Contact card */}
          <div
            className={`card-base card-hover p-8 transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h3 className="font-display font-semibold text-xl text-white mb-6">
              Get in Touch
            </h3>

            <div className="space-y-4">
              {/* Email */}
              <button
                onClick={handleCopyEmail}
                className="flex items-center gap-4 w-full p-4 rounded-xl bg-charcoal-800/40 border border-charcoal-700/30 hover:border-electric-500/40 hover:bg-charcoal-800/60 transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-electric-500/10 flex items-center justify-center group-hover:bg-electric-500/20 transition-colors">
                  <Mail className="w-5 h-5 text-electric-400" />
                </div>
                <div className="flex-1 text-left">
                  <div className="text-xs text-charcoal-500">Email</div>
                  <div className="text-sm text-charcoal-200">
                    {portfolioData.social.email}
                  </div>
                </div>
                {copied ? (
                  <Check className="w-4 h-4 text-cyan-400" />
                ) : (
                  <Copy className="w-4 h-4 text-charcoal-500 group-hover:text-electric-400 transition-colors" />
                )}
              </button>

              {/* GitHub */}
              <a
                href={portfolioData.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 w-full p-4 rounded-xl bg-charcoal-800/40 border border-charcoal-700/30 hover:border-electric-500/40 hover:bg-charcoal-800/60 transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-electric-500/10 flex items-center justify-center group-hover:bg-electric-500/20 transition-colors">
                  <Github className="w-5 h-5 text-electric-400" />
                </div>
                <div className="flex-1">
                  <div className="text-xs text-charcoal-500">GitHub</div>
                  <div className="text-sm text-charcoal-200">View my repositories</div>
                </div>
                <Send className="w-4 h-4 text-charcoal-500 group-hover:text-electric-400 transition-colors" />
              </a>

              {/* LinkedIn */}
              <a
                href={portfolioData.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 w-full p-4 rounded-xl bg-charcoal-800/40 border border-charcoal-700/30 hover:border-electric-500/40 hover:bg-charcoal-800/60 transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-electric-500/10 flex items-center justify-center group-hover:bg-electric-500/20 transition-colors">
                  <Linkedin className="w-5 h-5 text-electric-400" />
                </div>
                <div className="flex-1">
                  <div className="text-xs text-charcoal-500">LinkedIn</div>
                  <div className="text-sm text-charcoal-200">Connect professionally</div>
                </div>
                <Send className="w-4 h-4 text-charcoal-500 group-hover:text-electric-400 transition-colors" />
              </a>

              {/* Location */}
              <div className="flex items-center gap-4 w-full p-4 rounded-xl bg-charcoal-800/40 border border-charcoal-700/30">
                <div className="w-10 h-10 rounded-lg bg-electric-500/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-electric-400" />
                </div>
                <div className="flex-1">
                  <div className="text-xs text-charcoal-500">Location</div>
                  <div className="text-sm text-charcoal-200">
                    {portfolioData.location}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA card */}
          <div
            className={`relative card-base p-8 flex flex-col justify-center items-center text-center overflow-hidden transition-all duration-700 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-electric-600/10 via-transparent to-cyan-500/10" />
            <div className="relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-electric-500/20 to-cyan-500/20 flex items-center justify-center mx-auto mb-6">
                <Send className="w-8 h-8 text-electric-400" />
              </div>
              <h3 className="font-display font-bold text-2xl heading-gradient mb-3">
                Ready to Build Together
              </h3>
              <p className="text-charcoal-300 text-sm leading-relaxed max-w-sm mx-auto mb-6">
                If you're looking for a passionate AI/ML engineer who's eager to learn and
                contribute, I'd love to talk. Let's create something impactful.
              </p>
              <a href={`mailto:${portfolioData.social.email}`} className="btn-primary">
                <Mail className="w-4 h-4" />
                Send an Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
