import React from 'react'
import MovieForm from "../../components/admin/MovieForm";
import { useMovies } from "../../Context/MovieContext";
import { useNavigate , useParams } from "react-router-dom";

const EditMovie = () => {
    const navigate = useNavigate()
    const {movieId} = useParams()
    const { movies , updateMovie }=useMovies()
    const movie = movies.find((m) => m.id === movieId);

    const initialValues ={
        title:movie?.title || "",
        language:movie?.language || "",
        description:movie?.description || "",
        trailer:movie?.trailer || "",
        image:movie?.image || "",
        
    };

    const handleSubmit =(values)=>{
      updateMovie(movieId,values);
      navigate('/Admin/Home')
    }

  return (
    <div className="movie-form-container">
        <MovieForm
            initialValues={initialValues}
            onSubmit={handleSubmit}
            buttonLabel="Update"
        />
    </div>
  )
}

export default EditMovie