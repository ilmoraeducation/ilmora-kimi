import { useRef, useEffect } from 'react';
import { Star, Upload, PhoneCall, BookOpen } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function PlatformSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.platform-metric',
        { opacity: 0, x: 60 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          scrollTrigger: { trigger: sectionRef.current, start: 'top 75%', toggleActions: 'play none none reverse' },
        }
      );

      gsap.fromTo(
        '.platform-card',
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.15,
          duration: 0.8,
          scrollTrigger: { trigger: sectionRef.current, start: 'top 70%', toggleActions: 'play none none reverse' },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const steps = [
    { icon: BookOpen, title: 'Choose your program & university', desc: 'Browse 24+ partner universities across India' },
    { icon: Upload, title: 'Submit documents in one upload', desc: 'Single dashboard — no scattered emails' },
    { icon: PhoneCall, title: 'We manage follow-ups + equivalency', desc: 'Our team handles UAE MOE processing' },
  ];

  return (
    <section id="platform" ref={sectionRef} className="relative py-32 bg-[#0A0F2C]">
      <div className="section-padding max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Star size={18} className="text-[#C9A84C]" />
              <span className="label-sm text-[#C9A84C]">How It Works</span>
            </div>
            <h2 className="headline-lg text-[#EDEFF5] mb-6">
              A platform built for{' '}
              <span className="text-gradient-cyan">busy professionals.</span>
            </h2>
            <p className="text-lg text-[#AAB0C5] mb-12 max-w-lg">
              Everything in one place. No more chasing universities, no more lost documents, no more missed deadlines.
            </p>

            <div className="space-y-4">
              {steps.map((step, i) => (
                <div key={i} className="platform-card glass p-6 flex items-start gap-4 glass-hover cursor-pointer">
                  <div className="p-3 rounded-xl bg-white/5">
                    <step.icon size={22} className="text-[#00E5FF]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#EDEFF5] mb-1">{step.title}</h4>
                    <p className="text-sm text-[#AAB0C5]">{step.desc}</p>
                  </div>
                  <div className="ml-auto flex items-center justify-center w-8 h-8 rounded-full bg-[#C9A84C]/10 text-[#C9A84C] font-bold text-sm shrink-0">
                    {i + 1}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="platform-metric glass p-10 text-center sticky top-32">
            <div className="text-7xl font-bold text-gradient-gold mb-2">4.9/5</div>
            <p className="text-[#AAB0C5] mb-8">Student satisfaction across intakes</p>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Universities', value: '24+' },
                { label: 'Students', value: '2,480+' },
                { label: 'Success Rate', value: '93%' },
                { label: 'Avg Response', value: '48h' },
              ].map((stat) => (
                <div key={stat.label} className="p-4 rounded-xl bg-white/5">
                  <div className="text-2xl font-bold text-[#EDEFF5]">{stat.value}</div>
                  <div className="text-xs text-[#AAB0C5] mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
