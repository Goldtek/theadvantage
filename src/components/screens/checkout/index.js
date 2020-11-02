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
        <section class="checkout-area ptb-100">
            <div class="container">
                <div class="user-actions">
                    <i class='bx bx-log-in'></i>
                    <span>Returning customer? <Link href="/login">Click here to login</Link></span>
                </div>

                <form>
                    <div class="row">
                        <div class="col-lg-6 col-md-12">
                            <div class="billing-details">
                                <h3 class="title">Billing Details</h3>

                                <div class="row">
                                

                                    <div class="col-lg-6 col-md-6">
                                        <div class="form-group">
                                            <label>First Name <span class="required">*</span></label>
                                            <input type="text" class="form-control"/>
                                        </div>
                                    </div>

                                    <div class="col-lg-6 col-md-6">
                                        <div class="form-group">
                                            <label>Last Name <span class="required">*</span></label>
                                            <input type="text" class="form-control"/>
                                        </div>
                                    </div>

                                    <div class="col-lg-12 col-md-6">
                                        <div class="form-group">
                                            <label>Address <span class="required">*</span></label>
                                            <input type="text" class="form-control"/>
                                        </div>
                                    </div>

                                    <div class="col-lg-12 col-md-6">
                                        <div class="form-group">
                                            <label>Town / City <span class="required">*</span></label>
                                            <input type="text" class="form-control"/>
                                        </div>
                                    </div>

                                    <div class="col-lg-6 col-md-6">
                                        <div class="form-group">
                                            <label>State / County <span class="required">*</span></label>
                                            <input type="text" class="form-control"/>
                                        </div>
                                    </div>

                                    <div class="col-lg-6 col-md-6">
                                        <div class="form-group">
                                            <label>Postcode / Zip <span class="required">*</span></label>
                                            <input type="text" class="form-control"/>
                                        </div>
                                    </div>

                                    <div class="col-lg-6 col-md-6">
                                        <div class="form-group">
                                            <label>Email Address <span class="required">*</span></label>
                                            <input type="email" class="form-control"/>
                                        </div>
                                    </div>

                                    <div class="col-lg-6 col-md-6">
                                        <div class="form-group">
                                            <label>Phone <span class="required">*</span></label>
                                            <input type="text" class="form-control"/>
                                        </div>
                                    </div>


                                    <div class="col-lg-12 col-md-12">
                                        <div class="form-check">
                                            <input type="checkbox" class="form-check-input" onChange={()=> resetChecked()} id="ship-different-address"/>
                                            <label class="form-check-label" for="ship-different-address">Ship to a different address?</label>
                                        </div>
                                    </div>
                                    {checked ? ( <div class="col-lg-12 col-md-6">
                                        <div class="form-group">
                                            <label>New Shipping Address <span class="required">*</span></label>
                                            <input type="text" name="newAddress" class="form-control"/>
                                        </div>
                                    </div>) : null}
                                   

                                    <div class="col-lg-12 col-md-12">
                                        <div class="form-group">
                                            <textarea name="notes" id="notes" cols="30" rows="5" placeholder="Order Notes" class="form-control"></textarea>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-6 col-md-12">
                            <div class="order-details">
                                <h3 class="title">Your Order</h3>

                                <div class="order-table table-responsive">
                                    <table class="table table-bordered">
                                        <thead>
                                            <tr>
                                                <th scope="col">Product Name</th>
                                                <th scope="col">Total</th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                        {props.items.map(item=>(
                                            <tr>
                                                <td class="product-name">
                                                    <a href="#">{item.name}</a>
                                                </td>

                                                <td class="product-total">
                                                    <span class="subtotal-amount">${item.price}</span>
                                                </td>
                                            </tr>
                                            ))}
                                            <tr>
                                                <td class="order-subtotal">
                                                    <span>Cart Subtotal</span>
                                                </td>

                                                <td class="order-subtotal-price">
                                                    <span class="order-subtotal-amount">${props.totalPrice}</span>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td class="order-shipping">
                                                    <span>Shipping</span>
                                                </td>

                                                <td class="shipping-price">
                                                    <span>$30.00</span>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td class="total-price">
                                                    <span>Order Total</span>
                                                 </td>

                                                <td class="product-subtotal">
                                                    <span class="subtotal-amount">${props.totalPrice + 30}</span>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div class="payment-box">
                                    <div class="payment-method">
                                        
                                        <p>
                                            <input type="radio" id="paypal" name="radio-group" checked/>
                                            <label for="paypal"><img src="images/payment/paypal.png" style={{height: '20px'}} /></label>
                                        </p>
                                        <p>
                                            <input type="radio" id="cash-on-delivery" name="radio-group"/>
                                            <label for="cash-on-delivery"> <img src="images/payment/stripe.png" style={{height: '20px'}} /> </label>
                                            
                                        </p>
                                    </div>

                                    <a href="#" class="default-btn"><i class='bx bx-paper-plane icon-arrow before'></i><span class="label">Place Order</span><i class="bx bx-paper-plane icon-arrow after"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
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


