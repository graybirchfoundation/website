import Reveal from "@/components/Reveal";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Closing the Gap: How Technology Strengthens the Family–Care Community Connection | Gray Birch",
  description: "Highlighting tools that keep families updated, engaged, and reassured about their loved one’s well-being.",
};

export default function FamilyConnectionArticle() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <Reveal><p className="text-xs tracking-wide uppercase font-semibold text-black/60">Article</p></Reveal>
      <Reveal delay={90}><h1 className="font-title text-4xl md:text-5xl tracking-tight">Closing the Gap: How Technology Strengthens the Family–Care Community Connection</h1></Reveal>
      <Reveal delay={140}><p className="mt-6 text-lg leading-relaxed max-w-2xl">Highlighting tools that keep families updated, engaged, and reassured about their loved one’s well-being.</p></Reveal>
      <Reveal delay={180}><p className="mt-4 text-sm text-black/60">7 min read</p></Reveal>

      <Reveal delay={220}><div className="mt-10 aspect-[16/9] relative"><Image src="/images/family-care.jpg" alt="Family viewing care updates on tablet" fill className="object-cover" sizes="100vw" /></div></Reveal>

      <Reveal delay={260}><h2 className="mt-14 font-title text-2xl tracking-tight">1. Real-Time Updates and Notifications</h2></Reveal>
      <Reveal delay={300}><p className="mt-4 leading-relaxed">Systems that push timely notifications—whether a medication reminder, a wellness check summary, or a mood update—help families stay informed without constant back-and-forth. Customizable digests and alert thresholds ensure messages remain meaningful, not overwhelming.</p></Reveal>

      <Reveal delay={340}><h2 className="mt-12 font-title text-2xl tracking-tight">2. Virtual Visits and Secure Messaging</h2></Reveal>
      <Reveal delay={380}><p className="mt-4 leading-relaxed">Beyond scheduled video calls, secure messaging platforms enable asynchronous photo sharing, voice notes, and short video clips. This flexibility allows families to connect on their own schedules while maintaining privacy and data security standards.</p></Reveal>

      <Reveal delay={420}><h2 className="mt-12 font-title text-2xl tracking-tight">3. Transparent Care Dashboards</h2></Reveal>
      <Reveal delay={460}><p className="mt-4 leading-relaxed">Family-facing dashboards that surface activity logs, care plan milestones, and environmental metrics (like room temperature or air quality) foster trust through transparency. Integrations with EHRs and nurse call systems can automate status updates, reducing manual reporting burden on staff.</p></Reveal>

      <Reveal delay={500}><div className="mt-16 border-t border-black/20 pt-8 flex flex-wrap gap-6 items-center justify-between">
        <Link href="/blog" className="link">← Back to Blog</Link>
        <Link href="/contact" className="btn-primary">Support Our Work</Link>
      </div></Reveal>
    </div>
  );
}
