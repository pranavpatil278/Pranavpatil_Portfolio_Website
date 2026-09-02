import { useEffect, useState } from 'react';
import { Menu, X, BrainCircuit } from 'lucide-react';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Education', href: '#education' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Credentials', href: '#credentials' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = navLinks.map((l) => l.href.slice(1));
      const current = sections.find((id) => {
        const el = document.getElementById(id);
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return rect.top <= 120 && rect.bottom >= 120;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-charcoal-950/80 backdrop-blur-xl border-b border-charcoal-800/50'
            : 'bg-transparent'
        }`}
      >
        <nav className="section-container flex items-center justify-between h-16 md:h-18">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 group"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-electric-500 blur-lg opacity-40 group-hover:opacity-60 transition-opacity" />
              <BrainCircuit className="relative w-7 h-7 text-electric-400" />
            </div>
            <span className="font-display font-bold text-lg text-white tracking-tight">
              Pranav<span className="text-electric-400">.</span>
            </span>
          </button>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`nav-link ${
                  activeSection === link.href.slice(1) ? 'text-white' : ''
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="hidden md:block">
            <button
              onClick={() => handleNavClick('#contact')}
              className="btn-primary text-sm py-2 px-5"
            >
              Get in Touch
            </button>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-charcoal-200 hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>
      </header>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
          mobileOpen ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
      >
        <div
          className="absolute inset-0 bg-charcoal-950/95 backdrop-blur-xl"
          onClick={() => setMobileOpen(false)}
        />
        <div
          className={`absolute top-16 left-0 right-0 bg-charcoal-900/95 border-b border-charcoal-800 transition-transform duration-300 ${
            mobileOpen ? 'translate-y-0' : '-translate-y-full'
          }`}
        >
          <div className="flex flex-col p-6 gap-2">
            {navLinks.map((link, i) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`text-left py-3 px-4 rounded-xl text-charcoal-200 hover:text-white hover:bg-charcoal-800/50 transition-all ${
                  activeSection === link.href.slice(1)
                    ? 'text-white bg-charcoal-800/50'
                    : ''
                }`}
                style={{
                  animation: mobileOpen
                    ? `fadeInUp 0.4s ease-out ${i * 50}ms forwards`
                    : 'none',
                  opacity: mobileOpen ? 0 : 1,
                }}
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => handleNavClick('#contact')}
              className="btn-primary mt-4 justify-center"
            >
              Get in Touch
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
