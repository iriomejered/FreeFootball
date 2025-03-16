import { createContext, useContext, useState, useEffect } from 'react';
import { database } from '../firebase';
import { ref, push, update, remove, get, set } from 'firebase/database';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const cartRef = ref(database, 'cart');
        const snapshot = await get(cartRef);
        if (snapshot.exists()) {
          const data = snapshot.val();
          const cartArray = Object.keys(data).map(key => ({ id: key, ...data[key] }));
          setCart(cartArray);
        }
      } catch (e) {
        console.error('Error fetching cart: ', e);
      }
    };

    fetchCart();
  }, []);

  const addToCart = async (shirt) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(item => item.id === shirt.id);
      if (existingItem) {
        const newQuantity = Math.min(existingItem.quantity + 1, 999);
        return prevCart.map(item =>
          item.id === shirt.id ? { ...item, quantity: newQuantity } : item
        );
      } else {
        return [...prevCart, { ...shirt, quantity: 1 }];
      }
    });
    try {
      const cartRef = ref(database, `cart/${shirt.id}`);
      const snapshot = await get(cartRef);
      if (snapshot.exists()) {
        const data = snapshot.val();
        const newQuantity = Math.min(data.quantity + 1, 999);
        await update(cartRef, { quantity: newQuantity });
      } else {
        await set(cartRef, { ...shirt, quantity: 1 });
      }
    } catch (e) {
      console.error('Error adding document: ', e);
    }
  };

  const updateQuantity = async (id, quantity) => {
    const newQuantity = Math.min(quantity, 999);
    setCart((prevCart) =>
      prevCart.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
    try {
      const itemRef = ref(database, `cart/${id}`);
      await update(itemRef, { quantity: newQuantity });
    } catch (e) {
      console.error('Error updating document: ', e);
    }
  };

  const removeFromCart = async (id) => {
    setCart((prevCart) => prevCart.filter(item => item.id !== id));
    try {
      const itemRef = ref(database, `cart/${id}`);
      await remove(itemRef);
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