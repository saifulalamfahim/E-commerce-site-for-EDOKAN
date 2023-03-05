import React from 'react';
import Animation from '../animation/Animation';
import BannerContainer from '../container/BannerContainer';
import BestSellingProducts from '../container/BestSellingProducts';
import BrandName from '../container/BrandName';
import FeaturedProduct from '../container/FeaturedProduct';
import FlashDeals from '../container/FlashDeals';
import RecommendedProduct from '../container/RecommendedProduct';
import TrendingProductsContainer from '../container/TrendingProductsContainer';

// import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <>
            <section className='home-wrapper-1 py-2'>
                <BannerContainer/>
            </section>
            <section className='home-wrapper-2 py-2'>
                    <TrendingProductsContainer/>
            </section>
            <section className='home-wrapper-3 py-2'>
                    <FlashDeals/>
            </section>
            <section className='home-wrapper-4 py-2'>
                   <FeaturedProduct/>
            </section>
            <section className='marque-wrapper py-2'>
                <Animation/>
            </section>
            <section className='home-wrapper-6 py-2'>
                    <RecommendedProduct/>
            </section>
            <section className='home-wrapper-7 py-2'>
                    <BestSellingProducts/>
            </section>
            <section className='home-wrapper-8 py-2'>
                   <BrandName/>
            </section>
        </>
    );
};

export default Home;