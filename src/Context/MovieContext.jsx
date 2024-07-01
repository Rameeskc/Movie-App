import react, { createContext, useState, useEffect, useContext } from "react"
const MovieContext = createContext();
export function MovieProvider({ children }) {
    const [movies, setMovies] = useState(() => {
        const localData = localStorage.getItem("movies");
        return localData ? JSON.parse(localData) : [];
      });
      useEffect(() => {
        localStorage.setItem("movies", JSON.stringify(movies));
      }, [movies]);

      // Add movie
    const addMovie = (movie) => {
        const newMovie = {
        ...movie,
        reviews: movie.reviews || [],
        id: new Date().toISOString(),
        };
    // Add the new movie to the previous array (Array concatenation using spread)
    setMovies((prevMovies) => [...prevMovies, newMovie]);
      };

    // Update Movie
    const updateMovie = (movieId,updatedMovieData)=> {
      setMovies((prevMovies) => {
        return prevMovies.map((movie) => {
          if (movie.id === movieId) {
            const reviews = updatedMovieData.reviews || movie.reviews;
            return { ...movie, ...updatedMovieData, reviews };
          }
          return movie;
        });
      });
    };

    const deleteMovie = (movieId)=>{
      
    };

  return (
    <MovieContext.Provider
    value={{
        movies,addMovie,updateMovie,
    }}
    >
        {children}
    </MovieContext.Provider>
  );
}


export function useMovies() {
    return useContext(MovieContext);
  }