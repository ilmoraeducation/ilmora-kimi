import { useRef, useEffect } from 'react';
import { BookOpen, Award, Shield, GraduationCap, BadgeCheck, Layers } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ProgramsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.program-card',
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          duration: 0.8,
          scrollTrigger: { trigger: sectionRef.current, start: 'top 75%', toggleActions: 'play none none reverse' },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const programs = [
    { icon: BookOpen, name: 'Online MBA', duration: '2 Years', mode: 'Online' },
    { icon: Award, name: 'MA / MSc', duration: '2 Years', mode: 'Online/Hybrid' },
    { icon: Shield, name: 'MSW', duration: '2 Years', mode: 'Online' },
    { icon: GraduationCap, name: 'B.Ed / M.Ed', duration: '1-2 Years', mode: 'Online' },
    { icon: BadgeCheck, name: 'BA / M.Com', duration: '3 Years', mode: 'Online' },
    { icon: Layers, name: 'Certifications', duration: '3-12 Months', mode: 'Online' },
  ];

  const extras = ['PhD Support', 'UAE Equivalency', '10th & 12th', 'Bridge Programs', 'BTech/MTech', 'Executive Programs'];

  return (
    <section id="programs" ref={sectionRef} className="relative py-32 bg-[#050816]">
      <div className="section-padding max-w-7xl mx-auto">
        <div className="glass max-w-2xl mx-auto p-8 text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="gold-dot" />
            <span className="label-sm text-[#C9A84C]">Programs</span>
          </div>
          <h2 className="headline-lg text-[#EDEFF5]">Programs that fit your schedule.</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {programs.map((program, i) => (
            <div key={i} className="program-card glass p-6 glass-hover cursor-pointer group">
              <div className="p-3 rounded-xl bg-white/5 inline-flex mb-4 group-hover:bg-[#00E5FF]/10 transition-colors">
                <program.icon size={24} className="text-[#00E5FF] group-hover:text-[#00E5FF]" />
              </div>
              <h4 className="text-lg font-semibold text-[#EDEFF5] mb-2">{program.name}</h4>
              <div className="flex items-center gap-3 text-sm text-[#AAB0C5]">
                <span>{program.duration}</span>
                <span className="w-1 h-1 rounded-full bg-[#AAB0C5]" />
                <span>{program.mode}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-3 justify-center">
          {extras.map((extra) => (
            <span key={extra} className="px-4 py-2 rounded-full text-sm bg-white/5 border border-white/10 text-[#AAB0C5] hover:border-[#C9A84C]/50 hover:text-[#C9A84C] transition-colors cursor-pointer">
              {extra}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
