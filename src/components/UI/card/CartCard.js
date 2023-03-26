import React from 'react';
import { RxCross2 } from 'react-icons/rx';

const CartCard = () => {
    return (
        <div className='col-12 wishList-Card d-flex'>
            <div className='wishList-Card__item col-8'>
                <img src="images/speaker.jpg" alt="" />
                <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div className='wishList-Card__item col-2'>
                    $601
            </div>
            <div className='wishList-Card__item gap-10 fs-4 col-2'>
        <RxCross2/>
        </div>
    </div>
    );
};

export default CartCard;