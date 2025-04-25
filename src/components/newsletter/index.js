import React from "react";
import './style.css';

import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import Button from '@mui/material/Button';


const Newsletter = () => {
    return (
        <div className="newsLetterBanner">
            <SendOutlinedIcon />
            <input type="text" name="" id="" placeholder="Your email address" />
            <Button className="bg-g">Subscribe</Button>
        </div>
    )
}

export default Newsletter;