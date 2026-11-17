import "./ImageCard.css";

function ImageCard({ image }) {
  return (
    <div className="image-card">
      <img
        src={image.download_url}
        alt={image.author}
      />

      <div className="overlay">
        <h4>{image.author}</h4>
      </div>
    </div>
  );
}

export default ImageCard;