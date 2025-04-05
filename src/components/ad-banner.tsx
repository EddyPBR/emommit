"use client";

import { useEffect, useRef } from "react";
import { Card, CardContent } from "./ui/card";
import { env } from "@/configs/env";

interface AdBannerProps {
	className?: string;
}

export function AdBanner({ className }: AdBannerProps) {
	const adRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (!adRef.current) return;

		const observer = new ResizeObserver(([entry]) => {
			const width = entry.contentRect.width;
			if (width > 0) {
				try {
					// biome-ignore lint: suspicious/noAssignInExpressions: This is a workaround to bypass a TypeScript error related to the use of window object.
					(window.adsbygoogle = window.adsbygoogle || []).push({});
					observer.disconnect(); // só precisa chamar uma vez
				} catch (e) {
					console.error("Erro ao carregar o anúncio:", e);
				}
			}
		});

		observer.observe(adRef.current);

		return () => observer.disconnect();
	}, []);

	return (
		<Card className={`overflow-hidden ${className}`}>
			<CardContent className="p-4">
				<div ref={adRef}>
					<ins
						className="adsbygoogle"
						style={{
							display: "block",
							width: "100%",
							minHeight: 150,
							maxHeight: 300,
						}}
						data-ad-client={`ca-pub-${env.ADSENSE_CLIENT_ID}`}
						data-ad-slot={env.ADSENSE_SLOT}
						data-ad-format="auto"
						data-full-width-responsive="true"
					/>
				</div>
			</CardContent>
		</Card>
	);
}
