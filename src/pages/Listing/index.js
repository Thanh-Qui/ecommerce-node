import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SideBar from '../../components/Sidebar';
import Product from '../../components/product';
import { Button } from '@mui/material';

import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import FilterListOutlinedIcon from '@mui/icons-material/FilterListOutlined';

const Listing = () => {

    const [isOpenDropDown, setOpenDropDown] = useState(false);
    const [isOpenDropDown2, setOpenDropDown2] = useState(false);

    return (
        <>
            <section className='listingPage'>
                <div className="container-fluid">
                    <div className="breadcrumb flex-column">
                        <h2>Snack</h2>
                        <ul className='list list-inline mb-0'>
                            <li className='list-inline-item'>
                                <Link to={''}>Home</Link>
                            </li>
                            <li className='list-inline-item'>
                                <Link to={''}>Shop</Link>
                            </li>
                            <li className='list-inline-item'>
                                <Link to={''}>Snack</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="listingData">
                        <div className="row">
                            <div className="col-md-3 sidebarWrapper">
                                <SideBar />
                            </div>

                            <div className="col-md-9 rightContent homeProducts pt-0">

                                <div className='topStrip d-flex align-items-center'>
                                    <p className='mb-0'>We found <span className='text-success'>29</span> items for you!</p>

                                    {/* Bộ lọc */}
                                    <div className='ms-auto d-flex align-items-center'>
                                        <div className="tab_ position-relative">
                                            <Button className='btn_' onClick={() => setOpenDropDown(!isOpenDropDown)}><GridViewOutlinedIcon/>&nbsp; Show: 50</Button>
                                            {
                                                // && dùng để hiển thị điều kiện. nếu đk trước đúng thì hiển thị đoạn sau
                                                isOpenDropDown !== false &&
                                                <ul className='dropdownMenu'>
                                                    <li><Button className='align-items-center' onClick={() => setOpenDropDown(false)}>50</Button></li>
                                                    <li><Button className='align-items-center' onClick={() => setOpenDropDown(false)}>100</Button></li>
                                                    <li><Button className='align-items-center' onClick={() => setOpenDropDown(false)}>150</Button></li>
                                                    <li><Button className='align-items-center' onClick={() => setOpenDropDown(false)}>200</Button></li>
                                                    <li><Button className='align-items-center' onClick={() => setOpenDropDown(false)}>All</Button></li>
                                                </ul>
                                            }
                                        </div>
                                        <div className="tab_ ms-3 position-relative">
                                            <Button className='btn_' onClick={() => setOpenDropDown2(!isOpenDropDown2)}><FilterListOutlinedIcon/>&nbsp; Sort by: Featured </Button>
                                            {
                                                // && dùng để hiển thị điều kiện. nếu đk trước đúng thì hiển thị đoạn sau
                                                isOpenDropDown2 !== false &&
                                                <ul className='dropdownMenu'>
                                                    <li><Button className='align-items-center' onClick={() => setOpenDropDown2(false)}>Featured</Button></li>
                                                    <li><Button className='align-items-center' onClick={() => setOpenDropDown2(false)}>Price: Low to High</Button></li>
                                                    <li><Button className='align-items-center' onClick={() => setOpenDropDown2(false)}>Price: High to Low</Button></li>
                                                    <li><Button className='align-items-center' onClick={() => setOpenDropDown2(false)}>Release Date</Button></li>
                                                    <li><Button className='align-items-center' onClick={() => setOpenDropDown2(false)}>Avg. Rating</Button></li>
                                                </ul>
                                            }
                                        </div>
                                    </div>
                                </div>

                                {/* Danh sách sản phẩm bên phải */}
                                <div className='productRow ps-2 pe-3'>
                                    <div className="item">
                                        <Product tag="new"/>
                                    </div>
                                    <div className="item">
                                        <Product tag="best"/>
                                    </div>
                                    <div className="item">
                                        <Product tag="new"/>
                                    </div>
                                    <div className="item">
                                        <Product />
                                    </div>
                                    <div className="item">
                                        <Product tag="new"/>
                                    </div>
                                    <div className="item">
                                        <Product />
                                    </div>
                                    <div className="item">
                                        <Product />
                                    </div>

                                    <div className="item">
                                        <Product />
                                    </div>
                                    <div className="item">
                                        <Product />
                                    </div>
                                    <div className="item">
                                        <Product />
                                    </div>
                                    <div className="item">
                                        <Product />
                                    </div>
                                    <div className="item">
                                        <Product />
                                    </div>
                                    <div className="item">
                                        <Product />
                                    </div>
                                    <div className="item">
                                        <Product />
                                    </div>
                                    <div className="item">
                                        <Product />
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>


                </div>
            </section>
        </>
    )
}

export default Listing;