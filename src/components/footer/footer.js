import React from "react";
import './footer.css';

import Icon1 from '../../assets/images/icon-1.svg';
import Icon2 from '../../assets/images/icon-2.svg';
import Icon3 from '../../assets/images/icon-3.svg';
import Icon4 from '../../assets/images/icon-4.svg';
import Icon5 from '../../assets/images/icon-5.svg';
import Logo from '../../assets/images/logo.svg';
import appStore from '../../assets/images/app-store.jpg';
import googlePlay from '../../assets/images/google-play.jpg';
import paymentImage from '../../assets/images/payment-method.png';


import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import HeadphonesOutlinedIcon from '@mui/icons-material/HeadphonesOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import WatchLaterOutlinedIcon from '@mui/icons-material/WatchLaterOutlined';
import HeadsetOutlinedIcon from '@mui/icons-material/HeadsetOutlined';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';



import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="footerWrapper">
            <div className="footerBoxes">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col">
                            <div className="box d-flex align-items-center w-100">
                                <span><img src={Icon1} alt="" /></span>
                                <div className="info">
                                    <h6>Best prices & offers</h6>
                                    <p>Orders $50 or more</p>
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div className="box d-flex align-items-center w-100">
                                <span><img src={Icon2} alt="" /></span>
                                <div className="info">
                                    <h6>Free delivery</h6>
                                    <p>24/7 amazing services</p>
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div className="box d-flex align-items-center w-100">
                                <span><img src={Icon3} alt="" /></span>
                                <div className="info">
                                    <h6>Great daily deal</h6>
                                    <p>When you sign up</p>
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div className="box d-flex align-items-center w-100">
                                <span><img src={Icon4} alt="" /></span>
                                <div className="info">
                                    <h6>Wide assortment</h6>
                                    <p>Mega Discounts</p>
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div className="box d-flex align-items-center w-100">
                                <span><img src={Icon5} alt="" /></span>
                                <div className="info">
                                    <h6>Easy returns</h6>
                                    <p>Within 30 days</p>
                                </div>
                            </div>
                        </div>



                    </div>

                </div>
            </div>

            <footer>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-3 part1">
                            <Link to="/"><img src={Logo} alt="" /></Link>
                            <br />
                            <p>Awesome grocery store website template</p>
                            <br />
                            <p><LocationOnOutlinedIcon /><strong>Address: </strong> 5171 W Campbell Ave undefined Kent, Utah 53127 United States</p>
                            <p><HeadphonesOutlinedIcon /><strong>Call Us:</strong> (+91) - 540-025-124553</p>
                            <p><EmailOutlinedIcon /><strong>Email:</strong> sale@Nest.com</p>
                            <p><WatchLaterOutlinedIcon /><strong>Hours:</strong> 10:00 - 18:00, Mon - Sat</p>

                        </div>


                        <div className="col-md-6 part2">
                            <div className="row">
                                <div className="col">
                                    <h5>Company</h5>
                                    <ul class="footer-list mb-sm-5 mb-md-0">
                                        <li><Link href="#">About Us</Link></li>
                                        <li><Link href="#">Delivery Information</Link></li>
                                        <li><Link href="#">Privacy Policy</Link></li>
                                        <li><Link href="#">Terms &amp; Conditions</Link></li>
                                        <li><Link href="#">Contact Us</Link></li>
                                        <li><Link href="#">Support Center</Link></li>
                                        <li><Link href="#">Careers</Link></li>
                                    </ul>
                                </div>

                                <div className="col">
                                    <h5>Account</h5>
                                    <ul class="footer-list mb-sm-5 mb-md-0">
                                        <li><Link href="#">About Us</Link></li>
                                        <li><Link href="#">Delivery Information</Link></li>
                                        <li><Link href="#">Privacy Policy</Link></li>
                                        <li><Link href="#">Terms &amp; Conditions</Link></li>
                                        <li><Link href="#">Contact Us</Link></li>
                                        <li><Link href="#">Support Center</Link></li>
                                        <li><Link href="#">Careers</Link></li>
                                    </ul>
                                </div>

                                <div className="col">
                                    <h5>Corporate</h5>
                                    <ul class="footer-list mb-sm-5 mb-md-0">
                                        <li><Link href="#">About Us</Link></li>
                                        <li><Link href="#">Delivery Information</Link></li>
                                        <li><Link href="#">Privacy Policy</Link></li>
                                        <li><Link href="#">Terms &amp; Conditions</Link></li>
                                        <li><Link href="#">Contact Us</Link></li>
                                        <li><Link href="#">Support Center</Link></li>
                                        <li><Link href="#">Careers</Link></li>
                                    </ul>
                                </div>

                                <div className="col">
                                    <h5>Popular</h5>
                                    <ul class="footer-list mb-sm-5 mb-md-0">
                                        <li><Link href="#">About Us</Link></li>
                                        <li><Link href="#">Delivery Information</Link></li>
                                        <li><Link href="#">Privacy Policy</Link></li>
                                        <li><Link href="#">Terms &amp; Conditions</Link></li>
                                        <li><Link href="#">Contact Us</Link></li>
                                        <li><Link href="#">Support Center</Link></li>
                                        <li><Link href="#">Careers</Link></li>
                                    </ul>
                                </div>

                            </div>
                        </div>

                        <div className="col-md-3 part3">
                            <div className="col">
                                <h5>Install App</h5>
                                <br />
                                <p>From App Store or Google Play</p>

                                <div className="d-flex">
                                    <Link><img src={appStore} alt="" width={120}/></Link>
                                    <Link><img src={googlePlay} alt=""  className="mx-2" width={120}/></Link>
                                </div>

                                <br />
                                <p>Secured Payment Gateways</p>
                                <img src={paymentImage} alt="" />
                            </div>


                        </div>
                    </div>


                    <hr />


                    <div className="row lastStrip">
                        <div className="col-md-3">
                            <p>© 2022, Nest - HTML Ecommerce Template <br />
                            All rights reserved</p>
                        </div>

                        <div className="col-md-6 d-flex">
                            <div className="m-auto d-flex align-items-center">
                                <div className="phNo d-flex align-items-center mx-5">
                                    <span><HeadsetOutlinedIcon/></span>
                                    <div className="info ml-3">
                                        <h3 className="text-g mb-0">1900 - 888</h3>
                                        <p className="mb-0">24/7 Support Center</p>
                                    </div>
                                
                                </div>

                                <div className="phNo d-flex align-items-center mx-5">
                                    <span><HeadsetOutlinedIcon/></span>
                                    <div className="info ml-3">
                                        <h3 className="text-g mb-0">1900 - 888</h3>
                                        <p className="mb-0">24/7 Support Center</p>
                                    </div>
                                
                                </div>
                            </div>
                        </div>

                        <div className="col-md-3 part3">
                            <div className="d-flex align-items-center">
                                <h6>Follow Us</h6>
                                <ul className="list list-inline">
                                    <li className="list-inline-item">
                                        <Link><FacebookOutlinedIcon/></Link>
                                    </li>
                                    <li className="list-inline-item">
                                        <Link><TwitterIcon/></Link>
                                    </li>
                                    <li className="list-inline-item">
                                        <Link><InstagramIcon/></Link>
                                    </li>
                                    <li className="list-inline-item">
                                        <Link><YouTubeIcon/></Link>
                                    </li>
                                 
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer;