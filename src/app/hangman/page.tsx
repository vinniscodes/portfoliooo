'use client';

import { useState, useEffect, useCallback } from 'react';
import { getRandomWord } from '@/lib/words';
import { HangmanDrawing } from '@/components/hangman/hangman-drawing';
import { WordDisplay } from '@/components/hangman/word-display';
import { Keyboard } from '@/components/hangman/keyboard';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
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
      if (gameStatus !== 'playing' || guessedLetters.includes(letter)) return;
      setGuessedLetters((currentLetters) => [...currentLetters, letter]);
    },
    [guessedLetters, gameStatus]
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
    <div className="container mx-auto flex max-w-3xl flex-col items-center gap-8 p-4 py-12">
      <Card className="w-full">
        <CardHeader className="items-center text-center">
          <CardTitle className="text-3xl font-bold tracking-tight">Jogo da Forca</CardTitle>
          <CardDescription>Adivinhe a palavra secreta para vencer.</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col items-center gap-8">
          <HangmanDrawing numberOfMistakes={incorrectLetters.length} />

          {wordToGuess && <WordDisplay word={wordToGuess} guessedLetters={guessedLetters} reveal={isLoser} />}

          {(isWinner || isLoser) ? (
            <div className="flex flex-col items-center gap-4 text-center">
              <h2 className="text-2xl font-bold">
                {isWinner ? '🎉 Você Venceu! 🎉' : '😥 Você Perdeu! 😥'}
              </h2>
              <p className="text-muted-foreground">
                A palavra era: <span className="font-bold text-foreground">{wordToGuess}</span>
              </p>
              <Button onClick={startNewGame}>Jogar Novamente</Button>
            </div>
          ) : (
            <div className="w-full self-stretch pt-4">
              <Keyboard
                activeLetters={guessedLetters.filter((letter) => wordToGuess.includes(letter))}
                inactiveLetters={incorrectLetters}
                onSelectLetter={addGuessedLetter}
                disabled={gameStatus !== 'playing'}
              />
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
