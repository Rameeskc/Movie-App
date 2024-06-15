import Header from "./components/Header";
import Category from "./components/Category";
import Banner from "./components/Banner";
import SubHeading from "./components/SubHeading";
import MovieCard from "./components/MovieCard";
import Bottom from "./components/Bottom";
import Fot from "./components/Fot";
import './App.css'

function App() {
  return(
    <div className=" bg-black">
    <Header/>
    <Category/>
    <Banner/>
    <SubHeading/>
    <MovieCard/>
    <Bottom/>
    <Fot/>
  </div>
  )
  
}

export default App
