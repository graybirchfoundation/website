import Reveal from "@/components/Reveal";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Building Trust with Residents and Families Around New Tech | Gray Birch",
  description: "A practical playbook for communicating technology changes transparently and respectfully in senior living environments.",
};

export default function Post() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <Reveal><p className="text-xs tracking-wide uppercase font-semibold text-black/60">Article</p></Reveal>
      <Reveal delay={90}><h1 className="font-title text-4xl md:text-5xl tracking-tight leading-tight">Building Trust with Residents and Families Around New Tech</h1></Reveal>
      <Reveal delay={140}><p className="mt-6 text-lg leading-relaxed max-w-2xl">Adoption resilience depends less on sensor sophistication and more on clear, compassionate communication. Here's a trust-first rollout model.</p></Reveal>
      <Reveal delay={180}><p className="mt-4 text-sm text-black/60">By Ayaan Grover • 5 min read</p></Reveal>

  <Reveal delay={220}><div className="mt-10 aspect-[16/9] relative"><Image src="/images/18.jpg" alt="Family discussion with care staff about new technology" fill className="object-cover" sizes="100vw" /></div></Reveal>

      <Reveal delay={260}><h2 className="mt-14 font-title text-2xl tracking-tight">Start with Empathy, Not Features</h2></Reveal>
      <Reveal delay={300}><p className="mt-4 leading-relaxed">Families and residents want reassurance: safety without surveillance, dignity without neglect. Over-indexing on technical jargon can create distance. Lead with human outcomes, then explain the means.</p></Reveal>

      <Reveal delay={340}><h2 className="mt-12 font-title text-2xl tracking-tight">Communication Milestones</h2></Reveal>
      <Reveal delay={380}><ol className="mt-4 space-y-4 list-decimal pl-6 leading-relaxed">
        <li><strong>Intent Notice:</strong> Why we are exploring this technology (problem framing).</li>
        <li><strong>Pilot Brief:</strong> What areas, what data, opt-out paths, privacy safeguards.</li>
        <li><strong>Mid-Pilot Update:</strong> Early learnings and adjustments made.</li>
        <li><strong>Outcome Summary:</strong> Concrete metrics (response time deltas, incident reductions).</li>
        <li><strong>Ongoing Transparency:</strong> Where to raise concerns and how governance works.</li>
      </ol></Reveal>

  <Reveal delay={420}><div className="mt-12 aspect-[4/3] relative"><Image src="/images/22.jpg" alt="Care team workshop building trust communication plan" fill className="object-cover" sizes="100vw" /></div></Reveal>

      <Reveal delay={460}><h2 className="mt-12 font-title text-2xl tracking-tight">Message Architecture</h2></Reveal>
      <Reveal delay={500}><p className="mt-4 leading-relaxed">Craft a consistent short script: <em>"We’re using discreet sensing to help staff respond faster if someone needs help — without recording identifiable video."</em> Alignment across staff prevents mixed signals.</p></Reveal>

      <Reveal delay={540}><h2 className="mt-12 font-title text-2xl tracking-tight">Handling Concerns</h2></Reveal>
      <Reveal delay={580}><p className="mt-4 leading-relaxed">Validate emotion first (\"I understand why privacy matters to you\"). Provide concrete guardrails: no resale, minimal retention, access controls. Offer an escalation or opt-out path where feasible.</p></Reveal>

      <Reveal delay={620}><h2 className="mt-12 font-title text-2xl tracking-tight">Embedding Ongoing Trust</h2></Reveal>
      <Reveal delay={660}><p className="mt-4 leading-relaxed">Maintain a living FAQ, publish periodic anonymized outcome snapshots, and invite resident council feedback. Trust is maintained via rhythm, not one-time presentations.</p></Reveal>

      <Reveal delay={700}><h2 className="mt-12 font-title text-2xl tracking-tight">The Payoff</h2></Reveal>
      <Reveal delay={740}><p className="mt-4 leading-relaxed">When trust is proactive, technology conversations shift from defensive to collaborative. Families become advocates, and staff adoption accelerates.</p></Reveal>

      <Reveal delay={780}><div className="mt-16 border-t border-black/20 pt-8 flex flex-wrap gap-6 items-center justify-between">
        <Link href="/blog" className="link">← Back to Blog</Link>
  <Link href="/contact" className="btn-primary">Support Our Work</Link>
      </div></Reveal>
    </div>
  );
}
