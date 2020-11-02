import React from 'react';

const CourseBanner = ({title,subTitle}) => (
    <div className="sub">
    <div className="container-fluid">
        <div className="row">
            <div className="col-lg-10 mr-auto mll">
                <h4>
                   {title}
                </h4>
                <p>
                   {subTitle}
                </p>
            </div>
        </div>
    </div>
</div>
);

export default CourseBanner;