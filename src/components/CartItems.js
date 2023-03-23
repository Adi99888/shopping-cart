import React, { useContext } from 'react';
import { cartContext } from './Cart';
import './cart.css';
import Items from './Items';

function CartItems() {
  const { item ,clearCart , totalItem, totalAmount} = useContext(cartContext);

  return (
    <>
      <header>
        <div className='continue-shopping'>
          <img src='./images/arrow.png' alt='Continue shopping' className='arrow-icon' />
          <h3>Continue shopping</h3>
        </div>
        <div className='cart-icon'>
          <img src='./images/cart.png' alt='Shopping cart' />
          <p>{ totalItem}</p>
        </div>
      </header>
      <section className='main-cart-section'>
        <h2>Shopping cart</h2>
        <p className='total-items'>
          You have <span className='total-items-count'>{ totalItem}</span> items in your cart
        </p>
        <div className='cart-items'>
          <div className='cart-items-container'>
            {item.map((currItem) => {
              return <Items key={currItem.id} {...currItem} />;
            })}
          </div>
        </div>

        <div className='card-total'>
          <h3>Card Total: <span>{totalAmount}</span></h3>
          <button>checkout</button>
          <button className='clear-cart' onClick={clearCart}>Clear Cart</button>
        </div>
      </section>
    </>
  );
}

export default CartItems;