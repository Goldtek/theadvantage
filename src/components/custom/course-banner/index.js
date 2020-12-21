import React from 'react';
import { Link } from "react-router-dom";

const CourseBanner = ({title,image}) => (
    <section id="page-banner" class="pt-105 pb-130 bg_cover" data-overlay="8" style={{ backgroundImage: `url(${image})` }}>
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="page-banner-cont">
                        <h2>{title}</h2>
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><Link  to="#">Home</Link></li>
                                <li class="breadcrumb-item active" aria-current="page">{title}</li>
                            </ol>
                        </nav>
                    </div> 
                </div>
            </div> 
        </div> 
    </section>
);

export default CourseBanner;