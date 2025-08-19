This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Image / Asset Conventions

Place images in `public/` so they are served from the site root. Suggested structure for replacing current placeholder blocks:

```
public/
	hero/
		hero-care-tech.jpg              # Home hero (square-ish: 1200x1200)
	sections/
		what-we-do-communication.jpg    # 800x480 (≈5:3)
		what-we-do-fall-detection.jpg   # 800x480
		what-we-do-engagement.jpg       # 800x480
		how-weve-helped-showcase.jpg    # 1200x675 (16:9)
		blog-latest-feature.jpg         # 1200x675 (16:9)
	about/
		mission.jpg                     # 1000x700 or 900x900
		story.jpg                       # 1000x700 or 900x900
	donate/
		impact-grid.jpg                 # Optional infographic 1200x675
	blog/
		tech-3.jpg                      # Referenced in posts
		fall-detection.jpg              # Referenced in posts
		communication-stack.jpg         # Referenced in posts
		ambient-sensing.jpg             # Referenced in posts
		trust.jpg                       # Referenced in posts
```

Naming:
1. Kebab-case, descriptive, no spaces.
2. Consistent aspect ratios per section (hero square, feature 16:9 or 5:3, focus cards 5:3).
3. Optimize (target <200KB) before commit (e.g. `squoosh-cli`).

Replacing a placeholder div:

```tsx
import Image from "next/image";
// ...
<div className="relative aspect-[16/9] w-full">
	<Image src="/sections/how-weve-helped-showcase.jpg" alt="Fall detection training session" fill className="object-cover" priority />
</div>
```

Keep edges sharp (no border radius). Optional subtle border: `border border-black/10`.

Blog images live under `/public/blog/` and are referenced with absolute paths like `/blog/tech-3.jpg`.
