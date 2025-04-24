import React from "react";
import './style.css';

import Rating from '@mui/material/Rating';
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';


const Product = () => {
    return(
        <div className="productThumb">
            <Link>
                <div className="imgWrapper">
                    <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-1-2.jpg" alt="" className="w-100" />
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
                    
                    <Button className="ms-auto transition"><ShoppingCartOutlinedIcon/> Add</Button>
                </div>
            </div>
        </div>
    )
}

export default Product;