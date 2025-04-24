import React from "react";
import HomeSlider from '../Home/slider/index';
import CatSlider from "../../components/catSlider";
import Banners from "../../components/banners";

import './style.css';
import Product from "../../components/product";

const Home = () => {
    return (
        <>
            <HomeSlider/>
            <CatSlider/>
            
            <Banners/>

            {/* Danh mục popular products */}
            <section className="homeProducts">
                <div className="container-fluid">
                    
                    <div className="d-flex align-items-center">
                        <h2 className="hd me-auto">Popular Products</h2>
                        <ul className="list list-inline ms-auto filterTab">
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
                            <Product/>
                        </div>
                        <div className="item">
                            <Product/>
                        </div>
                        <div className="item">
                            <Product/>
                        </div>
                        <div className="item">
                            <Product/>
                        </div>
                        <div className="item">
                            <Product/>
                        </div>
                        <div className="item">
                            <Product/>
                        </div>
                        <div className="item">
                            <Product/>
                        </div>
                        <div className="item">
                            <Product/>
                        </div>
                        <div className="item">
                            <Product/>
                        </div>
                        <div className="item">
                            <Product/>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Home;