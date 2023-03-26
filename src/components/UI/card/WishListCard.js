import React from 'react';
import { RxCross2 } from 'react-icons/rx';
import { AiOutlineShopping } from 'react-icons/ai';

const WishListCard = () => {
    return (
        <div className='col-12 wishList-Card d-flex'>
                <div className='wishList-Card__item col-8'>
                    <img src="images/tab.jpg" alt="" />
                    <p>Lorem ipsum dolor sit amet.</p>
                </div>
                <div className='wishList-Card__item col-2'>
                        $601
                </div>
                <div className='wishList-Card__item gap-10 fs-4 col-2'>
                <AiOutlineShopping/>
                <RxCross2/>
                </div>
        </div>
    );
};

export default WishListCard;