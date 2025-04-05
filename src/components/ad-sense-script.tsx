import { env } from "@/configs/env";
import Script from "next/script";

export function AdSendScript() {
	if (process.env.NODE_ENV !== "production") return null;

	return (
		<Script
			id="adsense-script"
			strategy="lazyOnload"
			async
			src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-${env.ADSENSE_CLIENT_ID}`}
			crossOrigin="anonymous"
		/>
	);
}
