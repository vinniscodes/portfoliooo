const THREAT_LEVELS = [
  'NÍVEL DE AMEAÇA: 0/6 - Sistemas nominais.',
  'NÍVEL DE AMEAÇA: 1/6 - Tentativa de intrusão detectada.',
  'NÍVEL DE AMEAÇA: 2/6 - Firewall primário sob ataque.',
  'NÍVEL DE AMEAÇA: 3/6 - Contramedidas de segurança ativadas.',
  'NÍVEL DE AMEAÇA: 4/6 - Alerta de violação! Rastreando origem...',
  'NÍVEL DE AMEAÇA: 5/6 - Bloqueio do sistema iminente!',
  'NÍVEL DE AMEAÇA: 6/6 - SISTEMA BLOQUEADO. RASTREAMENTO COMPLETO.',
];

type HangmanDrawingProps = {
  numberOfMistakes: number;
};

export function HangmanDrawing({ numberOfMistakes }: HangmanDrawingProps) {
  return (
    <div className="relative w-full rounded-md border border-primary/20 bg-card p-4 text-left font-mono text-sm text-green-400">
      <div className="absolute top-2 right-2 h-2 w-2 animate-ping rounded-full bg-destructive" />
      <p className="font-bold text-primary">> Status da Conexão:</p>
      <div className="mt-2 pl-2">
        {THREAT_LEVELS.slice(0, numberOfMistakes + 1).map((level, index) => (
           <p key={index} className={index === numberOfMistakes ? 'text-destructive animate-pulse' : ''}>
             {`> ${level}`}
           </p>
        ))}
      </div>
    </div>
  );
}
