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
  "COMICHÃO",
  "COÇADINHA",
  "KWIKEMART",
  "SHELBYVILLE",
  "DOH",
  "EXCELENTE",
  "AYCARAMBA",
  "PATTY",
  "SELMA",
  "ABRAHAM",
  "BARNEY",
  "WIGGUM",
  "NELSON",
  "TAUBERNA"
];

export function getRandomWord() {
  // This should be done on the client to avoid hydration errors
  if (typeof window === 'undefined') {
    return WORDS[0];
  }
  const randomIndex = Math.floor(Math.random() * WORDS.length);
  return WORDS[randomIndex];
}
