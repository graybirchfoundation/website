import Reveal from "@/components/Reveal";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Beyond Buttons and Screens: Voice, Gesture, and Touchless Interfaces in Senior Care | Gray Birch",
  description: "Exploring intuitive technologies that lower barriers for seniors who may struggle with traditional devices.",
};

export default function TouchlessInterfacesArticle() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <Reveal><p className="text-xs tracking-wide uppercase font-semibold text-black/60">Article</p></Reveal>
      <Reveal delay={90}><h1 className="font-title text-4xl md:text-5xl tracking-tight">Beyond Buttons and Screens: Voice, Gesture, and Touchless Interfaces in Senior Care</h1></Reveal>
      <Reveal delay={140}><p className="mt-6 text-lg leading-relaxed max-w-2xl">Exploring intuitive technologies that lower barriers for seniors who may struggle with traditional devices.</p></Reveal>
      <Reveal delay={180}><p className="mt-4 text-sm text-black/60">7 min read</p></Reveal>

      <Reveal delay={220}><div className="mt-10 aspect-[16/9] relative"><Image src="/images/voice-gesture-touchless.jpg" alt="Senior interacting with touchless interface" fill className="object-cover" sizes="100vw" /></div></Reveal>

      <Reveal delay={260}><h2 className="mt-14 font-title text-2xl tracking-tight">1. Voice as a Natural Interface</h2></Reveal>
      <Reveal delay={300}><p className="mt-4 leading-relaxed">Speech interfaces leverage a modality most residents are comfortable with—spoken language. By designing concise, context-aware prompts and allowing for simple confirmations, voice interfaces can handle tasks like making calls, controlling lights, or sending alerts without requiring complex menus or buttons.</p></Reveal>

      <Reveal delay={340}><h2 className="mt-12 font-title text-2xl tracking-tight">2. Gesture and Proximity Sensing</h2></Reveal>
      <Reveal delay={380}><p className="mt-4 leading-relaxed">Motion sensors and gesture recognition systems can detect subtle hand movements or approach cues, enabling touchless control of devices. This reduces infection risk, simplifies interaction for those with limited dexterity, and provides discreet assistance—think raising a hand to call for help or waving to turn on a screen.</p></Reveal>

      <Reveal delay={420}><h2 className="mt-12 font-title text-2xl tracking-tight">3. Combining Modalities for Accessibility</h2></Reveal>
      <Reveal delay={460}><p className="mt-4 leading-relaxed">Multi-modal systems that blend voice, gesture, and simple visual feedback create fallbacks when one mode fails. For example, if voice recognition struggles in noisy environments, a wave-to-acknowledge gesture can serve as backup. Designing for redundancy ensures robust user experiences across varied conditions.</p></Reveal>

      <Reveal delay={500}><div className="mt-16 border-t border-black/20 pt-8 flex flex-wrap gap-6 items-center justify-between">
        <Link href="/blog" className="link">← Back to Blog</Link>
        <Link href="/contact" className="btn-primary">Support Our Work</Link>
      </div></Reveal>
    </div>
  );
}
