import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ChaosSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const wordRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        wordRef.current,
        { opacity: 0.2, filter: 'blur(12px)', scale: 0.96 },
        {
          opacity: 1,
          filter: 'blur(0px)',
          scale: 1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
            end: '+=60%',
            scrub: true,
          },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-48 bg-[#050816] overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#121A3A] rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#0A0F2C] rounded-full blur-[100px]" />
      </div>
      <div
        ref={wordRef}
        className="text-[clamp(80px,15vw,200px)] font-bold tracking-[0.2em] text-[#EDEFF5] uppercase"
        style={{ fontFamily: 'Space Grotesk' }}
      >
        Chaos.
      </div>
    </section>
  );
}
