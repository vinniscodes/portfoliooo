import { Donut } from 'lucide-react';

const DONUT_PARTS = [
  <Donut key="bite1" className="h-full w-full text-yellow-400" style={{ clipPath: 'inset(0 0 85% 0)' }} />,
  <Donut key="bite2" className="h-full w-full text-yellow-400" style={{ clipPath: 'inset(0 0 70% 0)' }} />,
  <Donut key="bite3" className="h-full w-full text-yellow-400" style={{ clipPath: 'inset(0 0 55% 0)' }} />,
  <Donut key="bite4" className="h-full w-full text-yellow-400" style={{ clipPath: 'inset(0 0 40% 0)' }} />,
  <Donut key="bite5" className="h-full w-full text-yellow-400" style={{ clipPath: 'inset(0 0 25% 0)' }} />,
  <Donut key="bite6" className="h-full w-full text-yellow-400" />,
];

type HangmanDrawingProps = {
  numberOfMistakes: number;
};

export function HangmanDrawing({ numberOfMistakes }: HangmanDrawingProps) {
  return (
    <div className="relative flex h-48 w-48 items-center justify-center sm:h-64 sm:w-64">
      {/* Base Donut (empty) */}
      <Donut className="absolute h-full w-full text-gray-300" />
      
      {/* Donut being eaten based on mistakes */}
      <div className="absolute h-full w-full transform -scale-x-100">
        {DONUT_PARTS.slice(0, numberOfMistakes).map((part, index) => (
          <div key={index} className="absolute h-full w-full">
            {part}
          </div>
        ))}
      </div>

       {/* Gallows are now just a decorative element */}
      <svg viewBox="0 0 350 350" className="absolute h-full w-full opacity-20">
        <line x1="140" y1="60" x2="250" y2="60" stroke="currentColor" strokeWidth="8" />
        <line x1="140" y1="60" x2="140" y2="300" stroke="currentColor" strokeWidth="8" />
        <line x1="250" y1="60" x2="250" y2="90" stroke="currentColor" strokeWidth="8" />
        <rect x="50" y="300" width="200" height="8" fill="currentColor" />
      </svg>
    </div>
  );
}
