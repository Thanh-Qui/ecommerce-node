import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import Rating from '@mui/material/Rating';
import InnerImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/styles.min.css';
import Slider from "react-slick";


import ProductDetails1 from '../../assets/images/product-16-2.jpg';


const DetailsPage = () => {

    const [zoomImage, setZoomImage] = useState(ProductDetails1);
    const [bigImageSize, setBigImageSize] = useState([1500, 1500]);
    const [SmlImageSize, setSmlImageSize] = useState([150, 150]);

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

    const goto = (index) => {
        
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
                                    <InnerImageZoom src={`${ProductDetails1}?im=Resize=(${bigImageSize[0]},${bigImageSize[1]})`} zoomType="hover" zoomScale={1} />
                                </div>

                                <Slider {...settings} className="zoomSlider" ref={zoomSlider}>
                                    <div className="item">
                                        <img src={`${ProductDetails1}?im=Resize=(${SmlImageSize[0]},${SmlImageSize[1]})`} alt="" className="w-100" 
                                        onClick={()=>goto(0)}/>
                                    </div>
                                    <div className="item">
                                        <img src={`${ProductDetails1}?im=Resize=(${SmlImageSize[0]},${SmlImageSize[1]})`} alt="" className="w-100" 
                                        onClick={()=>goto(1)}/>
                                    </div>
                                    <div className="item">
                                        <img src={`${ProductDetails1}?im=Resize=(${SmlImageSize[0]},${SmlImageSize[1]})`} alt="" className="w-100" 
                                        onClick={()=>goto(2)}/>
                                    </div>
                                    <div className="item">
                                        <img src={`${ProductDetails1}?im=Resize=(${SmlImageSize[0]},${SmlImageSize[1]})`} alt="" className="w-100" 
                                        onClick={()=>goto(3)}/>
                                    </div>
                                    <div className="item">
                                        <img src={`${ProductDetails1}?im=Resize=(${SmlImageSize[0]},${SmlImageSize[1]})`} alt="" className="w-100" 
                                        onClick={()=>goto(4)}/>
                                    </div>
                                    <div className="item">
                                        <img src={`${ProductDetails1}?im=Resize=(${SmlImageSize[0]},${SmlImageSize[1]})`} alt="" className="w-100" 
                                        onClick={()=>goto(5)}/>
                                    </div>
                                    <div className="item">
                                        <img src={`${ProductDetails1}?im=Resize=(${SmlImageSize[0]},${SmlImageSize[1]})`} alt="" className="w-100" 
                                        onClick={()=>goto(6)}/>
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


                                <div className="priceSec d-flex align-items-center">
                                    <span className="text-g priceLarge">$38</span>
                                    <div className="ms-2 d-flex flex-column">
                                        <span className="text-org">26% Off</span>
                                        <span className="text-light oldPrice">$52</span>
                                    </div>
                                </div>

                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam rem officia, 
                                    corrupti reiciendis minima nisi modi, quasi, odio minus dolore impedit fuga eum eligendi.</p>

                            </div>
                            {/* product info code end here */}
                        </div>
                    </div>

                    <div className="col-md-3 part2">

                    </div>

                </div>
            </div>
        </section>
    )
}

export default DetailsPage;