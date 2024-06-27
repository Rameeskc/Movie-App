
import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import { MovieProvider } from "./Context/MovieContext";
import User from './routes/User'
import Admin from './routes/Admin'
function App() {
  
  return(
    <>
    <BrowserRouter>
    <MovieProvider>
    <Routes>
    <Route path='/*' element={<User/>}/>
    <Route path='/Admin/*' element={<Admin/>}/>
    
      </Routes>
      </MovieProvider>
    </BrowserRouter>
    </>
  )
  
}

export default App
