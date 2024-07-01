import React from "react";
import AdminHeading from "../../components/admin/AdminHeading";
import { Link, useNavigate } from "react-router-dom";
import { FaTrash } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { useMovies } from "../../Context/MovieContext";
import YouTube from "react-youtube";

const AdminHome = () => {
  const { movies , deleteMovie } = useMovies();
//   const navigate = useNavigate();

  // Function to extract YouTube ID from URL
  const getYouTubeId = (url) => {
    const regExp =
      /^.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[1].length === 11 ? match[1] : null;
  };

  const handleDelete = (movieId) => {
    deleteMovie(movieId)
  }

  return (
    <>
      <div className=" w-full h-16 flex items-center px-4 text-2xl justify-between ">
        <h1 className=" underline underline-offset-8">programs list</h1>
        <Link to="/Admin/MovieAdd">
          <button className=" h-[30px] w-32 bg-green-600 text-lg rounded">
            Add
          </button>
        </Link>
      </div>
      <div className=" w-full h-auto overflow-x-scroll scrollbar-none ">
        <table className=" w-full border">
          <thead>
            <tr className="border-solid border-2">
              <th className="border-solid border-2 border-gray-500">Name</th>
              <th className="border-solid border-2 border-gray-500">
                Language
              </th>
              <th className="border-solid border-2 border-gray-500">
                Description
              </th>
              <th className="border-solid border-2 border-gray-500">Trailer</th>
              <th className="border-solid border-2 border-gray-500">Image</th>
              <th className="border-solid border-2 border-gray-500">Actions</th>
            </tr>
          </thead>
          <tbody>
            {movies.map((movie) => (
              <tr className=" text-center ">
                <td className="border-solid border-2 text-center">
                  {movie.title}
                </td>
                <td className="border-solid border-2 text-center">
                  {movie.language}
                </td>
                <td className="border-solid border-2 text-center">
                  {movie.description}
                </td>
                <td className="border-solid border-2 text-center">
                  <YouTube
                    videoId={getYouTubeId(movie.trailer)}
                    opts={{
                      width: "200",
                      height: "150",
                      playerVars: { mute: 1 },
                    }}
                  />
                </td>
                <td className="border-solid border-2 text-center">
                  <img src={movie.image} alt="image" className="h-20 mx-auto" />
                </td>

                <td>
                <Link to={`/Admin/EditMovie/${movie.id}`}>
                  <button className="border-solid border-2 text-center  w-full h-full">
                    <FaEdit />
                  </button>
                </Link>
                <Link>
                  <button className="border-solid border-2 text-center"
                    onClick={()=>handleDelete(movie.id)} 
                  >
                    <FaTrash />
                  </button>
                </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AdminHome;
