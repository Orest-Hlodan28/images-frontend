import styles from './index.module.css';

const Gallery = ({ images }: {
  images: { id: number; url: string; title: string }[]
}) => {

  return (
    <div className={styles.container}>
      {images.map((image, index) => (
        <div className={styles.img_container}>
          <img
            src={image.url}
            key={image.id}
            alt={`Image ${index}`}
          />
          <span>{image.title}</span>
        </div>
      ))}
    </div>
  )
}

export default Gallery
