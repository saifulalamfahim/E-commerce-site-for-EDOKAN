import React from 'react';
// import { icons } from 'react-icons';
import { Link, NavLink } from 'react-router-dom';
import { CiSearch } from 'react-icons/ci';
import DropdownButtonLanguage from './UI/DropdownButtonLanguage';
import DropdownButtonCurrency from './UI/DropdownButtonCurrency';
import DropdownMenuButton from './UI/DropdownMenuButton';
// import Dropdown from 'react-bootstrap/Dropdown';

const Header = () => {
    return (
       <>
        <header className='header-top-strip py-1'>
            <div className='container-xl'>
                    <div className='row'>
                        <div className='col-6 d-flex gap-30 pt-3 font-clr'>
                            <div>
                               <div className='borderLeft'>
                                 <DropdownButtonLanguage/>
                               </div>
                            </div>
                            <div className=''>
                                <div className='borderLeft'>
                                   <DropdownButtonCurrency/>
                                </div>
                            </div>
                            <div className=''>
                                <p>Need Help? SAAF.DEV</p>
                            </div>
                        </div>
                        <div className='col-6 pt-3 '>
                        <div className='d-flex align-items-center gap-15 '>
                                   <div className='nav-flex'>
                                   <NavLink className="font-clr borderLeft navRight" to="/">My Account</NavLink>
                                    <NavLink className="font-clr borderLeft navRight" to="/">About Us</NavLink>
                                    <NavLink className="font-clr borderLeft navRight" to="/">Contact Us</NavLink>
                                    <NavLink className="font-clr borderLeft navRight" to="/">FAQs</NavLink>
                                   </div>
                                </div>
                        </div>
                    </div>
            </div>
        </header>

        <header className='header-upper py-3'>
            <div className='container-xl'>
                <div className='row align-items-center'>
                    <div className='col-2'>
                        <h2 className='text-white mb-3'>
                            <Link className='text-white fs-3 fw-bolder'>EDOKAN</Link>
                        </h2>
                    </div>
                    <div className='col-5'>
                        <div className="input-group">
                            <DropdownMenuButton/>
                        </div>
                    </div>
                    <div className='col-5'>
                         <div className='header-upper-links d-flex align-items-center justify-content-between'>
                                 <div>
                                    <Link className='d-flex align-items-center gap-10 text-white'>
                                        <img src="images/user.svg" alt="user" />
                                        <p className='mb-0'><span className='txt-color'>Sign In</span> <br /> Crearte An Account</p>
                                    </Link>
                                </div>
                                 <div>
                                    <Link className='d-flex align-items-center gap-10 text-white'>
                                        <img src="images/wishlist.svg" alt="wishlist" />
                                        <p className='mb-0'><span>Favorite</span> <br />My wishlist</p>
                                    </Link>
                                </div>
                                <div> 
                                    <Link className='d-flex align-items-center gap-10 text-white'>
                                        <img src="images/cart.svg" alt="cart" />
                                        <p className='mb-0'><span>My Cart</span> <br />$000</p>
                                    </Link>
                                </div>

                         </div>
                    </div>
                </div>
            </div>
        </header>
        <header className='header-botton py-3'>
            <div className='container-xl'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='menu-bottom d-flex align-items-center gap-30'>
                            <div className='pt-3'>
                                <p>SHOP BY CATEGORY</p>
                            </div>
                            <div className='menu-links'>
                                <div className='d-flex align-items-center gap-15'>
                                    <NavLink to="/">Home</NavLink>
                                    <NavLink to="/">Our Services</NavLink>
                                    <NavLink to="/">Blogs</NavLink>
                                    <NavLink to="/">Contact</NavLink>
                                </div>
                            </div>
                            <div className='menu-offer'>Spend $120 more and get free shipping</div>
                        </div>
                       
                    </div>
                </div>
            </div>
        </header>
       </>
    );
};

export default Header;