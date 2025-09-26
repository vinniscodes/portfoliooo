const WORDS = [
  "ABACAXI",
  "BANANA",
  "CACHORRO",
  "COMPUTADOR",
  "ELEFANTE",
  "ESCOLA",
  "FUTEBOL",
  "GARRAFA",
  "GATO",
  "JANELA",
  "LARANJA",
  "LIVRO",
  "MACACO",
  "MONTANHA",
  "PRAIA",
  "TRABALHO",
  "BICICLETA",
  "CADEIRA",
  "MUSICA",
  "VIAGEM",
  "BRASIL",
  "PIZZA",
  "CHOCOLATE",
  "TELEFONE",
  "JARDIM",
  "FLORESTA",
  "CARNAVAL",
  "SAMBA",
  "AMIZADE",
  "FAMILIA"
];

export function getRandomWord() {
  // This should be done on the client to avoid hydration errors
  if (typeof window === 'undefined') {
    return WORDS[0];
  }
  const randomIndex = Math.floor(Math.random() * WORDS.length);
  return WORDS[randomIndex];
}
