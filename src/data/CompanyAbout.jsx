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