import { useRef, useEffect } from 'react';
import { Quote, Users, Calendar, Clock, Globe, ShieldCheck, CheckCircle } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function TrustSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.testimonial-card',
        { opacity: 0, x: -60 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          scrollTrigger: { trigger: sectionRef.current, start: 'top 75%', toggleActions: 'play none none reverse' },
        }
      );
      gsap.fromTo(
        '.trust-stat',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          duration: 0.7,
          scrollTrigger: { trigger: sectionRef.current, start: 'top 65%', toggleActions: 'play none none reverse' },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const stats = [
    { icon: Users, label: '2,480+ Students', desc: 'Successfully enrolled' },
    { icon: Calendar, label: '8 Intakes / Year', desc: 'Flexible start dates' },
    { icon: Clock, label: '48h Follow-up', desc: 'Quick response time' },
    { icon: Globe, label: 'UAE Equivalency', desc: 'Full support included' },
    { icon: CheckCircle, label: 'Online + Hybrid', desc: 'Study from anywhere' },
    { icon: ShieldCheck, label: '100% Transparent', desc: 'No hidden fees ever' },
  ];

  return (
    <section id="trust" ref={sectionRef} className="relative py-32 bg-[#050816]">
      <div className="section-padding max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <span className="gold-dot" />
          <span className="label-sm text-[#C9A84C]">Trust</span>
        </div>

        <h2 className="headline-lg text-[#EDEFF5] mb-16">Built on trust.</h2>

        <div className="testimonial-card glass p-8 md:p-10 mb-16 max-w-4xl">
          <div className="flex items-start gap-6">
            <Quote size={36} className="text-[#C9A84C] shrink-0 mt-1" />
            <div>
              <p className="text-xl md:text-2xl text-[#EDEFF5] leading-relaxed mb-8">
                "ILMORA handled the paperwork and follow-ups like a project manager. I could focus on work and family while everything moved forward."
              </p>
              <div className="flex items-center gap-4">
                <img src="/assets/avatar-testimonial.jpg" alt="Mohammed I." className="w-14 h-14 rounded-full object-cover border-2 border-[#C9A84C]/30" />
                <div>
                  <p className="font-semibold text-[#EDEFF5]">Mohammed I.</p>
                  <p className="text-sm text-[#AAB0C5]">Abu Dhabi, UAE</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {stats.map((stat, i) => (
            <div key={i} className="trust-stat glass p-6 glass-hover">
              <stat.icon size={24} className="text-[#C9A84C] mb-3" />
              <p className="text-lg font-bold text-[#EDEFF5]">{stat.label}</p>
              <p className="text-sm text-[#AAB0C5] mt-1">{stat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
