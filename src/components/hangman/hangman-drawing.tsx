const HEAD = (
  <circle key="head" cx="250" cy="90" r="30" stroke="currentColor" strokeWidth="8" fill="none" />
);

const BODY = (
  <line key="body" x1="250" y1="120" x2="250" y2="220" stroke="currentColor" strokeWidth="8" />
);

const RIGHT_ARM = (
  <line key="right-arm" x1="250" y1="150" x2="310" y2="120" stroke="currentColor" strokeWidth="8" />
);

const LEFT_ARM = (
  <line key="left-arm" x1="250" y1="150" x2="190" y2="120" stroke="currentColor" strokeWidth="8" />
);

const RIGHT_LEG = (
  <line key="right-leg" x1="250" y1="220" x2="290" y2="270" stroke="currentColor" strokeWidth="8" />
);

const LEFT_LEG = (
  <line key="left-leg" x1="250" y1="220" x2="210" y2="270" stroke="currentColor" strokeWidth="8" />
);

const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG];

type HangmanDrawingProps = {
  numberOfMistakes: number;
};

export function HangmanDrawing({ numberOfMistakes }: HangmanDrawingProps) {
  return (
    <div className="relative">
      <svg viewBox="0 0 350 350" className="w-48 h-48 sm:w-64 sm:h-64">
        {BODY_PARTS.slice(0, numberOfMistakes)}
        {/* Gallows */}
        <line x1="140" y1="60" x2="250" y2="60" stroke="currentColor" strokeWidth="8" />
        <line x1="140" y1="60" x2="140" y2="300" stroke="currentColor" strokeWidth="8" />
        <line x1="250" y1="60" x2="250" y2="90" stroke="currentColor" strokeWidth="8" />
        <rect x="50" y="300" width="200" height="8" fill="currentColor" />
      </svg>
    </div>
  );
}
