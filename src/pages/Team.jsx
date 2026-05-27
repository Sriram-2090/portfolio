import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import AnimatedSection from '../components/AnimatedSection';
import { teamMembers } from '../data/team';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../components/ui/card';

export default function Team() {
  return (
    <PageTransition>
      {/* Header */}
      <section className="pt-32 pb-16 px-6 bg-transparent relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <span className="inline-block px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-zinc-400 border border-white/[0.08] bg-white/[0.02] rounded-full mb-4">
              The People
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-heading mt-3 mb-5 text-white leading-tight">
              Meet the <span className="text-zinc-400">Team</span>
            </h1>
            <p className="text-sm md:text-base text-text-secondary max-w-2xl mx-auto leading-relaxed px-4">
              A small team with a shared belief: mental health detection should be
              passive, personal, and accessible to everyone.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-16 px-6 bg-transparent relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, i) => (
              <AnimatedSection key={i} delay={i * 0.12}>
                <Card className="text-center h-full hover:border-white/[0.15] hover:shadow-2xl hover:shadow-white/[0.02] transition-all duration-500 group">
                  <CardHeader className="flex flex-col items-center pt-8 px-6 pb-6">
                    <div className="w-16 h-16 bg-black/40 border border-white/10 flex items-center justify-center rounded-2xl mb-5 shadow-[0_4px_12px_rgba(0,0,0,0.5)] group-hover:scale-105 group-hover:border-white/20 transition-all duration-300 select-none">
                      <span className="text-xl font-bold text-white tracking-tight">{member.initials}</span>
                    </div>
                    <CardTitle className="mb-1 text-white font-bold text-lg font-sans">{member.name}</CardTitle>
                    <CardDescription className="text-text-secondary text-xs">{member.role}</CardDescription>
                  </CardHeader>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 px-6 bg-transparent relative z-10 pb-40">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <div className="relative overflow-hidden rounded-3xl border border-white/[0.06] bg-[#0A0A0C]/40 backdrop-blur-xl p-10 sm:p-16 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
              {/* Dot Grid overlay */}
              <div className="absolute inset-0 grid-dots opacity-20 pointer-events-none" />
              
              <div className="relative z-10 text-center">
                <span className="inline-block px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-zinc-400 border border-white/[0.08] bg-white/[0.02] rounded-full mb-6">
                  Our Mission
                </span>
                <p className="text-white text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-sans">
                  We believe that the most meaningful health insights come not from comparing people to populations,
                  but from understanding how each person's own patterns change over time. Lumen. exists to make
                  that understanding possible — silently, privately, and with the respect that every individual deserves.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </PageTransition>
  );
}
