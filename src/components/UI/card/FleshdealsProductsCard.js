import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const FleshdealsProductsCard = () => {
    return (
        <div className='col-6'>
            <div className='flash-deals-Card d-flex'>
                <div className='flash-deals-Card-Img'>
                    <div className='something'>
                        <p>-25</p>
                        <p>New</p>
                    </div>
                    <img src="images/tab.jpg" alt="" />
                </div>
                <div className='flash-deals-Card-data'>
                    <h4>One Plus Nord N10 5g Unlocked</h4>
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
                    <h5>$123.00</h5>
                    <p className='description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate doloremque necessitatibus eaque alias magnam vitae ea aperiam quasi ipsam maxime.</p>
                    <div className='gray-line'>
                        <div className='red-line'>
                        </div>
                    </div>
                    <p className='sold'>Sold: 25/100</p>
                    <Link><button className='FlashButton'>ADD TO CART</button></Link>
                </div>
            </div>
        </div>
    );
};

export default FleshdealsProductsCard;