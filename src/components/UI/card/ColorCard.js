import React from 'react';

const ColorCard = () => {
    return (
        <div className='container categories mb-4'>
        <div className='row'>
            <div className='categories__borderLine'>
                 <h5>Color</h5>
            </div>
            <div className='categories__colorContainer '>
                <div className='colorContainer__firstLine'>
                    <div className='bg-primary'>

                    </div>
                    <div className='bg-secondary'>

                    </div>
                    <div className='bg-success'>

                    </div>
                    <div className='bg-info'>

                    </div>
                    <div className='bg-warning'>

                    </div>
                    <div className='bg-danger'>

                    </div>
                        
                </div>
                <div className='colorContainer__secondLine'>
                    <div className='bg-dark'>

                    </div>
                </div>
            </div>

        </div>
    </div>
    );
};

export default ColorCard;