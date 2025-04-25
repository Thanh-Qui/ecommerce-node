import React from "react";
import { Link } from "react-router-dom";

const DetailsPage = () => {
    return (
        <section className="detailsPage">
            <div className="breadcrumbWrapper">
                <div className="container-fluid">
                    <ul className="breadcrumb breadcrumb2">
                        <li><Link>Home</Link></li>
                        <li><Link>Vegetables & tubers </Link></li>
                        <li>Seeds of Change Organic</li>
                    </ul>
                </div>
            </div>
            <div className="container-fluid">

            </div>
        </section>
    )
}

export default DetailsPage;