import { useState } from "react";
import { FaStar } from "react-icons/fa";

const StarRating = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  return (
    <div className="rating-container">
      <h1>Rate Your Experience</h1>

      <div className="stars">
        {[1, 2, 3, 4, 5].map((star) => (
          <FaStar
            key={star}
            className={
              star <= (hover || rating)
                ? "star active"
                : "star"
            }
            onMouseEnter={() => setHover(star)}
            onMouseLeave={() => setHover(0)}
            onClick={() => setRating(star)}
          />
        ))}
      </div>

      <p className="rating-text">
        {rating > 0
          ? `You rated ${rating} star${
              rating > 1 ? "s" : ""
            }`
          : "Select a rating"}
      </p>
    </div>
  );
};

export default StarRating;