export type CommitType = {
	emoji: string;
	message: string;
	date: string;
	author: {
		avatar: string;
		name: string;
	};
	hash: string;
	changes: {
		additions: number;
		deletions: number;
		files: number;
	};
};

export const commits: CommitType[] = [
	{
		emoji: "✨",
		message: "Add initial dashboard page",
		date: "2025-04-05",
		author: {
			avatar: "/avatars/joaozinho.png",
			name: "Joãozinho",
		},
		hash: "a1b2c3",
		changes: {
			additions: 123,
			deletions: 10,
			files: 4,
		},
	},
	{
		emoji: "🚧",
		message: "Start payments module (WIP)",
		date: "2025-04-04",
		author: {
			avatar: "/avatars/mariazinha.png",
			name: "Mariazinha",
		},
		hash: "d4e5f6",
		changes: {
			additions: 98,
			deletions: 2,
			files: 3,
		},
	},
	{
		emoji: "🐛",
		message: "Fix bug in product listing",
		date: "2025-04-04",
		author: {
			avatar: "/avatars/joaozinho.png",
			name: "Joãozinho",
		},
		hash: "g7h8i9",
		changes: {
			additions: 5,
			deletions: 7,
			files: 1,
		},
	},
	{
		emoji: "🔧",
		message: "Update ESLint configuration",
		date: "2025-04-04",
		author: {
			avatar: "/avatars/mariazinha.png",
			name: "Mariazinha",
		},
		hash: "j1k2l3",
		changes: {
			additions: 10,
			deletions: 3,
			files: 1,
		},
	},
	{
		emoji: "⚡️",
		message: "Improve initial loading performance",
		date: "2025-04-03",
		author: {
			avatar: "https://avatars.githubusercontent.com/u/48658479?v=4",
			name: "Edvaldo Junior",
		},
		hash: "m4n5o6",
		changes: {
			additions: 47,
			deletions: 12,
			files: 2,
		},
	},
	{
		emoji: "📚",
		message: "Add API documentation for users",
		date: "2025-04-03",
		author: {
			avatar: "/avatars/joaozinho.png",
			name: "Joãozinho",
		},
		hash: "p7q8r9",
		changes: {
			additions: 20,
			deletions: 0,
			files: 1,
		},
	},
	{
		emoji: "✅",
		message: "Add tests for login component",
		date: "2025-04-03",
		author: {
			avatar: "/avatars/mariazinha.png",
			name: "Mariazinha",
		},
		hash: "s1t2u3",
		changes: {
			additions: 64,
			deletions: 0,
			files: 2,
		},
	},
	{
		emoji: "💄",
		message: "Adjust button spacing on homepage",
		date: "2025-04-02",
		author: {
			avatar: "https://avatars.githubusercontent.com/u/48658479?v=4",
			name: "Edvaldo Junior",
		},
		hash: "v4w5x6",
		changes: {
			additions: 8,
			deletions: 2,
			files: 1,
		},
	},
	{
		emoji: "♻️",
		message: "Refactor authentication logic",
		date: "2025-04-02",
		author: {
			avatar: "/avatars/joaozinho.png",
			name: "Joãozinho",
		},
		hash: "y7z8a9",
		changes: {
			additions: 34,
			deletions: 20,
			files: 3,
		},
	},
	{
		emoji: "🚀",
		message: "Deploy version 1.2.0 to production",
		date: "2025-04-02",
		author: {
			avatar: "/avatars/mariazinha.png",
			name: "Mariazinha",
		},
		hash: "b0c1d2",
		changes: {
			additions: 0,
			deletions: 0,
			files: 0,
		},
	},
	{
		emoji: "🔖",
		message: "Create tag v1.2.0",
		date: "2025-04-02",
		author: {
			avatar: "https://avatars.githubusercontent.com/u/48658479?v=4",
			name: "Edvaldo Junior",
		},
		hash: "e3f4g5",
		changes: {
			additions: 0,
			deletions: 0,
			files: 0,
		},
	},
	{
		emoji: "🔀",
		message: "Merge branch 'feature/checkout' into 'main'",
		date: "2025-04-02",
		author: {
			avatar: "/avatars/joaozinho.png",
			name: "Joãozinho",
		},
		hash: "h6i7j8",
		changes: {
			additions: 0,
			deletions: 0,
			files: 0,
		},
	},
	{
		emoji: "📦",
		message: "Add 'dayjs' package to project",
		date: "2025-04-02",
		author: {
			avatar: "/avatars/mariazinha.png",
			name: "Mariazinha",
		},
		hash: "k9l0m1",
		changes: {
			additions: 1,
			deletions: 0,
			files: 1,
		},
	},
	{
		emoji: "⬆️",
		message: "Update Next.js to version 15",
		date: "2025-04-02",
		author: {
			avatar: "https://avatars.githubusercontent.com/u/48658479?v=4",
			name: "Edvaldo Junior",
		},
		hash: "n2o3p4",
		changes: {
			additions: 12,
			deletions: 3,
			files: 2,
		},
	},
	{
		emoji: "⬇️",
		message: "Downgrade Tailwind to avoid compatibility bug",
		date: "2025-04-01",
		author: {
			avatar: "/avatars/joaozinho.png",
			name: "Joãozinho",
		},
		hash: "q5r6s7",
		changes: {
			additions: 3,
			deletions: 5,
			files: 1,
		},
	},
];
