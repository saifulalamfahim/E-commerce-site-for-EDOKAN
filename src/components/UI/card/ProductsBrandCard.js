import React from 'react';

const ProductsBrandCard = () => {
    return (
        <div className='container categories mb-4'>
            <div className='row'>
                <div className='categories__borderLine'>
                     <h5>Product Brand</h5>
                </div>
                <div className='categories__checkbox'>
                <label className="categories__checkbox__container">
                    <input type="checkbox" id="checkbox-1" />
                    <span className="checkbox__container__checkmark"></span>
                    Huawei
                </label>
                <label className="categories__checkbox__container">
                    <input type="checkbox" id="checkbox-2" />
                    <span className="checkbox__container__checkmark"></span>
                    Symphony
                </label>
                <label className="categories__checkbox__container">
                    <input type="checkbox" id="checkbox-3" />
                    <span className="checkbox__container__checkmark"></span>
                    Xiaomi
                </label>
                <label className="categories__checkbox__container">
                    <input type="checkbox" id="checkbox-4" />
                    <span className="checkbox__container__checkmark"></span>
                   Lenovo
                </label>
                <label className="categories__checkbox__container">
                    <input type="checkbox" id="checkbox-5" />
                    <span className="checkbox__container__checkmark"></span>
                    Vivo
                </label>
                <label className="categories__checkbox__container">
                    <input type="checkbox" id="checkbox-6" />
                    <span className="checkbox__container__checkmark"></span>
                    Samsung
                </label>
                <label className="categories__checkbox__container">
                    <input type="checkbox" id="checkbox-8" />
                    <span className="checkbox__container__checkmark"></span>
                    Nokia
                </label>
                <label className="categories__checkbox__container">
                    <input type="checkbox" id="checkbox-9" />
                    <span className="checkbox__container__checkmark"></span>
                    Oppo
                </label>
                <label className="categories__checkbox__container">
                    <input type="checkbox" id="checkbox-10" />
                    <span className="checkbox__container__checkmark"></span>
                    Apple
                </label>
        </div>

            </div>
        </div>
    );
};

export default ProductsBrandCard;