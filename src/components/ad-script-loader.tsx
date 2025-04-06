"use client";

import { useEffect } from "react";

export default function AdScriptLoader() {
	useEffect(() => {
		const loadAdScript = () => {
			const s = document.createElement("script");
			s.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-${process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID}`;
			s.async = true;
			s.crossOrigin = "anonymous";
			document.head.appendChild(s);
		};

		if ("requestIdleCallback" in window) {
			requestIdleCallback(loadAdScript);
		} else {
			setTimeout(loadAdScript, 300); // fallback simples
		}
	}, []);

	return null;
}
