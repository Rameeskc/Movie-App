import React from "react";
import { FaStar, FaRegStar, FaStarHalfAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const MovieCard = React.memo(({ movie }) => {
  const renderStars = (rating) => {
    let stars = [];
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        stars.push(<FaStar key={i} className="text-yellow-400" />);
      } else if (i === fullStars + 1 && halfStar) {
        stars.push(<FaStarHalfAlt key={i} className="text-yellow-400" />);
      } else {
        stars.push(<FaRegStar key={i} className="text-gray-400" />);
      }
    }
    return stars;
  };

  const avgRating = (reviews) => {
    if (!reviews || reviews.length === 0) return 0;
    const total = reviews.reduce((acc, review) => acc + review.rating, 0);
    return total / reviews.length;
  };

  return (
    <Link to={`/MovieDetails/${movie.id}`}>
      <div className="relative min-w-40 h-56 rounded group">
        <img
          src={movie.image}
          alt={movie.title}
          className="w-full h-full object-cover rounded duration-200 group-hover:opacity-50"
        />
        <div className="absolute inset-0 flex items-end justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 py-4">
          <div className="flex bg-black bg-opacity-75 text-yellow-400 px-2 py-2 rounded">
            {renderStars(avgRating(movie.reviews))}
          </div>
        </div>
      </div>
    </Link>
  );
});

export default MovieCard;