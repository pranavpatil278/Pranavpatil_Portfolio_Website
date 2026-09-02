import { useEffect, useState } from 'react';
import { ArrowDown, Github, Linkedin, Mail, Sparkles } from 'lucide-react';
import { portfolioData } from '@/data/portfolio';

const roles = [
  'AI/ML Engineer',
  'Deep Learning Enthusiast',
  'CS Graduate Student',
  'Problem Solver',
];

export default function Hero() {
  const [text, setText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    const speed = isDeleting ? 40 : 90;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setText(current.slice(0, text.length + 1));
        if (text.length + 1 === current.length) {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        setText(current.slice(0, text.length - 1));
        if (text.length - 1 === 0) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, roleIndex]);

  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background layers */}
      <div className="absolute inset-0 grid-bg opacity-50" />
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal-950 via-transparent to-charcoal-950" />

      {/* Animated glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-electric-600/10 rounded-full blur-[120px] animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] animate-pulse-slow animation-delay-2000" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-electric-500/5 rounded-full blur-[150px]" />

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-electric-400/40 rounded-full animate-float"
            style={{
              left: `${(i * 8.3 + 5) % 100}%`,
              top: `${(i * 13.7 + 10) % 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${5 + (i % 3)}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="section-container relative z-10 text-center">
        <div className="opacity-0-init animate-fade-in-down animation-delay-100">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-charcoal-800/50 border border-charcoal-700/50 backdrop-blur-sm mb-8">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span className="text-sm text-charcoal-200">
              Open to Internships & Entry-Level Roles
            </span>
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          </div>
        </div>

        <h1 className="opacity-0-init animate-fade-in-up animation-delay-300 font-display font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight mb-6">
          <span className="heading-gradient text-shadow-glow">Pranav</span>
          <br />
          <span className="heading-gradient text-shadow-glow">Patil</span>
        </h1>

        <div className="opacity-0-init animate-fade-in-up animation-delay-500 h-8 mb-6">
          <p className="text-xl md:text-2xl font-mono text-electric-400">
            <span className="text-charcoal-400">{'> '}</span>
            {text}
            <span className="inline-block w-0.5 h-6 bg-electric-400 animate-pulse ml-1 align-middle" />
          </p>
        </div>

        <p className="opacity-0-init animate-fade-in-up animation-delay-700 max-w-2xl mx-auto text-base md:text-lg text-charcoal-300 leading-relaxed mb-10">
          {portfolioData.tagline}
        </p>

        <div className="opacity-0-init animate-fade-in-up animation-delay-1000 flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <button
            onClick={() =>
              document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })
            }
            className="btn-primary w-full sm:w-auto justify-center"
          >
            View My Work
            <ArrowDown className="w-4 h-4" />
          </button>
          <button
            onClick={() =>
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
            }
            className="btn-ghost w-full sm:w-auto justify-center"
          >
            <Mail className="w-4 h-4" />
            Contact Me
          </button>
        </div>

        <div className="opacity-0-init animate-fade-in animation-delay-1000 flex items-center justify-center gap-6">
          <a
            href={portfolioData.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-charcoal-400 hover:text-electric-400 transition-colors duration-200 hover:scale-110 transform"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href={portfolioData.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-charcoal-400 hover:text-electric-400 transition-colors duration-200 hover:scale-110 transform"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href={`mailto:${portfolioData.social.email}`}
            className="text-charcoal-400 hover:text-electric-400 transition-colors duration-200 hover:scale-110 transform"
            aria-label="Email"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0-init animate-fade-in animation-delay-2000 group"
        aria-label="Scroll to about"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-charcoal-500 group-hover:text-charcoal-300 transition-colors">
            Scroll
          </span>
          <div className="w-6 h-10 border-2 border-charcoal-600 rounded-full flex items-start justify-center p-1.5 group-hover:border-electric-500/50 transition-colors">
            <div className="w-1 h-2 bg-electric-400 rounded-full animate-bounce-slow" />
          </div>
        </div>
      </button>
    </section>
  );
}
