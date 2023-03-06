import React from 'react';
import { FaGreaterThan } from 'react-icons/fa';
import FleshdealsProductsCard from '../components/UI/card/FleshdealsProductsCard';

const FlashDeals = () => {
    return (
        <div className='container trendingProducts mb-5'>
        <div className='row'>
         <div className='trendingProducts__products'>
             <h5>Flash Deals</h5>
            <div className='products__seeAll'>
             <p>See All </p>
             <div>
             <FaGreaterThan className='icons'/>
             </div>
            </div>
         </div>
         <FleshdealsProductsCard/>
         <FleshdealsProductsCard/>
            <div className='d-flex'>
                <div className='productBanner position-relative'>
                        <img src="images/catbanner-03.jpg" className='img-fluid rounded-4' alt="main banner" />
                        <div className='productBanner__Content position-absolute'>
                        <h5>Lorem, <br /> ipsum dolor.</h5>
                        <p>Up To-30%</p>
                </div>
                </div>
                <div className='productBanner position-relative'>
                        <img src="images/catbanner-02.jpg" className='img-fluid rounded-4' alt="main banner" />
                        <div className='productBanner__Content position-absolute'>
                        <h5>Lorem, <br /> ipsum dolor.</h5>
                        <p>Up To-30%</p>
                </div>
                </div>
                <div className='productBanner position-relative'>
                        <img src="images/catbanner-01.jpg" className='img-fluid rounded-4' alt="main banner" />
                        <div className='productBanner__Content position-absolute'>
                        <h5>Lorem, <br /> ipsum dolor.</h5>
                        <p>Up To-30%</p>
                </div>
                </div>
            </div>
        </div>
     </div>
    );
};

export default FlashDeals;