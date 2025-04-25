import React from "react";

import Slider from '@mui/material/Slider';
import Checkbox from '@mui/material/Checkbox';
import { Button } from "@mui/material";

import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';

import BannerImage from '../../assets/images/banner1.png';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


function valuetext(value) {
    return `${value}°C`;
  }

const SideBar = () => {
    const [value, setValue] = React.useState([20, 37]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <>
            <div className="sidebar">
                {/* Category */}
                <div className="card  border-0 shadow">
                    <h3>Category</h3>

                    <div className="catList">
                        <div className="catItem d-flex align-items-center">
                            <span className="img"><img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/category-1.svg" width={30} alt="" /></span>
                            <h6 className="mb-0 ms-3 me-3">Milks & Dairies</h6>
                            <span className="d-flex align-items-center justify-content-center rounded-circle ms-auto">30</span>
                        </div>
                    </div>
                    <div className="catList">
                        <div className="catItem d-flex align-items-center">
                            <span className="img"><img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/category-1.svg" width={30} alt="" /></span>
                            <h6 className="mb-0 ms-3 me-3">Milks & Dairies</h6>
                            <span className="d-flex align-items-center justify-content-center rounded-circle ms-auto">30</span>
                        </div>
                    </div>
                    <div className="catList">
                        <div className="catItem d-flex align-items-center">
                            <span className="img"><img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/category-1.svg" width={30} alt="" /></span>
                            <h6 className="mb-0 ms-3 me-3">Milks & Dairies</h6>
                            <span className="d-flex align-items-center justify-content-center rounded-circle ms-auto">30</span>
                        </div>
                    </div>
                    <div className="catList">
                        <div className="catItem d-flex align-items-center">
                            <span className="img"><img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/category-1.svg" width={30} alt="" /></span>
                            <h6 className="mb-0 ms-3 me-3">Milks & Dairies</h6>
                            <span className="d-flex align-items-center justify-content-center rounded-circle ms-auto">30</span>
                        </div>
                    </div>
                    <div className="catList">
                        <div className="catItem d-flex align-items-center">
                            <span className="img"><img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/category-1.svg" width={30} alt="" /></span>
                            <h6 className="mb-0 ms-3 me-3">Milks & Dairies</h6>
                            <span className="d-flex align-items-center justify-content-center rounded-circle ms-auto">30</span>
                        </div>
                    </div>

                </div>
                {/* Fill by price */}
                <div className="card border-0 shadow">
                    <h3>Fill by price</h3>
                    <Slider
                        min={0}
                        step={1}
                        max={1000}
                        getAriaLabel={() => 'Temperature range'}
                        value={value}
                        onChange={handleChange}
                        valueLabelDisplay="auto"
                        getAriaValueText={valuetext}
                        color="success"
                    />

                    <div className="d-flex pt-2 pb-2 priceRange">
                        <span>From : <strong className="text-success">${value[0]}</strong></span>
                        <span className="ms-auto">to : <strong className="text-success">${value[1]}</strong></span>
                    </div>

                    <div className="filters">
                        <h6>Color</h6>
                        <ul className="ps-0 mb-0">
                            <li><Checkbox {...label} color="success"/>Red (56)</li>
                            <li><Checkbox {...label} color="success"/>Green (78)</li>
                            <li><Checkbox {...label} color="success"/>Blue (54)</li>
                        </ul>
                    </div>

                    <div className="filters">
                        <h6>Item Condition</h6>
                        <ul className="ps-0">
                            <li><Checkbox {...label} color="success"/>New (1506)</li>
                            <li><Checkbox {...label} color="success"/>Refurbished (27)</li>
                            <li><Checkbox {...label} color="success"/>Used (45)</li>
                        </ul>
                    </div>

                    <div className="d-flex">
                        <Button className="btn btn-g"><FilterAltOutlinedIcon/>Filter</Button>
                    </div>
                    
                </div>

                <img src={BannerImage} alt="" className="w-100" />
            </div>

        </>
    )
}

export default SideBar;