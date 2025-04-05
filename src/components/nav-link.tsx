"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinkProps {
	href: string;
	children: React.ReactNode;
}

export function NavLink({ href, children }: NavLinkProps) {
	const pathname = usePathname();

	return (
		<Link
			href={href}
			className="font-medium transition-colors text-gray-600 hover:text-gray-900 dark:text-gray-500 dark:hover:text-gray-400 aria-[current=page]:text-pink-700 dark:aria-[current=page]:text-pink-500"
			aria-current={pathname === href ? "page" : undefined}
		>
			{children}
		</Link>
	);
}
