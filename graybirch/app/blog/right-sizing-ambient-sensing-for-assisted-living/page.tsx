import Reveal from "@/components/Reveal";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Right-Sizing Ambient Sensing for Assisted Living | Gray Birch",
  description: "A pragmatic approach to deploying ambient sensing (RF, radar, thermal, depth) without over-engineering or overwhelming staff.",
};

export default function Post() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <Reveal><p className="text-xs tracking-wide uppercase font-semibold text-black/60">Article</p></Reveal>
      <Reveal delay={90}><h1 className="font-title text-4xl md:text-5xl tracking-tight leading-tight">Right-Sizing Ambient Sensing for Assisted Living</h1></Reveal>
      <Reveal delay={140}><p className="mt-6 text-lg leading-relaxed max-w-2xl">Ambient sensing promises proactive safety — but mis-scoping leads to bloated pilots, privacy concerns, and stalled adoption. Here's how to scope intentionally.</p></Reveal>
      <Reveal delay={180}><p className="mt-4 text-sm text-black/60">By Ayaan Grover • 8 min read</p></Reveal>

  <Reveal delay={220}><div className="mt-10 aspect-[16/9] relative"><Image src="/images/17.jpg" alt="Ambient sensing devices discretely installed in assisted living hallway" fill className="object-cover" sizes="100vw" /></div></Reveal>

      <Reveal delay={260}><h2 className="mt-14 font-title text-2xl tracking-tight">Clarify the Primary Outcome</h2></Reveal>
      <Reveal delay={300}><p className="mt-4 leading-relaxed">Fall detection? Night wandering? Respiratory trend exceptions? Pick one. Multi-objective deployments fracture focus and dilute evaluation metrics. A single, measurable outcome accelerates internal alignment.</p></Reveal>

      <Reveal delay={340}><h2 className="mt-12 font-title text-2xl tracking-tight">Match Modality to Environment</h2></Reveal>
      <Reveal delay={380}><ul className="mt-4 space-y-4 list-disc pl-6 leading-relaxed">
        <li><strong>Depth / Thermal:</strong> Strong for motion zoning; consider lighting and heat sources.</li>
        <li><strong>RF / Radar:</strong> Useful for through-obstruction monitoring but demands RF environment mapping.</li>
        <li><strong>Acoustic:</strong> Lightweight adjunct for threshold-based anomalies — but noisy floors degrade signal.</li>
        <li><strong>Hybrid:</strong> Fusion can improve recall but increases maintenance surface.</li>
      </ul></Reveal>

      <Reveal delay={420}><h2 className="mt-12 font-title text-2xl tracking-tight">Pilot Design Essentials</h2></Reveal>
      <Reveal delay={460}><ol className="mt-4 space-y-4 list-decimal pl-6 leading-relaxed">
        <li>Baseline incident & response data collection (14–30 days).</li>
        <li>Controlled deployment to select unit types (studio vs. shared).</li>
        <li>Quantitative alert precision tracking (TP / FP / FN).</li>
        <li>Qualitative staff trust check-ins weekly.</li>
        <li>Privacy perception survey for residents/families.</li>
      </ol></Reveal>

  <Reveal delay={500}><div className="mt-12 aspect-[4/3] relative"><Image src="/images/21.jpg" alt="Team analyzing pilot data charts for ambient sensing deployment" fill className="object-cover" sizes="100vw" /></div></Reveal>

      <Reveal delay={540}><h2 className="mt-12 font-title text-2xl tracking-tight">Cost & Operational Modeling</h2></Reveal>
      <Reveal delay={580}><p className="mt-4 leading-relaxed">Look beyond hardware. Include installation labor, network resilience work, staff training, failure response playbooks, and decommissioning processes. A cheaper sensor with costly operational drag isn't cheaper.</p></Reveal>

      <Reveal delay={620}><h2 className="mt-12 font-title text-2xl tracking-tight">Scaling Without Drift</h2></Reveal>
      <Reveal delay={660}><p className="mt-4 leading-relaxed">Codify acceptance criteria before expansion. Capture configuration defaults as code or profiles to avoid site-by-site divergence. Maintain a living runbook for incident categories and real alert exemplars.</p></Reveal>

      <Reveal delay={700}><h2 className="mt-12 font-title text-2xl tracking-tight">Responsible Data Boundaries</h2></Reveal>
      <Reveal delay={740}><p className="mt-4 leading-relaxed">Minimize retention, avoid repurposing behavioral data for unrelated analytics without explicit consent, and ensure local processing where feasible. Ethical clarity strengthens long-term adoption.</p></Reveal>

      <Reveal delay={780}><h2 className="mt-12 font-title text-2xl tracking-tight">Outcome Over Optics</h2></Reveal>
      <Reveal delay={820}><p className="mt-4 leading-relaxed">Success is not a flashy dashboard — it's documented improvement in response times, reduced unwitnessed events, and staff describing the system as invisible but supportive.</p></Reveal>

      <Reveal delay={860}><div className="mt-16 border-t border-black/20 pt-8 flex flex-wrap gap-6 items-center justify-between">
        <Link href="/blog" className="link">← Back to Blog</Link>
  <Link href="/contact" className="btn-primary">Support Our Work</Link>
      </div></Reveal>
    </div>
  );
}
