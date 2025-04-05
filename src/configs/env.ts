import { z } from "zod";

const envSchema = z.object({
	ADSENSE_CLIENT_ID: z
		.string()
		.regex(/^\d+$/, { message: "AdSense client ID must be a numeric string." }),
	ADSENSE_SLOT: z
		.string()
		.regex(/^\d+$/, { message: "AdSense client ID must be a numeric string." }),
});

const parsed = envSchema.safeParse({
	ADSENSE_CLIENT: process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID,
	ADSENSE_SLOT: process.env.NEXT_PUBLIC_ADSENSE_SLOT,
});

if (!parsed.success) {
	console.error(
		"❌ Invalid environment variables:",
		parsed.error.flatten().fieldErrors,
	);
	throw new Error("Set the environment variables and restart the server.");
}

export const env = envSchema.parse(process.env);
