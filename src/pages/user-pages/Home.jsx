import React, { useEffect, useState, useMemo } from "react";
import Banner from "../../components/user/Banner";
import MovieCard from "../../components/user/MovieCard";
import { VscDebugRestart } from "react-icons/vsc";
import { FaStar } from "react-icons/fa";
import { useMovies } from "../../Context/MovieContext";

function Home() {
  const { movies } = useMovies();
  const [filtermovies, setFilterMovies] = useState([]);

  const avgRating = useMemo(
    () => (reviews) => {
      if (!reviews || reviews.length === 0) return 0;
      const totalRating = reviews.reduce((acc, review) => acc + review.rating, 0);
      return totalRating / reviews.length;
    },
    []
  );

  useEffect(() => {
    const ratedMovies = movies.map((movie) => ({
      ...movie,
      avgRating: avgRating(movie.reviews),
    }));
    setFilterMovies(ratedMovies);
  }, [movies, avgRating]);

  const handleFilter = (ratingCondition) => {
    setFilterMovies(
      movies.filter((movie) => ratingCondition(avgRating(movie.reviews)))
    );
  };

  const handleReset = () => {
    setFilterMovies(movies);
  };

  return (
    <div className="bg-black">
      <Banner />

      <div className="w-auto h-16 bg-black flex items-center px-6">
        <button className="text-gray-500 bg-[#262728] px-3 rounded-full mx-1 lg:hover:bg-[#db4a2b] lg:hover:text-white duration-200 flex items-center"
          onClick={() => handleFilter((rating) => rating === 5)}>
          Rating 5 <FaStar />
        </button>
        <button className="text-gray-500 bg-[#262728] px-3 rounded-full mx-1 lg:hover:bg-[#db4a2b] lg:hover:text-white duration-200 flex items-center"
          onClick={() => handleFilter((rating) => rating > 3)}>
          Above 3 <FaStar />
        </button>
        <button className="text-gray-500 bg-[#262728] px-3 rounded-full mx-1 lg:hover:bg-[#db4a2b] lg:hover:text-white duration-200 flex items-center"
          onClick={() => handleFilter((rating) => rating < 3)}>
          Below 3 <FaStar />
        </button>
        <button className="text-gray-500 bg-[#262728] px-3 rounded-full mx-1 lg:hover:bg-[#db4a2b] lg:hover:text-white duration-200 flex items-center"
          onClick={handleReset}>
          Reset
          <VscDebugRestart />
        </button>
      </div>

      <div className="flex px-2 gap-2 py-2 overflow-x-scroll scrollbar-none">
        {filtermovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default Home;