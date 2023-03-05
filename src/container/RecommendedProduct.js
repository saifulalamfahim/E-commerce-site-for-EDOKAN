import React from 'react';
import ProductCard from '../components/UI/card/ProductCard';
import { FaGreaterThan } from 'react-icons/fa';


const RecommendedProduct = () => {
    return (
        <div className='container trendingProducts mb-5'>
           <div className='row'>
            <div className='products-all'>
                <h5>Recommended For You</h5>
               <div className='seeAll'>
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

export default RecommendedProduct;