import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";

const fireCode = Fira_Code({
	variable: "--font-fira-code",
	subsets: ["latin"],
	weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
	title: "Emommit — Emojis para seus commits com estilo",
	description:
		"Dê mais vida ao seu histórico de commits com emojis personalizados. Encontre o emoji ideal para cada tipo de commit, do bug fix à nova feature.",
	keywords: [
		"emojis",
		"commits",
		"git",
		"gitmoji",
		"emommit",
		"commit message",
		"conventional commits",
		"emoji commits",
		"desenvolvimento",
		"dev tools",
		"open source",
	],
	authors: [
		{
			name: "Edvaldo Junior",
			url: "https://github.com/@eddypbr",
		},
	],
	creator: "Edvaldo Junior",
	openGraph: {
		title: "Emommit — Emojis para seus commits com estilo",
		description:
			"Dê mais vida ao seu histórico de commits com emojis personalizados. Encontre o emoji ideal para cada tipo de commit, do bug fix à nova feature.",
		url: "https://emommit.dev", // coloque o domínio real depois
		siteName: "Emommit",
		locale: "pt_BR",
		type: "website",
		images: [
			{
				url: "https://www.emommit.com/emommit-og.png", // se tiver uma imagem social
				width: 1200,
				height: 630,
				alt: "Emommit - Emojis para commits",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Emommit — Emojis para seus commits com estilo",
		description:
			"Explore e use emojis para tornar suas mensagens de commit mais divertidas e organizadas.",
		images: ["https://www.emommit.com/emommit-og.png"],
	},
};

interface RootLayoutProps {
	children: React.ReactNode;
}

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
	return (
		<html lang="pt-BR" suppressHydrationWarning>
			<head>
				{process.env.NODE_ENV === "production" && (
					<script
						async
						src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-${process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID}`}
						crossOrigin="anonymous"
					/>
				)}
			</head>
			<body className={`${fireCode.className} antialiased`}>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					<Navigation />

					<Hero />

					<main className="flex-grow container mx-auto px-4 py-12">
						{children}
					</main>

					<Footer />
				</ThemeProvider>
			</body>
		</html>
	);
}
