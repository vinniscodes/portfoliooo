const BODY_PARTS = [
  <div key="head" style={{ width: '50px', height: '50px', borderRadius: '100%', border: '10px solid currentColor', position: 'absolute', top: '50px', right: '-30px' }} />,
  <div key="body" style={{ width: '10px', height: '100px', background: 'currentColor', position: 'absolute', top: '100px', right: 0 }} />,
  <div key="right-arm" style={{ width: '100px', height: '10px', background: 'currentColor', position: 'absolute', top: '120px', right: '-100px', rotate: '-30deg', transformOrigin: 'left bottom' }} />,
  <div key="left-arm" style={{ width: '100px', height: '10px', background: 'currentColor', position: 'absolute', top: '120px', right: '10px', rotate: '30deg', transformOrigin: 'right bottom' }} />,
  <div key="right-leg" style={{ width: '100px', height: '10px', background: 'currentColor', position: 'absolute', top: '190px', right: '-90px', rotate: '60deg', transformOrigin: 'left bottom' }} />,
  <div key="left-leg" style={{ width: '100px', height: '10px', background: 'currentColor', position: 'absolute', top: '190px', right: 0, rotate: '-60deg', transformOrigin: 'right bottom' }} />,
];

type HangmanDrawingProps = {
  numberOfMistakes: number;
};

export function HangmanDrawing({ numberOfMistakes }: HangmanDrawingProps) {
  return (
    <div className="relative flex h-80 w-64 items-center justify-center">
      {/* Hangman Figure */}
      <div className="relative">
        {BODY_PARTS.slice(0, numberOfMistakes)}
      </div>

      {/* Gallows */}
      <div style={{ height: '50px', width: '10px', background: 'currentColor', position: 'absolute', top: 0, right: 0 }} />
      <div style={{ height: '10px', width: '200px', background: 'currentColor', marginLeft: '120px' }} />
      <div style={{ height: '300px', width: '10px', background: 'currentColor', marginLeft: '120px' }} />
      <div style={{ height: '10px', width: '250px', background: 'currentColor' }} />
    </div>
  );
}
