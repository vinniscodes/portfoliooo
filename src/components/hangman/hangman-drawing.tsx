const HEAD = (
  <div
    key="head"
    className="absolute top-[50px] right-[-30px] h-[70px] w-[70px] rounded-full border-8 border-foreground"
  />
);

const BODY = (
  <div
    key="body"
    className="absolute top-[120px] right-0 h-[100px] w-2 bg-foreground"
  />
);

const RIGHT_ARM = (
  <div
    key="right-arm"
    className="absolute top-[150px] right-[-90px] h-2 w-[90px] -rotate-45 transform bg-foreground"
  />
);

const LEFT_ARM = (
  <div
    key="left-arm"
    className="absolute top-[150px] right-0 h-2 w-[90px] rotate-45 transform bg-foreground"
  />
);

const RIGHT_LEG = (
  <div
    key="right-leg"
    className="absolute top-[210px] right-[-80px] h-2 w-[100px] rotate-60 transform bg-foreground"
  />
);

const LEFT_LEG = (
  <div
    key="left-leg"
    className="absolute top-[210px] right-[-10px] h-2 w-[100px] -rotate-60 transform bg-foreground"
  />
);


const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG];

type HangmanDrawingProps = {
  numberOfMistakes: number;
};

export function HangmanDrawing({ numberOfMistakes }: HangmanDrawingProps) {
  return (
    <div className="relative h-64">
      {BODY_PARTS.slice(0, numberOfMistakes)}
      <div
        className="absolute top-0 right-0 h-[50px] w-2 bg-foreground"
      />
      <div
        className="ml-[100px] h-2 w-[200px] bg-foreground"
      />
      <div
        className="ml-[100px] h-[300px] w-2 bg-foreground"
      />
      <div className="h-2 w-[250px] bg-foreground" />
    </div>
  );
}
