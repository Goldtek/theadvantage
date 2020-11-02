import React, { Fragment } from 'react';
import { connect, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import CourseBanner from '../course-banner';
import Tolearn from '../tolearn';
import CourseInfo from '../course-info';
import { addItemToCart,removeItemFromCart } from '../../actions/cart';

const Package = ({price, packageName, description, toLearn, level, duration, numOfVideo, numOfLessons,  videos, Image }) => {
    const dispatch = useDispatch();
    const history =   useHistory();

    const  add = cartItem => {
        try{
             dispatch(addItemToCart(cartItem));
             history.push('/cart')
         
        } catch(error){
            console.log(error);
        }

    }

    return (
        <Fragment>
            <CourseBanner
            title={packageName}
            />

            <section className="courses-details-area pt-100 pb-70 mb-30">
                <div className="container">
                    <div className="courses-details-header">
                        <div className="row align-items-center">
                            <div className="col-lg-8">
                            

                            </div>

                        
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-8">
                            <div className="courses-details-image text-center">
                                <img src={Image} alt="image"/>
                            </div>

                            <div className="courses-details-desc">
                                <h3>Description</h3>

                                <p>Here are some more details of what you get with The Advantage {packageName}:</p>

                                <p className="description-features-list">
                                    {description}
                                </p>

                                <h3>What you'll learn</h3>

                                <div className="why-you-learn">
                                    <ul>
                                        {toLearn.map((name)=> <Tolearn name={name} />)}  
                                    </ul>
                                </div>
                            </div>

                        </div>

                        
                    </div>
                </div>
            </section>
        </Fragment>     
    );

}

export default Package;