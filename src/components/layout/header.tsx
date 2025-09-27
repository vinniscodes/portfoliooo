import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Code2, Github } from 'lucide-react';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-14 items-center">
        <div className="mr-4 flex items-center">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Code2 className="h-6 w-6 text-primary" />
            <span className="font-bold">Vinicius Anderson</span>
          </Link>
          <a href="https://github.com/vinniscodes/portfoliooo" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <Github className="h-6 w-6 text-muted-foreground transition-colors hover:text-primary" />
          </a>
        </div>
        <div className="hidden flex-1 items-center space-x-6 text-sm font-medium md:flex md:justify-center">
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
