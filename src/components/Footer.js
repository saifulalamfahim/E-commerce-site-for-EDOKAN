import React from 'react';
import FooterCardFirst from './UI/card/FooterCardFirst';
import FooterCardSecond from './UI/card/FooterCardSecond';

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
        <footer className='py-3'>
            <div className='container-xl'>
                <div className='row'>
                    <div className='col-12'>
                        <p className='text-center mb-0 text-white'>
                            &copy; {new Date().getFullYear()}: Powerd By developer of 3W</p>
                    </div>
                </div>
            </div>
        </footer>
        </>
    );
};

export default Footer;