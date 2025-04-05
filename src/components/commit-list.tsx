import { commits } from "@/data/commits";
import { CommitContent } from "./commit-content";

export function CommitList() {
	return (
		<div className="relative">
			<div
				className="absolute left-[23px] top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-neutral-800"
				aria-hidden="true"
			/>
			
			<div className="space-y-6">
				{commits.map((commit) => (
					<div key={commit.hash} className="relative flex items-start group">
						{/* Timeline dot */}
						<div className="absolute left-6 w-3 h-3 bg-blue-500 dark:bg-blue-400 rounded-full transform -translate-x-1.5 mt-1.5" />

						<CommitContent commit={commit} />
					</div>
				))}
			</div>
		</div>
	);
}
