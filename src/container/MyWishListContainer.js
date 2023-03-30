import React from 'react';
import WishListCard from '../components/UI/card/WishListCard';

const MyWishListContainer = () => {
    return (
        <div className='container mb-5 wishList'>
           <h1 className='mt-3'>Wish List</h1>

           <div className='wishList__items col-12 mt-3 d-flex'>
                <div className='wishList__items__item col-8'>
                        Item
                </div>
                <div className='wishList__items__item col-2 '>
                        Price
                </div>
                <div className='wishList__items__item col-2 '>
                        Action
                </div>
           </div>
           <WishListCard/>
           <WishListCard/>
           <WishListCard/>
        </div>
    );
};

export default MyWishListContainer;