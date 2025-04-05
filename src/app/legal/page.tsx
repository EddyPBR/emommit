// components/ui/PageContainer.tsx
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

export default function LegalPage() {
	return (
		<Card className="max-w-3xl mx-auto mt-10">
			<CardContent className="p-6 space-y-6 container">
				<h1 className="text-3xl font-bold mb-4">Informações Legais</h1>
				<div className="space-y-2">
					<Link
						href="#privacidade"
						className="text-purple-500 dark:text-pink-600 hover:underline"
					>
						Política de Privacidade
					</Link>
					<span className="font-medium mx-2 text-gray-600 dark:text-gray-400 pointer-events-none select-none">
						·
					</span>
					<Link
						href="#termos"
						className="text-purple-500 dark:text-pink-600  hover:underline"
					>
						Termos de Uso
					</Link>
					<span className="font-medium mx-2 text-gray-600 dark:text-gray-400 pointer-events-none select-none">
						·
					</span>
					<Link
						href="#contato"
						className="text-purple-500 dark:text-pink-600 hover:underline"
					>
						Contato
					</Link>
				</div>

				<Separator className="mb-6" />

				<section id="privacidade" className="space-y-2">
					<h2 className="text-2xl font-semibold">Política de Privacidade</h2>
					<p className="text-gray-600 dark:text-gray-400">
						Esta Política de Privacidade descreve como coletamos, usamos e
						protegemos as informações dos usuários.
					</p>
					<p className="text-gray-600 dark:text-gray-400">
						Coletamos informações pessoais como nome, e-mail ou outras que você
						fornece voluntariamente. Essas informações são usadas apenas para
						fins internos e não são compartilhadas com terceiros sem
						consentimento.
					</p>
					<p className="text-gray-600 dark:text-gray-400">
						Utilizamos cookies e outras tecnologias para melhorar a navegação e
						entender como nosso site é utilizado.
					</p>
					<p className="text-gray-600 dark:text-gray-400">
						Ao continuar usando este site, você concorda com os termos desta
						política.
					</p>
				</section>

				<Separator className="mb-6" />

				<section id="termos" className="space-y-2">
					<h2 className="text-2xl font-semibold">Termos de Uso</h2>
					<p className="text-gray-600 dark:text-gray-400">
						Ao acessar este site, você concorda em cumprir estes Termos de Uso e
						todas as leis e regulamentos aplicáveis.
					</p>
					<p className="text-gray-600 dark:text-gray-400">
						O conteúdo do site é protegido por direitos autorais e não pode ser
						copiado ou redistribuído sem permissão.
					</p>
					<p className="text-gray-600 dark:text-gray-400">
						Reservamos o direito de alterar estes termos a qualquer momento sem
						aviso prévio.
					</p>
				</section>

				<Separator className="mb-6" />

				<section id="contato">
					<h2 className="text-2xl font-semibold">Contato</h2>
					<p className="text-gray-600 dark:text-gray-400">
						Caso você tenha dúvidas, sugestões ou precise entrar em contato{" "}
						<Link
							href="https://eddypbr.com/contato"
							className="text-purple-500 dark:text-pink-600 hover:underline"
							target="_blank"
							rel="noopener noreferrer"
						>
							clique aqui
						</Link>{" "}
						e você será respondido o mais breve possível.
					</p>
				</section>
			</CardContent>
		</Card>
	);
}
