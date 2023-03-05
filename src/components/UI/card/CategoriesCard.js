import React from 'react';

const CategoriesCard = () => {
    return (
        <div className='container categories mb-4'>
            <div className='row'>
                <div className='border-line'>
                     <h5>Categories</h5>
                </div>
                <div className='cat-checkbox'>
                <label className="checkbox-container">
                    <input type="checkbox" id="checkbox-1" />
                    <span className="checkmark"></span>
                    Top Selling
                </label>
                <label className="checkbox-container">
                    <input type="checkbox" id="checkbox-2" />
                    <span className="checkmark"></span>
                    Top Selling Product
                </label>
                <label className="checkbox-container">
                    <input type="checkbox" id="checkbox-3" />
                    <span className="checkmark"></span>
                    Top Featured Product
                </label>
                <label className="checkbox-container">
                    <input type="checkbox" id="checkbox-4" />
                    <span className="checkmark"></span>
                    Lorem, ipsum dolor.
                </label>
                <label className="checkbox-container">
                    <input type="checkbox" id="checkbox-5" />
                    <span className="checkmark"></span>
                    Lorem, ipsum.
                </label>
                <label className="checkbox-container">
                    <input type="checkbox" id="checkbox-6" />
                    <span className="checkmark"></span>
                    Table & mobile
                </label>
                <label className="checkbox-container">
                    <input type="checkbox" id="checkbox-8" />
                    <span className="checkmark"></span>
                    Computer & Desktop
                </label>
                <label className="checkbox-container">
                    <input type="checkbox" id="checkbox-9" />
                    <span className="checkmark"></span>
                    Fashion & Clothings
                </label>
                <label className="checkbox-container">
                    <input type="checkbox" id="checkbox-10" />
                    <span className="checkmark"></span>
                    Top Products
                </label>
        </div>

            </div>
        </div>
    );
};

export default CategoriesCard;