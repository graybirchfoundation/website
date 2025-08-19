"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const nav = [
	{ href: "/", label: "Home" },
	{ href: "/about", label: "About Us" },
	{ href: "/what-we-do", label: "What We Do" },
	{ href: "/blog", label: "Blog" },
	{ href: "/contact", label: "Contact" },
];

export default function Header() {
	const pathname = usePathname();
	const barRef = useRef<HTMLSpanElement | null>(null);
	const itemsRef = useRef<Record<string, HTMLAnchorElement | null>>({});
	const [open, setOpen] = useState(false);

	const moveBarTo = (el: HTMLAnchorElement | null) => {
		const bar = barRef.current;
		if (!bar || !el) return;
		const rect = el.getBoundingClientRect();
		const parentRect = el.parentElement?.parentElement?.getBoundingClientRect();
		const left = rect.left - (parentRect?.left || 0);
		bar.style.width = `${rect.width}px`;
		bar.style.transform = `translateX(${left}px)`;
		bar.style.opacity = "1";
	};

	const resetBarToActive = () => {
		const current = itemsRef.current[pathname || "/"];
		const bar = barRef.current;
		if (!bar) return;
		if (current) {
			moveBarTo(current);
		} else {
			bar.style.opacity = "0";
			bar.style.width = "0px";
		}
	};

	useEffect(() => {
		// Close mobile menu on route change
		setOpen(false);
		resetBarToActive();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [pathname]);

	return (
		<header className="sticky top-0 z-50 bg-[#FFF5EF] border-b border-[#38383833]">
			<div className="mx-auto max-w-6xl px-6">
				<div className="flex items-center h-16 gap-4">
					{/* Logo */}
					<Link href="/" className="flex items-center w-[160px] h-8">
						<Image
							src="/logo2x.png"
							alt="Gray Birch Foundation"
							width={160}
							height={32}
							priority
						/>
					</Link>

					{/* Desktop nav */}
					<nav
						className="relative hidden md:block flex-1"
						onMouseLeave={resetBarToActive}
					>
						<span
							ref={barRef}
							className="pointer-events-none absolute -bottom-px left-0 h-[2px] bg-[#383838] transition-[transform,width] duration-300 ease-out"
							style={{ width: 0, transform: "translateX(0)", opacity: 0 }}
						/>
						<ul className="flex items-stretch gap-8 text-sm uppercase tracking-wide justify-end">
							{nav.map((item) => {
								const isActive = pathname === item.href;
								return (
									<li key={item.href}>
										<Link
											href={item.href}
											ref={(el) => {
												itemsRef.current[item.href] = el;
											}}
											className={`py-4 inline-flex items-center text-[#383838] hover:text-[#383838] ${
												isActive ? "font-semibold" : ""
											}`}
											onMouseEnter={(e) => moveBarTo(e.currentTarget)}
										>
											{item.label}
										</Link>
									</li>
								);
							})}
						</ul>
					</nav>

					{/* Mobile menu button with hamburger->X */}
					<button
						aria-label="Toggle menu"
						className="md:hidden ml-auto px-3 py-2 border border-[#383838] text-[#383838] uppercase tracking-wide text-sm"
						onClick={() => setOpen((v) => !v)}
					>
						<span className="relative block w-5 h-4">
							<span
								className={`absolute left-0 top-0 h-[2px] w-full bg-[#383838] transition-transform duration-300 ease-in-out ${
									open ? "translate-y-[6px] rotate-45" : ""
								}`}
							/>
							<span
								className={`absolute left-0 top-[6px] h-[2px] w-full bg-[#383838] transition-opacity duration-300 ease-in-out ${
									open ? "opacity-0" : "opacity-100"
								}`}
							/>
							<span
								className={`absolute left-0 top-[12px] h-[2px] w-full bg-[#383838] transition-transform duration-300 ease-in-out ${
									open ? "-translate-y-[6px] -rotate-45" : ""
								}`}
							/>
						</span>
					</button>
				</div>
			</div>

			{/* Overlay and Drawer (mobile) */}
			<div className="md:hidden">
				{/* Overlay */}
				<div
					className={`fixed inset-0 bg-black/10 transition-opacity duration-300 ease-in-out ${
						open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
					}`}
					onClick={() => setOpen(false)}
				/>
				{/* Drawer */}
				<aside
					className={`mobile-panel fixed top-0 right-0 h-dvh w-[78%] max-w-sm bg-[#FFF5EF] border-l border-[#38383833] transition-transform duration-300 ease-in-out ${
						open ? "translate-x-0" : "translate-x-full"
					}`}
				>
					<div className="h-16 px-4 flex items-center justify-between border-b border-[#38383833]">
						<div className="text-xs uppercase tracking-wide">Menu</div>
						<button
							className="px-3 py-2 border border-[#383838] text-[#383838] text-xs uppercase tracking-wide"
							onClick={() => setOpen(false)}
						>
							Close
						</button>
					</div>
					<ul className="px-2 py-2">
						{nav.map((item) => {
							const isActive = pathname === item.href;
							return (
								<li key={item.href}>
									<Link
										href={item.href}
										className={`block px-4 py-3 text-sm uppercase tracking-wide text-[#383838] ${
											isActive ? "font-semibold" : ""
										}`}
										onClick={() => setOpen(false)}
									>
										{item.label}
									</Link>
								</li>
							);
						})}
					</ul>
				</aside>
			</div>
		</header>
	);
}
