import React from 'react';
import ProductCard from '../components/UI/card/ProductCard';
import { FaGreaterThan } from 'react-icons/fa';

const BestSellingProducts = () => {
    return (
        <div className='container trendingProducts mb-5'>
        <div className='row'>
         <div className='trendingProducts__products'>
             <h5>Best Selling Products</h5>
            <div className='products__seeAll'>
             <p>See All </p>
             <div>
             <FaGreaterThan className='icons'/>
             </div>
            </div>
         </div>
        <ProductCard/>
         <ProductCard/>
         <ProductCard/>
         <ProductCard/>
         <ProductCard/>
         <ProductCard/>
        </div>
     </div>
    );
};

export default BestSellingProducts;