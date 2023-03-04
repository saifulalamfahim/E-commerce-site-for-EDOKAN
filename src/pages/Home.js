import React from 'react';
import Animation from '../animation/Animation';
import BannerContainer from '../container/BannerContainer';
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
            <section className='marque-wrapper py-2'>
                <Animation/>
            </section>
        </>
    );
};

export default Home;