import { Instagram, Mail, Phone, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative py-16 bg-[#050816] border-t border-white/5">
      <div className="section-padding max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img src="/images/ilmora-logo-white.png" alt="ILMORA" className="h-8 w-auto" />
              <span className="font-bold text-lg" style={{ fontFamily: 'Space Grotesk' }}>ILMORA Education</span>
            </div>
            <p className="text-sm text-[#AAB0C5] max-w-sm">
              Your trusted partner for university admissions, documentation, and UAE equivalency. We make education accessible.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-[#EDEFF5] mb-4 uppercase tracking-wider">Programs</h4>
            <ul className="space-y-2">
              {['UG Programs', 'PG Programs', 'PhD Support', 'UAE Equivalency', 'Certifications'].map((item) => (
                <li key={item}><span className="text-sm text-[#AAB0C5] hover:text-[#EDEFF5] transition-colors cursor-pointer">{item}</span></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-[#EDEFF5] mb-4 uppercase tracking-wider">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a href="tel:+971529682123" className="flex items-center gap-2 text-sm text-[#AAB0C5] hover:text-[#C9A84C] transition-colors">
                  <Phone size={14} /> +971 52 968 2123
                </a>
              </li>
              <li>
                <a href="tel:+917736385780" className="flex items-center gap-2 text-sm text-[#AAB0C5] hover:text-[#C9A84C] transition-colors">
                  <Phone size={14} /> +91 77363 85780
                </a>
              </li>
              <li>
                <a href="mailto:Ilmoraeducationgroup@gmail.com" className="flex items-center gap-2 text-sm text-[#AAB0C5] hover:text-[#C9A84C] transition-colors">
                  <Mail size={14} /> Ilmoraeducationgroup@gmail.com
                </a>
              </li>
              <li>
                <a href="https://instagram.com/ilmora_education" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-[#AAB0C5] hover:text-[#C9A84C] transition-colors">
                  <Instagram size={14} /> @ilmora_education
                </a>
              </li>
              <li>
                <a href="https://wa.me/971529682123" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-[#00E5FF] hover:text-[#80F0FF] transition-colors">
                  <MessageCircle size={14} /> WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#AAB0C5]">
            © 2025 ILMORA Education Group. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-xs text-[#AAB0C5] hover:text-[#EDEFF5] cursor-pointer transition-colors">Privacy Policy</span>
            <span className="text-xs text-[#AAB0C5] hover:text-[#EDEFF5] cursor-pointer transition-colors">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
