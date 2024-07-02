import React, { useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import { useMovies } from "../../Context/MovieContext"; 
import YouTube from "react-youtube";
import { FaStar, FaRegStar, FaStarHalfAlt } from "react-icons/fa";

const MovieDetails = () => {
      const { movieId } = useParams();
      console.log(movieId);
    const { movies, addReview } = useMovies();
    const [rating, setRating] = useState(0);
    const [reviewText, setReviewText] = useState("");
    const [hover, setHover] = useState(null);

    const getYouTubeId = (url) => {
      const regExp =
        /^.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
      const match = url.match(regExp);
      return match && match[1].length === 11 ? match[1] : null;
    };
  

    const movie = movies.find((m) => m.id === movieId);
    // console.log(movie);
    const handleSubmit = useCallback(
      (e) => {
        e.preventDefault();
        if (reviewText != "" || undefined) {
          addReview(movieId, rating, reviewText);
        }
        setReviewText("");
        setRating(0);
      },
      [movieId, rating, reviewText, addReview]
    );

    const formatDate = (dateString) => {
      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Date(dateString).toLocaleDateString(undefined, options);
    };
    const renderStars = (rating) => {
      let stars = [];
      const fullStars = Math.floor(rating);
      const halfStar = rating % 1 >= 0.5 ? true : false;
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

    const stars = (rating) => {
      return [...Array(5)].map((_, index) => {
        return index < Math.floor(rating) ? (
          <FaStar key={index} className="text-yellow-400" />
        ) : (
          <FaRegStar key={index} className="text-gray-400" />
        );
      });
    };
  return (
    <div className="flex flex-col px-5 sm:px-10 pt-32 pb-40 gap-8 bg-black">
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-20">
        <div className="w-full">
          <YouTube
            videoId={getYouTubeId(movie.trailer)}
            opts={{
              height: "500",
              width: "100%",
              playerVars: { mute: 1 },
            }}
          />
        </div>
        <div className="flex flex-col items-center gap-5 justify-center lg:w-2/3">
          <h1 className="mt-2 text-3xl font-bold text-white">{movie.title}</h1>
          <h2 className="text-[#41adad] font-medium">language: {movie.language}</h2>
          <div className="flex gap-1 text-lg">
            {renderStars(avgRating(movie.reviews))}
          </div>
          <p className="text-gray-400 leading-7">{movie.description}</p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 mt-2">
            <p>Rate and review :</p>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-2 border-2 border-gray-900 p-3 rounded-md"
            >
              <div className="flex">
                {[...Array(5)].map((_, index) => (
                  <FaStar
                    key={index}
                    className={`cursor-pointer transition-colors duration-200 ${
                      index < (hover || rating)
                        ? "text-yellow-400"
                        : "text-gray-500"
                    }`}
                    onMouseEnter={() => setHover(index + 1)}
                    onMouseLeave={() => setHover(null)}
                    onClick={() => setRating(index + 1)}
                  />
                ))}
              </div>
              <textarea
                name="review"
                value={reviewText}
                onChange={(e) => setReviewText(e.target.value)}
                cols="30"
                rows="3"
                className="bg-gray-900 pl-1 placeholder:text-gray-600 text-white"
                placeholder="Write your review here..."
              ></textarea>
              <button
              type="submit"
              className="w-full bg-[#db4a2b] hover:bg-slate-500 hover:text-white hover:border-[#004c4c] hover:border-2 duration-150 mt-1"
            >Submit</button>
              
            </form>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-5 text-white">
        <h2>User Reviews :</h2>
        <div className="px-10 sm:px-0 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-10">
          {movie?.reviews.map((rev, index) => (
            <div
              key={index}
              className="border-2 p-2 rounded-md border-gray-900 flex gap-5 justify-between"
            >
              <div className="flex flex-col gap-2">
                <div className="flex gap-1">{stars(rev.rating)}</div>
                <p className="text-[#41adad] font-medium">{rev.review}</p>
              </div>
              <p className="text-gray-500">{formatDate(rev.date)}</p>
            </div>
          ))}
          {movie.reviews.date}
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
