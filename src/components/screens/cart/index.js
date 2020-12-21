import React, { Fragment, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import serializeForm from "form-serialize";
import { useDispatch,connect } from 'react-redux';
import { Header, Footer } from '../../custom';
import { auth,firestore }  from '../../custom/firebase';
import "./style.css";
import { removeItemFromCart } from '../../actions/cart';

function Cart({items, totalPrice}){
    const [loading,setLoading]=useState(false);
    const history = useHistory();
    const dispatch = useDispatch();

  
    return(
        <Fragment>
            <Header bg=''/>
            {/* <div className="dline1"></div>
            <div className="sec container-fluid my-5 ">
            <div className="row">
                
            {items.length > 0 ? (
                    <div className="col-lg-10 m-auto">
                        <h5>Cart ({items.length} items)</h5>  {console.log('items',items)}
                        <p>
                            List of all the items in your cart
                        </p>

                                <table className="table table-borderless">
                                    <thead>
                                    <tr>
                                        <th scope="col">Items</th>
                                        <th scope="col"></th>
                                        <th scope="col">Quantity</th>
                                        <th scope="col">Unit Price</th>
                                        <th scope="col">Subtotal</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                   {items.map(item => (
                                    <tr className="cv">
                                        <th><img className="img-fluid " src={item.image} alt=""/></th>
                                        <td>
                                            <h6>{item.name}</h6>
                                            <a onClick={()=>dispatch(removeItemFromCart(item))} className='colorless cursor'><span>Remove</span></Link> 
                                        </td>
                                        <td style={{alignItems: 'center'}}><h6>{item.quantity}</h6></td>
                                        <td><h6>${item.price} </h6></td>
                                        <td><h6 className="colp">${item.price * item.quantity}</h6></td>
                                    </tr>
                                   ))}
                                  

                                    </tbody>
                                </table>


                                <div className="row">
                                    <div className="col-lg-3 ml-auto">
                                       
                                  
                                        <p>
                                            <h5 className="colp">Total: ${totalPrice}</h5>
                                            <Link to='/checkout' className='default-btn'>
                                                <i className="bx bx-paper-plane icon-arrow before">
                                                    </i><span className='label f'>Checkout</span>
                                                <i className="bx bx-paper-plane icon-arrow after"></i>
                                            </Link>
                                        </p>
                                 
                                        
                                    </div>
                                </div>

                        </div>
             ) : <div className="container">
                    <div className="row">
                    <div className="col-md-4"></div>
                    <div className="col-md-4">
                    <img src="images/empty-cart.png" className="self"/>
                    </div>
                    </div>
             </div> }
                </div>
            </div> */}

        <section class=" pt-105 pb-120 gray-bg">
                <div class="container">
                    <div class="col-md-12 mx-auto">
                        <div class="cover">

                            <div class="table-responsive">
                            <table class="table table-borderless">
                                <thead>
                                <tr>
                                    <th scope="col"></th>
                                    <th scope="col">Items</th>
                                    <th scope="col">Product</th>
                                    <th scope="col">Unit Price</th>
                                    <th scope="col">Quantity</th>
                                    <th scope="col">Subtotal</th>
                                </tr>
                                </thead>
                                <tbody>
                               {items.map((item) => ( 
                                <tr>
                                    <th class="align-middle">
                                        <Link to="#"><i class="fa fa-times"></i></Link>
                                    </th>
                                    <th><img class="img-fluid" src={item.image} alt="" /></th>
                                    <td class="align-middle">
                                        <p>{item.name}</p>
                                    </td>
                                    <td class="align-middle"><p>${item.price} </p></td>
                                    <td><input type="number" class="w50" name="" value="1"/></td>
                                    <td class="align-middle"><p>$ {item.price * item.quantity} </p></td>
                                </tr>
                                ))} 
                                </tbody>
                            </table>                   
                            </div>

                        </div>
                    </div>

                    <div class="col-md-5 mt-5 ml-auto">
                        <div class="cover1">
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">
                                    <b>Subtotal:</b> 
                                    <span class="float-right">${totalPrice}</span>
                                </li>
                                <li class="list-group-item">
                                    <b>Shipping</b>
                                    <span class="float-right">Free Shipping</span>                   
                                </li>
                                <li class="list-group-item">
                                    <b>Total:</b>
                                    <b class="float-right">${totalPrice}</b>
                                </li>
                                <li class="list-group-item">
                                    <Link to="/checkout" class="main-btn w-100">Proceed Checkout</Link>
                                </li>

                                
                            </ul>
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
 const mapDispatchToProps = { removeItemFromCart };

export default connect(mapStateToProps,mapDispatchToProps)(Cart);