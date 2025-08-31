import Reveal from "@/components/Reveal";
import Link from "next/link";
import Image from "next/image";

interface PostMeta { slug: string; title: string; excerpt: string; image: string; }

const posts: PostMeta[] = [
  {
    slug: "3-technologies-every-senior-care-home-should-consider-right-now",
    title: "3 Technologies Every Senior Care Home Should Consider Right Now",
    excerpt: "Ambient fall detection, respectful sensing, and communication tooling that closes loops fast — here are the three to evaluate first.",
  image: "/images/14.jpg",
  },
  {
    slug: "designing-human-centered-fall-detection",
    title: "Designing Human-Centered Fall Detection",
    excerpt: "A framework for evaluating fall detection that balances accuracy, dignity, and workflow fit.",
  image: "/images/15.jpg",
  },
  {
    slug: "the-future-of-senior-care-why-technology-needs-to-feel-human",
    title: "The Future of Senior Care: Why Technology Needs to Feel Human",
    excerpt: "A look at how empathetic design can transform tech from a burden into a lifeline for residents and caregivers.",
    image: "/images/feel-human.jpg",
  },
  {
    slug: "beyond-buttons-and-screens-voice-gesture-and-touchless-interfaces-in-senior-care",
    title: "Beyond Buttons and Screens: Voice, Gesture, and Touchless Interfaces in Senior Care",
    excerpt: "Exploring intuitive technologies that lower barriers for seniors who may struggle with traditional devices.",
    image: "/images/touchless.jpg",
  },
  {
    slug: "closing-the-gap-how-technology-strengthens-family-care-community-connection",
    title: "Closing the Gap: How Technology Strengthens the Family Care Community Connection",
    excerpt: "Highlighting tools that keep families updated, engaged, and reassured about their loved one’s well-being.",
    image: "/images/family-care.jpg",
  },
];

export default function BlogIndexPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <Reveal><h1 className="font-title text-4xl md:text-5xl tracking-tight">Blog</h1></Reveal>
      <Reveal delay={120}><p className="mt-4 max-w-3xl leading-relaxed">Insights on practical technology that advances safety, connection, and dignity in senior care.</p></Reveal>
      <div className="mt-12 grid gap-12 md:grid-cols-3">
        {posts.map((post, i) => (
          <Reveal key={post.slug} delay={i * 120}>
            <article className="border-t border-black/20 pt-6 flex flex-col">
              <div className="aspect-[4/3] w-full relative mb-4 bg-[#38383810]">
                <Image src={post.image} alt="" fill className="object-cover" />
              </div>
              <h2 className="font-title text-xl tracking-tight leading-snug">{post.title}</h2>
              <p className="mt-3 text-sm leading-relaxed flex-1">{post.excerpt}</p>
              <div className="mt-6">
                <Link href={`/blog/${post.slug}`} className="link">Read Article →</Link>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
