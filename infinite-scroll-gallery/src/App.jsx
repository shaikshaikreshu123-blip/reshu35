import { useEffect, useState } from "react";
import { fetchImages } from "./services/imageService";
import ImageCard from "./components/ImageCard";
import Loader from "./components/Loader";
import "./App.css";

function App() {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const loadImages = async () => {
    try {
      setLoading(true);

      const data = await fetchImages(page);

      setImages((prev) => [...prev, ...data]);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadImages();
  }, [page]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.scrollY;

      const windowHeight =
        window.innerHeight;

      const fullHeight =
        document.documentElement.scrollHeight;

      if (
        scrollTop + windowHeight >=
        fullHeight - 200
      ) {
        setPage((prev) => prev + 1);
      }
    };

    window.addEventListener(
      "scroll",
      handleScroll
    );

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, []);

  return (
    <div className="app">
      <h1>Infinite Scroll Gallery</h1>

      <div className="gallery">
        {images.map((image) => (
          <ImageCard
            key={image.id + Math.random()}
            image={image}
          />
        ))}
      </div>

      {loading && <Loader />}
    </div>
  );
}

export default App;