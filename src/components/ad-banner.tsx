"use client";

import { useEffect, useRef } from "react";
import { Card, CardContent } from "./ui/card";
import { env } from "@/configs/env";

interface AdBannerProps {
	className?: string;
}

export function AdBanner({ className }: AdBannerProps) {
	useEffect(() => {
		if (process.env.NODE_ENV !== "production") return;

		try {
			// biome-ignore lint: suspicious/noAssignInExpressions: This is a workaround to bypass a TypeScript error related to the use of window object.
			(window.adsbygoogle = window.adsbygoogle || []).push({});
		} catch (error) {
			console.error("Erro ao carregar o anúncio:", error);
		}
	}, []);

	return (
		<Card className={`overflow-hidden ${className}`}>
			<CardContent className="p-4">
				<ins
					className="adsbygoogle"
					style={{
						display: "block",
						width: "100%",
						minHeight: 150,
					}}
					data-ad-client={`ca-pub-${env.ADSENSE_CLIENT_ID}`}
					data-ad-slot={env.ADSENSE_SLOT}
					data-ad-format="auto"
					data-full-width-responsive="true"
				/>
			</CardContent>
		</Card>
	);
}
