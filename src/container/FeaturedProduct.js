import React from 'react';
import { FaGreaterThan } from 'react-icons/fa';
import MainFeaturedProduct from '../components/UI/card/MainFeaturedProduct';
import SmallerFeaturedProducts from '../components/UI/card/SmallerFeaturedProducts';

const FeaturedProduct = () => {
    return (
        <div className='container trendingProducts mb-5'>
        <div className='row'>
         <div className='trendingProducts__products'>
             <h5>Top Featured Products</h5>
            <div className='products__seeAll'>
             <p>See All </p>
             <div>
             <FaGreaterThan className='icons'/>
             </div>
            </div>
         </div>
         <MainFeaturedProduct/>
         <SmallerFeaturedProducts/>
        </div>
     </div>
    );
};

export default FeaturedProduct;