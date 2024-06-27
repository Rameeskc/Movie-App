import Category from "../../components/user/Category";
import Banner from "../../components/user/Banner";
import SubHeading from "../../components/user/SubHeading";
import MovieCard from "../../components/user/MovieCard";


function Home() {
  return(
    <div className=" bg-black">
  
    <Category/>
    <Banner/>
    <SubHeading/>
    <MovieCard/>
    
   
  
  </div>
  )
  
}

export default Home
