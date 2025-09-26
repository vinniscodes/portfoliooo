const WORDS = [
  "HOMER",
  "MARGE",
  "BART",
  "LISA",
  "MAGGIE",
  "SPRINGFIELD",
  "MOE",
  "DUFF",
  "ROSQUINHA",
  "KRUSTY",
  "BURNS",
  "FLANDERS",
  "SKINNER",
  "MILHOUSE",
  "APU",
  "CHELM",
  "COMICHÃO",
  "KWIKEMART",
  "SHELBYVILLE",
  "DOH",
  "EXCELENTE"
];

export function getRandomWord() {
  // This should be done on the client to avoid hydration errors
  if (typeof window === 'undefined') {
    return WORDS[0];
  }
  const randomIndex = Math.floor(Math.random() * WORDS.length);
  return WORDS[randomIndex];
}
