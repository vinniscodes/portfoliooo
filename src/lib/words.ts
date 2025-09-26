const WORDS = [
  "JAVASCRIPT",
  "REACT",
  "NEXTJS",
  "TYPESCRIPT",
  "TAILWIND",
  "NODEJS",
  "HTML",
  "CSS",
  "GIT",
  "GITHUB",
  "API",
  "COMPONENT",
  "PROPS",
  "STATE",
  "HOOKS",
  "CONTEXT",
  "ROUTING",
  "SERVER",
  "CLIENT",
  "DATABASE",
  "AUTHENTICATION",
  "DEPLOYMENT",
  "RESPONSIVE",
  "DEBUGGING",
  "FRAMEWORK",
  "LIBRARY",
  "PACKAGE",
  "MODULE",
  "FUNCTION",
  "VARIABLE",
  "ARRAY",
  "OBJECT",
  "VIOLET",
  "MAGENTA"
];

export function getRandomWord() {
  // This should be done on the client to avoid hydration errors
  if (typeof window === 'undefined') {
    return WORDS[0];
  }
  const randomIndex = Math.floor(Math.random() * WORDS.length);
  return WORDS[randomIndex];
}
