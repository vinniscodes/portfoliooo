import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Code2 } from 'lucide-react';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-14 items-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Code2 className="h-6 w-6 text-primary" />
            <span className="font-bold">Vinicius Anderson</span>
          </Link>
          <nav className="hidden items-center space-x-6 text-sm font-medium md:flex">
            <Link href="/#projetos" className="transition-colors hover:text-primary">
              Projetos
            </Link>
            <Link href="/#sobre" className="transition-colors hover:text-primary">
              Sobre Mim
            </Link>
            <Link href="/#habilidades" className="transition-colors hover:text-primary">
              Habilidades
            </Link>
            <Link href="/#contato" className="transition-colors hover:text-primary">
              Contato
            </Link>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-end">
          <Button asChild>
            <Link href="/hangman">Jogo da Forca</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
