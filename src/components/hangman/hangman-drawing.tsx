const HEAD = (
  <div
    key="head"
    style={{
      position: 'absolute',
      top: '50px',
      right: '-30px',
      width: '70px',
      height: '70px',
      borderRadius: '50%',
      border: '8px solid hsl(var(--foreground))',
    }}
  />
);

const BODY = (
  <div
    key="body"
    style={{
      position: 'absolute',
      top: '112px',
      right: '0px',
      width: '8px',
      height: '100px',
      background: 'hsl(var(--foreground))',
    }}
  />
);

const RIGHT_ARM = (
  <div
    key="right-arm"
    style={{
      position: 'absolute',
      top: '140px',
      right: '-80px',
      width: '80px',
      height: '8px',
      background: 'hsl(var(--foreground))',
      transform: 'rotate(-30deg)',
      transformOrigin: 'left bottom',
    }}
  />
);

const LEFT_ARM = (
  <div
    key="left-arm"
    style={{
      position: 'absolute',
      top: '140px',
      right: '8px',
      width: '80px',
      height: '8px',
      background: 'hsl(var(--foreground))',
      transform: 'rotate(30deg)',
      transformOrigin: 'right bottom',
    }}
  />
);

const RIGHT_LEG = (
  <div
    key="right-leg"
    style={{
      position: 'absolute',
      top: '204px',
      right: '-72px',
      width: '80px',
      height: '8px',
      background: 'hsl(var(--foreground))',
      transform: 'rotate(60deg)',
      transformOrigin: 'left top',
    }}
  />
);

const LEFT_LEG = (
  <div
    key="left-leg"
    style={{
      position: 'absolute',
      top: '204px',
      right: '0px',
      width: '80px',
      height: '8px',
      background: 'hsl(var(--foreground))',
      transform: 'rotate(-60deg)',
      transformOrigin: 'right top',
    }}
  />
);

const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG];

type HangmanDrawingProps = {
  numberOfMistakes: number;
};

export function HangmanDrawing({ numberOfMistakes }: HangmanDrawingProps) {
  return (
    <div style={{ position: 'relative', height: '280px', width: '250px' }}>
      {BODY_PARTS.slice(0, numberOfMistakes)}
      <div
        style={{
          height: '50px',
          width: '8px',
          background: 'hsl(var(--foreground))',
          position: 'absolute',
          top: 0,
          right: 0,
        }}
      />
      <div
        style={{
          height: '8px',
          width: '200px',
          background: 'hsl(var(--foreground))',
          marginLeft: '82px',
        }}
      />
      <div
        style={{
          height: '280px',
          width: '8px',
          background: 'hsl(var(--foreground))',
          marginLeft: '82px',
        }}
      />
      <div style={{ height: '8px', width: '250px', background: 'hsl(var(--foreground))' }} />
    </div>
  );
}
