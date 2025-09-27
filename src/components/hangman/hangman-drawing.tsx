const HEAD = (
  <div
    key="head"
    style={{
      textShadow: '0 0 10px hsl(var(--primary))',
    }}
    className="absolute top-[38px] right-[73px] h-10 w-10 rounded-full border-4 border-primary"
  />
);

const BODY = (
  <div
    key="body"
    style={{
      boxShadow: '0 0 10px hsl(var(--primary))',
    }}
    className="absolute top-[78px] right-[91px] h-[70px] w-1 bg-primary"
  />
);

const RIGHT_ARM = (
  <div
    key="right-arm"
    style={{
      boxShadow: '0 0 10px hsl(var(--primary))',
    }}
    className="absolute top-[90px] right-[25px] h-1 w-[70px] -rotate-45 transform bg-primary"
  />
);

const LEFT_ARM = (
  <div
    key="left-arm"
    style={{
      boxShadow: '0 0 10px hsl(var(--primary))',
    }}
    className="absolute top-[90px] right-[95px] h-1 w-[70px] rotate-45 transform bg-primary"
  />
);

const RIGHT_LEG = (
  <div
    key="right-leg"
    style={{
      boxShadow: '0 0 10px hsl(var(--primary))',
    }}
    className="absolute top-[140px] right-[35px] h-1 w-[60px] rotate-45 transform bg-primary"
  />
);

const LEFT_LEG = (
  <div
    key="left-leg"
    style={{
      boxShadow: '0 0 10px hsl(var(--primary))',
    }}
    className="absolute top-[140px] right-[85px] h-1 w-[60px] -rotate-45 transform bg-primary"
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
        style={{
          boxShadow: '0 0 10px hsl(var(--primary))',
        }}
        className="absolute top-0 right-[92px] h-10 w-1 bg-primary"
      />
      <div
        style={{
          boxShadow: '0 0 10px hsl(var(--primary))',
        }}
        className="ml-[90px] h-1 w-[150px] bg-primary"
      />
      <div
        style={{
          boxShadow: '0 0 10px hsl(var(--primary))',
        }}
        className="ml-[90px] h-[250px] w-1 bg-primary"
      />
      <div className="h-1 w-[200px] bg-primary" />
    </div>
  );
}
