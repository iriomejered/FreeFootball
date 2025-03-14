import React from 'react';
import Header from "../../components/header/Header"
import Footer from "../../components/footer/Footer"
import CartItems from '../../components/cart/CartItems';

function Cart() {
  return (
    <>
    <Header/>
    <CartItems/>
    <Footer/>
    </>
  );
}

export default Cart;