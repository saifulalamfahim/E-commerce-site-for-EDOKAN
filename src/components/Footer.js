import React from 'react';
import FooterCardFirst from './UI/card/FooterCardFirst';
import FooterCardSecond from './UI/card/FooterCardSecond';
import FooterCardThird from './UI/card/FooterCardThird';

const Footer = () => {
    return (
        <>
        <footer className='py-5'>
            <div className='container-xl'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='footer-top-data d-flex gap-30 align-items-center'>
                               <FooterCardFirst/>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        <footer className='py-0'>
            <div className='container-xl'>
                <div className='row'>
                   <FooterCardSecond/>
                </div>
            </div>
        </footer>
        <footer className='py-0'>
            <div className='container-xl'>
                <div className='row'>
                   <FooterCardThird/>
                </div>
            </div>
        </footer>
        </>
    );
};

export default Footer;