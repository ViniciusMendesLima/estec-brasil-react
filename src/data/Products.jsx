const images = import.meta.glob('../assets/images/products/*.(webp|jpg|jpeg|png|avif)', {
  eager: true,
  import: 'default',
});


const productsMeta = [
  {
    file: 'armario-1',
    name: 'Armário de Aço',
    category: 'miscellaneous',
    price: 499.90,
    description: 'Armário de aço com 2 portas e prateleiras ajustáveis.',
  },
  {
    file: 'armario-2',
    name: 'Armário de Aço 2',
    category: 'miscellaneous',
    price: 499.90,
    description: 'Armário de aço com 2 portas e prateleiras ajustáveis.',
  },
{
    file: 'cadeira-1',
    name: 'Cadeira Ergonômica Preto Conforto',
    category: 'chair',
    price: 429.90,
    description: 'Cadeira ergonômica com ajuste de altura e encosto anatômico, ideal para escritórios.',
  },
  {
    file: 'cadeira-2',
    name: 'Cadeira Presidente Premium',
    category: 'chair',
    price: 699.90,
    description: 'Modelo presidente com apoio de braços acolchoado e base cromada giratória.',
  },
  {
    file: 'estante-1',
    name: 'Estante Modular 5 Prateleiras',
    category: 'miscellaneous',
    price: 299.90,
    description: 'Estante organizadora com 5 prateleiras ajustáveis, ideal para arquivos ou decoração.',
  },
  {
    file: 'estante-2',
    name: 'Estante Metálica Reforçada',
    category: 'miscellaneous',
    price: 379.90,
    description: 'Estante metálica com capacidade de até 150kg por prateleira. Excelente para almoxarifados.',
  },
  {
    file: 'mesa-1',
    name: 'Mesa Escritório Compacta',
    category: 'table',
    price: 359.90,
    description: 'Mesa ideal para home office, com tampo em MDF e estrutura em aço.',
  },
  {
    file: 'mesa-2',
    name: 'Mesa Reunião Oval',
    category: 'table',
    price: 799.90,
    description: 'Mesa oval para reuniões, comporta até 8 pessoas, acabamento premium.',
  },
  {
    file: 'mesa-3',
    name: 'Mesa Dobrável Portátil',
    category: 'table',
    price: 269.90,
    description: 'Mesa dobrável de fácil transporte, ideal para feiras e eventos temporários.',
  },
  {
    file: 'quadro-1',
    name: 'Quadro Branco Magnético',
    category: 'miscellaneous',
    price: 149.90,
    description: 'Quadro branco com superfície magnética e moldura em alumínio, acompanha kit de instalação.',
  },
  {
    file: 'quadro-2',
    name: 'Quadro de Avisos Cortiça',
    category: 'miscellaneous',
    price: 119.90,
    description: 'Quadro de avisos com base em cortiça natural e moldura resistente. Ideal para murais.',
  },
];

export const Products = productsMeta.map((product) => {
  const imagePath = Object.keys(images).find((path) =>
    path.includes(`${product.file}`)
  );
  const imageUrl = images[imagePath];

  return {
    ...product,
    imageUrl: imageUrl || null,
  }

  
})
