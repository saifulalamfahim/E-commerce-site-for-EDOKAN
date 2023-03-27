import React from 'react';

const AboutContainer = () => {
    return (
        <div className='container about mt-4 mb-4 d-flex col-12'>
            <div className='about__text col-8'>
                <h1>HELLO! <br /> WE'RE <span>EDOKAN</span></h1>
            </div>
            <div className='about__text col-4'>
                <p>We just moved into the neighborhood, but it's like we've been here forever! You've welcomed us like old friends, dropping by with ready smiles and eager appetites.
                <br /> <br />
                That's why we vow to always serve up goodness. Our product will always be organically grown, locally sourced, and served with warm smiles. We're family now. And this is how we make for those we love.
                <br /> <br />
                Welcome home.</p>
            </div>
        </div>
    );
};

export default AboutContainer;