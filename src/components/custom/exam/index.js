import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const ExamBody = ({ path }) => (
    <Fragment>
           <div className="col-md-3">
                <img src ={path} class = "rounded-circle shad" alt = "Rounded Image" width = "200" height = "200"/>
            </div>
    </Fragment>
);

export default ExamBody;