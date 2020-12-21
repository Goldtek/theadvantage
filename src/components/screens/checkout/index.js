import React, { useState,Fragment } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import serializeForm from "form-serialize";
import { useDispatch } from 'react-redux';
import { auth,firestore }  from '../../custom/firebase';
import { Header,Footer } from '../../custom';

import './style.css';


function Checkout(props){
    const [loading,setLoading]=useState(false);
    const [checked, setChecked] = useState(false);
    const history = useHistory();
    const dispatch = useDispatch();

   const resetChecked = () => {
       setChecked(!checked);
   }
    return(
    <Fragment>
        <Header/>
        <section class="signup pt-105 pb-120 gray-bg">
            <div class="container">
                <div class="col-md-12 mx-auto">
                    <div class="cover">
                        Returning customer? <a href="#">Click here to login</a>
                        <div class="line"></div>

                        <form method="POST">
                        <div class="row">
    

                            <div class="col-md-6">

                                
                                    <h6 class="mb-10 mt-15">Billing Details</h6>

                                    <div class="form-group">
                                        <div class="row">
                                            <div class="col-sm-6">
                                                <input type="text" class="form-input" name="name" id="name" placeholder="First Name"/>
                                            </div> 
                                            <div class="col-sm-6">
                                                <input type="text" class="form-input" name="name" id="name" placeholder="Last Name"/>
                                            </div> 
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <input type="text" class="form-input" name="name" id="name" placeholder="Address"/>
                                    </div>
                                    <div class="form-group">
                                        <input type="text" class="form-input" name="name" id="name" placeholder="Town / City "/>
                                    </div>

                                    <div class="form-group">
                                        <div class="row">
                                            <div class="col-sm-6">
                                                <input type="text" class="form-input" name="name" id="name" placeholder="State / County"/>
                                            </div> 
                                            <div class="col-sm-6">
                                                <input type="text" class="form-input" name="name" id="name" placeholder="Postcode / Zip"/>
                                            </div> 
                                        </div>
                                    </div>

                                    <div class="form-group">
                                        <div class="row">
                                            <div class="col-sm-6">
                                                <input type="text" class="form-input" name="name" id="name" placeholder="Email Address"/>
                                            </div> 
                                            <div class="col-sm-6">
                                                <input type="text" class="form-input" name="name" id="name" placeholder="Phome"/>
                                            </div> 
                                        </div>
                                    </div>


                            </div>


                            {props.items.length > 0 ?
                            <div class="col-md-6">
                                <div class="order-table table-responsive">
                                    <table class="table table-bordered">
                                        <thead><tr><th scope="col">Product Name</th><th scope="col">Total</th></tr></thead>
                                        <tbody>
                                            {props.items.map((item) => (
                                            <tr>
                                                <td class="product-name">
                                                    <a href="#" class="clor">{item.name}</a>
                                                </td>
                                                <td class="product-total"><span class="subtotal-amount">${item.price}</span></td>
                                            </tr>
                                           ))}
                                        <tr><td class="order-subtotal"><span>Cart Subtotal</span></td><td class="order-subtotal-price"><span class="order-subtotal-amount">${props.totalPrice}</span></td></tr>
                                        <tr><td class="order-shipping"><span>Shipping</span></td><td class="shipping-price"><span>$30.00</span></td></tr><tr><td class="total-price">
                                        <span>Order Total</span></td><td class="product-subtotal"><span class="subtotal-amount">${props.totalPrice + 30}</span></td></tr></tbody>
                                    </table>
                                </div>
                            </div>
                            : null }

                            <div class="cover2 c2pd w-100">
                                <div class="payment-method">
                                    <p>
                                        <input type="radio" id="paypal" name="radio-group" checked=""/>
                                        <label for="paypal"><img src="images/paypal.png" width="55" /></label>
                                    </p>
                                    
                                    <p><input type="radio" id="cash-on-delivery" name="radio-group"/>
                                        <label for="cash-on-delivery"> <img src="images/stripe.png" width="45" /> </label>
                                    </p>
                                </div>
                                <div class="line"></div>
                                <button class="main-btn">Place Order</button>
                            </div>
                        </div>
                        </form>

                    </div>
                </div>
            </div>
        </section>

       <Footer/>
    </Fragment>
    )
}


const mapStateToProps = ({Cart:{cart: { items, totalPrice }}}) => ({
    items, totalPrice
 });

export default connect(mapStateToProps)(Checkout);


