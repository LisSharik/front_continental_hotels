import React from 'react';


interface BannerProps {
  imageUrls: string[];
}



const Banner: React.FC<BannerProps> = ({ imageUrls }) => {
  
  // Verificar si hay solo una imagen
  if (imageUrls.length === 1) {
    // Si solo hay una imagen, mostrar solo esa imagen
    return (
        <img src={imageUrls[0]} alt="Banner" className='w-full h-full object-cover' />
    );
  }


  // Renderizar carrusel de imágenes
  return (
    <h1>En teoria sera un carrucel</h1>
  );
  
}

export default Banner;
