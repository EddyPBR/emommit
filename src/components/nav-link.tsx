"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

interface NavLinkProps {
	href: string;
	children: React.ReactNode;
}

export function NavLink({ href, children }: NavLinkProps) {
	const linkRef = useRef<HTMLAnchorElement>(null);

	useEffect(() => {
		const updateAriaCurrent = () => {
			const currentHash = window.location.hash || "#";
			const currentPath = window.location.pathname;

			const current = `${currentPath}${currentHash}`;
			const normalizedHref = new URL(href, window.location.origin).pathname + new URL(href, window.location.origin).hash;

			if (linkRef.current) {
				if (current === normalizedHref) {
					linkRef.current.setAttribute("aria-current", "page");
				} else {
					linkRef.current.removeAttribute("aria-current");
				}
			}
		};

		updateAriaCurrent(); // initial run

		window.addEventListener("hashchange", updateAriaCurrent);
		window.addEventListener("popstate", updateAriaCurrent);
		window.addEventListener("scroll", updateAriaCurrent); // <- necessário se você estiver atualizando a hash com scroll

		return () => {
			window.removeEventListener("hashchange", updateAriaCurrent);
			window.removeEventListener("popstate", updateAriaCurrent);
			window.removeEventListener("scroll", updateAriaCurrent);
		};
	}, [href]);

	return (
		<Link
			ref={linkRef}
			href={href}
			replace
			scroll
			className="font-medium transition-colors text-gray-600 hover:text-gray-900 dark:text-gray-500 dark:hover:text-gray-400 aria-[current=page]:text-pink-700 dark:aria-[current=page]:text-pink-500"
		>
			{children}
		</Link>
	);
}
