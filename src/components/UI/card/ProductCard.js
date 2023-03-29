import React from 'react';
import { Link } from 'react-router-dom';
import { AiFillStar } from 'react-icons/ai';

const ProductCard = () => {
    return (
        <div className='col-xl-2 col-lg-3 col-md-4 col-sm-6 col-xs-12 mb-4'>
            <div className='productCard'>
                <div className='productCard__image'>
                    <img src="images/tab3.jpg" alt="Product img" />
                </div>
                <div className='productCard__details'>
                    <h5 className='product ms-1'>
                        Lorem ipsum dolor sit amet consectetur.
                    </h5>
                    <div className='product-rating'>
                       <div className='star ms-1'>
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
                    <p className='price text-danger ms-1'>$127.00</p>
                </div>
                <div className='productCard__button'>
                <Link className='cart-button'>ADD TO CART</Link>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;