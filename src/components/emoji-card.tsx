import { Card, CardContent, CardHeader } from "@/components/ui/card";

interface EmojiCardProps {
	emoji: string;
	emojiKey: string;
	description: string;
}

export function EmojiCard({
	emoji,
	emojiKey,
	description,
}: EmojiCardProps) {
	return (
		<Card className="h-full transition-all hover:shadow-md">
			<CardHeader className="pb-2">
				<div className="flex items-center justify-between">
					<span className="text-4xl" aria-hidden="true">
						{emoji}
					</span>
					<code className="bg-gray-100 dark:bg-neutral-700 px-2 py-1 rounded text-sm font-mono">
						{emojiKey}
					</code>
				</div>
			</CardHeader>
			<CardContent>
				<p className="text-gray-700 dark:text-gray-400">{description}</p>
			</CardContent>
		</Card>
	);
}
