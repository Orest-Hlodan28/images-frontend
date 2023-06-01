import React, { useEffect, useState } from 'react';

import styles from './index.module.css';

const Carousel = ({ images }: {
  images: { id: number; url: string; title: string }[]
}) => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === images.length - 1 ? 0 : prevSlide + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? images.length - 1 : prevSlide - 1));
  };

  console.log({ images })
  if (!images || !images.length) return <></>

  return (
    <div className={styles.container}>
      <div className={styles.slide_wrapper}>
        <div className={styles.container_slide}>
          <img src={'/arrow-left-circle.svg'}
               alt={'arrow-left'}
               className={styles.arrow_left}
               onClick={prevSlide}
          />
          {images.map((image, index) => (
            <img
              key={image.id}
              src={image.url}
              alt={`Image ${index}`}
              className={`${styles.slide} ${index === currentSlide ? styles.active : ''}`}
            />
          ))}
          <img src={'/arrow-right-circle.svg'}
               alt={'arrow-right'}
               className={styles.arrow_right}
               onClick={nextSlide}
          />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
