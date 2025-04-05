"use client";

import { useEffect } from "react";
import { Card, CardContent } from "./ui/card";
import { env } from "@/configs/env";

interface AdBannerProps {
	className?: string;
}

export function AdBanner({ className }: AdBannerProps) {
	useEffect(() => {
		try {
			// biome-ignore lint: suspicious/noAssignInExpressions: This is a workaround to bypass a TypeScript error related to the use of window object.
			(window.adsbygoogle = window.adsbygoogle || []).push({});
		} catch (e) {
			console.error("Erro ao carregar o anúncio:", e);
		}
	}, []);

	return (
		<Card className={`overflow-hidden ${className}`}>
			<CardContent className="p-4">
				<ins
					className="adsbygoogle"
					style={{ display: "block" }}
					data-ad-client={`ca-pub-${env.ADSENSE_CLIENT_ID}`}
					data-ad-slot={env.ADSENSE_SLOT} // substitua pelo seu ad-slot
					data-ad-format="auto"
					data-full-width-responsive="true"
				/>
			</CardContent>
		</Card>
	);
}
