import React, { useEffect, useState } from 'react';
import '../header/header.css';
import Logo from '../../assets/images/logo.svg';
import SearchIcon from '@mui/icons-material/Search';
import Select from '../selectDrop/select';
import axios from 'axios';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import IconCompare from '../../assets/images/icon-compare.svg';
import IconHeart from '../../assets/images/icon-heart.svg';
import IconCart from '../../assets/images/icon-cart.svg';
import IconUser from '../../assets/images/icon-user.svg';
import Button from '@mui/material/Button';

import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';

import ClickAwayListener from '@mui/material/ClickAwayListener';

import Nav from './nav/nav';

const Header = () => {

    const [isOpenDropDown, setOpenDropDown] = useState(false);

    const [categories, setcategories] = useState([
        'Milks and Dairies',
        'Wines & Drinks',
        'Fresh Seafood',
        'Fast food',
        'Clothing & beauty',
        'Bread and Juice',
    ]);


    const countryList = [];

    useEffect(() => {
        getCountry('https://countriesnow.space/api/v0.1/countries/');
    }, []);

    const getCountry = async (url) => {
        try {
            await axios.get(url).then((res) => {
                if (res !== null) {
                    // console.log(res.data.data);
                    res.data.data.map((item, index) => {
                        countryList.push(item.country);
                    })

                }
            })
        } catch (error) {
            console.log(error.message);

        }
    }

    return (
        <>
            <header>
                <div className="container-fluid">
                    <div className="row">
                        <div className='col-sm-2'>
                            <img width={'180px'} src={Logo} alt="logo" />
                        </div>

                        {/* headerSearch start here */}
                        <div className='col-sm-5'>
                            <div className='headerSearch d-flex align-items-center'>
                                {/* truyền dữ liệu từ component cha xuống con (props) */}
                                <Select data={categories} placeholder={'All Categories'} icon={false} />

                                <div className="search">
                                    <input type="text" name="" id="" placeholder='Search for items...' />
                                    <SearchIcon className='searchIcon cursor' />
                                </div>
                            </div>
                        </div>
                        {/* headerSearch end here */}

                        <div className='col-sm-5 d-flex align-item-center'>
                            <div className="ml-auto d-flex align-item-center">
                                <div className="countryWrapper">
                                    <Select data={countryList} placeholder={'Your location'}
                                        icon={<LocationOnOutlinedIcon style={{ opacity: '0.5' }} />} />
                                </div>

                                <ClickAwayListener onClickAway={()=>setOpenDropDown(false)}>
                                    <ul className='list list-inline mb-0 headerTabs'>
                                        <li className='list-inline-item'>
                                            <span>
                                                <img src={IconCompare} alt="" />
                                                <span className='badge bg-success rounded-circle'>3</span>
                                                Compare
                                            </span>
                                        </li>

                                        <li className='list-inline-item'>
                                            <span>
                                                <img src={IconHeart} alt="" />
                                                <span className='badge bg-success rounded-circle'>3</span>
                                                Wishlist
                                            </span>
                                        </li>

                                        <li className='list-inline-item'>
                                            <span>
                                                <img src={IconCart} alt="" />
                                                <span className='badge bg-success rounded-circle'>3</span>
                                                Cart
                                            </span>
                                        </li>

                                        {/* gọi hàm setOpenDropDown và đảo ngược giá trị hiện tại */}
                                        <li className='list-inline-item'>
                                            <span onClick={()=>setOpenDropDown(!isOpenDropDown)}>
                                                <img src={IconUser} alt="" />
                                                Account
                                            </span>

                                            {
                                                // && dùng để hiển thị điều kiện. nếu đk trước đúng thì hiển thị đoạn sau
                                                isOpenDropDown!==false &&
                                                <ul className='dropdownMenu'>
                                                    <li><Button className='align-items-center'><PermIdentityIcon/>My Account</Button></li>
                                                    <li><Button><PlaceOutlinedIcon/>Order Tracking</Button></li>
                                                    <li><Button><FavoriteBorderOutlinedIcon/>My Wishlist</Button></li>
                                                    <li><Button><SettingsOutlinedIcon/>Setting</Button></li>
                                                    <li><Button><LogoutOutlinedIcon/>Sign out</Button></li>
                                                </ul>
                                            }

                                            
                                        </li>
                                    </ul>
                                </ClickAwayListener>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <Nav/>
        </>
    )
}

export default Header