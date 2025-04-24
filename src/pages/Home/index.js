import React from "react";
import SliderBanner from '../Home/slider/index';
import CatSlider from "../../components/catSlider";
import Banners from "../../components/banners";
import Slider from "react-slick";


import './style.css';
import Product from "../../components/product";

import Banner4 from "../../assets/images/banner4.png";


const Home = () => {

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        fade: false,
        arrows: true,
        autoplay:3000,
    };

    return (
        <>
            <SliderBanner />
            <CatSlider />

            <Banners />

            {/* Danh mục popular products */}
            <section className="homeProducts">
                <div className="container-fluid">

                    <div className="d-flex align-items-center">
                        <h2 className="hd me-auto">Popular Products</h2>
                        <ul className="list list-inline ms-auto filterTab mb-0">
                            <li className="list list-inline-item">
                                <a href="#" className="cursor">All</a>
                            </li>

                            <li className="list list-inline-item">
                                <a href="#" className="cursor">Milks & Dairies</a>
                            </li>
                            <li className="list list-inline-item">
                                <a href="#" className="cursor">Coffes & Teas
                                </a>
                            </li>
                            <li className="list list-inline-item">
                                <a href="#" className="cursor">Pet Foods</a>
                            </li>
                            <li className="list list-inline-item">
                                <a href="#" className="cursor">Meats</a>
                            </li>
                            <li className="list list-inline-item">
                                <a href="#" className="cursor">Vegetables</a>
                            </li>
                            <li className="list list-inline-item">
                                <a href="#" className="cursor">Fruits</a>
                            </li>
                        </ul>
                    </div>

                    <div className="row productRow">
                        <div className="item">
                            <Product tag="hot" />
                        </div>
                        <div className="item">
                            <Product tag="new" />
                        </div>
                        <div className="item">
                            <Product tag="best" />
                        </div>
                        <div className="item">
                            <Product tag="sale" />
                        </div>
                        <div className="item">
                            <Product />
                        </div>
                        <div className="item">
                            <Product tag="sale" />
                        </div>
                        <div className="item">
                            <Product />
                        </div>
                        <div className="item">
                            <Product tag="best" />
                        </div>
                        <div className="item">
                            <Product />
                        </div>
                        <div className="item">
                            <Product tag="hot" />
                        </div>
                        <div className="item">
                            <Product tag="hot" />
                        </div>
                        <div className="item">
                            <Product tag="hot" />
                        </div>
                    </div>

                </div>
            </section>


            <section className="homeProducts homeProductsRow2 pt-0">
                <div className="container-fluid">

                    <div className="d-flex align-items-center">
                        <h2 className="hd me-auto">Daily Best Sells</h2>
                        <ul className="list list-inline ms-auto filterTab mb-0">
                            <li className="list list-inline-item">
                                <a href="#" className="cursor">Featured</a>
                            </li>

                            <li className="list list-inline-item">
                                <a href="#" className="cursor">Popular</a>
                            </li>
                            <li className="list list-inline-item">
                                <a href="#" className="cursor">New added</a>
                            </li>

                        </ul>
                    </div>
                    <br />
                    <div className="row">
                        <div className="col-md-3">
                            <img src={Banner4} alt="" className="w-100" />
                        </div>

                        <div className="col-md-9">
                            <Slider {...settings} className="prodSlider">
                                <div className="item">
                                    <Product tag="sale" />
                                </div>
                                <div className="item">
                                    <Product tag="hot" />
                                </div>
                                <div className="item">
                                    <Product tag="new" />
                                </div>
                                <div className="item">
                                    <Product tag="best" />
                                </div>
                            </Slider>
                        </div>

                    </div>


                </div>
            </section>


            <br /><br />
        </>
    )
}

export default Home;