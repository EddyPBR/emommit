import { AdBanner } from "@/components/ad-banner";
import { CommitContent } from "@/components/commit-content";
import { CommitList } from "@/components/commit-list";
import { commits } from "@/data/commits";

export default function History() {
	return (
		<main className="flex-grow container mx-auto px-4 py-12">
			<div className="flex flex-col lg:flex-row gap-8">
				<div className="flex-grow">
					<h2 className="text-2xl font-bold mb-8 text-center">
						Commits de exemplo
					</h2>

					{/* Top Ad Banner - Mobile Only */}
					<div className="lg:hidden mb-8">
						<AdBanner />
					</div>

					<CommitList />
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
