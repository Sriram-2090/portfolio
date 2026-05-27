import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PageTransition from '../components/PageTransition';
import AnimatedSection from '../components/AnimatedSection';
import { steps } from '../data/steps';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../components/ui/card';

export default function HowItWorks() {
  return (
    <PageTransition>
      {/* Header Section */}
      <section className="pt-32 pb-16 px-6 bg-transparent relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <span className="inline-block px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-zinc-400 border border-white/[0.08] bg-white/[0.02] rounded-full mb-4">
              The Journey
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-heading mt-3 mb-5 text-white leading-tight">
              How Lumen. <span className="text-zinc-400">Works</span>
            </h1>
            <p className="text-sm md:text-base text-text-secondary max-w-2xl mx-auto leading-relaxed px-4">
              From a single install to continuous, intelligent monitoring — here's how Lumen.
              turns your phone into a silent guardian for your mental wellbeing.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 px-6 bg-transparent relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Vertical timeline line (desktop) - Glowing Silver Laser Beam */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-white/20 to-transparent shadow-[0_0_10px_rgba(255,255,255,0.1)] -translate-x-1/2" />

            <div className="hidden md:block">
              {steps.map((step, i) => (
                <AnimatedSection key={i} delay={i * 0.15}>
                  <div className={`relative flex flex-col md:flex-row items-center gap-12 mb-20 last:mb-0 ${
                    i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}>
                    {/* Content Card */}
                    <div className={`flex-1 ${i % 2 === 0 ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'}`}>
                      <Card className="hover:border-white/[0.15] hover:shadow-2xl hover:shadow-white/[0.02] transition-all duration-500">
                        <CardHeader className="pt-8 px-8">
                           <span className="text-5xl font-extrabold text-white opacity-20 block tracking-tight leading-none mb-2">{step.number}</span>
                           <CardTitle className="text-xl font-bold text-white mt-1 mb-2 font-sans">{step.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="px-8 pb-8">
                           <CardDescription className="text-text-secondary text-xs leading-relaxed">{step.description}</CardDescription>
                        </CardContent>
                      </Card>
                    </div>

                    {/* Center rotating node - Premium rotating silver cube */}
                    <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 items-center justify-center z-30">
                      <motion.div 
                        animate={{ rotate: 45 }}
                        whileHover={{ scale: 1.15, rotate: 135 }}
                        transition={{ type: "spring", stiffness: 200, damping: 15 }}
                        className="w-8 h-8 bg-black/90 border border-white/20 flex items-center justify-center text-white shadow-[0_0_15px_rgba(255,255,255,0.1)] cursor-pointer"
                      >
                        <div className="scale-75 text-zinc-300">
                          {step.icon}
                        </div>
                      </motion.div>
                    </div>

                    {/* Spacer */}
                    <div className="flex-1 hidden md:block" />
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>

          {/* Mobile Timeline */}
          <div className="md:hidden space-y-8 px-2">
            {steps.map((step, i) => (
              <AnimatedSection key={i} delay={i * 0.12}>
                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 bg-black/80 border border-white/10 flex items-center justify-center text-white flex-shrink-0 rounded-lg">
                      <div className="scale-75">
                        {step.icon}
                      </div>
                    </div>
                    {i < steps.length - 1 && (
                      <div className="w-[1px] flex-1 bg-gradient-to-b from-white/20 to-transparent mt-2" />
                    )}
                  </div>
                  <Card className="flex-1 hover:border-white/[0.12]">
                    <CardHeader className="pb-2 pt-6 px-6">
                       <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest block mb-1">Step {step.number}</span>
                       <CardTitle className="text-lg font-bold text-white font-sans">{step.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="px-6 pb-6">
                       <CardDescription className="text-text-secondary text-xs leading-relaxed">{step.description}</CardDescription>
                    </CardContent>
                  </Card>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Privacy Banner - Transformed to sleek dashboard card */}
      <section className="py-24 px-6 bg-transparent relative z-10">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <div className="relative overflow-hidden rounded-3xl border border-white/[0.06] bg-[#0A0A0C]/40 backdrop-blur-xl p-10 sm:p-16 text-center shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
              {/* Decorative dotted layout */}
              <div className="absolute inset-0 grid-dots opacity-20 pointer-events-none" />
              
              <div className="relative z-10">
                <div className="w-14 h-14 border border-white/15 bg-black/40 flex items-center justify-center rounded-2xl mx-auto mb-6 text-white shadow-[0_0_20px_rgba(255,255,255,0.05)]">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                  </svg>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold font-heading text-white mb-4">
                  Your Data Stays With You
                </h3>
                <p className="text-text-secondary max-w-xl mx-auto leading-relaxed text-sm">
                  Every calculation happens entirely on your device. No data is uploaded to the cloud.
                  No third-party has access. Lumen. is designed so that even we can't see your data.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 pb-40 px-6 bg-transparent relative z-10">
        <AnimatedSection className="text-center">
          <h2 className="text-2xl sm:text-3xl font-bold font-heading text-white mb-4">
            Built for the people who need it most
          </h2>
          <p className="text-text-secondary mb-8 max-w-md mx-auto text-xs sm:text-sm">
            Early detection can change everything. Lumen. makes it passive, personal, and private.
          </p>
          <Link
            to="/team"
            className="inline-block px-8 py-3.5 bg-white text-black font-semibold text-xs rounded-full hover:bg-zinc-200 transition-all duration-300 hover:shadow-[0_0_35px_rgba(255,255,255,0.15)] hover:scale-[1.03] active:scale-95 text-center"
          >
            Meet the Team
          </Link>
        </AnimatedSection>
      </section>
    </PageTransition>
  );
}
