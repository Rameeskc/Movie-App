import React from 'react';
import MovieForm from "../../components/admin/MovieForm";
import { useMovies } from "../../Context/MovieContext";
import { useNavigate } from "react-router-dom";

const MovieAdd = () => {

  const { addMovie } = useMovies();
  const navigate = useNavigate();

  const initialValues = {
    title: "",
    language: "",
    description: "",
    trailer: "",
    image: "",
    reviews: [],
  };

  const handleSubmit = (values) => {
    addMovie(values)
    navigate("/Admin/Home")
    console.log(values);
  };

  return (
    <div className="movie-form-container">
      <MovieForm
        initialValues={initialValues}
        onSubmit={handleSubmit}
        buttonLabel="Add Movie"
      />
    </div>
  );
}

export default MovieAdd;
