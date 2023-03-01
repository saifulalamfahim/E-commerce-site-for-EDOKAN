import React from 'react';

const Footer = () => {
    return (
        <>
        <footer className='py-0'>
            <div className='container-xl'>
                <div className='row'>
                    <div className='col-5'>
                        <div className='footer-top-data d-flex gap-30 align-items-center'>
                               <h3 className='text-white'>ami shober upore</h3>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        <footer className='py-0'>
            <div className='container-xl'>
                <div className='row'>
                    <div className='col-3'>
                        <h4 className='text-white mb-4'>Download App</h4>
                        <div></div>
                    </div>
                    <div className='col-2'>
                        <h4 className='text-white mb-4'>Help $ Customer</h4>
                        <div></div>
                    </div>
                    <div className='col-2'>
                        <h4 className='text-white mb-4'>Customer service</h4>
                        <div></div>
                    </div>
                    <div className='col-2'>
                        <h4 className='text-white mb-4'>My Account</h4>
                        <div></div>
                    </div>
                    <div className='col-3'>
                        <h4 className='text-white mb-4'>Signup To Newsletter</h4>
                        <div></div>
                    </div>
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