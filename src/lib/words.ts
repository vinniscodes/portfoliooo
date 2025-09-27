const WORDS = [
  "CASA",
  "CARRO",
  "MESA",
  "CADEIRA",
  "COMPUTADOR",
  "LIVRO",
  "ESCOLA",
  "TRABALHO",
  "FAMILIA",
  "AMIGO",
  "COMIDA",
  "AGUA",
  "SOL",
  "LUA",
  "ESTRELA",
  "CIDADE",
  "PAIS",
  "MUNDO",
  "BRASIL",
  "FUTEBOL",
  "MUSICA",
  "FILME",
  "VIAGEM",
  "PRAIA",
  "MONTANHA",
  "FLORESTA",
  "ANIMAL",
  "GATO",
  "CACHORRO",
  "PASSARO"
];

export function getRandomWord() {
  if (typeof window === 'undefined') {
    return WORDS[0];
  }
  const randomIndex = Math.floor(Math.random() * WORDS.length);
  return WORDS[randomIndex];
}
