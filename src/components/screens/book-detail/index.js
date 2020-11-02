import React, { useState, useEffect, Fragment } from 'react';
import { connect, useDispatch } from 'react-redux';
import { Header, Footer, Pagination } from '../../custom';
import { addItemToCart } from '../../actions/cart';
import { useHistory } from 'react-router-dom';


function BookDetail({ author, title, description,price,id,image}){
    const dispatch = useDispatch();
    const history = useHistory();
    const [quantity,setQuantity] = useState(1);

    const  add = cartItem => {
        try{
             dispatch(addItemToCart(cartItem));
             history.push('/cart')
        } catch(error){
            console.log(error);
        }

    }

   const changeQuantity = (event) => {
        setQuantity(event.target.value);
    }

    return (
        <Fragment>
            <Header/>
            <div className="sub">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-6 mr-auto mll">
                            <h4>
                                {title}
                            </h4>
                            <p>
                               {description}
                            </p>
                            <span>
                                <b>By:</b> <small>{author}</small> 
                            </span>
                        </div>
                    </div>
                </div>
            </div>
    

            <div className="sec1 container-fluid my-5">
                <div className="row">

                    <div className="col-lg-8">

                        <div className="row align-items-center">
                            <div className="col-lg-4">
                            <img className="img-fluid rounded mb-4" src={image} alt=""/>
                            </div>
                            <div className="col-lg-7">
                                <h6>{title}</h6>
                                <b>BY:</b> {author}
                                <p>{description}</p>
                                <p>
                                    <span>Hardcopy</span>
                                    <span>E-Book</span>
                                </p>
                            </div>
                        </div>

                    </div>
                    <div className="col-lg-4">

                        <div className="card  mb-3">
                            <div className="card-header bg-light">
                                <h5 className="card-title pt-2">
                                    Book Price
                                    <span className="float-right x12 mcol">$ {price}</span>
                                </h5>

                            </div>
                            <div className="card-body py-4">
                                <p className="card-text">
                                        <b>Quatity</b>: <br/>

                                        <select name="qty" className="form-control"  onChange={(val)=>changeQuantity(val)}>
                                            <option value="">Select Quatity</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                        </select>
                                </p>

                                {/* <button type="button" className="btn w-100 btn-main">Buy Now</button> */}
                                <button type="button" className="btn w-100 mt-3 btn-main1" onClick={() =>add({image,price,name:title,id,quantity})}>Add to Cart</button>
                            </div>
                        </div>

                    </div>        
                </div>        
            </div> 
            <Footer/>
        </Fragment>
         
    );
}

const mapStateToProps = ({ Course: {book:{ author, title, description,price,id,image}}}) => ({
    author, title, description, price, id,image
});

const mapDispatchToProps = { addItemToCart };

export default connect(mapStateToProps,mapDispatchToProps)(BookDetail);
