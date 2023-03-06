import React from 'react';
import { Link } from 'react-router-dom';


const BannerContainer = () => {
    return (
        <div>
                      <div className='container'>
                    <div className='row'>
                        <div className='col-7'>
                            <div className='mainBanner position-relative p-4'>
                                <img src="images/main-banner.jpg" className='img-fluid rounded-4' alt="main banner" />
                                <div className='mainBanner__content position-absolute'>
                                    <h5>Lorem ipsum dolor, sit amet elit.</h5>
                                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                                    <Link className='button'>DISCOVER NOW</Link>
                                </div>
                            </div>
                        </div>
                        <div className='col-5'>
                            <div className='d-flex flex-wrap justify-content-between align-items-center'>
                                <div className='smallBanner position-relative'>
                                    <img src="images/catbanner-01.jpg" className='img-fluid rounded-4' alt="main banner" />
                                    <div className='smallBanner__content position-absolute'>
                                    <h5>Lorem, <br /> ipsum dolor.</h5>
                                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                                </div>
                                </div>
                                <div className='smallBanner position-relative'>
                                    <img src="images/catbanner-02.jpg" className='img-fluid rounded-4' alt="main banner" />
                                    <div className='smallBanner__content position-absolute'>
                                    <h5>Lorem, <br /> ipsum dolor.</h5>
                                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                                </div>
                                </div>
                                <div className='smallBanner position-relative'>
                                    <img src="images/catbanner-03.jpg" className='img-fluid rounded-4' alt="main banner" />
                                    <div className='smallBanner__content position-absolute'>
                                    <h5>Lorem, <br /> ipsum dolor.</h5>
                                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                                </div>
                                </div>
                                <div className='smallBanner position-relative'>
                                    <img src="images/catbanner-04.jpg" className='img-fluid rounded-4' alt="main banner" />
                                    <div className='smallBanner__content position-absolute'>
                                    <h5>Lorem, <br /> ipsum dolor.</h5>
                                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>s
        </div>
    );
};

export default BannerContainer;