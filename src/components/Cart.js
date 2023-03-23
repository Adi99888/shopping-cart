import React, { createContext, useEffect, useReducer } from 'react';
import CartItems from './CartItems';
import { products } from './products';
import { reducer } from './reducer';
import './cart.css';

export const cartContext = createContext();

const initialState = {
  item: products,
  totalAmount: 0,
  totalItem: 0,
};

const Cart = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
// delete individual item
  const removeItem = (id) => {
    return dispatch({
      type: 'remove-item',
      payLoad: id,
    });
  };
// clear all the items in cart
const clearCart = ()=>{
  return dispatch({type:"CLEAR-CART"})
}



//increment and Decrenent the items
const increment=(id)=>{
  return dispatch({
    type: "INCREMENT",
    payLoad: id,
  })
}

const decrement = (id) =>{
  return dispatch({
    type: 'DECREMENT',
    payLoad:id,
  })
}

// increment the cart  in app
useEffect(() => {
  dispatch ({type:"GET_TOTAL"})
  console.log("adu");
}, [state.item])



  return (
    <>
      <cartContext.Provider value={{ ...state, removeItem ,clearCart ,increment , decrement}}>
        <CartItems />
      </cartContext.Provider>
    </>
  );
};

export default Cart;