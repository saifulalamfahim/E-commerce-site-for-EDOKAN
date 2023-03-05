import React from 'react';
// import { icons } from 'react-icons';
import { Link, NavLink } from 'react-router-dom';
import { HiOutlineUser } from 'react-icons/hi';
import { MdFavoriteBorder } from 'react-icons/md';
import { AiOutlineShopping } from 'react-icons/ai';
import { BiCategory } from "react-icons/bi";
import DropdownButtonLanguage from './UI/buttons/DropdownButtonLanguage';
import DropdownButtonCurrency from './UI/buttons/DropdownButtonCurrency';
import DropdownMenuButton from './UI/buttons/DropdownMenuButton';
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
                    <div className='col-5 dropdownSearchBar'>
                        <div className="input-group mb-3">
                            <DropdownMenuButton/>
                        </div>
                    </div>
                    <div className='col-5'>
                         <div className='header-upper-links mb-3'>
                                 <div>
                                    <Link to="login" className='d-flex align-items-center gap-10 text-white'>
                                        <divs>
                                            <HiOutlineUser className='header-upper-icons'/>
                                        </divs>
                                        <p className='mb-0'><span>Sign In</span> <br /> Create An Account</p>
                                    </Link>
                                </div>
                                 <div>
                                    <Link to="favorite" className='d-flex align-items-center gap-10 text-white'>
                                        <div>
                                            <MdFavoriteBorder className='header-upper-icons'/>
                                        </div>
                                        <p className='mb-0'><span>Favorite</span> <br />My wishlist</p>
                                    </Link>
                                </div>
                                <div> 
                                    <Link to="cart" className='d-flex align-items-center gap-10 text-white'>
                                        <div>
                                            <AiOutlineShopping className='header-upper-icons'/>
                                        </div>
                                        <p className='mb-0'><span>My Cart</span> <br />$0.00</p>
                                    </Link>
                                </div>

                         </div>
                    </div>
                </div>
            </div>
        </header>
        <header className='header-botton'>
            <div className='container-xl'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='menu-bottom d-flex align-items-center gap-30'>
                            <div className='d-flex gap-10 pt-3 me-5'>
                                <BiCategory className='text-white'/>
                                <p>SHOP BY CATEGORY</p>
                            </div>
                            <div className='menu-links'>
                                <div className='d-flex align-items-center ms-5 gap-15'>
                                    <NavLink to="/">Home</NavLink>
                                    <NavLink to="shop">SHOP</NavLink>
                                    <NavLink to="contact">CONTACT US</NavLink>
                                    <NavLink to="about">ABOUT US</NavLink>
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