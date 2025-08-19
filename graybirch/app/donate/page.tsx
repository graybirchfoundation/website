import Reveal from "@/components/Reveal";
import Link from "next/link";
import Image from "next/image";

export default function DonatePage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <Reveal>
        <h1 className="font-title text-4xl md:text-5xl tracking-tight">Donate</h1>
      </Reveal>

      <Reveal delay={120}>
        <div className="mt-6 max-w-3xl leading-relaxed">
          <h2 className="font-title text-2xl tracking-tight">Help Bring Life-Saving Technology to Senior Care</h2>
          <div className="mt-4 aspect-[16/9] relative corner-frame frame-gap">
            <Image src="/images/12.jpg" alt="Care staff assisting a resident with new safety technology" fill className="object-cover" sizes="100vw" />
          </div>
          <p className="mt-3">
            Every dollar you give brings modern, practical technology into places where it’s needed most — assisted living centers, care homes, and community support programs. From fall detection to family connection tools, your donation helps keep seniors safe, supported, and heard.
          </p>
        </div>
      </Reveal>

      {/* Your Impact */}
      <Reveal delay={200}>
        <div className="mt-10 border-t border-black/20 pt-6">
          <h3 className="font-title text-2xl tracking-tight">Your Impact</h3>
          <ul className="mt-4 grid gap-3">
            <li>$25 → installs an emergency call button in one resident’s room</li>
            <li>$50 → sets up a video call system so a senior can talk with loved ones</li>
            <li>$100 → provides training for a full shift of care staff on new safety tech</li>
            <li>$250 → helps fund an entire alert system in a small care home</li>
          </ul>
          <blockquote className="mt-6 border-l-2 border-[#383838] pl-4 leading-relaxed">
            “I cannot put my finger on it but everything changed for me after that.”<br />
            <span className="text-sm opacity-80">Deborah was able to connect with family and the outside world via a smart tablet provided by the facility, which helped alleviate her severe anxiety and improve her quality of life.</span>
          </blockquote>
        </div>
      </Reveal>

      {/* Where Your Money Goes */}
      <Reveal delay={260}>
        <div className="mt-12 border-t border-black/20 pt-6">
          <h3 className="font-title text-2xl tracking-tight">Where Your Money Goes</h3>
          <ul className="mt-4 grid gap-3">
            <li>85%+ goes to tools, setup, and staff support</li>
            <li>No commissions or markups — we recommend based on performance, not partnerships</li>
            <li>Regular updates and case studies let you see where your support goes</li>
          </ul>
        </div>
      </Reveal>

      {/* Go Further */}
      <Reveal delay={380}>
        <div className="mt-12 border-t border-black/20 pt-6">
          <h3 className="font-title text-2xl tracking-tight">Want to Go Further?</h3>
          <div className="mt-4 aspect-[16/9] relative corner-frame frame-gap">
            <Image src="/images/13.jpg" alt="Volunteer showing technology setup to a small senior group" fill className="object-cover" sizes="100vw" />
          </div>
          <ul className="mt-4 grid gap-2">
            <li>Sponsor a facility – Fund a full rollout for one location</li>
            <li>Volunteer your time or expertise – Engineers, designers, advocates welcome</li>
            <li>Start a community fundraiser – We’ll help you get started</li>
          </ul>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link href="/contact" className="btn">Contact Us</Link>
          </div>
        </div>
      </Reveal>

      {/* Thank You */}
      <Reveal delay={440}>
        <div className="mt-12 border-t border-black/20 pt-6">
          <h3 className="font-title text-2xl tracking-tight">Thank You</h3>
          <p className="mt-3 leading-relaxed">
            Your support helps protect lives. It gives care teams tools they’ve never had before. And it brings families closer together, one call, one sensor, one home at a time.
          </p>
        </div>
      </Reveal>

      <div className="mt-8 flex flex-wrap gap-4">
        <button className="btn-primary">Donate Now</button>
      </div>
    </div>
  );
}
