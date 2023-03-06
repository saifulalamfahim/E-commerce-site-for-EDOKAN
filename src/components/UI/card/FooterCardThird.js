import React from 'react';


const FooterCardThird = () => {
    return (
        <div className='footer-third-data'>
             <div className='col-12 footer-third-data__payment'>
                <div className='d-flex tk-logo gap-10'>
                    <div className=''>
                        <img src="/images/PayPal-Logo.wine.svg" alt="" />
                    </div>
                    <div className=''>
                        <img src="/images/Amazon_(company)-Logo.wine.svg" alt="" />
                    </div>
                    <div className=''>
                        <img src="/images/Visa_Inc.-Logo.wine.svg" alt="" />
                    </div>
                    <div className=''>
                        <img src="/images/Payoneer-Logo.wine.svg" alt="" />
                    </div>
                    <div className=''>
                        <img src="/images/Ampex-Logo.wine.svg" alt="" />
                    </div>
                </div>
             <p className='text-center mb-0 text-white'>
             &copy; {new Date().getFullYear()}: Powerd By developer of 3W</p>
            </div>
        </div>
    );
};

export default FooterCardThird;