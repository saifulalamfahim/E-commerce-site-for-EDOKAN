import React from 'react';

const CategoriesCard = () => {
    return (
        <div className='container categories mb-4'>
            <div className='row'>
                <div className='categories__borderLine'>
                     <h5>Categories</h5>
                </div>
                <div className='categories__checkbox'>
                <label className="categories__checkbox__container">
                    <input type="checkbox" id="checkbox-1" />
                    <span className="checkbox__container__checkmark"></span>
                    Top Selling
                </label>
                <label className="categories__checkbox__container">
                    <input type="checkbox" id="checkbox-2" />
                    <span className="checkbox__container__checkmark"></span>
                    Top Selling Product
                </label>
                <label className="categories__checkbox__container">
                    <input type="checkbox" id="checkbox-3" />
                    <span className="checkbox__container__checkmark"></span>
                    Top Featured Product
                </label>
                <label className="categories__checkbox__container">
                    <input type="checkbox" id="checkbox-4" />
                    <span className="checkbox__container__checkmark"></span>
                    Lorem, ipsum dolor.
                </label>
                <label className="categories__checkbox__container">
                    <input type="checkbox" id="checkbox-5" />
                    <span className="checkbox__container__checkmark"></span>
                    Lorem, ipsum.
                </label>
                <label className="categories__checkbox__container">
                    <input type="checkbox" id="checkbox-6" />
                    <span className="checkbox__container__checkmark"></span>
                    Table & mobile
                </label>
                <label className="categories__checkbox__container">
                    <input type="checkbox" id="checkbox-8" />
                    <span className="checkbox__container__checkmark"></span>
                    Computer & Desktop
                </label>
                <label className="categories__checkbox__container">
                    <input type="checkbox" id="checkbox-9" />
                    <span className="checkbox__container__checkmark"></span>
                    Fashion & Clothings
                </label>
                <label className="categories__checkbox__container">
                    <input type="checkbox" id="checkbox-10" />
                    <span className="checkbox__container__checkmark"></span>
                    Top Products
                </label>
        </div>

            </div>
        </div>
    );
};

export default CategoriesCard;