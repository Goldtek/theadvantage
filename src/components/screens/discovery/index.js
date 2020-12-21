import  React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Header, Footer, Package } from '../../custom';
import { addItemToCart} from '../../actions/cart'


function Discovery(){
    const thingsTolearn = ['What is Purpose','How to Write A Purpose Statement',
    'How to Create a Purpose Checklist','Discovering the Power of Self-Believe','How to use the Power of Vision'];
    const dispatch = useDispatch();
    const history = useHistory();
    const  add = cartItem => {
        try{
             dispatch(addItemToCart(cartItem));
             history.push('/cart')
         
        } catch(error){
            console.log(error);
        }

    }

        return(
            <div>
                <Header/>
                <section class="pt-105 pb-120 gray-bg">
                    <div class="container">
                        <div class="col-md-12 m-auto">
                            
                            <div class="card flex-row flex-wrap">
                                <div class="row">
                                    <div class="col-md-5">
                                        <div class="pix-cover">
                                            <img src="./images/1.jpg" class="fitimage" alt="" />
                                        </div>
                                        
                                    </div>
                                    <div class="col-md-7 p-5">
                                        <h4>Discovery Package</h4>
                                        <div class="line"></div>
                                        <p>
                                            This is tailored made exclusively for those seeking to discover, define and deploy their purpose. Knowledge, activities and tasks in the Discovery Package will jumpstart your journey to discovery, confidence and beginning steps to fulfilment.  
                                        </p><br/>

                                        <p>
                                            <b> Discovery Package</b> : Starting from $250<br/>
                                            <b>Period</b> : 2 Weeks Engagement<br/>
                                            <b> Benefits</b>:<br/>
                                            – Purpose Discovery Sessions<br/>
                                            – Purpose Activation Program<br/>
                                        </p>
                                        <button onClick={() => add({ image:'images/1.jpg', quantity: 1, price: 250, name: "Discovery", id:"3560j4jdk" })} class="main-btn-3 my-3">Add To Cart</button>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                </section>
                <Footer/>
            </div>
        );
    }


export default Discovery;  