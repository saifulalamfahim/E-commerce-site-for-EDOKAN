import React from 'react';
import { Link } from 'react-router-dom';
import CartCard from '../components/UI/card/CartCard';

const CartContainer = () => {
    return (
        <div className='container mb-5 wishList'>
             <h1 className='mt-3'>My Cart</h1>
        <div className='wishList__items col-12 mt-3 d-flex'>
             <div className='wishList__items__item col-8'>
                     Item
             </div>
             <div className='wishList__items__item col-2'>
                     Price
             </div>
             <div className='wishList__items__item col-2'>
                     Action
             </div>
        </div>
        <CartCard/>
        <CartCard/>
       <div className='wishList__price mt-3 col-6'>
           <div className='wishList__price__subtotal'>
                <p>Cart Subtotal:</p>
                <p>$150.00</p>
           </div>
           <Link><button className='FlashButton'>BUY NOW</button></Link>
       </div>
     </div>
    );
};

export default CartContainer;