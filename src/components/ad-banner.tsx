import { Card, CardContent } from "./ui/card";

interface AdBannerProps {
	className?: string;
}

export function AdBanner({ className }: AdBannerProps) {
	return (
		<Card className={`overflow-hidden ${className}`}>
			<CardContent className="p-4">
				<div className="bg-gray-100 p-4 rounded-md border border-dashed border-gray-300 text-center">
					<p className="text-xs text-gray-500 mb-1">PUBLICIDADE</p>
					<div className="bg-gray-200 h-16 sm:h-24 flex items-center justify-center rounded">
						<p className="text-gray-500 text-sm">Espaço para anúncios</p>
					</div>
				</div>
			</CardContent>
		</Card>
	);
}
