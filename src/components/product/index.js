import React from "react";
import './style.css';

import Rating from '@mui/material/Rating';
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import CompareArrowsOutlinedIcon from '@mui/icons-material/CompareArrowsOutlined';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';


const Product = (props) => {
    return (
        <div className="productThumb">
            {
                    props.tag!==null && props.tag!==undefined &&
                    <span className={`badge ${props.tag}`}>{props.tag}</span>
            }
            
            <Link>
                <div className="imgWrapper">
                    <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-2-1.jpg" alt="" className="w-100" />

                    <div className="overlay transition">
                        <ul className="list list-inline mb-0">
                            <li className="list list-inline-item">
                                <a className="cursor" tooltip="Add to Wishlist">
                                    <FavoriteBorderOutlinedIcon/>
                                </a>
                            </li>
                            <li className="list list-inline-item">
                                <a className="cursor"  tooltip="Compare">
                                    <CompareArrowsOutlinedIcon/>
                                </a>
                            </li>
                            <li className="list list-inline-item">
                                <a className="cursor"  tooltip="Quick view">
                                    <RemoveRedEyeOutlinedIcon/>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>


            </Link>

            <div className="info">
                <span className="d-block catName">Snack</span>
                <h4 className="title"><Link>Seeds of Change Organic Quinoa, Brown, & Red Rice</Link></h4>
                <Rating name="half-rating-read" defaultValue={3.5} precision={0.5} readOnly />
                <span className="brand d-block text-g">By <Link className="text-g">NestFood</Link></span>

                <div className="d-flex align-items-center w-100 mt-3">
                    <div className="d-flex align-items-center">
                        <span className="price text-g font-weight-bold">$28.85</span> <span className="oldPrice">$32.8</span>
                    </div>

                    <Button className="ms-auto transition"><ShoppingCartOutlinedIcon /> Add</Button>
                </div>
            </div>
        </div>
    )
}

export default Product;