import React from 'react';
import ShippingOptions from '../components/ShippingOptions';
import ShopProducts from '../components/ShopProducts';

const ShopConatainer = () => {
    return (
        <div className='container mt-4'>
            <div className='row'>
                <ShippingOptions/>
                <ShopProducts/>
            </div>
        </div>
    );
};

export default ShopConatainer;