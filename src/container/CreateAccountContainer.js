import React from 'react';
import { Link } from 'react-router-dom';

const CreateAccountContainer = () => {
    return (
        <div className='container mb-5'>
            <div className='row login mt-5'>
                <h2>Create New Customer Account</h2>
                <h6>If you have an account go to login page</h6>
                <form id='myAccount' className='mt-3'>
                    <div className=''>
                    <label className=''>
                        First Name:
                        <input type="" className="form-control py-2" placeholder="Enter your first name" aria-label="Enter your first name..." />
                    </label>
                    <label className='ms-3'>
                        Last Name:
                        <input type="" className="form-control py-2" placeholder="Enter your last name..." aria-label="Enter your last name..." />
                    </label>
                    </div>
                    <label>
                        Mobile:
                        <input type="number" className="form-control py-2" placeholder="Enter your number..." aria-label="Enter your number..." />
                    </label>
                    <label>
                        Email:
                        <input type="email" className="form-control py-2" placeholder="Enter your email..." aria-label="Enter your email..." />
                    </label>
                    <div className=''>
                    <label>
                        Password:
                        <input type="" className="form-control py-2" placeholder="Enter your email..." aria-label="Enter your email..." />
                    </label>
                    <label className='ms-3'>
                        Confirm Password:
                        <input type="" className="form-control py-2" placeholder="Enter your email..." aria-label="Enter your email..." />
                    </label>
                    </div>
                    <Link className='cart-button3'>SIGN IN</Link>
                    <p>have an account? <span>Go to login page</span></p>
                </form>
            </div>
        </div>
    );
};

export default CreateAccountContainer;