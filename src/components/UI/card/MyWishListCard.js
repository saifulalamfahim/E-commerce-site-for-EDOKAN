import React from 'react';
import { RxCross2 } from 'react-icons/rx';
import { Link } from 'react-router-dom';

const MyWishListCard = () => {
    return (
        <div className='container categories mb-5'>
            <div className='row'>
                <div className='categories__borderLine'>
                    <h5>My Wish List</h5>
                </div>
                <div className='categories__myWishList'>
                    <div className='products'>
                        <div className='products__imgBtn'>
                            <img src="images/tab1.jpg" alt="" />
                            <Link>Add To Cart</Link>
                        </div>
                        <div className='products__listData'>
                            <h4>
                                Lorem ipsum dolor sit ...
                            </h4>
                            <p>$60</p>
                        </div>
                        <div className='cross'>
                            <RxCross2/>
                        </div>
                    </div>

                    <div className='products'>
                        <div className='products__imgBtn'>
                            <img src="images/tab1.jpg" alt="" />
                            <Link>Add To Cart</Link>
                        </div>
                        <div className='products__listData'>
                            <h4>
                                Lorem ipsum dolor sit ...
                            </h4>
                            <p>$60</p>
                        </div>
                        <div className='cross'>
                            <RxCross2/>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default MyWishListCard;