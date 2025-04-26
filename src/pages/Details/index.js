import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import Rating from '@mui/material/Rating';
import InnerImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/styles.min.css';
import Slider from "react-slick";


import ProductDetails1 from '../../assets/images/product-16-2.jpg';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import CompareArrowsOutlinedIcon from '@mui/icons-material/CompareArrowsOutlined';
import { Button } from "@mui/material";


import SideBar from "../../components/Sidebar";

const DetailsPage = () => {

    const [zoomImage, setZoomImage] = useState(ProductDetails1);
    const [bigImageSize, setBigImageSize] = useState([1500, 1500]);
    const [SmlImageSize, setSmlImageSize] = useState([150, 150]);

    const [activeSize, setActiveSize] = useState(0);

    const [inputValue, setinputValue] = useState(1);

    const zoomSlider = useRef();

    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        fade: false,
        arrows: true,
    };

    // click vào chuyển image
    const goto = (url) => {
        setZoomImage(url);
    }

    // chức năng nút chọn size (g)
    const isActive = (index) => {
        setActiveSize(index);
    }

    const plus = () => {
        setinputValue(inputValue+1);
    }

    const minus = () => {
        if(inputValue!==1) {
            setinputValue(inputValue-1);
        }
    }

    return (
        <section className="detailsPage">
            <div className="breadcrumbWrapper">
                <div className="container-fluid">
                    <ul className="breadcrumb breadcrumb2 mb-0">
                        <li><Link>Home</Link></li>
                        <li><Link>Vegetables & tubers </Link></li>
                        <li>Seeds of Change Organic</li>
                    </ul>
                </div>
            </div>
            <div className="container-fluid detailsContent">
                <div className="row pt-4 pb-4">
                    <div className="col-md-9 part1">
                        <div className="row">

                            {/* product zoom code start here */}
                            <div className="col-md-5">
                                <div className="productZoom">
                                    <InnerImageZoom src={`${zoomImage}?im=Resize=(${bigImageSize[0]},${bigImageSize[1]})`} zoomType="hover" zoomScale={1} />
                                </div>

                                <Slider {...settings} className="zoomSlider" ref={zoomSlider}>
                                    <div className="item">
                                        <img src={`${ProductDetails1}?im=Resize=(${SmlImageSize[0]},${SmlImageSize[1]})`} alt="" className="w-100" 
                                        onClick={()=>goto(ProductDetails1)}/>
                                    </div>
                                    <div className="item">
                                        <img src={`https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/thumbnail-3.jpg?im=Resize=(${SmlImageSize[0]},${SmlImageSize[1]})`} alt="" className="w-100" 
                                        onClick={()=>goto('https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/thumbnail-3.jpg')}/>
                                    </div>
                                    <div className="item">
                                        <img src={`https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/thumbnail-4.jpg?im=Resize=(${SmlImageSize[0]},${SmlImageSize[1]})`} alt="" className="w-100" 
                                        onClick={()=>goto('https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/thumbnail-4.jpg')}/>
                                    </div>
                                    <div className="item">
                                        <img src={`https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/thumbnail-5.jpg?im=Resize=(${SmlImageSize[0]},${SmlImageSize[1]})`} alt="" className="w-100" 
                                        onClick={()=>goto('https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/thumbnail-5.jpg')}/>
                                    </div>
                                    <div className="item">
                                        <img src={`https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/thumbnail-6.jpg?im=Resize=(${SmlImageSize[0]},${SmlImageSize[1]})`} alt="" className="w-100" 
                                        onClick={()=>goto('https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/thumbnail-6.jpg')}/>
                                    </div>
                                    <div className="item">
                                        <img src={`https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/thumbnail-7.jpg?im=Resize=(${SmlImageSize[0]},${SmlImageSize[1]})`} alt="" className="w-100" 
                                        onClick={()=>goto('https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/thumbnail-7.jpg')}/>
                                    </div>
                                    <div className="item">
                                        <img src={`https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/thumbnail-8.jpg?im=Resize=(${SmlImageSize[0]},${SmlImageSize[1]})`} alt="" className="w-100" 
                                        onClick={()=>goto('https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/thumbnail-8.jpg')}/>
                                    </div>
                                </Slider>
                                
                            </div>
                            {/* product zoom code end here */}

                            {/* product info code start here */}
                            <div className="col-md-7 productInfo">
                                <h2>Seeds of Change Organic Quinoa, Brown</h2>
                                <div className="d-flex align-items-center mb-4">
                                    <Rating name="half-rating-read" defaultValue={3.5} precision={0.5} readOnly />
                                    <span className="text-light">(32 reviews)</span>
                                </div>

                                {/* Price */}
                                <div className="priceSec d-flex align-items-center">
                                    <span className="text-g priceLarge">$38</span>
                                    <div className="ms-2 d-flex flex-column">
                                        <span className="text-org">26% Off</span>
                                        <span className="text-light oldPrice">$52</span>
                                    </div>
                                </div>

                                {/* product details */}
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam rem officia, 
                                    corrupti reiciendis minima nisi modi, quasi, odio minus dolore impedit fuga eum eligendi.</p>


                                {/* Size / Weight: */}
                                <div className="productSize d-flex align-items-center">
                                    <span>Size / Weight:</span>
                                    <ul className="list list-inline mb-0 ps-2">
                                        <li className="list-inline-item"><a className={`tag ${activeSize===0 ? 'active' : ''}`} onClick={()=>isActive(0)}>50g</a></li>
                                        <li className="list-inline-item"><a className={`tag ${activeSize===1 ? 'active' : ''}`} onClick={()=>isActive(1)}>60g</a></li>
                                        <li className="list-inline-item"><a className={`tag ${activeSize===2 ? 'active' : ''}`} onClick={()=>isActive(2)}>80g</a></li>
                                        <li className="list-inline-item"><a className={`tag ${activeSize===3 ? 'active' : ''}`} onClick={()=>isActive(3)}>100g</a></li>
                                        <li className="list-inline-item"><a className={`tag ${activeSize===4 ? 'active' : ''}`} onClick={()=>isActive(4)}>150g</a></li>
                                    </ul>
                                </div>


                                <div className="addCartSection pt-4 pb-4 d-flex align-items-center">
                                    <div className="counterSec me-2">
                                        <input type="number" value={inputValue}/>
                                         <span className="arrow plus" onClick={plus}><KeyboardArrowUpOutlinedIcon/></span>
                                         <span className="arrow minus" onClick={minus}><KeyboardArrowDownOutlinedIcon/></span>
                                    </div>

                                    <Button className="btn-g btn-lg addtocartbtn"><ShoppingCartOutlinedIcon/>Add to Cart</Button>
                                    <Button className="btn-lg addtocartbtn ms-3 btn-border"><FavoriteBorderOutlinedIcon/></Button>
                                    <Button className="btn-lg addtocartbtn ms-3 btn-border"><CompareArrowsOutlinedIcon/></Button>
                                </div>

                            </div>
                            {/* product info code end here */}
                        </div>
                    </div>

                    <div className="col-md-3 rightPart sidebarWrapper">
                        <SideBar/>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default DetailsPage;