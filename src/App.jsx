import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/home/Home';
import Shirts from './pages/shirts/Shirts';
import Matches from './pages/matches/Matches';
import Cart from './pages/cart/Cart';
import { CartProvider } from './services/cartService';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navigate to="/home"/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/shirts' element={<Shirts/>}/>
          <Route path='/matches' element={<Matches/>}/>
          <Route path='/cart' element={<Cart/>}/>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;