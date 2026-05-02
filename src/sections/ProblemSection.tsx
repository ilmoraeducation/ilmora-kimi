import { useRef, useEffect } from 'react';
import { AlertTriangle, FileX, Clock, DollarSign } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ProblemSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headlineRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      gsap.fromTo(
        cardRef.current,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: 0.3,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const problems = [
    { icon: FileX, text: 'Multiple platforms, no single source of truth' },
    { icon: Clock, text: 'Missing follow-ups = missed intakes' },
    { icon: DollarSign, text: 'Hidden costs that delay your admission' },
  ];

  return (
    <section id="problem" ref={sectionRef} className="relative py-32 bg-[#0A0F2C] overflow-hidden">
      <div className="section-padding max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <AlertTriangle size={18} className="text-[#C9A84C]" />
          <span className="label-sm text-[#C9A84C]">The Problem</span>
        </div>

        <h2 ref={headlineRef} className="headline-lg text-[#EDEFF5] mb-6 max-w-3xl">
          Studying abroad shouldn't feel like a{' '}
          <span className="text-[#AAB0C5]">full-time job.</span>
        </h2>

        <p className="text-lg text-[#AAB0C5] max-w-2xl mb-16 leading-relaxed">
          You're juggling work, family, and deadlines — while universities ask for documents, follow-ups,
          and appointments across time zones.
        </p>

        <div ref={cardRef} className="glass p-8 md:p-10">
          <h3 className="text-xl font-semibold text-[#EDEFF5] mb-6">What students struggle with</h3>
          <div className="space-y-5">
            {problems.map((problem, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-white/5 mt-0.5">
                  <problem.icon size={18} className="text-[#C9A84C]" />
                </div>
                <p className="text-[#AAB0C5] text-base">{problem.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
