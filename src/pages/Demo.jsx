import { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import AnimatedSection from '../components/AnimatedSection';
import screenshot from '../../images/Screenshot_20260420_010628_Swasthiti.jpg';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../components/ui/card';

const features = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
      </svg>
    ),
    title: 'Passive Data Collection',
    desc: 'Monitors 29 behavioral features across sleep, mobility, social, and usage patterns — all without any user action.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
      </svg>
    ),
    title: 'On-Device Processing',
    desc: 'All analysis runs locally on your phone. Raw behavioral data is never uploaded, transmitted, or shared with anyone.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
    title: 'Personalized Baselines',
    desc: 'Learns what normal looks like for you — not a population average. Your 28-day baseline is uniquely yours.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Early Detection',
    desc: 'Detects sustained behavioral shifts before they become severe — giving people time to seek support on their terms.',
  },
];

function InteractivePhoneMockup() {
  const mockupRef = useRef(null);
  const [hovered, setHovered] = useState(false);

  // Mouse tilt angles
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(x, { stiffness: 100, damping: 15, mass: 0.5 });
  const rotateY = useSpring(y, { stiffness: 100, damping: 15, mass: 0.5 });

  // Gloss glare position
  const glossX = useMotionValue(0);
  const glossY = useMotionValue(0);
  const smoothGlossX = useSpring(glossX, { stiffness: 150, damping: 20 });
  const smoothGlossY = useSpring(glossY, { stiffness: 150, damping: 20 });

  const handleMouseMove = (e) => {
    if (!mockupRef.current) return;
    const rect = mockupRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    // Normalizing tilt (max 15 degrees)
    const tiltX = ((mouseY / height) - 0.5) * -15;
    const tiltY = ((mouseX / width) - 0.5) * 15;

    x.set(tiltX);
    y.set(tiltY);

    // Reflective glare moves in opposite direction
    glossX.set(100 - (mouseX / width) * 100);
    glossY.set(100 - (mouseY / height) * 100);
  };

  const handleMouseEnter = () => setHovered(true);
  const handleMouseLeave = () => {
    setHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <div className="w-full flex justify-center py-6">
      <motion.div
        ref={mockupRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX: rotateX,
          rotateY: rotateY,
          transformStyle: 'preserve-3d',
          perspective: '1200px',
        }}
        className="w-full max-w-sm aspect-[9/18.5] bg-black/40 border border-white/[0.08] p-3 shadow-[0_30px_60px_rgba(0,0,0,0.8)] rounded-[2.5rem] relative cursor-grab active:cursor-grabbing hover:border-white/20 transition-colors duration-500"
      >
        {/* Dynamic Shadow Ring */}
        <div className="absolute inset-2 rounded-[2.2rem] bg-black/80 z-0 pointer-events-none" />

        {/* Screen container */}
        <div 
          style={{ transform: 'translateZ(10px)', transformStyle: 'preserve-3d' }}
          className="w-full h-full rounded-[2rem] overflow-hidden bg-zinc-950 relative border border-white/[0.04] z-10"
        >
          {/* Dynamic Glare Overlay */}
          <motion.div
            className="absolute inset-0 pointer-events-none z-30 transition-opacity duration-300"
            style={{
              background: `linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.01) 40%, transparent 60%)`,
              backgroundPosition: `${smoothGlossX}% ${smoothGlossY}%`,
              opacity: hovered ? 1 : 0.4,
            }}
          />

          {/* Screenshot Content */}
          <img 
            src={screenshot} 
            alt="Lumen. App Screenshot" 
            className="w-full h-full object-cover select-none pointer-events-none"
          />
        </div>
      </motion.div>
    </div>
  );
}

export default function Demo() {
  return (
    <PageTransition>
      {/* Header */}
      <section className="pt-32 pb-16 px-6 bg-transparent relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <span className="inline-block px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-zinc-400 border border-white/[0.08] bg-white/[0.02] rounded-full mb-4">
              Preview
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-heading mt-3 mb-5 text-white leading-tight">
              See Lumen. <span className="text-zinc-400">In Action</span>
            </h1>
            <p className="text-sm md:text-base text-text-secondary max-w-xl mx-auto leading-relaxed px-4">
              A glimpse into the interface and experience of using Lumen.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Phone Mockup Section */}
      <section className="py-8 px-6 bg-transparent relative z-10">
        <div className="max-w-md mx-auto">
          <AnimatedSection>
            <InteractivePhoneMockup />
          </AnimatedSection>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="py-24 px-6 bg-transparent relative z-10">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection className="text-center mb-20">
            <span className="inline-block px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-zinc-400 border border-white/[0.08] bg-white/[0.02] rounded-full mb-4">
              Core Features
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-heading mt-3 text-white">
              What Makes Lumen. Different
            </h2>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, i) => (
              <AnimatedSection key={i} delay={i * 0.12}>
                <Card className="h-full hover:border-white/[0.15] hover:shadow-2xl hover:shadow-white/[0.02] transition-all duration-500">
                  <CardHeader className="pt-8 px-8">
                    <div className="w-12 h-12 bg-black/40 border border-white/10 flex items-center justify-center text-white mb-5 rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.5)]">
                      {feature.icon}
                    </div>
                    <CardTitle className="text-white font-bold text-lg font-sans">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="px-8 pb-8">
                    <CardDescription className="text-text-secondary text-xs leading-relaxed">{feature.desc}</CardDescription>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="py-16 pb-40 px-6 bg-transparent relative z-10">
        <AnimatedSection>
          <Card className="max-w-2xl mx-auto text-center border-white/[0.08] p-10 hover:border-white/[0.15]">
            <div className="absolute inset-0 grid-dots opacity-10 pointer-events-none" />
            <CardHeader className="flex flex-col items-center pt-0">
              <div className="w-14 h-14 border border-white/15 bg-black/40 flex items-center justify-center mb-6 text-white rounded-2xl shadow-[0_4px_12px_rgba(0,0,0,0.5)]">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25l-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25" />
                </svg>
              </div>
              <CardTitle className="text-2xl mb-3 text-white font-bold font-sans">Coming Soon</CardTitle>
            </CardHeader>
            <CardContent className="px-0 pb-0">
              <CardDescription className="text-text-secondary text-xs sm:text-sm leading-relaxed max-w-md mx-auto">
                Lumen. is currently in the research and development phase. We're working
                to bring passive, personalized mental health screening to everyone.
              </CardDescription>
            </CardContent>
          </Card>
        </AnimatedSection>
      </section>
    </PageTransition>
  );
}
