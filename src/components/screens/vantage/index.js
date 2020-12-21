import  React from 'react';
import { Link , useHistory} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addItemToCart} from '../../actions/cart'
import { Header, Footer, VantagePackage } from '../../custom';


function Vantage(){
    const thingsTolearn = ['How to write a purpose statement','How to Write A Purpose Statement',
    'How to Create a Purpose Checklist','Discovering the Power of Self-Believe','How to use the Power of Vision',
    'Understand your success Traits', 'Learn to Speak with Power','How to align your emotional intelligence for success'];
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
                                            <img src="./images/2.png" class="fitimage" alt=""/>
                                        </div>
                                        
                                    </div>
                                    <div class="col-md-7 p-5">
                                        <h4>Vantage Package</h4>
                                        <div class="line"></div>
                                        <p>
                                            For those who may have had some degree of certainty in their discovery of purpose will quickly embrace the Vantage Package. This package helps to achieve better clarity in the deployment of purpose, while further equipping you with relevant skills to achieve more in your pursuit. 
                                        </p><br/>

                                        <p>
                                            <b>Vantage Package</b> : Starting from $1,250<br/>
                                            <b>Period</b> : 10 Weeks Engagement<br/>
                                            <b>Benefits</b>:<br/>
                                            – Purpose Discovery Sessions<br/>
                                            – Purpose Activation Program<br/>
                                            – Personal Leadership Classes<br/>
                                            – One-on-one coaching<br/>
                                            – 360⁰ Life Assessment Program 
                                        </p>
                                        <button onClick={() => add({ image:'images/2.png', quantity: 1, price: 1250, name: "Vantage", id:"34ffrj4jdk" })} class="main-btn-3 my-3">Add To Cart</button>
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


export default Vantage;  