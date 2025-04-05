import Link from "next/link";
import { ThemeButton } from "./theme-button";
import { NavLink } from "./nav-link";

export function Navigation() {
	return (
		<nav className="bg-white dark:bg-neutral-950 border-b sticky top-0 z-10">
			<div className="container mx-auto px-4 py-3 flex justify-between items-center">
				<Link
					href="/"
					className="text-xl font-bold bg-gradient-to-r from-purple-700 to-pink-600 bg-clip-text text-transparent"
				>
					<span>✨</span>EMOMMIT
				</Link>
				<div className="space-x-4">
					<NavLink href="/">Início</NavLink>
					<NavLink href="/exemplo">Exemplo</NavLink>
					<ThemeButton />
				</div>
			</div>
		</nav>
	);
}
