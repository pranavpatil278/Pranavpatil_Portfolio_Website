import { useState } from 'react';
import { FolderGit2, ExternalLink, Github, ArrowRight, CheckCircle2, Lightbulb, X } from 'lucide-react';
import { portfolioData } from '@/data/portfolio';
import { useScrollReveal } from '@/hooks/useScrollReveal';

type Project = (typeof portfolioData.projects)[number];

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center p-4 md:p-8"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-charcoal-950/80 backdrop-blur-sm animate-fade-in" />
      <div
        className="relative card-base max-w-2xl w-full max-h-[85vh] overflow-y-auto scrollbar-hide animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 bg-charcoal-900/95 backdrop-blur-sm border-b border-charcoal-700/50 px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-electric-500/20 to-cyan-500/20 flex items-center justify-center">
              <FolderGit2 className="w-5 h-5 text-electric-400" />
            </div>
            <div>
              <h3 className="font-display font-bold text-lg text-white">{project.name}</h3>
              <p className="text-xs text-electric-400">{project.tagline}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-lg bg-charcoal-800/60 flex items-center justify-center text-charcoal-400 hover:text-white hover:bg-charcoal-800 transition-all"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-6">
          {/* Description */}
          <div>
            <h4 className="text-sm font-mono text-charcoal-500 uppercase tracking-wider mb-2">Overview</h4>
            <p className="text-charcoal-200 text-sm leading-relaxed">{project.description}</p>
          </div>

          {/* Problem */}
          <div>
            <h4 className="text-sm font-mono text-charcoal-500 uppercase tracking-wider mb-2 flex items-center gap-2">
              <Lightbulb className="w-4 h-4 text-cyan-400" />
              Problem Solved
            </h4>
            <p className="text-charcoal-300 text-sm leading-relaxed">{project.problem}</p>
          </div>

          {/* Features */}
          <div>
            <h4 className="text-sm font-mono text-charcoal-500 uppercase tracking-wider mb-3 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-electric-400" />
              Key Features
            </h4>
            <ul className="space-y-2">
              {project.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-charcoal-200">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-electric-400 flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Tech */}
          <div>
            <h4 className="text-sm font-mono text-charcoal-500 uppercase tracking-wider mb-3">Technologies</h4>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span key={t} className="chip text-xs">
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost flex-1 justify-center text-sm"
            >
              <Github className="w-4 h-4" />
              View Code
            </a>
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex-1 justify-center text-sm"
              >
                <ExternalLink className="w-4 h-4" />
                Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const { ref, isVisible } = useScrollReveal();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-cyan-500/5 rounded-full blur-[100px]" />

      <div ref={ref} className="section-container relative">
        <div
          className={`transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-px bg-cyan-400" />
            <span className="text-sm font-mono text-cyan-400 uppercase tracking-widest">
              04 / Projects
            </span>
          </div>
          <h2 className="font-display font-bold text-3xl md:text-5xl heading-gradient mb-4">
            Featured Projects
          </h2>
          <p className="text-charcoal-400 text-base md:text-lg max-w-2xl mb-12">
            A selection of full-stack AI applications and systems I've built — from AI-powered career assistants to enterprise RAG systems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {portfolioData.projects.map((project, i) => (
            <div
              key={project.name}
              className={`card-base card-hover p-6 md:p-8 group transition-all duration-700 cursor-pointer ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${200 + i * 150}ms` }}
              onClick={() => setSelectedProject(project)}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-electric-500/20 to-cyan-500/20 flex items-center justify-center">
                  <FolderGit2 className="w-6 h-6 text-electric-400" />
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="w-9 h-9 rounded-lg bg-charcoal-800/60 flex items-center justify-center text-charcoal-400 hover:text-electric-400 hover:bg-charcoal-800 transition-all"
                    aria-label="GitHub repository"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="w-9 h-9 rounded-lg bg-charcoal-800/60 flex items-center justify-center text-charcoal-400 hover:text-cyan-400 hover:bg-charcoal-800 transition-all"
                      aria-label="Live demo"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>

              <h3 className="font-display font-semibold text-xl text-white mb-1 group-hover:text-electric-300 transition-colors">
                {project.name}
              </h3>
              <p className="text-xs text-electric-400 font-mono mb-3">{project.tagline}</p>
              <p className="text-charcoal-400 text-sm leading-relaxed mb-4 line-clamp-3">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.slice(0, 4).map((t) => (
                  <span key={t} className="chip text-xs">
                    {t}
                  </span>
                ))}
                {project.tech.length > 4 && (
                  <span className="chip text-xs text-charcoal-500">
                    +{project.tech.length - 4} more
                  </span>
                )}
              </div>

              <div className="flex items-center gap-1.5 text-sm text-electric-400 font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                <span>View details</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </section>
  );
}
