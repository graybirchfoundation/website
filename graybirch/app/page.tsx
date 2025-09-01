import Link from "next/link";
import Reveal from "@/components/Reveal";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="border-b border-black/20">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <Reveal>
                <h1 className="font-title text-6xl md:text-7xl leading-[1.05] tracking-tight">
                  Smarter Care for Healthier Aging
                </h1>
              </Reveal>
              <Reveal delay={120}>
                <p className="mt-8 max-w-xl text-xl leading-relaxed">
                  The Gray Birch Foundation helps senior care organizations adopt technologies that improve safety, communication, and quality of life for older adults.
                </p>
              </Reveal>
              <Reveal delay={220}>
                <div className="mt-12 flex gap-4">
                  <Link href="/contact" className="btn-primary">Contact Us</Link>
                  <Link href="/what-we-do" className="btn">See Our Work</Link>
                </div>
              </Reveal>
            </div>
            <Reveal delay={180}>
              <div className="hidden md:block aspect-square w-[90%] md:ml-auto relative corner-frame frame-gap">
                <Image src="/images/1.jpg" alt="Resident using a tablet with caregiver support in a bright common area" fill className="object-cover" sizes="(min-width: 768px) 40vw, 100vw" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="border-b border-black/20">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <Reveal>
            <h2 className="font-title text-3xl md:text-4xl tracking-tight">
              What We Do
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="mt-4 max-w-3xl leading-relaxed">
              We partner with senior care organizations of every type - from independent living and assisted living to memory care and skilled nursing facilities to make modern, human-centered technology accessible to those who need it most.
            </p>
          </Reveal>
          <Reveal delay={180}>
            <h3 className="font-title text-2xl tracking-tight mt-10">Helping Seniors</h3>
          </Reveal>
          <Reveal delay={200}>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-14">
              <Reveal>
                <div>
                  <h3 className="font-title text-2xl tracking-tight">Communication</h3>
                  <div className="mt-4 aspect-[5/3] max-w-sm relative corner-frame corner-frame-tight frame-gap-small">
                    <Image src="/images/2.jpg" alt="Senior on a video call with family using simple communication setup" fill className="object-cover" sizes="(min-width: 768px) 30vw, 100vw" />
                  </div>
                  <p className="mt-3 leading-relaxed">
                    We help care communities choose and access simple, accessible tools like video calling systems and voice assistants, enabling seniors to stay connected with loved ones and caregivers.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={120}>
                <div>
                  <h3 className="font-title text-2xl tracking-tight">Fall Detection/Prevention</h3>
                  <div className="mt-4 aspect-[5/3] max-w-sm relative corner-frame corner-frame-tight frame-gap-small">
                    <Image src="/images/3.jpg" alt="Discreet fall detection sensor installed in a resident room" fill className="object-cover" sizes="(min-width: 768px) 30vw, 100vw" />
                  </div>
                  <p className="mt-3 leading-relaxed">
                    We test and vet fall detection tools, and then work with senior care providers to adopt the best solutions affordably.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={240}>
                <div>
                  <h3 className="font-title text-2xl tracking-tight">Engagement/Wellbeing</h3>
                  <div className="mt-4 aspect-[5/3] max-w-sm relative corner-frame corner-frame-tight frame-gap-small">
                    <Image src="/images/4.jpg" alt="Group of older adults participating in a creative engagement activity" fill className="object-cover" sizes="(min-width: 768px) 30vw, 100vw" />
                  </div>
                  <p className="mt-3 leading-relaxed">
                    We evaluate and recommend technology that supports mental stimulation, social interaction, and emotional wellness — helping seniors feel seen, valued, and active.
                  </p>
                </div>
              </Reveal>
            </div>
          </Reveal>
          <Reveal delay={320}>
            <h3 className="font-title text-2xl tracking-tight mt-12">Helping Senior Care Facilities</h3>
          </Reveal>
          <Reveal delay={340}>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-14">
              <div className="border-t border-black/20 pt-6">
                <h3 className="font-title text-2xl tracking-tight">People</h3>
                <div className="mt-4 aspect-[5/3] max-w-sm relative corner-frame corner-frame-tight frame-gap-small">
                  <Image src="/images/people.jpg" alt="Staff training session with senior care staff" fill className="object-cover" sizes="(min-width: 768px) 30vw, 100vw" />
                </div>
                <p className="mt-3 leading-relaxed">
                  We support staffing solutions, staff retention initiatives, and comprehensive training programs to empower caregivers and ensure high-quality care.
                </p>
              </div>
              <div className="border-t border-black/20 pt-6">
                <h3 className="font-title text-2xl tracking-tight">Facilities</h3>
                <div className="mt-4 aspect-[5/3] max-w-sm relative corner-frame corner-frame-tight frame-gap-small">
                  <Image src="/images/facilities.jpg" alt="Security camera monitoring a senior care facility" fill className="object-cover" sizes="(min-width: 768px) 30vw, 100vw" />
                </div>
                <p className="mt-3 leading-relaxed">
                  We help select security, surveillance, payroll, and operational systems that keep facilities running safely and efficiently.
                </p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={380}>
            <div className="mt-8">
              <Link href="/what-we-do" className="link">
                Learn More →
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Why It Matters */}
      <section className="border-b border-black/20">
        <div className="mx-auto max-w-6xl px-6 py-20 grid gap-10">
          <Reveal>
            <h2 className="font-title text-3xl md:text-4xl tracking-tight">
              Why It Matters
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-14 md:gap-10 mt-4">
            <Reveal>
              <div className="flex flex-col items-center text-center">
                <div className="font-title text-5xl md:text-6xl tracking-tight text-[#383838]">57%</div>
                <p className="mt-5 leading-relaxed text-sm md:text-base max-w-xs">
                  of falls in nursing homes are reported. Many occur without even basic detection systems. We help care teams adopt reliable fall detection tools that improve safety and response time.
                </p>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="flex flex-col items-center text-center">
                <div className="font-title text-5xl md:text-6xl tracking-tight text-[#383838]">30%</div>
                <p className="mt-5 leading-relaxed text-sm md:text-base max-w-xs">
                  of seniors in care communities lack tools to stay in touch with loved ones. We help implement accessible communication technologies that keep residents connected.
                </p>
              </div>
            </Reveal>
            <Reveal delay={240}>
              <div className="flex flex-col items-center text-center">
                <div className="font-title text-5xl md:text-6xl tracking-tight text-[#383838]">40%</div>
                <p className="mt-5 leading-relaxed text-sm md:text-base max-w-xs">
                  of older adults say their social and emotional needs aren’t being met. We support adoption of tools that help residents feel seen, valued, and engaged.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* How We’ve Helped */}
      <section className="border-b border-black/20">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid md:grid-cols-2 gap-16 items-stretch">
            <Reveal>
              <div className="order-2 md:order-1">
                <h2 className="font-title text-3xl md:text-4xl tracking-tight">How We Help</h2>
                <p className="mt-4 leading-relaxed max-w-xl">
                  We partner with vendors, test their technologies, and identify the most effective tools for seniors and the organizations that support them. Once vetted, we help senior care communities access these solutions at discounted rates and enable hands-on training so staff and residents can use them with confidence.
                </p>
              </div>
            </Reveal>
            <Reveal delay={160}>
              <div className="order-1 md:order-2 aspect-[16/9] w-full md:mr-0 relative corner-frame frame-gap">
                <Image src="/images/5.jpg" alt="Care staff collaborating during a technology training session" fill className="object-cover" sizes="100vw" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Latest from the Blog */}
      <section className="border-b border-black/20">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <Reveal>
            <h2 className="font-title text-3xl md:text-4xl tracking-tight">Latest from the Blog</h2>
          </Reveal>
          <div className="mt-10 grid md:grid-cols-2 gap-16 items-stretch">
            <Reveal delay={160}>
              <div className="aspect-[16/9] w-full order-2 md:order-1 relative corner-frame frame-gap">
                <Image src="/images/6.jpg" alt="Collage of modern senior care technologies: tablet, sensor, smart speaker" fill className="object-cover" sizes="100vw" />
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="order-1 md:order-2 border-t md:border-t-0 border-black/20 pt-6 md:pt-0 flex flex-col justify-start">
                <h3 className="font-title text-2xl tracking-tight">3 Technologies Every Senior Care Home Should Consider Right Now</h3>
                <p className="mt-3 leading-relaxed max-w-md">From ambient fall detection to voice-first connection, three tools making care safer and more human.</p>
                <div className="mt-6">
                  <Link href="/blog/3-technologies-every-senior-care-home-should-consider-right-now" className="link">Read More →</Link>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
