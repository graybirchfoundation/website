import Reveal from "@/components/Reveal";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Designing Human-Centered Fall Detection | Gray Birch",
  description: "A practical framework for evaluating and deploying fall detection that respects dignity while improving response speed.",
};

export default function Post() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <Reveal><p className="text-xs tracking-wide uppercase font-semibold text-black/60">Article</p></Reveal>
      <Reveal delay={90}><h1 className="font-title text-4xl md:text-5xl tracking-tight leading-tight">Designing Human-Centered Fall Detection</h1></Reveal>
      <Reveal delay={140}><p className="mt-6 text-lg leading-relaxed max-w-2xl">How to evaluate sensing systems for accuracy, dignity, and real-world deployment in residential care settings — and avoid the common pitfalls that lead to staff distrust and resident discomfort.</p></Reveal>
  <Reveal delay={180}><p className="mt-4 text-sm text-black/60">7 min read</p></Reveal>

  <Reveal delay={220}><div className="mt-10 aspect-[16/9] relative"><Image src="/images/15.jpg" alt="Discreet fall detection sensor installed in a resident room" fill className="object-cover" sizes="100vw" /></div></Reveal>

      <Reveal delay={260}><h2 className="mt-14 font-title text-2xl tracking-tight">Why Most Fall Detection Fails</h2></Reveal>
      <Reveal delay={300}><p className="mt-4 leading-relaxed">Many systems oversell AI capability, underperform in real-world multi-resident scenarios, or generate alert fatigue that erodes confidence. False positives lead caregivers to mute or ignore alerts; false negatives create liability. The human layer — workflow clarity, escalation paths, and trust — is often an afterthought.</p></Reveal>

      <Reveal delay={340}><h2 className="mt-12 font-title text-2xl tracking-tight">Human-Centered Evaluation Criteria</h2></Reveal>
      <Reveal delay={380}><ul className="mt-4 space-y-4 list-disc pl-6 leading-relaxed">
        <li><strong>Transparency:</strong> Staff should understand at a high level what triggers an alert. Black boxes breed suspicion.</li>
        <li><strong>Graceful Degradation:</strong> How does the system behave with partial coverage, network latency, or device failure?</li>
        <li><strong>Dignity Preservation:</strong> Passive sensing (depth, thermal, RF) often reduces intrusive monitoring — but only if configured with minimal retention.</li>
        <li><strong>Actionability:</strong> Does each alert contain enough context for immediate triage without forcing app hopping?</li>
        <li><strong>Escalation Fit:</strong> Can it map into existing nurse call or messaging flows rather than adding a new silo?</li>
      </ul></Reveal>

      <Reveal delay={420}><h2 className="mt-12 font-title text-2xl tracking-tight">A Lightweight Validation Loop</h2></Reveal>
      <Reveal delay={460}><ol className="mt-4 space-y-4 list-decimal pl-6 leading-relaxed">
        <li><strong>Shadow Phase:</strong> Run passively; compare detected vs. reported incidents.</li>
        <li><strong>Staff Feedback Sprint:</strong> Collect qualitative friction points within 14 days.</li>
        <li><strong>Configuration Adjust:</strong> Tune thresholds, zones, or model sensitivity.</li>
        <li><strong>Live Limited Rollout:</strong> Start with one wing; measure response latency shifts.</li>
        <li><strong>Scale Gate:</strong> Only expand if alert precision &gt;= agreed baseline and staff sentiment is net positive.</li>
      </ol></Reveal>

      <Reveal delay={500}><h2 className="mt-12 font-title text-2xl tracking-tight">What Good Looks Like</h2></Reveal>
      <Reveal delay={540}>
        <p className="mt-4 leading-relaxed">
          The best deployments feel boring: stable coverage, concise alerts, staff describing it as "helpful background automation" rather than a distraction. Residents and families should barely notice its presence, yet operators can surface metrics like time-to-assist improvements.
        </p>
      </Reveal>

  <Reveal delay={580}><div className="mt-12 aspect-[4/3] relative"><Image src="/images/19.jpg" alt="Care team reviewing fall detection alert metrics" fill className="object-cover" sizes="100vw" /></div></Reveal>

      <Reveal delay={620}><h2 className="mt-12 font-title text-2xl tracking-tight">Key Implementation Pitfalls</h2></Reveal>
      <Reveal delay={660}><p className="mt-4 leading-relaxed">Common failure modes include skipping baseline data collection, overfitting to staged demos, ignoring shift-level workflow nuance, and deferring staff training until after alerts start firing. Treat the rollout like a joint operations + technology project, not a vendor handoff.</p></Reveal>

      <Reveal delay={700}><h2 className="mt-12 font-title text-2xl tracking-tight">Looking Ahead</h2></Reveal>
      <Reveal delay={740}><p className="mt-4 leading-relaxed">Sensor fusion, on-edge inference, and privacy-preserving models will further reduce friction. But enduring success relies less on the sophistication of pose estimation and more on respectful integration with human care work.</p></Reveal>

      <Reveal delay={780}><div className="mt-16 border-t border-black/20 pt-8 flex flex-wrap gap-6 items-center justify-between">
        <Link href="/blog" className="link">← Back to Blog</Link>
  <Link href="/contact" className="btn-primary">Support Our Work</Link>
      </div></Reveal>
    </div>
  );
}
