import { useRef, useEffect, useState } from 'react';
import { Activity, BookOpen, FileText, MessageSquare, ChevronRight, TrendingUp } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function DashboardDemo() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(65);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.dashboard-frame',
        { opacity: 0, scale: 1.06 },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          scrollTrigger: { trigger: sectionRef.current, start: 'top 75%', toggleActions: 'play none none reverse' },
        }
      );
    }, sectionRef);

    const interval = setInterval(() => {
      setProgress((p) => (p >= 95 ? 65 : p + 1));
    }, 100);

    return () => {
      ctx.revert();
      clearInterval(interval);
    };
  }, []);

  const statusChips = [
    { label: 'Active Intake', color: '#00E5FF', active: true },
    { label: 'Docs Submitted', color: '#C9A84C', active: true },
    { label: 'Offer Received', color: '#C9A84C', active: false },
  ];

  const actions = [
    { icon: TrendingUp, label: 'Track Progress' },
    { icon: ChevronRight, label: 'Next Steps' },
    { icon: MessageSquare, label: 'Advisor Notes' },
    { icon: FileText, label: 'Documents' },
  ];

  return (
    <section id="dashboard-demo" ref={sectionRef} className="relative py-32 bg-[#050816]">
      <div className="section-padding max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <span className="cyan-dot" />
          <span className="label-sm text-[#00E5FF]">Dashboard Preview</span>
        </div>
        <h2 className="headline-lg text-[#EDEFF5] mb-16">See your journey in real-time.</h2>

        <div className="dashboard-frame glass p-6 md:p-8">
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Left: Status + Metrics */}
            <div className="space-y-4">
              <div className="flex flex-wrap gap-2">
                {statusChips.map((chip) => (
                  <span
                    key={chip.label}
                    className="px-3 py-1.5 rounded-full text-xs font-medium border"
                    style={{
                      borderColor: chip.active ? `${chip.color}40` : 'rgba(255,255,255,0.1)',
                      color: chip.active ? chip.color : '#AAB0C5',
                      background: chip.active ? `${chip.color}10` : 'transparent',
                    }}
                  >
                    {chip.label}
                  </span>
                ))}
              </div>

              <div className="p-4 rounded-xl bg-white/5">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-[#AAB0C5]">Credits</span>
                  <span className="text-sm font-bold text-[#C9A84C]">48/60</span>
                </div>
                <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden">
                  <div className="h-full rounded-full bg-gradient-to-r from-[#C9A84C] to-[#00E5FF]" style={{ width: '80%' }} />
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white/5">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-[#AAB0C5]">Modules</span>
                  <span className="text-sm font-bold text-[#00E5FF]">12/15</span>
                </div>
                <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden">
                  <div className="h-full rounded-full bg-[#00E5FF]" style={{ width: '80%' }} />
                </div>
              </div>
            </div>

            {/* Center: Main card */}
            <div className="glass p-6 relative overflow-hidden">
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-white/5 rotate-45" />
              <Activity size={28} className="text-[#C9A84C] mb-4" />
              <h4 className="text-lg font-semibold text-[#EDEFF5] mb-2">Admission Progress</h4>
              <p className="text-sm text-[#AAB0C5] mb-6">MBA Program — Arni University</p>
              <div className="relative">
                <div className="text-5xl font-bold text-[#EDEFF5] mb-1">{progress}%</div>
                <div className="w-full h-3 rounded-full bg-white/10 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-[#C9A84C] to-[#00E5FF] transition-all duration-300"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>
            </div>

            {/* Right: Actions */}
            <div className="space-y-3">
              {actions.map((action) => (
                <button key={action.label} className="w-full flex items-center justify-between p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors text-left">
                  <div className="flex items-center gap-3">
                    <action.icon size={18} className="text-[#AAB0C5]" />
                    <span className="text-sm text-[#EDEFF5]">{action.label}</span>
                  </div>
                  <ChevronRight size={14} className="text-[#C9A84C]" />
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-8">
          <a href="/portal" className="btn-gold inline-flex items-center gap-2">
            <BookOpen size={16} />
            Open Student Portal
          </a>
        </div>
      </div>
    </section>
  );
}
