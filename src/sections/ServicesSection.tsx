import { useRef, useEffect } from 'react';
import { ListChecks, Zap, Headphones, FileSearch, Upload, PhoneCall, MessageSquare, ShieldCheck } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ServicesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.service-item',
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          stagger: 0.12,
          duration: 0.7,
          scrollTrigger: { trigger: sectionRef.current, start: 'top 75%', toggleActions: 'play none none reverse' },
        }
      );
      gsap.fromTo(
        '.service-visual',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: { trigger: sectionRef.current, start: 'top 70%', toggleActions: 'play none none reverse' },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const services = [
    { icon: FileSearch, title: 'University shortlisting', desc: 'Matched to your career goals' },
    { icon: Upload, title: 'Document preparation & attestation', desc: 'Notary, MOFA, embassy attestation' },
    { icon: ListChecks, title: 'Application submission', desc: 'Handled end-to-end for each university' },
    { icon: PhoneCall, title: 'Follow-ups & interview prep', desc: 'Regular status updates and coaching' },
    { icon: ShieldCheck, title: 'UAE Equivalency guidance', desc: 'Complete MOE equivalency support' },
  ];

  return (
    <section id="services" ref={sectionRef} className="relative py-32 bg-[#0A0F2C]">
      <div className="section-padding max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Zap size={18} className="text-[#C9A84C]" />
              <span className="label-sm text-[#C9A84C]">Services</span>
            </div>
            <h2 className="headline-lg text-[#EDEFF5] mb-4">What we handle for you.</h2>
            <p className="text-lg text-[#AAB0C5] mb-10">Every step, managed. Every detail, covered.</p>

            <div className="space-y-3">
              {services.map((service, i) => (
                <div key={i} className="service-item glass p-5 flex items-start gap-4 glass-hover">
                  <div className="p-2.5 rounded-lg bg-white/5 shrink-0">
                    <service.icon size={20} className="text-[#00E5FF]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#EDEFF5]">{service.title}</h4>
                    <p className="text-sm text-[#AAB0C5]">{service.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="service-visual glass p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-[#C9A84C]/10 rounded-full blur-[60px]" />
            <div className="relative">
              <h3 className="text-xl font-semibold text-[#EDEFF5] mb-6">Why students choose ILMORA</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-white/5 text-center">
                  <Zap size={24} className="text-[#C9A84C] mx-auto mb-2" />
                  <p className="text-sm font-semibold text-[#EDEFF5]">Fast Turnaround</p>
                </div>
                <div className="p-4 rounded-xl bg-white/5 text-center">
                  <Headphones size={24} className="text-[#00E5FF] mx-auto mb-2" />
                  <p className="text-sm font-semibold text-[#EDEFF5]">Dedicated Advisor</p>
                </div>
                <div className="p-4 rounded-xl bg-white/5 text-center">
                  <MessageSquare size={24} className="text-[#C9A84C] mx-auto mb-2" />
                  <p className="text-sm font-semibold text-[#EDEFF5]">WhatsApp Support</p>
                </div>
                <div className="p-4 rounded-xl bg-white/5 text-center">
                  <ShieldCheck size={24} className="text-[#00E5FF] mx-auto mb-2" />
                  <p className="text-sm font-semibold text-[#EDEFF5]">Money-Back Promise</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
