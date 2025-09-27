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
    <div className="container mx-auto flex max-w-2xl flex-col items-center gap-8 p-4 py-12">
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight">Jogo da Forca</h1>
        <p className="text-muted-foreground">Adivinhe a palavra secreta para vencer.</p>
      </div>

      <HangmanDrawing numberOfMistakes={incorrectLetters.length} />

      {wordToGuess && <WordDisplay word={wordToGuess} guessedLetters={guessedLetters} reveal={isLoser} />}

      <div className="w-full self-stretch pt-4">
        <Keyboard
          activeLetters={guessedLetters.filter((letter) => wordToGuess.includes(letter))}
          inactiveLetters={incorrectLetters}
          onSelectLetter={addGuessedLetter}
          disabled={isWinner || isLoser}
        />
      </div>

      <AlertDialog open={gameStatus !== 'playing'}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>{gameStatus === 'won' ? 'Você Venceu!' : 'Você Perdeu!'}</AlertDialogTitle>
            <AlertDialogDescription>
              {gameStatus === 'lost' && `Você cometeu muitos erros. `}A palavra correta era: <span className="font-bold text-foreground">{wordToGuess}</span>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction onClick={startNewGame}>Jogar Novamente</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
