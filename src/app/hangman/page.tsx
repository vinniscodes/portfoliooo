'use client';

import { useState, useEffect, useCallback } from 'react';
import { getRandomWord } from '@/lib/words';
import { HangmanDrawing } from '@/components/hangman/hangman-drawing';
import { WordDisplay } from '@/components/hangman/word-display';
import { Keyboard } from '@/components/hangman/keyboard';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';

const MAX_MISTAKES = 6;

export default function HangmanPage() {
  const [wordToGuess, setWordToGuess] = useState('');
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  const [gameStatus, setGameStatus] = useState<'playing' | 'won' | 'lost'>('playing');

  const startNewGame = useCallback(() => {
    setWordToGuess(getRandomWord());
    setGuessedLetters([]);
    setGameStatus('playing');
  }, []);

  useEffect(() => {
    startNewGame();
  }, [startNewGame]);

  const incorrectLetters = guessedLetters.filter(
    (letter) => !wordToGuess.includes(letter)
  );

  const isWinner = wordToGuess && wordToGuess.split('').every((letter) => guessedLetters.includes(letter));
  const isLoser = incorrectLetters.length >= MAX_MISTAKES;

  useEffect(() => {
    if (isWinner) {
      setGameStatus('won');
    }
    if (isLoser) {
      setGameStatus('lost');
    }
  }, [isWinner, isLoser]);

  const addGuessedLetter = useCallback(
    (letter: string) => {
      if (guessedLetters.includes(letter) || isWinner || isLoser) return;

      setGuessedLetters((currentLetters) => [...currentLetters, letter]);
    },
    [guessedLetters, isWinner, isLoser]
  );

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key.toUpperCase();
      if (key.match(/^[A-Z]$/)) {
        e.preventDefault();
        addGuessedLetter(key);
      }
    };

    document.addEventListener('keypress', handler);
    return () => {
      document.removeEventListener('keypress', handler);
    };
  }, [addGuessedLetter]);

  return (
    <div className="container mx-auto flex max-w-4xl flex-col items-center gap-8 p-4 py-8 md:px-6 md:py-12">
      <div className="text-center">
        <h1 className="font-headline text-4xl font-bold tracking-wider">Decifre o Código</h1>
        <p className="text-muted-foreground">Adivinhe a palavra secreta antes que o sistema trave!</p>
      </div>

      <HangmanDrawing numberOfMistakes={incorrectLetters.length} />

      {wordToGuess && <WordDisplay word={wordToGuess} guessedLetters={guessedLetters} reveal={isLoser} />}

      <div className="w-full self-stretch">
        <Keyboard
          activeLetters={guessedLetters.filter((letter) => wordToGuess.includes(letter))}
          inactiveLetters={incorrectLetters}
          onSelectLetter={addGuessedLetter}
          disabled={isWinner || isLoser}
        />
      </div>

      <Button onClick={startNewGame} size="lg">
        Novo Desafio
      </Button>

      <AlertDialog open={gameStatus !== 'playing'}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>{gameStatus === 'won' ? 'Compilação bem-sucedida!' : 'Erro 404: Palavra não encontrada!'}</AlertDialogTitle>
            <AlertDialogDescription>
              {gameStatus === 'lost' && 'Falha na decodificação. '}A palavra era: <span className="font-bold text-foreground">{wordToGuess}</span>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction onClick={startNewGame}>Jogar de Novo</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
