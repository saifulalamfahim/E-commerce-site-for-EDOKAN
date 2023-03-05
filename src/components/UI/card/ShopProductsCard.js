import React from 'react';
import { Link } from 'react-router-dom';
import { AiFillStar } from 'react-icons/ai';

const ShopProductsCard = () => {
    return (
        <div className='col-3'>
        <div className='shop-product-card'>
            <div className='product-image'>
                <img src="images/watch.jpg" alt="Product img" />
            </div>
            <div className='product-details'>
                <h5 className='product'>
                    Lorem ipsum dolor sit amet.
                </h5>
                <div className='product-rating'>
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