"use client";

import { useEffect } from "react";

export function useHashFromVisibleSection() {
	useEffect(() => {
		const sections = document.querySelectorAll("section[id]");
		if (!sections.length) return;

		let currentId = "";

		const observer = new IntersectionObserver(
			(entries) => {
				const visibleEntries = entries
					.filter((entry) => entry.isIntersecting)
					.sort(
						(a, b) =>
							a.target.getBoundingClientRect().top -
							b.target.getBoundingClientRect().top,
					);

				if (visibleEntries.length > 0) {
					const firstVisibleId = visibleEntries[0].target.id;

					if (firstVisibleId !== currentId) {
						history.replaceState(null, "", `#${firstVisibleId}`);
						currentId = firstVisibleId;
					}
				}
			},
			{
				threshold: 0,
				rootMargin: "-40% 0px -60% 0px", // Detecta entrada mais cedo ao subir
			},
		);

		for (const section of sections) {
			observer.observe(section);
		}

		return () => observer.disconnect();
	}, []);
}
