import { Button } from '@/components/ui/button';

const KEYS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

type KeyboardProps = {
  activeLetters: string[];
  inactiveLetters: string[];
  onSelectLetter: (letter: string) => void;
  disabled?: boolean;
};

export function Keyboard({
  activeLetters,
  inactiveLetters,
  onSelectLetter,
  disabled = false,
}: KeyboardProps) {
  return (
    <div className="grid grid-cols-7 gap-2 md:grid-cols-9">
      {KEYS.map((key) => {
        const isActive = activeLetters.includes(key);
        const isInactive = inactiveLetters.includes(key);
        return (
          <Button
            key={key}
            size="sm"
            variant={isActive ? 'default' : isInactive ? 'destructive' : 'outline'}
            className="aspect-square p-2 text-lg font-bold"
            onClick={() => onSelectLetter(key)}
            disabled={isActive || isInactive || disabled}
          >
            {key}
          </Button>
        );
      })}
    </div>
  );
}
