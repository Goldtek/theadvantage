import React, { Component } from 'react';
import Typewriter from 'typewriter-effect';


export default class Bannner extends Component {
    render(){
        return(
            <div className="banner">
            <div className="container-fluid">
                <div className="row justify-content-center align-items-center">
                    <div className="col-lg-8">
                        <h1>
                        <Typewriter
                                options={{
                                    strings: ['What would you love to learn?',],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </h1>
                    </div>
                   
                </div>
            </div>
        </div>
        );
    }
}