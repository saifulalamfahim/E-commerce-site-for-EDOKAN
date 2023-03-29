import React from 'react';
import { Link } from 'react-router-dom';
import { AiFillStar } from 'react-icons/ai';

const ShopProductsCard = () => {
    return (
        <div className='col-xl-3 col-lg-4 mb-4 mt-4'>
        <div className='shopProductCard'>
            <div className='shopProductCard__productImage'>
                <img src="images/tab1.jpg" alt="Product img" />
            </div>
            <div className='shopProductCard__productDetails'>
                <h5 className='product'>
                    Lorem ipsum dolor sit amet.
                </h5>
                <div className='productDetails__rating'>
                   <div className='star'>
                   <AiFillStar/>
                    <AiFillStar/>
                    <AiFillStar/>
                    <AiFillStar/>
                    <AiFillStar/>
                   </div>
                   <div className='number'>
                    <p>(2)</p>
                   </div>
                </div>
                <p className='price text-danger'>$127.00</p>
            </div>
            <div className=''>
            <Link className='cart-button1'>ADD TO CART</Link>
            </div>
            <div className=''>
            <Link className='cart-button2'>QUICK VIEW</Link>
            </div>
        </div>
    </div>
    );
};

export default ShopProductsCard;