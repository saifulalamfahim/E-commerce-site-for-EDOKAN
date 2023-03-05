import React from 'react';
import Marquee from "react-fast-marquee";


const Animation = () => {
    return (
        <div>
            <div className='container-xxxl mb-5'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='marquee-inner-wrapper card-wrapper'>
                        <Marquee>
                         Free UK delivery - Return over $100.00 ( Excluding Homeware) | Free Shipping.
                        </Marquee>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Animation;