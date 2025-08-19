import Reveal from "@/components/Reveal";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Communication Stacks That Actually Get Used | Gray Birch",
  description: "Selecting communication tools families, staff, and residents will all adopt without creating platform fatigue.",
};

export default function Post() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <Reveal><p className="text-xs tracking-wide uppercase font-semibold text-black/60">Article</p></Reveal>
      <Reveal delay={90}><h1 className="font-title text-4xl md:text-5xl tracking-tight leading-tight">Communication Stacks That Actually Get Used</h1></Reveal>
      <Reveal delay={140}><p className="mt-6 text-lg leading-relaxed max-w-2xl">Selecting tools families, staff, and residents will all adopt — without creating platform fatigue or fragmenting escalation paths.</p></Reveal>
      <Reveal delay={180}><p className="mt-4 text-sm text-black/60">By Ayaan Grover • 6 min read</p></Reveal>

  <Reveal delay={220}><div className="mt-10 aspect-[16/9] relative"><Image src="/images/16.jpg" alt="Simplified communication devices arranged for senior care staff" fill className="object-cover" sizes="100vw" /></div></Reveal>

      <Reveal delay={260}><h2 className="mt-14 font-title text-2xl tracking-tight">Define Core Communication Jobs</h2></Reveal>
      <Reveal delay={300}><p className="mt-4 leading-relaxed">Before layering apps, clarify the non-negotiable jobs: urgent clinical alerts, routine shift handoff, family updates, resident engagement, and administrative notices. Each additional surface that duplicates one of these jobs increases cognitive load.</p></Reveal>

      <Reveal delay={340}><h2 className="mt-12 font-title text-2xl tracking-tight">Principles for Stack Selection</h2></Reveal>
      <Reveal delay={380}><ul className="mt-4 space-y-4 list-disc pl-6 leading-relaxed">
        <li><strong>Lowest Friction Wins:</strong> SMS or voice may outperform feature-rich portals for time-critical updates.</li>
        <li><strong>Single Source of Escalation:</strong> Staff should never wonder which app contains the live alert.</li>
        <li><strong>Role-Aware Delivery:</strong> Right channel, right responsibility — avoid \"notify everyone\" blasts.</li>
        <li><strong>Asynchronous by Default:</strong> Reduce synchronous interruptions for non-urgent items.</li>
        <li><strong>Auditability:</strong> Critical decisions and handoffs should generate a traceable record.</li>
      </ul></Reveal>

      <Reveal delay={420}><h2 className="mt-12 font-title text-2xl tracking-tight">A Minimal Reference Stack</h2></Reveal>
      <Reveal delay={460}><p className="mt-4 leading-relaxed">For many mid-sized communities: an EHR or care platform for documentation, a lightweight secure messaging tool (or managed texting layer), a family broadcast channel, and an escalation integration into nurse call or on-call routing. Everything else should justify its place.</p></Reveal>

  <Reveal delay={500}><div className="mt-12 aspect-[4/3] relative"><Image src="/images/20.jpg" alt="Whiteboard or dashboard showing streamlined communication workflow" fill className="object-cover" sizes="100vw" /></div></Reveal>

      <Reveal delay={540}><h2 className="mt-12 font-title text-2xl tracking-tight">Measuring Adoption Honestly</h2></Reveal>
      <Reveal delay={580}><p className="mt-4 leading-relaxed">Track active weekly contributors per role, response latency to urgent messages, % of families engaged, and time spent re-entering or duplicating information. High feature usage with low outcome improvement is a warning sign.</p></Reveal>

      <Reveal delay={620}><h2 className="mt-12 font-title text-2xl tracking-tight">Decommissioning & Consolidation</h2></Reveal>
      <Reveal delay={660}><p className="mt-4 leading-relaxed">Sunset channels that no longer deliver unique value. Communicate transition timelines clearly and provide a single \"what lives where\" reference for staff.</p></Reveal>

      <Reveal delay={700}><h2 className="mt-12 font-title text-2xl tracking-tight">Sustaining Clarity</h2></Reveal>
      <Reveal delay={740}><p className="mt-4 leading-relaxed">Revisit the stack quarterly against operational pain points. Technology should reduce fragmentation, not rebrand it. The outcome: calmer shifts and families that feel consistently connected.</p></Reveal>

      <Reveal delay={780}><div className="mt-16 border-t border-black/20 pt-8 flex flex-wrap gap-6 items-center justify-between">
        <Link href="/blog" className="link">← Back to Blog</Link>
  <Link href="/contact" className="btn-primary">Support Our Work</Link>
      </div></Reveal>
    </div>
  );
}
