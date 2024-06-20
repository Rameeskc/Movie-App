
import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import User from './routes/User'
import Admin from './routes/Admin'
function App() {
  
  return(
    <>
    <BrowserRouter>
    <Routes>
    <Route path='/*' element={<User/>}/>
    <Route path='/Admin/*' element={<Admin/>}/>
    
      </Routes>
    </BrowserRouter>
    </>
  )
  
}

export default App
