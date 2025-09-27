type WordDisplayProps = {
  word: string;
  guessedLetters: string[];
  reveal?: boolean;
};

export function WordDisplay({ word, guessedLetters, reveal = false }: WordDisplayProps) {
  return (
    <div className="flex gap-2 text-4xl font-bold font-mono tracking-widest sm:gap-4 sm:text-5xl">
      {word.split('').map((letter, index) => (
        <span key={index} className="border-b-4 border-foreground pb-2 w-10 text-center">
          <span
            className={`${
              guessedLetters.includes(letter) || reveal ? 'visible' : 'invisible'
            } ${
              !guessedLetters.includes(letter) && reveal ? 'text-destructive' : 'text-foreground'
            }`}
          >
            {letter}
          </span>
        </span>
      ))}
    </div>
  );
}
