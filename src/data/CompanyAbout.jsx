// import missaoImg from '../assets/images/company/missao.webp';
// import visaoImg from '../assets/images/company/visao.webp';
// import valoresImg from '../assets/images/company/valores.webp';

// const CompanyAbout = [
//   {
//     name: "Missao",
//     imageUrl: missaoImg,
//   },
//   {
//     name: "Visao",
//     imageUrl: visaoImg,
//   },
//   {
//     name: "Valores",
//     imageUrl: valoresImg,
//   },
// ];

// export { CompanyAbout };

const images = import.meta.glob('../assets/images/company/*.(webp|jpg|jpeg|png)', {
  eager: true,
  import: 'default',
});

export const CompanyAbout = Object.entries(images).map(([path, image]) => {
  const name = path.split('/').pop().replace('.webp', '');
  return {
    name: name.charAt(0).toUpperCase() + name.slice(1),
    imageUrl: image,
  };
});