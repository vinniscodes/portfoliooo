const BODY_PARTS = [
  <div key="head" className="absolute top-[50px] -right-[30px] h-[50px] w-[50px] rounded-full border-[10px] border-current" />,
  <div key="body" className="absolute top-[100px] right-0 h-[100px] w-[10px] bg-current" />,
  <div key="right-arm" className="absolute top-[120px] -right-[100px] h-[10px] w-[100px] origin-bottom-left -rotate-[30deg] bg-current" />,
  <div key="left-arm" className="absolute top-[120px] right-[10px] h-[10px] w-[100px] origin-bottom-right rotate-[30deg] bg-current" />,
  <div key="right-leg" className="absolute top-[190px] -right-[90px] h-[10px] w-[100px] origin-bottom-left rotate-[60deg] bg-current" />,
  <div key="left-leg" className="absolute top-[190px] right-0 h-[10px] w-[100px] origin-bottom-right -rotate-[60deg] bg-current" />,
];

type HangmanDrawingProps = {
  numberOfMistakes: number;
};

export function HangmanDrawing({ numberOfMistakes }: HangmanDrawingProps) {
  return (
    <div className="relative">
      {BODY_PARTS.slice(0, numberOfMistakes)}
      <div className="absolute top-0 right-0 h-[50px] w-[10px] bg-current" />
      <div className="ml-[120px] h-[10px] w-[200px] bg-current" />
      <div className="ml-[120px] h-[300px] w-[10px] bg-current" />
      <div className="h-[10px] w-[250px] bg-current" />
    </div>
  );
}
