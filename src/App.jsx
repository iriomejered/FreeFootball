import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/home/Home'
import Shirts from './pages/shirts/Shirts'
import Matches from './pages/matches/Matches'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navigate to="/home"/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/shirts' element={<Shirts/>}/>
        <Route path='/matches' element={<Matches/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
