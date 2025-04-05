import type { CommitType } from "@/data/commits";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { dayjs } from "@/lib/dayjs";

interface CommitContentProps {
	commit: CommitType;
}

export function CommitContent({ commit }: CommitContentProps) {
	return (
		<div className="ml-12 flex-grow">
			<div className="flex flex-col sm:flex-row sm:items-center justify-between mb-1">
				<h3 className="font-medium text-gray-900 dark:text-gray-200 transition-colors">
					<span aria-hidden="true">{commit.emoji} </span>
					{commit.message}
				</h3>
				<span className="text-xs text-gray-500 dark:text-gray-400 sm:ml-2 mt-1 sm:mt-0">
					{dayjs(commit.date).fromNow()}
				</span>
			</div>

			<div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-2">
				<Avatar className="h-5 w-5 mr-1">
					<AvatarImage src={commit.author.avatar} alt={commit.author.name} />
					<AvatarFallback>{commit.author.name.charAt(0)}</AvatarFallback>
				</Avatar>
				<span className="font-medium">{commit.author.name}</span>
				<span className="mx-1">•</span>
				<code className="text-xs bg-gray-100 dark:bg-neutral-700 text-gray-300 px-1 py-0.5 rounded">
					{commit.hash.substring(0, 7)}
				</code>
			</div>

			<div className="text-xs text-gray-500 dark:text-gray-400 flex flex-wrap gap-2">
				<span className="flex items-center">
					<span className="w-3 h-3 inline-block mr-1 text-green-600 dark:text-green-400">+</span>
					{commit.changes.additions} adições
				</span>
				<span className="flex items-center">
					<span className="w-3 h-3 inline-block mr-1 text-red-600 dark:text-red-400">-</span>
					{commit.changes.deletions} remoções
				</span>
				<span className="flex items-center">
					<span className="w-3 h-3 inline-block mr-1 text-gray-500 dark:text-gray-400">•</span>
					{commit.changes.files} arquivos alterados
				</span>
			</div>
		</div>
	);
}
