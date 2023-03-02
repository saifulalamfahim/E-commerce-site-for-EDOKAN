import React from 'react';
import { CiDeliveryTruck } from 'react-icons/ci';
import { MdPayment } from 'react-icons/md';
import { GiReceiveMoney } from 'react-icons/gi';
import { BiMessageDetail } from "react-icons/bi";

const FooterCardFirst = () => {
    return (
        <div className='footer-top-data d-flex align-items-center mb-3'>
            <div className='d-flex align-items-center me-5 ms-5 gap-10 text-white'>
                <CiDeliveryTruck className='footer-top-icons'/>
                <p className=''>FREE DELIVERY <br /> <span>For all orders over $120</span></p>
            </div>
            <div className='d-flex align-items-center me-5 ms-5 gap-10 text-white'>
                <MdPayment className='footer-top-icons'/>
                <p>SAFE PAYMENT <br /> <span>if goods have problem</span></p>
            </div>
            <div className='d-flex align-items-center me-5 ms-5 gap-10 text-white'>
                <BiMessageDetail className='footer-top-icons'/>
                <p>24/7 HELP CENTER <br /> <span>24/7 Customer Support</span></p>
            </div>
            <div className='d-flex align-items-center me-5 ms-5 gap-10 text-white'>
                <GiReceiveMoney className='footer-top-icons'/>
                <p>RETURN MONEY <br /> <span>If have problem</span></p>
            </div>
        </div>
    );
};

export default FooterCardFirst;