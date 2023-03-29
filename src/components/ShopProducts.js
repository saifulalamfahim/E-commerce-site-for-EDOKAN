import React from 'react';
import { Link } from 'react-router-dom';
import ShopProductsCard from './UI/card/ShopProductsCard';
import { TfiLayoutGrid3Alt } from 'react-icons/tfi';
import { BsLayoutThreeColumns } from 'react-icons/bs';
import { TfiLayoutColumn3 } from 'react-icons/tfi';
import { TfiLayoutGrid3 } from 'react-icons/tfi';
import { TfiLayout } from 'react-icons/tfi';


const ShopProducts = () => {
    return (
        <div className='col-xl-9 col-sm-12 shop-Products mb-4'>
            <div className="shop-Products__imageContainer">
                <img src="images/blog-1.jpg" alt="img" />
                <div className="imageContainer__imageText">
                    <p>Hurry UP</p>
                    <p>Free Shipping All Order Over $99</p>
                    <Link className='cart-button'>DISCOVER NOW</Link>
                </div>
            </div>
            <div className='layout mt-4'>
                <div className='pera'>
                   <div>
                   <TfiLayoutGrid3Alt className='ms-3'/>
                    <BsLayoutThreeColumns className='ms-3'/>
                   </div>
                  <div>
                  <p className='ms-3'> items 1-20 of 30</p>
                  </div>
                </div>
                <div className='me-3'>
                    <TfiLayoutColumn3 className='ms-3'/>
                    <TfiLayoutGrid3 className='ms-3'/>
                    <TfiLayout className='ms-3'/>
                </div>
            </div>
           <div className='d-flex shopCard'>
           <ShopProductsCard/>
            <ShopProductsCard/>
            <ShopProductsCard/>
            <ShopProductsCard/>
           </div>
            
        </div>
    );
};

export default ShopProducts;