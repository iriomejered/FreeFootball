import { createContext, useContext, useState } from 'react';
import { database } from '../firebase';
import { ref, push, update, remove } from 'firebase/database';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = async (shirt) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(item => item.id === shirt.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.id === shirt.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...shirt, quantity: 1 }];
      }
    });
    try {
      const cartRef = ref(database, 'cart');
      await push(cartRef, shirt);
    } catch (e) {
      console.error('Error adding document: ', e);
    }
  };

  const updateQuantity = (id, quantity) => {
    setCart((prevCart) =>
      prevCart.map(item =>
        item.id === id ? { ...item, quantity: quantity } : item
      )
    );
    try {
      const itemRef = ref(database, `cart/${id}`);
      update(itemRef, { quantity });
    } catch (e) {
      console.error('Error updating document: ', e);
    }
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter(item => item.id !== id));
    try {
      const itemRef = ref(database, `cart/${id}`);
      remove(itemRef);
    } catch (e) {
      console.error('Error removing document: ', e);
    }
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, updateQuantity, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}