import { useRef, useEffect } from 'react';
import { Sparkles } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function IlmoraReveal() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          end: '+=100%',
          scrub: true,
        },
      });

      tl.fromTo(
        textRef.current,
        { opacity: 0, filter: 'blur(12px)', scale: 0.9 },
        { opacity: 1, filter: 'blur(0px)', scale: 1, duration: 0.5 }
      ).fromTo(
        cardRef.current,
        { opacity: 0, y: 60 },
        { opacity: 1, y: 0, duration: 0.5 },
        0.35
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-40 bg-[#050816] overflow-hidden flex flex-col items-center justify-center">
      <div className="absolute inset-0">
        <img
          src="/assets/hero-sphere.jpg"
          alt=""
          className="w-full h-full object-cover opacity-20"
        />
      </div>

      <div className="relative z-10 text-center">
        <div ref={textRef} className="mb-12">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Sparkles size={20} className="text-[#C9A84C]" />
            <span className="label-sm text-[#C9A84C]">The Solution</span>
          </div>
          <h2
            className="text-[clamp(60px,10vw,140px)] font-bold tracking-tight text-[#EDEFF5]"
            style={{ fontFamily: 'Space Grotesk' }}
          >
            ILMORA.
          </h2>
        </div>

        <div ref={cardRef} className="glass max-w-xl mx-auto p-8 text-left">
          <ul className="space-y-4">
            {[
              'A single dashboard for applications, documents, and tracking.',
              'We coordinate with universities — so you stay focused on life.',
              'From admission to equivalency, transparent pricing.',
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="cyan-dot mt-1.5 shrink-0" />
                <p className="text-[#AAB0C5]">{item}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
