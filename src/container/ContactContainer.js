import React from 'react';

const ContactContainer = () => {
    return (
        <div className='container mt-4 mb-4 contact'>
            <div className='contact__name'>
                <h1>CONTACT <br /> WITH <span>EDOKAN</span></h1>
            </div>
            <div className='contact__details'>
                <div className='contact__details__touch'>
                    <p className='name'>GET IN TOUCH</p>
                    <p>Instagram</p>
                    <p>Facebook</p>
                    <p>LinkedIn</p>
                    <p>Twitter</p>
                </div>
                <div className='contact__details__email'>
                        <p className='name'>EMAIL</p>
                        <p>safahim84@gmail.com</p>
                </div>
                <div className='contact__details__location'>
                    <p className='name'>LOCATION</p>
                    <p>743 Freedom Lane
                        <br /> Modesto, California <br /> USA 12345</p>
                </div>
            </div>
        </div>
    );
};

export default ContactContainer;