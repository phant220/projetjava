import { useEffect, useState } from "react";

const images = [
  "https://picsum.photos/1200/400?random=1",
  "https://picsum.photos/1200/400?random=2",
  "https://picsum.photos/1200/400?random=3",
  "https://picsum.photos/1200/400?random=4",
  "https://picsum.photos/1200/400?random=5",
  "https://picsum.photos/1200/400?random=6",
  "https://picsum.photos/1200/400?random=7",
];

const ImageSlider = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={styles.slider}>
      <img src={images[index]} alt="hotel" style={styles.image} />
    </div>
  );
};

const styles = {
  slider: {
    height: "400px",
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
};

export default ImageSlider;
