export type EmommitCategory =
	| "feature"
	| "fix"
	| "documentation"
	| "style"
	| "refactor"
	| "deployment"
	| "dependencies";

export type EmommitType = {
	emoji: string;
	key: string;
	description: string;
	category: EmommitCategory;
};

export const emmomits: EmommitType[] = [
	// Feature
	{
		emoji: "✨",
		key: ":sparkles:",
		description: "Nova funcionalidade (feat)",
		category: "feature",
	},
	{
		emoji: "🚧",
		key: ":construction:",
		description: "Trabalho em progresso (WIP)",
		category: "feature",
	},

	// Bug Fixes & Maintenance
	{
		emoji: "🐛",
		key: ":bug:",
		description: "Correção de bug (fix)",
		category: "fix",
	},
	{
		emoji: "🔧",
		key: ":wrench:",
		description: "Alteração em arquivos de configuração (chore)",
		category: "fix",
	},
	{
		emoji: "⚡️",
		key: ":zap:",
		description: "Melhoria de performance (perf)",
		category: "fix",
	},
	{
		emoji: "🪛",
		key: ":screwdriver:",
		description: "Pequeno ajuste ou modificação sutil",
		category: "fix",
	},	

	// Documentation & Testing
	{
		emoji: "📚",
		key: ":books:",
		description: "Documentação (docs)",
		category: "documentation",
	},
	{
		emoji: "✅",
		key: ":white_check_mark:",
		description: "Adição ou atualização de testes (test)",
		category: "documentation",
	},

	// Style & Refactoring
	{
		emoji: "💄",
		key: ":lipstick:",
		description: "Atualização de UI/estilo (style)",
		category: "style",
	},
	{
		emoji: "♿",
		key: ":wheelchair:",
		description: "Melhorias de acessibilidade e inclusão (UX)",
		category: "style",
	},	
	{
		emoji: "♻️",
		key: ":recycle:",
		description: "Refatoração de código (refactor)",
		category: "refactor",
	},

	// Deployment & Releases
	{
		emoji: "🚀",
		key: ":rocket:",
		description: "Deploy (deploy)",
		category: "deployment",
	},
	{
		emoji: "🔖",
		key: ":bookmark:",
		description: "Release / Versão (release)",
		category: "deployment",
	},
	{
		emoji: "🔀",
		key: ":twisted_rightwards_arrows:",
		description: "Merge de branches (merge)",
		category: "deployment",
	},

	// Dependencies
	{
		emoji: "📦",
		key: ":package:",
		description: "Nova dependência (add)",
		category: "dependencies",
	},
	{
		emoji: "⬆️",
		key: ":arrow_up:",
		description: "Upgrade de dependência",
		category: "dependencies",
	},
	{
		emoji: "⬇️",
		key: ":arrow_down:",
		description: "Downgrade de dependência",
		category: "dependencies",
	},
];

export function getEmommitsByCategory() {
	const categories: Record<
		EmommitCategory,
		{ title: string; commits: EmommitType[] }
	> = {
		feature: {
			title: "Desenvolvimento de Funcionalidades",
			commits: [],
		},
		fix: {
			title: "Correções e Manutenção",
			commits: [],
		},
		documentation: {
			title: "Documentação e Testes",
			commits: [],
		},
		style: {
			title: "Estilo e UI",
			commits: [],
		},
		refactor: {
			title: "Refatoração",
			commits: [],
		},
		deployment: {
			title: "Implantação e Releases",
			commits: [],
		},
		dependencies: {
			title: "Gerenciamento de Dependências",
			commits: [],
		},
	};

	for (const commit of emmomits) {
		categories[commit.category].commits.push(commit);
	}

	return Object.values(categories).filter(
		(category) => category.commits.length > 0,
	);
}
