'use client'


import { toast } from "sonner";
import { Button } from "../ui/button";

interface EmojiCopyProps extends Omit<React.ComponentProps<"button">, "onClick"> {
  emoji: string;
}

export function EmojiCopy({ emoji, ...props }: EmojiCopyProps) {
  async function copyToClipboard(text: string) {
		await navigator.clipboard.writeText(text)
    toast.success("Copiado para o clipboard")
	}

  return <Button variant="ghost" size="icon" onClick={() => copyToClipboard(emoji)} className="cursor-pointer hover:bg-transparent dark:hover:bg-transparent" {...props} />
}