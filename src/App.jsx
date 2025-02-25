import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/home/Home'
import Shirts from './pages/shirts/Shirts'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navigate to="/home"/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/shirts' element={<Shirts/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
