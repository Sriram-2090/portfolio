import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PageTransition from '../components/PageTransition';
import AnimatedSection from '../components/AnimatedSection';
import { stats } from '../data/stats';
import { LampContainer } from '../components/ui/lamp';
import { BentoGrid, BentoGridItem } from '../components/ui/bento-grid';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../components/ui/card';
import { Activity, Shield, Cpu, Target } from 'lucide-react';
import { ThreeDBaseline, ThreeDPassiveCollection, ThreeDPrivateProcessing } from '../components/ui/ThreeDIcons';

function CountUp({ target, suffix, duration = 2.5 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting && !started) setStarted(true); },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    let frame;
    const start = performance.now();
    const step = (now) => {
      const progress = Math.min((now - start) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 4); // Smoother quartic easing
      setCount(Math.round(eased * target));
      if (progress < 1) frame = requestAnimationFrame(step);
    };
    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [started, target, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {count}{suffix}
    </span>
  );
}

export default function Home() {
  return (
    <PageTransition>
      {/* Hero with Volumetric Lamp Effect */}
      <LampContainer>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/[0.08] bg-white/[0.03] backdrop-blur-md mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
          <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-400">Research Beta Available</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0.3, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.9,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="mt-4 bg-gradient-to-b from-white via-white to-zinc-500 py-4 bg-clip-text text-center text-5xl font-bold tracking-tight text-transparent md:text-8xl font-heading"
        >
          Lumen.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="text-text-secondary text-sm md:text-lg max-w-xl text-center mt-4 mb-10 leading-relaxed font-sans px-4"
        >
          Lumen. silently learns your personal behavioral baseline and monitors for sustained changes
          that could signal early mental health risks — entirely on-device, entirely private.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row gap-4 justify-center mt-2 px-6"
        >
          <Link
            to="/how-it-works"
            className="px-8 py-3.5 bg-white text-black font-semibold text-xs rounded-full hover:bg-zinc-200 transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.15)] hover:scale-[1.03] active:scale-95 text-center"
          >
            See How It Works
          </Link>
          <Link
            to="/demo"
            className="px-8 py-3.5 border border-white/[0.12] text-white font-semibold text-xs rounded-full hover:bg-white/[0.05] transition-all duration-300 hover:scale-[1.03] active:scale-95 text-center backdrop-blur-sm"
          >
            View Demo
          </Link>
        </motion.div>
      </LampContainer>

      {/* Problem Section */}
      <section className="py-24 sm:py-32 px-6 bg-transparent relative z-10 bg-black/10 backdrop-blur-sm">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection className="text-center mb-20">
            <span className="inline-block px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-zinc-400 border border-white/[0.08] bg-white/[0.02] rounded-full mb-4">
              The Problem
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading mt-2 mb-4 text-white">
              The Silent Crisis
            </h2>
            <p className="text-text-secondary max-w-xl mx-auto text-sm md:text-base leading-relaxed">
              Mental health conditions are the leading cause of disability worldwide. The vast majority go
              undetected until symptoms become severe.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                stat: '970M+',
                title: 'People Affected',
                desc: 'Mental health disorders affect nearly 1 billion people globally, with depression and anxiety leading the count.',
              },
              {
                stat: '75%+',
                title: 'Never Treated',
                desc: 'In low and middle-income countries, over 75% of people with mental health conditions receive no treatment at all.',
              },
              {
                stat: 'Too Late',
                title: 'Late Detection',
                desc: 'Most individuals don\'t recognize their own behavioral changes as clinically significant until conditions have progressed.',
              },
            ].map((card, i) => (
              <AnimatedSection key={i} delay={i * 0.15}>
                <Card className="h-full group hover:border-white/[0.15]">
                  <CardHeader className="pt-8 px-8">
                    <div className="text-4xl font-extrabold text-white mb-4 tracking-tight drop-shadow-[0_0_15px_rgba(255,255,255,0.15)] group-hover:scale-105 transition-transform duration-500 w-fit">{card.stat}</div>
                    <CardTitle className="text-white text-xl font-bold font-sans">{card.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="px-8 pb-8">
                    <CardDescription className="text-text-secondary text-xs leading-relaxed">{card.desc}</CardDescription>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Solution - Bento Grid */}
      <section className="py-24 sm:py-32 px-6 bg-transparent relative z-10">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection className="text-center mb-20">
            <span className="inline-block px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-zinc-400 border border-white/[0.08] bg-white/[0.02] rounded-full mb-4">
              Our Approach
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading mt-2 mb-4 text-white">
              A New Paradigm
            </h2>
            <p className="text-text-secondary max-w-xl mx-auto text-sm md:text-base leading-relaxed">
              Instead of comparing you to everyone else, Lumen. compares you to yourself.
            </p>
          </AnimatedSection>

          <BentoGrid>
            <BentoGridItem
              title="Personalized Baseline"
              description="Lumen. builds a unique behavioral baseline for each person — learning what normal looks like for you, not the population."
              header={<ThreeDBaseline />}
              className="md:col-span-2"
            />
            <BentoGridItem
              title="Passive Collection"
              description="No mood logs. No daily check-ins. No interruptions. Silently collects data through sensors."
              header={<ThreeDPassiveCollection />}
              className="md:col-span-1"
            />
            <BentoGridItem
              title="Private Processing"
              description="All processing happens on your device. Raw behavioral data never leaves your phone. No cloud. No third-party access."
              header={<ThreeDPrivateProcessing />}
              className="md:col-span-3"
            />
          </BentoGrid>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 sm:py-32 px-6 bg-transparent relative z-10 pb-40">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection className="text-center mb-20">
            <span className="inline-block px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-zinc-400 border border-white/[0.08] bg-white/[0.02] rounded-full mb-4">
              By The Numbers
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading mt-2 text-white">
              The Scale of Impact
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {stats.map((stat, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <Card className="text-center h-full flex flex-col justify-center py-8 px-4 hover:border-white/[0.15]">
                  <span className="text-3xl sm:text-4xl font-extrabold text-white block mb-2 tracking-tight drop-shadow-[0_0_10px_rgba(255,255,255,0.1)]">
                    <CountUp target={stat.value} suffix={stat.suffix} />
                  </span>
                  <span className="text-[10px] text-text-secondary font-medium uppercase tracking-wider leading-relaxed px-2">{stat.label}</span>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
