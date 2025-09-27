const WORDS = [
  'CASA',
  'CARRO',
  'MOTO',
  'BICICLETA',
  'COMPUTADOR',
  'TECLADO',
  'MOUSE',
  'MONITOR',
  'CELULAR',
  'LIVRO',
  'CADERNO',
  'CANETA',
  'GARRAFA',
  'COPO',
  'PRATO',
  'GARFO',
  'FACA',
  'COLHER',
  'JANELA',
  'PORTA',
  'PAREDE',
  'TETO',
  'CHAO',
  'CADEIRA',
  'MESA',
  'SOFA',
  'CAMA',
  'ARMARIO',
  'GELADEIRA',
  'FOGAO',
  'MICROONDAS',
  'TELEVISAO',
  'RADIO',
  'VENTILADOR',
  'ARCONDICIONADO',
  'CHUVEIRO',
  'TORNEIRA'
];


export function getRandomWord() {
  if (typeof window === 'undefined') {
    return WORDS[0];
  }
  const randomIndex = Math.floor(Math.random() * WORDS.length);
  return WORDS[randomIndex];
}
