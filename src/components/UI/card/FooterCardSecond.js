import React from 'react';
// import { BiMessageDetail } from "react-icons/bi";
import { RiGooglePlayFill } from 'react-icons/ri';
import { AiFillApple } from 'react-icons/ai';
import { FaFacebookF} from 'react-icons/fa';
import { BsTwitter } from 'react-icons/bs';
import { FaInstagramSquare } from 'react-icons/fa';
import { AiOutlineGooglePlus } from 'react-icons/ai';



const FooterCardSecond = () => {
    return (
        <div className='footer-middle-data d-flex text-white'>
             <div className='col-3'>
                <h4 className='text-white mb-4'>Download App</h4>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis, blanditiis?
                    <br /><span>Get it now</span>
                </p>
                <div className='app'>
                    <div className='d-flex App-store gap-30'>
                        <div>
                            <div className='appBorderRight'>
                            <AiFillApple className='app-icons'/>
                            </div>
                        </div>
                        <p>Download it from <br /><span>APPSTORE</span></p>
                    </div>
                    <div className='d-flex App-store gap-30'>
                        <div className=''>
                           <div className='appBorderRight'>
                           <RiGooglePlayFill className='app-icons'/>
                           </div>
                        </div>
                        <p>Download it from <br /><span>GOOGLEPLAY</span></p>
                    </div>
                </div>
                <div className='social-media gap-10 mt-3 mb-3 d-flex'>
                    <div className='bg-primary'>
                        <FaFacebookF className='social-media-icons '/>
                    </div>
                    <div className='bg-info'>
                        <BsTwitter className='social-media-icons '/>
                    </div>
                    <div className='bg-secondary'>
                        <FaInstagramSquare className='social-media-icons '/>
                    </div>
                    <div className='bg-danger'>
                        <AiOutlineGooglePlus className='social-media-icons '/>
                    </div> 
                </div>
            </div>
            <div className='col-2 all-pere'>
                 <h4 className='text-white mb-4'>Help $ <br /> Customer</h4>
                <div className='pere'>
                    <p>New Customers</p>
                    <p>About</p>
                    <p>How To use</p>
                    <p>Account</p>
                    <p>Placiing on</p>
                    <p>Problem</p>
                    <p>Others</p>
                </div>
            </div>
            <div className='col-2 all-pere-2'>
                <h4 className='text-white mb-4'>Customer <br /> service</h4>
                <div className='pere'>
                    <p>New Customers</p>
                    <p>About</p>
                    <p>How To use</p>
                    <p>Account</p>
                    <p>Placiing on</p>
                   
                </div>
            </div>
            <div className='col-2 all-pere-3'>
                 <h4 className='text-white mb-4'>My Account</h4>
                 <div className='pere'>
                    <p>New Customers</p>
                    <p>About</p>
                    <p>How To use</p>
                    <p>Account</p>
                    <p>Placiing on</p>
                   
                </div>
            </div>
            <div className='col-3'>
                 <h4 className='text-white mb-4'>Signup To Newsletter</h4>
                 <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam, veniam?</p>
                 <div className='d-flex subscribe-button align-items-center'>
                 <input type="text" className="form-control py-2" placeholder="Enter your email" aria-label="ENTER your email" aria-describedby="basic-addon2"/>
                    <span className="input-group-text p-3 padding" id="basic-addon2">SUBSCRIBE</span>
                 </div>
                 <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit, provident?</p>
                <div></div>
            </div>
        </div>
    );
};

export default FooterCardSecond;