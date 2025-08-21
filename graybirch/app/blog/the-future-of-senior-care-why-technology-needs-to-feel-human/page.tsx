import Reveal from "@/components/Reveal";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "The Future of Senior Care: Why Technology Needs to Feel Human | Gray Birch",
  description: "A look at how empathetic design can transform tech from a burden into a lifeline for residents and caregivers.",
};

export default function FutureHumanArticle() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <Reveal><p className="text-xs tracking-wide uppercase font-semibold text-black/60">Article</p></Reveal>
      <Reveal delay={90}><h1 className="font-title text-4xl md:text-5xl tracking-tight">The Future of Senior Care: Why Technology Needs to Feel Human</h1></Reveal>
      <Reveal delay={140}><p className="mt-6 text-lg leading-relaxed max-w-2xl">A look at how empathetic design can transform tech from a burden into a lifeline for residents and caregivers.</p></Reveal>
      <Reveal delay={180}><p className="mt-4 text-sm text-black/60">7 min read</p></Reveal>

      <Reveal delay={220}><div className="mt-10 aspect-[16/9] relative"><Image src="/images/future-feel-human.jpg" alt="Senior using empathetic tech with caregiver" fill className="object-cover" sizes="100vw" /></div></Reveal>

      <Reveal delay={260}><h2 className="mt-14 font-title text-2xl tracking-tight">1. Principles of Empathetic Design</h2></Reveal>
      <Reveal delay={300}><p className="mt-4 leading-relaxed">Empathetic design centers on understanding a resident’s daily experiences, frustrations, and emotional state. It moves beyond feature checklists, focusing instead on reducing cognitive load, preserving dignity, and fostering genuine moments of connection. Key principles include active listening, co-design with residents, and prioritizing accessibility at every interaction point.</p></Reveal>

      <Reveal delay={340}><h2 className="mt-12 font-title text-2xl tracking-tight">2. Transforming Tech from Burden to Bond</h2></Reveal>
      <Reveal delay={380}><p className="mt-4 leading-relaxed">Well-intentioned devices can feel intrusive when they interrupt routines or demand complex setup. Human-centered interfaces—such as voice prompts that sound warm, minimal visual cues that avoid overwhelm, and adaptive reminders timed to individual preferences—turn devices into supportive partners rather than background noise.</p></Reveal>

      <Reveal delay={420}><h2 className="mt-12 font-title text-2xl tracking-tight">3. Bringing Empathy into Implementation</h2></Reveal>
      <Reveal delay={460}><p className="mt-4 leading-relaxed">Rolling out human-centered tech requires collaboration among designers, staff, and residents. Start with small pilots, gather real-world feedback, and iterate quickly. Provide transparent explanations of what data is collected and why, and ensure residents retain control over personal settings. This collaborative approach builds trust and drives lasting adoption.</p></Reveal>

      <Reveal delay={500}><div className="mt-16 border-t border-black/20 pt-8 flex flex-wrap gap-6 items-center justify-between">
        <Link href="/blog" className="link">← Back to Blog</Link>
        <Link href="/contact" className="btn-primary">Support Our Work</Link>
      </div></Reveal>
    </div>
  );
}
