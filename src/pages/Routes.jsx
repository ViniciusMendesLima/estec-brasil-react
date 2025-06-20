import { BrowserRouter, Router, Routes } from 'react-router-dom'
import { Home } from './Home'


const AppRoutes = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Router exact path='/' element={<Home/>}/>
    </Routes>
    
    </BrowserRouter>
  )
}

export {AppRoutes}