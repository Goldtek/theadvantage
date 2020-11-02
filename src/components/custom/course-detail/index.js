import React,{ Fragment } from 'react';
import { connect, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Tolearn from '../tolearn';
import CourseInfo from '../course-info';
import Footer from '../footer';
import Header from '../header';
import CourseBanner from '../course-banner';
import { addItemToCart,removeItemFromCart } from '../../actions/cart';


const text = "Lorem Ipsum Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain,Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec placerat nunc nec nisi rutrum, sed interdum metus mattis. Vestibulum id felis vulputate, elementum lorem vitae, suscipit eros. Suspendisse vitae pulvinar dolor. Etiam tellus purus, luctus at porttitor nec, bibendum elementum mauris. Aenean ipsum lectus, suscipit nec auctor et, tincidunt vitae justo. Duis gravida velit et dolor eleifend, at pretium nulla cursus. Fusce bibendum, dui in vehicula euismod, odio nulla euismod nulla, sodales volutpat elit libero non odio. Maecenas urna metus, pulvinar ultricies velit a, hendrerit aliquam urna.";


const CourseDetail = ({price, name,  level, duration, numOfVideo, numOfLessons,  videos, Image,id,quantity }) => {
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
            <Header/>
            <CourseBanner
                title={name}
                subTitle=""
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

                                <p>Here are some more details of what you get with  {name}:</p>

                                <p className="description-features-list">
                                    {text}
                                </p>

                            
                            </div>

                        </div>

                        <div className="col-lg-4">
                            <div className="courses-details-header">
                                <div className="courses-price">
                                    <div className="price">${price}</div>
                                    <button className="default-btn" onClick={() =>add({image:Image,price,name,id,quantity})}><i className='bx bx-paper-plane icon-arrow before'></i><span className="label">Buy Training</span><i className="bx bx-paper-plane icon-arrow after"></i></button>
                                </div>
                            </div>
                            <CourseInfo packageName={name} level={level} duration={duration} numOfVideo={numOfVideo} numOfLessons={numOfLessons} />
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </Fragment>    
    );

}

const mapStateToProps = ({ Course: {course:{ price, name,  level, duration, numOfVideo, numOfLessons,  videos, Image,id,quantity }}}) => ({
     price, name,  level, duration, numOfVideo, numOfLessons,  videos, Image,id,quantity
  });

const mapDispatchToProps = { addItemToCart,removeItemFromCart };

export default connect(mapStateToProps,mapDispatchToProps)(CourseDetail);