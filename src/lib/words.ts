const WORDS = [
  "API",
  "JAVASCRIPT",
  "TYPESCRIPT",
  "REACT",
  "NODEJS",
  "HTML",
  "CSS",
  "FRAMEWORK",
  "BIBLIOTECA",
  "COMPONENTE",
  "ALGORITMO",
  "DATABASE",
  "SERVIDOR",
  "CLIENTE",
  "FRONTEND",
  "BACKEND",
  "DEBUG",
  "COMPILAR",
  "GIT",
  "GITHUB",
  "TERMINAL",
  "RESPONSIVO",
  "INTERFACE",
  "DEPLOY",
  "CLOUD",
  "DOCKER",
  "KUBERNETES",
  "AUTENTICACAO",
  "CACHE",
  "QUERY"
];

export function getRandomWord() {
  if (typeof window === 'undefined') {
    return WORDS[0];
  }
  const randomIndex = Math.floor(Math.random() * WORDS.length);
  return WORDS[randomIndex];
}
