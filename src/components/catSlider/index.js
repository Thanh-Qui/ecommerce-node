import React, { useState } from "react";
import Slider from "react-slick";
import './style.css';

import Cat1 from '../../assets/images/cat-1.png';
import Cat2 from '../../assets/images/cat-2.png';
import Cat4 from '../../assets/images/cat-4.png';
import Cat5 from '../../assets/images/cat-5.png';
import Cat9 from '../../assets/images/cat-9.png';
import Cat13 from '../../assets/images/cat-13.png';
import Cat14 from '../../assets/images/cat-14.png';
import Cat15 from '../../assets/images/cat-15.png';
import Cat12 from '../../assets/images/cat-12.png';
import Cat11 from '../../assets/images/cat-11.png';



const CatSlider = () => {

    const [itemBg, setItemBg] = useState([
        '#fffceb',
        '#ecffec',
        '#feefea',
        '#fff3eb',
        '#fff3ff',
        '#f2fce4',
        '#feefea',
        '#fffceb',
        '#feefea',
        '#ecffec',
        '#feefea',
        '#fff3eb',
        '#fff3ff',
        '#f2fce4',
        '#feefea',
        '#fffceb',
        '#feefea',
        '#ecffec',
    ]);

    const [imageBg, setImageBg] = useState([
        Cat1,
        Cat2,
        Cat4,
        Cat5,
        Cat9,
        Cat11,
        Cat12,
        Cat13,
        Cat14,
        Cat15,
    ]);


    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 10,
        slidesToScroll: 1,
        fade: false,
        arrows: true,
        autoplaySpeed: 2000,
        autoplay: true,
    };

    return (
        <>
            <div className="catSliderSection">
                <div className="container-fluid">
                    <h2 className="hd">Featured Categories</h2>
                    <Slider {...settings} className="cat_slider_main"
                    id="cat_slider_main">
                        {
                            // Hiển thị màu background
                            itemBg.length!==0 && itemBg.map((item, index)=> {
                                return (
                                    <div className="item">
                                        <div className="info" style={{background:item}}>
                                           {/* {
                                            imageBg[index] && (
                                                <img height={'100'} width={'100'} src={imageBg[index]} alt="" />
                                            )
                                           } */}
                                             
                                            <img height={'100'} width={'100'} src={Cat13} alt="" />
                                            <h5>Vegetables</h5>
                                            <p>72 items</p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                        

                        {/* <div className="item">
                            <div className="info">
                                <img src={Cat2} alt="" />
                                <h5>Vegetables</h5>
                                <p>72 items</p>
                            </div>
                        </div>

                        <div className="item">
                            <div className="info">
                                <img src={Cat4} alt="" />
                                <h5>Vegetables</h5>
                                <p>72 items</p>
                            </div>
                        </div>

                        <div className="item">
                            <div className="info">
                                <img src={Cat5} alt="" />
                                <h5>Vegetables</h5>
                                <p>72 items</p>
                            </div>
                        </div>

                        <div className="item">
                            <div className="info">
                                <img src={Cat9} alt="" />
                                <h5>Vegetables</h5>
                                <p>72 items</p>
                            </div>
                        </div>

                        <div className="item">
                            <div className="info">
                                <img src={Cat1} alt="" />
                                <h5>Vegetables</h5>
                                <p>72 items</p>
                            </div>
                        </div>

                        <div className="item">
                            <div className="info">
                                <img src={Cat14} alt="" />
                                <h5>Vegetables</h5>
                                <p>72 items</p>
                            </div>
                        </div>

                        <div className="item">
                            <div className="info">
                                <img src={Cat15} alt="" />
                                <h5>Vegetables</h5>
                                <p>72 items</p>
                            </div>
                        </div>

                        <div className="item">
                            <div className="info">
                                <img src={Cat12} alt="" />
                                <h5>Vegetables</h5>
                                <p>72 items</p>
                            </div>
                        </div>

                        <div className="item">
                            <div className="info">
                                <img src={Cat11} alt="" />
                                <h5>Vegetables</h5>
                                <p>72 items</p>
                            </div>
                        </div> */}



                    </Slider>
                </div>
            </div>

            <br />
        </>
    )
}

export default CatSlider;