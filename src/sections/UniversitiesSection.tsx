import { useRef, useEffect } from 'react';
import { ExternalLink } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const universities = [
  { name: 'Arni University', link: 'https://arniuniversity.edu.in', image: '/images/arni.png', programs: 'MBA, MA, MSW' },
  { name: 'RNTU', link: 'https://rntu.ac.in', image: '/images/rntu.png', programs: 'B.Ed, M.Ed, PhD' },
  { name: 'Radha Govind University', link: 'https://rguniversity.edu.in', image: '/images/rgu.png', programs: 'BA, M.Com, Certifications' },
];

const chips = [
  { name: 'NEFTU', link: 'https://www.neftu.edu.in' },
  { name: "Lingaya's Vidyapeeth", link: 'https://www.lingayasvidyapeeth.edu.in' },
  { name: 'OSGU', link: 'https://www.osgu.ac.in' },
  { name: 'Jamia Urdu Aligarh', link: 'https://www.jamiaurdualigarh.com/' },
];

export default function UniversitiesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.uni-card',
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.15,
          duration: 0.8,
          scrollTrigger: { trigger: sectionRef.current, start: 'top 75%', toggleActions: 'play none none reverse' },
        }
      );
      gsap.fromTo(
        '.uni-chip',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.08,
          duration: 0.6,
          scrollTrigger: { trigger: sectionRef.current, start: 'top 60%', toggleActions: 'play none none reverse' },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="universities" ref={sectionRef} className="relative py-32 bg-[#0A0F2C]">
      <div className="section-padding max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="gold-dot" />
              <span className="label-sm text-[#C9A84C]">Institutions</span>
            </div>
            <h2 className="headline-lg text-[#EDEFF5]">Partner Universities.</h2>
          </div>
          <p className="text-[#AAB0C5] mt-4 lg:mt-0 max-w-md">
            Curated for working professionals. Recognized. Flexible.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {universities.map((uni, i) => (
            <a
              key={i}
              href={uni.link}
              target="_blank"
              rel="noopener noreferrer"
              className="uni-card glass p-6 glass-hover group"
            >
              <div className="h-20 flex items-center justify-center mb-6 bg-white/5 rounded-xl p-4">
                <img src={uni.image} alt={uni.name} className="max-h-14 w-auto object-contain" />
              </div>
              <h4 className="text-lg font-semibold text-[#EDEFF5] mb-2 group-hover:text-[#C9A84C] transition-colors">
                {uni.name}
              </h4>
              <div className="flex items-center justify-between">
                <span className="text-sm text-[#AAB0C5]">{uni.programs}</span>
                <ExternalLink size={16} className="text-[#C9A84C] opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </a>
          ))}
        </div>

        <div className="flex flex-wrap gap-3">
          {chips.map((chip) => (
            <a
              key={chip.name}
              href={chip.link}
              target="_blank"
              rel="noopener noreferrer"
              className="uni-chip px-5 py-2.5 rounded-full text-sm bg-white/5 border border-white/10 text-[#AAB0C5] hover:border-[#00E5FF]/50 hover:text-[#00E5FF] transition-all inline-flex items-center gap-2"
            >
              {chip.name}
              <ExternalLink size={12} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
