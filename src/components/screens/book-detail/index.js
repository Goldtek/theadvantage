import React, { useState, useEffect, Fragment } from 'react';


function BookDetail(){
    return (
        <Fragment>
            <div class="sub">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-lg-6 mr-auto mll">
                            <h3>
                                Straight Business: for business managers & Leaders
                            </h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, dignissimos natus adipisci quasi odit expedita iure veritatis eaque.
                            </p>
                            <span>
                                <b>By:</b> <small>Yemi Akinwuntan</small> 
                            </span>
                        </div>
                    </div>
                </div>
            </div>
    

            <div class="sec1 container-fluid my-5">
                <div class="row">

                    <div class="col-lg-8">

                        <div class="row align-items-center">
                            <div class="col-lg-4">
                            <img class="img-fluid rounded mb-4" src="http://placehold.it/700x800" alt=""/>
                            </div>
                            <div class="col-lg-7">
                                <h6>Purpose: why some live it others dont</h6>
                                <b>BY:</b> Yemi Akinwuntan
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed voluptate nihil eum consectetur similique? Consectetur, quod, incidunt, harum nisi dolores delectus reprehenderit voluptatem perferendis dicta dolorem non blanditiis ex fugiat.</p>
                                <p>
                                    <span>Hardcopy</span>
                                    <span>E-Book</span>
                                </p>
                            </div>
                        </div>

                    </div>
                    <div class="col-lg-4">

                        <div class="card  mb-3">
                            <div class="card-header bg-light">
                                <h5 class="card-title pt-2">
                                    Book Price
                                    <span class="float-right x12 mcol">$ 300</span>
                                </h5>

                            </div>
                            <div class="card-body py-4">
                                <p class="card-text">
                                        <b>Quatity</b>: <br/>

                                        <select name="qty" class="form-control">
                                            <option value="">Select Quatity</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                        </select>
                                </p>

                                <button type="button" class="btn w-100 btn-main">Buy Now</button>
                                <button type="button" class="btn w-100 mt-3 btn-main1">Add to Cart</button>
                            </div>
                        </div>

                    </div>        
                </div>        
            </div> 
        </Fragment>
         
    );
}


export default BookDetail;