import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const BITE_CLIP_PATHS = [
  'inset(0 0 85% 0)',
  'inset(0 0 70% 0)',
  'inset(0 0 55% 0)',
  'inset(0 0 40% 0)',
  'inset(0 0 25% 0)',
  'inset(0 0 0 0)',
];

type HangmanDrawingProps = {
  numberOfMistakes: number;
};

export function HangmanDrawing({ numberOfMistakes }: HangmanDrawingProps) {
  const donutImage = PlaceHolderImages.find((img) => img.id === 'donut');

  return (
    <div className="relative flex h-48 w-48 items-center justify-center sm:h-64 sm:w-64">
      {donutImage && (
        <>
          {/* Base Donut (empty placeholder) */}
          <Image
            src={donutImage.imageUrl}
            alt="Donut base"
            width={256}
            height={256}
            className="absolute h-full w-full opacity-30"
            data-ai-hint={donutImage.imageHint}
          />

          {/* Donut being eaten */}
          <div
            className="absolute h-full w-full"
            style={{ clipPath: BITE_CLIP_PATHS[numberOfMistakes] }}
          >
            <Image
              src={donutImage.imageUrl}
              alt="Donut being eaten"
              width={256}
              height={256}
              className="h-full w-full"
            />
          </div>
        </>
      )}

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
