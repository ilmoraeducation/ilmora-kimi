import { useRef, useEffect } from 'react';
import { Mail, Phone, MessageCircle, ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function CTASection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.cta-headline',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: { trigger: sectionRef.current, start: 'top 80%', toggleActions: 'play none none reverse' },
        }
      );
      gsap.fromTo(
        '.cta-buttons',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 0.2,
          scrollTrigger: { trigger: sectionRef.current, start: 'top 75%', toggleActions: 'play none none reverse' },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="cta" ref={sectionRef} className="relative py-32 bg-[#0A0F2C] overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#C9A84C]/5 rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 section-padding max-w-4xl mx-auto text-center">
        <div className="cta-headline mb-10">
          <h2 className="headline-lg text-[#EDEFF5] mb-4">
            Get Your Degree.
            <br />
            <span className="text-gradient-gold">We Handle the Rest.</span>
          </h2>
          <p className="text-lg text-[#AAB0C5]">No hidden fees. Talk to an advisor today.</p>
        </div>

        <div className="cta-buttons flex flex-wrap gap-4 justify-center mb-16">
          <a href="https://wa.me/971529682123" target="_blank" rel="noopener noreferrer" className="btn-gold inline-flex items-center gap-2">
            Book a Free Consultation
            <ArrowRight size={16} />
          </a>
          <a href="#programs" className="btn-outline inline-flex items-center gap-2">
            Compare Programs
          </a>
        </div>

        <div className="glass inline-flex flex-wrap items-center justify-center gap-6 md:gap-10 px-8 py-5">
          <a href="mailto:Ilmoraeducationgroup@gmail.com" className="flex items-center gap-2 text-sm text-[#AAB0C5] hover:text-[#EDEFF5] transition-colors">
            <Mail size={16} className="text-[#C9A84C]" />
            Ilmoraeducationgroup@gmail.com
          </a>
          <a href="tel:+971529682123" className="flex items-center gap-2 text-sm text-[#AAB0C5] hover:text-[#EDEFF5] transition-colors">
            <Phone size={16} className="text-[#C9A84C]" />
            +971 52 968 2123
          </a>
          <a href="https://wa.me/971529682123" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-[#00E5FF] hover:text-[#80F0FF] transition-colors">
            <MessageCircle size={16} />
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
