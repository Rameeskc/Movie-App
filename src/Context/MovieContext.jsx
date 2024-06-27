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

  return (
    <MovieContext.Provider
    value={{
        movies,addMovie,
    }}
    >
        {children}
    </MovieContext.Provider>
  );
}


export function useMovies() {
    return useContext(MovieContext);
  }