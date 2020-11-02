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
            <div className="dline1"></div>
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
                                            <a onClick={()=>dispatch(removeItemFromCart(item))} className='colorless cursor'><span>Remove</span></a> 
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
            </div>
            <Footer/>

        </Fragment>
    )
}

const mapStateToProps = ({Cart:{cart: { items, totalPrice }}}) => ({
    items, totalPrice
 });
 const mapDispatchToProps = { removeItemFromCart };

export default connect(mapStateToProps,mapDispatchToProps)(Cart);