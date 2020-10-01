import React, { Component } from 'react';
import Typewriter from 'typewriter-effect';


export default class Bannner extends Component {
    render(){
        return(
            <div className="banner">
            <div className="container-fluid">
                <div className="row justify-content-center align-items-center">
                    <div className="col-lg-5">
                        <h1>
                            LEARNING THAT CREATE IMPACT AND GROW YOU
                        </h1>
                    </div>
                    <div className="col-lg-5">
                        <p>
                            <Typewriter
                                options={{
                                    strings: ['we offer courses in a number of other areas.', ' Our main focus is always on developing and creating value for you and your workplace.'],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                            
                        </p>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}