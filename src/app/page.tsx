import { AdBanner } from "@/components/ad-banner";
import { EmojiCard } from "@/components/emoji-card";
import { getEmommitsByCategory } from "@/data/emmomits";

const commitCategories = getEmommitsByCategory();

export default function Home() {
	return (
		<main className="flex-grow container mx-auto px-4 py-12">
			<div className="flex flex-col lg:flex-row gap-8">
				<div className="flex-grow">
					<h2 className="text-2xl font-bold mb-8 text-center">
						Tipos de Commit
					</h2>

					{/* Top Ad Banner - Mobile Only */}
					<div className="lg:hidden mb-8">
						<AdBanner />
					</div>

					{/* Commit Categories */}
					{commitCategories.map((category, index) => (
						<section key={category.title} className={index > 0 ? "mt-12" : ""}>
							<h3 className="text-xl font-semibold mb-4 pb-2 border-b">
								{category.title}
							</h3>
							<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
								{category.commits.map((commit) => (
									<EmojiCard
										key={commit.key}
										emoji={commit.emoji}
										emojiKey={commit.key}
										description={commit.description}
									/>
								))}
							</div>

							{/* Insert ad after first category on mobile */}
							{index === 0 && (
								<div className="mt-8 lg:hidden">
									<AdBanner />
								</div>
							)}
						</section>
					))}
				</div>

				{/* Sidebar Ad - Desktop Only */}
				<div className="hidden lg:block w-64 shrink-0">
					<div className="sticky top-24">
						<AdBanner />
						<div className="mt-6">
							<AdBanner />
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}
