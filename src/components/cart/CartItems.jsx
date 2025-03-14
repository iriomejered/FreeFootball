import React from 'react';
import { useCart } from '../../services/cartService';
import './CartItems.css';

function CartItems() {
  const { cart, updateQuantity, removeFromCart } = useCart();

  const handleQuantityChange = (id, quantity) => {
    if (quantity >= 0) {
      updateQuantity(id, quantity);
    }
  };

  const handleRemove = (id) => {
    removeFromCart(id);
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + parseFloat(item.price.replace('$', '')) * item.quantity, 0).toFixed(2);
  };

  return (
    <div className="cart-background">
      <div className="cart">
        {cart.length === 0 ? (
          <p>El carrito está vacío</p>
        ) : (
          <>
            <ul>
              {cart.map((item, index) => (
                <li key={index} className="cart-item">
                  <span>{item.name} - ${item.price}</span>
                  <div className="quantity-controls">
                    <button onClick={() => handleQuantityChange(item.id, item.quantity - 1)}>-</button>
                    <input
                      type="text"
                      value={item.quantity}
                      onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
                    />
                    <button onClick={() => handleQuantityChange(item.id, item.quantity + 1)}>+</button>
                    <button onClick={() => handleRemove(item.id)} className="remove-button">Borrar</button>
                  </div>
                </li>
              ))}
            </ul>
            <div className="cart-total">
              <span>Total: ${calculateTotal()}</span>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default CartItems;