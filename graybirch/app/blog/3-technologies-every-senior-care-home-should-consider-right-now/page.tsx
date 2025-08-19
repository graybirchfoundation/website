import Reveal from "@/components/Reveal";
import Image from "next/image";

export const metadata = {
  title: "3 Technologies Every Senior Care Home Should Consider Right Now | Gray Birch Foundation",
  description: "Practical, human-centered tech that improves safety, communication, and engagement in residential senior care environments.",
};

export default function Article() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <Reveal><h1 className="font-title text-4xl md:text-5xl tracking-tight">3 Technologies Every Senior Care Home Should Consider Right Now</h1></Reveal>
      <Reveal delay={120}><p className="mt-4 text-sm uppercase tracking-wide">By Ayaan Grover</p></Reveal>
      <Reveal delay={200}>
        <div className="mt-8 border-t border-black/20 pt-6">
          <div className="aspect-[16/9] w-full relative"><Image src="/images/14.jpg" alt="Technology enabling safer senior care" fill className="object-cover" sizes="100vw" /></div>
          <p className="mt-6 leading-relaxed">Technology in senior care doesn’t have to be flashy to be transformative. The most impactful tools share three traits: they reduce friction for staff, they preserve resident dignity, and they deliver reliable signals or moments of connection without demanding constant configuration. Here are three categories worth prioritizing now.</p>
        </div>
      </Reveal>

      <Reveal delay={260}>
        <section className="mt-12 border-t border-black/20 pt-6">
          <h2 className="font-title text-2xl tracking-tight">1. Ambient Fall Detection</h2>
          <p className="mt-4 leading-relaxed">Falls remain one of the most under-reported and under-instrumented risks in residential care. Modern ambient fall detection systems use a blend of depth sensing, radar, thermal, or computer vision models running locally to recognize fall events without requiring residents to wear pendants or remember to charge devices. Prioritize solutions that: (a) process data at the edge for privacy, (b) provide confidence scores, not just binary alerts, and (c) integrate with existing nurse-call or messaging systems.</p>
          <p className="mt-4 leading-relaxed">Key evaluation metrics: false positive rate during nighttime shifts, average alert latency, and staff acknowledgment workflow friction.</p>
        </section>
      </Reveal>

      <Reveal delay={320}>
        <section className="mt-12 border-t border-black/20 pt-6">
          <h2 className="font-title text-2xl tracking-tight">2. Voice-First Communication Tools</h2>
          <p className="mt-4 leading-relaxed">Voice assistants and simplified call systems bridge isolation gaps when residents struggle with touch interfaces. The winning deployments are tightly scoped: pre-configured contacts, limited commands, and clear privacy explanations. Focus on enabling outbound connection (residents reaching family) and inbound structured updates (family sending audio check-ins) rather than broad smart-home gimmicks.</p>
          <p className="mt-4 leading-relaxed">Look for: offline fallback modes, granular permission settings, and accessibility features (large print pairing cards, auditory confirmations).</p>
        </section>
      </Reveal>

      <Reveal delay={380}>
        <section className="mt-12 border-t border-black/20 pt-6">
          <h2 className="font-title text-2xl tracking-tight">3. Engagement & Cognitive Stimulation Platforms</h2>
          <p className="mt-4 leading-relaxed">Not every engagement platform delivers real value. Favor tools that combine passive personalization (adapting content or interaction difficulty automatically) with collaborative modes that let staff or family participate. High-impact examples include tailored reminiscence sessions, guided group activities, and adaptive brain-health modules that output simple progress summaries for care plans.</p>
          <p className="mt-4 leading-relaxed">Evaluate: resident repeat usage after week two, staff setup time per session, and qualitative mood indicators logged post-activity.</p>
        </section>
      </Reveal>

      <Reveal delay={440}>
        <section className="mt-12 border-t border-black/20 pt-6">
          <h2 className="font-title text-2xl tracking-tight">Implementation Principles</h2>
          <ul className="mt-4 grid gap-3">
            <li><strong>Pilot Narrowly:</strong> Start with one hallway or resident cohort before scaling.</li>
            <li><strong>Integrate Alerts:</strong> Avoid dashboard sprawl—pipe events into channels staff already monitor.</li>
            <li><strong>Measure Baselines:</strong> Collect pre-deployment fall, engagement, and communication metrics.</li>
            <li><strong>Champion Ownership:</strong> Assign a staff lead who receives weekly vendor check-ins.</li>
            <li><strong>Center Dignity:</strong> Ensure residents understand what is monitored and can opt out.</li>
          </ul>
        </section>
      </Reveal>

      <Reveal delay={500}>
        <section className="mt-12 border-t border-black/20 pt-6">
          <h2 className="font-title text-2xl tracking-tight">Looking Ahead</h2>
          <p className="mt-4 leading-relaxed">Senior care technology is shifting from isolated gadgets to integrated safety and connection layers. Homes that adopt pragmatic, human-centered tools now will build the operational muscle to evaluate AI-driven innovations responsibly as they mature. Start small, document outcomes, and iterate with empathy.</p>
        </section>
      </Reveal>
    </div>
  );
}
