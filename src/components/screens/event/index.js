import  React from 'react';
import { Link } from 'react-router-dom';
import { Header, Footer, Package } from '../../custom';


function Event(){
        return(
            <div>
                <Header/>
                <div class="sec container-fluid my-5">
                    <div class="row py-5">

                        <div class="col-lg-9 m-auto">

                            <h3>The leadership event for business development</h3>  
                            <div><b class="px12">19 AUGUST</b> <small class="colp">12:00 PM - 5 :00 PM</small></div>
                            <p>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni non fuga porro voluptates fugiat odit velit iusto veniam! Accusantium alias doloribus consequatur ipsam excepturi quaerat rerum nostrum facere voluptates nihil.
                            </p>
                            <p>
                                ipsam excepturi quaerat rerum nostrum consectetur adipisicing elit. Magni non fuga porro voluptates fugiat odit velit iusto veniam! Accusantium alias doloribus consequatur ipsam excepturi quaerat rerum nostrum facere voluptates nihil.
                            </p>
                        </div>

                    </div>

            </div>
                <Footer/>
            </div>
        );
    }


export default Event;  