import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const LoginContainer = () => {
    return (
        <div className='container mb-5'>
            <div className='row login mt-4'>
                <h2>Customer Login</h2>
                <h6>If you have an account sign in wit your email address.</h6>
                <form className='mt-3'>
                    <label>
                        Email:
                        <input type="email" className="form-control py-2" placeholder="Enter your email..." aria-label="Enter your email..." />
                    </label>
                    <label>
                        Password:
                        <input type="email" className="form-control py-2" placeholder="Enter your password..." aria-label="Enter your password..." />
                    </label>
                    <h5>Forget Your Password?</h5>
                    <Link className='cart-button3'>SIGN IN</Link>
                    <p>Don't have an account? <span>Create An Account</span></p>
                </form>
            </div>
        </div>
    );
};

export default LoginContainer;