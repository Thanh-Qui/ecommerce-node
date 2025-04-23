import React from "react";
import './nav.css';

import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import GridViewIcon from '@mui/icons-material/GridView';
import HeadsetOutlinedIcon from '@mui/icons-material/HeadsetOutlined';
import BannerMenu from '../../../assets/images/banner-menu.png';

const Nav = () => {
    return (
        <div className="nav d-flex align-items-center">
            <div className="container-fluid">
                <div className="row position-relative">
                    <div className="col-sm-3 part1 d-flex align-items-center">
                        <Button className="bg-g text-white catTab">
                          <GridViewIcon/>
                          <span>&nbsp; Browse All Categories </span>
                           <KeyboardArrowDownIcon/>
                        </Button>
                    </div>

                    <div className="col-sm-7 part2 position-static">
                        <nav>
                            <ul className="list list-inline mb-0">
                                <li className="list-inline-item">
                                    <Button><Link to="/">Home</Link></Button>
                                </li>
                                <li className="list-inline-item">
                                    <Button><Link>About</Link></Button>
                                </li>
                                <li className="list-inline-item">
                                    <Button><Link>Shop</Link></Button>
                                </li>
                                <li className="list-inline-item">
                                    <Button><Link>Vendors</Link></Button>
                                
                                </li>
                                <li className="list-inline-item position-static">
                                    <Button><Link>Mega Menu <KeyboardArrowDownIcon/></Link></Button>

                                    <div className="dropdown_menu megaMenu w-100">
                                        <div className="row">
                                            <div className="col">
                                                <h4 className="text-g">Fruit & Vegetables</h4>
                                                <ul style={{padding:'0px'}} className="mt-4 mb-0">
                                                    <li><Link>Meat & Poultry</Link></li>
                                                    <li><Link>Fresh Vegetables</Link></li>
                                                    <li><Link>Herbs & Seasonings</Link></li>
                                                    <li><Link>Cuts & Sprouts</Link></li>
                                                    <li><Link>Exotic Fruits & Veggies</Link></li>
                                                    <li><Link>Packaged Produce</Link></li>
                                                </ul>
                                            </div>
                                            <div className="col">
                                                <h4 className="text-g">Breakfast & Dairy</h4>
                                                <ul style={{padding:'0px'}} className="mt-4 mb-0">
                                                    <li><Link>Meat & Poultry</Link></li>
                                                    <li><Link>Fresh Vegetables</Link></li>
                                                    <li><Link>Herbs & Seasonings</Link></li>
                                                    <li><Link>Cuts & Sprouts</Link></li>
                                                    <li><Link>Exotic Fruits & Veggies</Link></li>
                                                    <li><Link>Packaged Produce</Link></li>
                                                </ul>
                                            </div>
                                            <div className="col">
                                                <h4 className="text-g">Meat & Seafood</h4>
                                                <ul style={{padding:'0px'}} className="mt-4 mb-0">
                                                    <li><Link>Meat & Poultry</Link></li>
                                                    <li><Link>Fresh Vegetables</Link></li>
                                                    <li><Link>Herbs & Seasonings</Link></li>
                                                    <li><Link>Cuts & Sprouts</Link></li>
                                                    <li><Link>Exotic Fruits & Veggies</Link></li>
                                                    <li><Link>Packaged Produce</Link></li>
                                                </ul>
                                            </div>
                                            <div className="col">
                                                <img src={BannerMenu} alt="" className="w-100"/>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="list-inline-item">
                                    <Button><Link>Blog</Link></Button>
                                </li>
                                <li className="list-inline-item">
                                    <Button>
                                        <Link>Pages <KeyboardArrowDownIcon/>
                                        </Link>
                                    </Button>

                                    <div className="dropdown_menu">
                                        <ul style={{padding:'0px'}}>
                                            <li><Button><Link>About Us</Link></Button></li>
                                            <li><Button><Link>Contact</Link></Button></li>
                                            <li><Button><Link>My Account</Link></Button></li>
                                            <li><Button><Link>Login</Link></Button></li>
                                            <li><Button><Link>Register</Link></Button></li>
                                            <li><Button><Link>Forgot Password</Link></Button></li>
                                            <li><Button><Link>Reset Password</Link></Button></li>
                                            <li><Button><Link>Purchase Guide</Link></Button></li>
                                            <li><Button><Link>Privacy Policy</Link></Button></li>
                                            <li><Button><Link>Terms of Service</Link></Button></li>
                                            <li><Button><Link>404 Page</Link></Button></li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="list-inline-item">
                                    <Button><Link>Contact</Link></Button>
                                </li>
                            </ul>
                        </nav>
                    </div>

                    <div className="col-sm-2 part3 d-flex align-items-center justify-content-end">
                        <div className="phNo d-flex align-items-center ml-auto">
                            <span><HeadsetOutlinedIcon/></span>
                            <div className="info ml-3">
                                <h3 className="text-g mb-0">1900 - 888</h3>
                                <p className="mb-0">24/7 Support Center</p>
                            </div>
                        
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Nav;