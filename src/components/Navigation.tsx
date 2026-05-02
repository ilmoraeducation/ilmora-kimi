import { useState, useEffect } from 'react';
import { Menu, X, LogIn, LayoutDashboard, Wrench } from 'lucide-react';
import { Link, useLocation } from 'react-router';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMenuOpen(false);
    if (location.pathname !== '/') {
      window.location.href = `/#${id}`;
      return;
    }
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Programs', id: 'programs' },
    { label: 'Universities', id: 'universities' },
    { label: 'Services', id: 'services' },
    { label: 'Dashboard', id: 'dashboard-demo' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'glass py-3' : 'bg-transparent py-5'}`}>
      <div className="section-padding flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img src="/images/ilmora-logo-white.png" alt="ILMORA" className="h-8 w-auto" />
          <span className="font-bold text-lg tracking-tight hidden sm:block" style={{ fontFamily: 'Space Grotesk' }}>ILMORA</span>
        </Link>

        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <button key={link.id} onClick={() => scrollToSection(link.id)} className="text-sm text-[#AAB0C5] hover:text-[#EDEFF5] transition-colors tracking-wide">
              {link.label}
            </button>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-4">
          <Link to="/tools" className="flex items-center gap-2 text-sm text-[#AAB0C5] hover:text-[#00E5FF] transition-colors">
            <Wrench size={16} />
            <span>Tools</span>
          </Link>
          <Link to="/portal" className="flex items-center gap-2 text-sm text-[#AAB0C5] hover:text-[#C9A84C] transition-colors">
            <LayoutDashboard size={16} />
            <span>Portal</span>
          </Link>
          <Link to="/login" className="btn-gold flex items-center gap-2 text-xs">
            <LogIn size={14} />
            <span>Sign In</span>
          </Link>
        </div>

        <button className="lg:hidden text-[#EDEFF5]" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {menuOpen && (
        <div className="lg:hidden glass mt-2 mx-4 p-6 space-y-4">
          {navLinks.map((link) => (
            <button key={link.id} onClick={() => scrollToSection(link.id)} className="block w-full text-left text-[#AAB0C5] hover:text-[#EDEFF5] py-2">
              {link.label}
            </button>
          ))}
          <div className="pt-4 border-t border-white/10 space-y-3">
            <Link to="/tools" className="flex items-center gap-2 text-[#AAB0C5] hover:text-[#00E5FF]">
              <Wrench size={16} /> Tools
            </Link>
            <Link to="/portal" className="flex items-center gap-2 text-[#AAB0C5] hover:text-[#C9A84C]">
              <LayoutDashboard size={16} /> Portal
            </Link>
            <Link to="/login" className="btn-gold inline-flex items-center gap-2 text-xs">
              <LogIn size={14} /> Sign In
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
