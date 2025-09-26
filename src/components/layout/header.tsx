import Link from 'next/link';
import { Code2 } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-card shadow-sm sticky top-0 z-50">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2 font-bold text-lg">
          <Code2 className="h-6 w-6 text-primary" />
          <span className="hidden sm:inline font-headline tracking-wider">Portfólio.dev</span>
          <span className="sm:hidden font-headline tracking-wider">P.dev</span>
        </Link>
        <nav className="flex items-center gap-4 sm:gap-6">
          <Link
            href="/"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Início
          </Link>
          <Link
            href="/hangman"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Jogo da Forca
          </Link>
        </nav>
      </div>
    </header>
  );
}
