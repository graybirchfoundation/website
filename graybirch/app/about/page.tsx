import Reveal from "@/components/Reveal";
import Link from "next/link";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <Reveal>
        <h1 className="font-title text-4xl md:text-5xl tracking-tight">About Us</h1>
      </Reveal>

      {/* Mission (image right) */}
      <Reveal delay={120}>
        <div className="mt-8 border-t border-black/20 pt-10">
          <div className="grid md:grid-cols-2 gap-14 items-stretch">
            <div>
              <h2 className="font-title text-2xl tracking-tight">Our Mission</h2>
              <p className="mt-4 leading-relaxed">
                At The Gray Birch Foundation, we help senior care organizations adopt thoughtful, human-centered technologies that improve safety, communication, and connection for older adults. We exist to bridge the gap between innovation and elder care — ensuring no senior is left behind as the world moves forward.
              </p>
            </div>
            <div className="hidden md:block w-[88%] relative md:ml-auto h-full min-h-[260px] corner-frame frame-gap">
              <Image src="/images/7.jpg" alt="Care professional and resident smiling while using a simple device" fill className="object-cover" sizes="(min-width:768px) 40vw, 100vw" />
            </div>
          </div>
        </div>
      </Reveal>

      {/* Story (image left) */}
      <Reveal delay={200}>
        <div className="mt-16 border-t border-black/20 pt-10">
          <div className="grid md:grid-cols-2 gap-14 items-stretch">
            <div className="hidden md:block w-[90%] relative md:mr-auto h-full min-h-[260px] corner-frame frame-gap">
              <Image src="/images/8.jpg" alt="Close-up of gray birch tree bark symbolizing resilience" fill className="object-cover" sizes="(min-width:768px) 40vw, 100vw" />
            </div>
            <div>
              <h2 className="font-title text-2xl tracking-tight">Our Story</h2>
              <p className="mt-4 leading-relaxed">
                Gray Birch Foundation was founded on the belief that meaningful change in senior care is possible when we address three core challenges: funding, staffing, and technology. By identifying and unlocking new sources of funding, assisting with the recruitment and training of qualified staff, and helping organizations adopt and effectively use modern technologies, we directly support the areas where senior care organizations are struggling most.
              </p>
            </div>
          </div>
        </div>
      </Reveal>

      {/* Beliefs */}
      <Reveal delay={280}>
        <div className="mt-16 md:mt-20 border-t border-black/20 pt-6">
          <h2 className="font-title text-2xl tracking-tight">What We Believe</h2>
          <ul className="mt-3 grid gap-3">
            <li>Every senior deserves access to life-enhancing technology.</li>
            <li>Technology should be a tool for connection, not isolation.</li>
            <li>Change happens when communities, caregivers, and creators work together.</li>
            <li>Impact matters more than innovation for its own sake.</li>
          </ul>
        </div>
      </Reveal>

      {/* Why Gray Birch */}
      <Reveal delay={440}>
        <div className="mt-10 border-t border-black/20 pt-6">
          <h2 className="font-title text-2xl tracking-tight">Why “Gray Birch”?</h2>
          <p className="mt-3 leading-relaxed">
            The gray birch tree is known for its resilience and adaptability. It thrives in tough conditions, grows fast, and supports life all around it. We chose it as a symbol of the strength and adaptability we see in seniors and in the people who care for them.
          </p>
        </div>
      </Reveal>

      {/* CTA */}
      <Reveal delay={520}>
        <div className="mt-12 flex flex-wrap gap-4">
          <Link href="/contact" className="btn">Get in Touch</Link>
          <Link href="/contact" className="btn-primary">Contact Us</Link>
        </div>
      </Reveal>
    </div>
  );
}
