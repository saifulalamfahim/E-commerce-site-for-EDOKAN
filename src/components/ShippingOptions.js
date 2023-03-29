import React from 'react';
import CategoriesCard from './UI/card/CategoriesCard';
import ColorCard from './UI/card/ColorCard';
import CompareProductsCard from './UI/card/CompareProductsCard';
import MyWishListCard from './UI/card/MyWishListCard';
import ProductsBrandCard from './UI/card/ProductsBrandCard';

const ShippingOptions = () => {
    return (
        <div className='col-3 shipping-op'>
            <div className='shipping-options mb-5'>
                <p>Shipping Options</p>
            </div>
          <div className=''>
            <CategoriesCard/>
            <ColorCard/>
            <ProductsBrandCard/>
            <CompareProductsCard/>
            <MyWishListCard/>
          </div>
        </div>
    );
};

export default ShippingOptions;