import { Github, Linkedin, Mail, ArrowUpRight, BrainCircuit } from 'lucide-react';
import { portfolioData } from '@/data/portfolio';

export default function Footer() {
  const socialLinks = [
    {
      icon: Github,
      href: portfolioData.social.github,
      label: 'GitHub',
    },
    {
      icon: Linkedin,
      href: portfolioData.social.linkedin,
      label: 'LinkedIn',
    },
    {
      icon: Mail,
      href: `mailto:${portfolioData.social.email}`,
      label: 'Email',
    },
  ];

  return (
    <footer className="relative border-t border-charcoal-800/50 overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-electric-600/5 rounded-full blur-[100px]" />

      <div className="section-container relative py-12 md:py-16">
        <div className="flex flex-col items-center gap-8">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 group"
          >
            <BrainCircuit className="w-6 h-6 text-electric-400 group-hover:scale-110 transition-transform" />
            <span className="font-display font-bold text-lg text-white">
              Pranav<span className="text-electric-400">.</span>
            </span>
          </button>

          {/* Social links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.icon !== Mail ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-xl bg-charcoal-800/60 border border-charcoal-700/50 flex items-center justify-center text-charcoal-400 hover:text-electric-400 hover:border-electric-500/40 hover:bg-charcoal-800 hover:-translate-y-0.5 transition-all duration-300"
                aria-label={link.label}
              >
                <link.icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          {/* Back to top */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="group flex items-center gap-1.5 text-sm text-charcoal-500 hover:text-electric-400 transition-colors"
          >
            Back to top
            <ArrowUpRight className="w-4 h-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
          </button>

          {/* Copyright */}
          <div className="text-center">
            <p className="text-xs text-charcoal-500">
              © {new Date().getFullYear()} {portfolioData.name}. All rights reserved.
            </p>
            <p className="text-xs text-charcoal-600 mt-1">
              Built with React, TypeScript & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
