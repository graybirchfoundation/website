import Reveal from "@/components/Reveal";
import Link from "next/link";
import Image from "next/image";

export default function WhatWeDoPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <Reveal>
        <h1 className="font-title text-4xl md:text-5xl tracking-tight">What We Do</h1>
      </Reveal>

      <Reveal delay={120}>
        <p className="mt-4 max-w-3xl leading-relaxed">
          At Gray Birch, we make sure senior care organizations have access to the tech that helps most — and that they know how to use it. We focus on three core areas that directly improve safety, dignity, and connection in elder care.
        </p>
      </Reveal>

      {/* Focus Areas */}
      <Reveal delay={180}>
        <h2 className="font-title text-2xl mt-10 tracking-tight">Helping Seniors</h2>
        <div className="mt-6 grid gap-14 md:grid-cols-3">
          <div className="border-t border-black/20 pt-6">
            <h3 className="font-title text-2xl tracking-tight">Communication</h3>
            <div className="mt-4 aspect-[4/3] relative corner-frame corner-frame-tight frame-gap-small">
              <Image src="/images/9.jpg" alt="Resident speaking with family on a video call device" fill className="object-cover" sizes="(min-width:768px) 20vw, 100vw" />
            </div>
            <p className="mt-3 leading-relaxed">
              We help care communities choose and access simple, accessible tools like video calling systems and voice assistants, enabling seniors to stay connected with loved ones and caregivers.
            </p>
          </div>
          <div className="border-t border-black/20 pt-6">
            <h3 className="font-title text-2xl tracking-tight">Fall Detection/Prevention</h3>
            <div className="mt-4 aspect-[4/3] relative corner-frame corner-frame-tight frame-gap-small">
              <Image src="/images/10.jpg" alt="Ceiling-mounted fall detection or radar sensor in a resident room" fill className="object-cover" sizes="(min-width:768px) 20vw, 100vw" />
            </div>
            <p className="mt-3 leading-relaxed">
              We test and vet fall detection tools, and then work with senior care providers to adopt the best solutions affordably.
            </p>
          </div>
          <div className="border-t border-black/20 pt-6">
            <h3 className="font-title text-2xl tracking-tight">Engagement/Wellbeing</h3>
            <div className="mt-4 aspect-[4/3] relative corner-frame corner-frame-tight frame-gap-small">
              <Image src="/images/11.jpg" alt="Group engagement activity with seniors using interactive tools" fill className="object-cover" sizes="(min-width:768px) 20vw, 100vw" />
            </div>
            <p className="mt-3 leading-relaxed">
              We evaluate and recommend technology that supports mental stimulation, social interaction, and emotional wellness — helping seniors feel seen, valued, and active.
            </p>
          </div>
        </div>
      </Reveal>

      <Reveal delay={300}>
  <h2 className="font-title text-2xl mt-12 tracking-tight">Helping Senior Care Facilities</h2>
        <div className="mt-6 grid gap-14 md:grid-cols-2">
          <div className="border-t border-black/20 pt-6">
            <h3 className="font-title text-2xl tracking-tight">People</h3>
            <div className="mt-4 aspect-[4/3] relative corner-frame corner-frame-tight frame-gap-small">
              <Image src="/images/people.jpg" alt="Staff training session with senior care staff" fill className="object-cover" sizes="(min-width:768px) 20vw, 100vw" />
            </div>
            <p className="mt-3 leading-relaxed">
              We support staffing solutions, staff retention initiatives, and comprehensive training programs to empower caregivers and ensure high-quality care.
            </p>
          </div>
          <div className="border-t border-black/20 pt-6">
            <h3 className="font-title text-2xl tracking-tight">Facilities</h3>
            <div className="mt-4 aspect-[4/3] relative corner-frame corner-frame-tight frame-gap-small">
              <Image src="/images/facilities.jpg" alt="Security camera monitoring a senior care facility" fill className="object-cover" sizes="(min-width:768px) 20vw, 100vw" />
            </div>
            <p className="mt-3 leading-relaxed">
              We help implement security, surveillance, payroll, and operational systems that keep facilities running safely and efficiently.
            </p>
          </div>
        </div>
      </Reveal>

      {/* How We Work */}
      <Reveal delay={260}>
        <div className="mt-12 border-t border-black/20 pt-6">
          <h2 className="font-title text-2xl tracking-tight">How We Work</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-4">
            <div>
              <div className="font-title">Listen</div>
              <p className="mt-2">We meet with staff and understand the facility’s needs.</p>
            </div>
            <div>
              <div className="font-title">Recommend</div>
              <p className="mt-2">We suggest a tech stack based on real-world use, not trends.</p>
            </div>
            <div>
              <div className="font-title">Deploy</div>
              <p className="mt-2">We help source, set up, and test equipment.</p>
            </div>
            <div>
              <div className="font-title">Train & Support</div>
              <p className="mt-2">We follow up with the staff so nothing gets dropped.</p>
            </div>
          </div>
        </div>
      </Reveal>

      {/* CTAs */}
      <Reveal delay={380}>
        <div className="mt-12 flex flex-wrap gap-4">
          <Link href="/contact" className="btn-primary">Contact Us</Link>
        </div>
      </Reveal>

      {/* Partners anchor for Home link */}
      <div id="partners" className="mt-20" />
    </div>
  );
}
