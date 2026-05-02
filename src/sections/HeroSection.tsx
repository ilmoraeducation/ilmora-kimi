import { useRef, useMemo, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, Float } from '@react-three/drei';
import * as THREE from 'three';

function ParticleField({ count = 200 }) {
  const mesh = useRef<THREE.Points>(null);
  const particles = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 15;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 15;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return positions;
  }, [count]);

  useFrame((_, delta) => {
    if (mesh.current) {
      mesh.current.rotation.y += delta * 0.02;
      mesh.current.rotation.x += delta * 0.01;
    }
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[particles, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.03} color="#C9A84C" transparent opacity={0.6} sizeAttenuation />
    </points>
  );
}

function EnergyOrb() {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.003;
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.05;
      const scale = hovered ? 1.15 : 1 + Math.sin(state.clock.elapsedTime * 0.5) * 0.02;
      meshRef.current.scale.setScalar(scale);
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
      <mesh
        ref={meshRef}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <sphereGeometry args={[1.8, 64, 64]} />
        <meshStandardMaterial
          color="#0e1a3a"
          emissive="#C9A84C"
          emissiveIntensity={0.15}
          metalness={0.8}
          roughness={0.2}
          transparent
          opacity={0.9}
        />
      </mesh>
      <mesh>
        <sphereGeometry args={[1.82, 64, 64]} />
        <meshBasicMaterial
          color="#00E5FF"
          transparent
          opacity={0.08}
          side={THREE.BackSide}
        />
      </mesh>
      <pointLight position={[0, 0, 0]} color="#C9A84C" intensity={2} distance={8} />
      <pointLight position={[2, 2, 2]} color="#00E5FF" intensity={1} distance={6} />
    </Float>
  );
}

function OrbitingParticles() {
  const groupRef = useRef<THREE.Group>(null);
  const particles = useMemo(() => {
    const items = [];
    for (let i = 0; i < 30; i++) {
      const angle = (i / 30) * Math.PI * 2;
      const radius = 2.8 + Math.random() * 0.5;
      items.push({ angle, radius, speed: 0.2 + Math.random() * 0.3, yOffset: (Math.random() - 0.5) * 0.5 });
    }
    return items;
  }, []);

  const meshRefs = useRef<(THREE.Mesh | null)[]>([]);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    particles.forEach((p, i) => {
      const mesh = meshRefs.current[i];
      if (mesh) {
        const a = p.angle + t * p.speed;
        mesh.position.x = Math.cos(a) * p.radius;
        mesh.position.z = Math.sin(a) * p.radius;
        mesh.position.y = p.yOffset + Math.sin(t * 0.5 + i) * 0.15;
      }
    });
  });

  return (
    <group ref={groupRef}>
      {particles.map((_, i) => (
        <mesh key={i} ref={(el) => { meshRefs.current[i] = el; }}>
          <sphereGeometry args={[0.04, 8, 8]} />
          <meshBasicMaterial color={i % 3 === 0 ? '#00E5FF' : '#C9A84C'} transparent opacity={0.7} />
        </mesh>
      ))}
    </group>
  );
}

function MirrorFloor() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -3, 0]} receiveShadow>
      <planeGeometry args={[30, 30]} />
      <meshStandardMaterial
        color="#0A0F2C"
        metalness={0.9}
        roughness={0.1}
        transparent
        opacity={0.6}
      />
    </mesh>
  );
}

export default function HeroSection() {
  const [sublineIndex, setSublineIndex] = useState(0);
  const sublines = [
    { text: 'Admissions', style: 'fade-up' },
    { text: 'Documentation', style: 'slide-right' },
    { text: 'UAE Equivalency', style: 'cyan-glow' },
    { text: 'Fully managed end-to-end', style: 'blur-sharp' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setSublineIndex((prev) => (prev + 1) % sublines.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#050816]">
      {/* Three.js Canvas */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0.6, 5.5], fov: 50 }} gl={{ antialias: true, alpha: true }}>
          <ambientLight intensity={0.3} color="#1a2240" />
          <directionalLight position={[3, 4, 5]} intensity={1.5} color="#ffffff" />
          <pointLight position={[-3, 2, 3]} intensity={0.8} color="#00E5FF" />
          <pointLight position={[-2, 5, -4]} intensity={1} color="#C9A84C" />
          <EnergyOrb />
          <OrbitingParticles />
          <ParticleField count={300} />
          <MirrorFloor />
          <Environment preset="night" />
        </Canvas>
      </div>

      {/* Content overlay */}
      <div className="relative z-10 w-full section-padding pt-32 pb-20">
        <div className="max-w-6xl mx-auto">
          {/* Subject chips */}
          <div className="flex flex-wrap gap-2 mb-8">
            {['MBA', 'MA', 'MSW', 'B.ED', 'M.ED', 'BA', 'MCOM'].map((chip) => (
              <span key={chip} className="px-4 py-1.5 rounded-full text-xs font-medium bg-white/5 border border-white/10 text-[#AAB0C5] backdrop-blur-sm">
                {chip}
              </span>
            ))}
          </div>

          {/* Main headline */}
          <h1 className="headline-xl mb-6 text-[#EDEFF5]">
            Get Your Degree.<br />
            <span className="text-gradient-gold">We Handle the Rest.</span>
          </h1>

          {/* Animated subline */}
          <div className="h-12 mb-8 overflow-hidden">
            {sublines.map((line, i) => (
              <p
                key={i}
                className={`text-xl md:text-2xl font-medium transition-all duration-700 ${
                  i === sublineIndex
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8 absolute'
                } ${
                  line.style === 'cyan-glow' ? 'text-[#00E5FF]' : 'text-[#AAB0C5]'
                }`}
                style={{
                  textShadow: line.style === 'cyan-glow' ? '0 0 20px rgba(0,229,255,0.5)' : 'none',
                }}
              >
                {line.text}
              </p>
            ))}
          </div>

          {/* Gold badge label */}
          <div className="flex items-center gap-3 mb-10">
            <span className="gold-dot" />
            <span className="label-sm text-[#C9A84C]">Admissions. Documentation. UAE Equivalency — managed end-to-end.</span>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 mb-6">
            <a href="https://wa.me/971529682123" target="_blank" rel="noopener noreferrer" className="btn-gold">
              Start Your Application
            </a>
            <a href="https://wa.me/971529682123" target="_blank" rel="noopener noreferrer" className="btn-outline">
              Talk to an Advisor (WhatsApp)
            </a>
          </div>

          {/* Trust metric */}
          <div className="glass inline-flex items-center gap-4 px-6 py-3 mt-4">
            <div className="relative w-12 h-12">
              <svg className="w-12 h-12 -rotate-90" viewBox="0 0 48 48">
                <circle cx="24" cy="24" r="20" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="3" />
                <circle cx="24" cy="24" r="20" fill="none" stroke="#C9A84C" strokeWidth="3" strokeDasharray="100 25" strokeLinecap="round" />
              </svg>
              <span className="absolute inset-0 flex items-center justify-center text-xs font-bold text-[#C9A84C]">93%</span>
            </div>
            <div>
              <p className="text-sm font-semibold text-[#EDEFF5]">Admissions Management</p>
              <p className="text-xs text-[#AAB0C5]">2,480+ Students placed</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
