import { useRef, useEffect, useState } from 'react';
import { Send, CheckCircle, FileText, BarChart3, GraduationCap, ChevronRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function JourneySection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeStage, setActiveStage] = useState(0);

  const stages = [
    { icon: Send, label: 'APPLY', desc: 'Submit your application online' },
    { icon: CheckCircle, label: 'VERIFY', desc: 'We verify your documents' },
    { icon: FileText, label: 'DOCUMENT', desc: 'Complete all paperwork' },
    { icon: BarChart3, label: 'TRACK', desc: 'Real-time status updates' },
    { icon: GraduationCap, label: 'ENROLL', desc: 'Start your program' },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.journey-stage',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.12,
          duration: 0.8,
          scrollTrigger: { trigger: sectionRef.current, start: 'top 75%', toggleActions: 'play none none reverse' },
        }
      );
    }, sectionRef);

    const interval = setInterval(() => {
      setActiveStage((prev) => (prev + 1) % stages.length);
    }, 2000);

    return () => {
      ctx.revert();
      clearInterval(interval);
    };
  }, []);

  return (
    <section id="journey" ref={sectionRef} className="relative py-32 bg-[#0A0F2C] overflow-hidden">
      <div className="section-padding max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <span className="gold-dot" />
          <span className="label-sm text-[#C9A84C]">Journey</span>
        </div>

        <h2 className="headline-lg text-[#EDEFF5] mb-16">Your Admission Path</h2>

        {/* Stages */}
        <div className="flex flex-wrap lg:flex-nowrap gap-4 mb-16">
          {stages.map((stage, i) => (
            <div
              key={i}
              className={`journey-stage glass flex-1 p-6 text-center transition-all duration-500 cursor-pointer ${
                i === activeStage ? 'border-[#C9A84C] bg-white/10 scale-105' : ''
              }`}
              onMouseEnter={() => setActiveStage(i)}
            >
              <div className={`p-3 rounded-xl inline-flex mb-4 ${i === activeStage ? 'bg-[#C9A84C]/20' : 'bg-white/5'}`}>
                <stage.icon size={24} className={i === activeStage ? 'text-[#C9A84C]' : 'text-[#AAB0C5]'} />
              </div>
              <h4 className={`font-bold text-lg mb-2 ${i === activeStage ? 'text-[#C9A84C]' : 'text-[#EDEFF5]'}`}>
                {stage.label}
              </h4>
              <p className="text-sm text-[#AAB0C5]">{stage.desc}</p>
              {i < stages.length - 1 && (
                <div className="hidden lg:block absolute right-[-18px] top-1/2 -translate-y-1/2 text-[#C9A84C]">
                  <ChevronRight size={20} />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Action panel */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="glass p-8">
            <h3 className="text-xl font-semibold text-[#EDEFF5] mb-6">Quick Actions</h3>
            <div className="space-y-3">
              {['Complete Profile', 'Upload Documents', 'Book a Call', 'Track Status'].map((action) => (
                <button key={action} className="w-full flex items-center justify-between p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors text-left">
                  <span className="text-[#EDEFF5]">{action}</span>
                  <ChevronRight size={16} className="text-[#C9A84C]" />
                </button>
              ))}
            </div>
          </div>

          <div className="glass p-8 flex items-center justify-center">
            <div className="text-center">
              <div className="relative w-32 h-32 mx-auto mb-4">
                <div className="absolute inset-0 rounded-full border-2 border-[#C9A84C]/20 orbit-ring" />
                <div className="absolute inset-4 rounded-full border border-[#00E5FF]/20" style={{ animation: 'orbit-spin 15s linear infinite reverse' }} />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-3xl font-bold text-[#EDEFF5]">24K+</span>
                </div>
              </div>
              <p className="text-[#AAB0C5]">Students Enrolled</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
