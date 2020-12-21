import React, { Component } from 'react';
import Typewriter from 'typewriter-effect';


export default class Bannner extends Component {
  render() {
    return (
      <section id="slider-part" className="slider-active ">
        <div className="single-slider bg_cover pt-150" style={{ backgroundImage: 'url("images/1.jpg")' }} data-overlay="4">
          <div className="container">
            <div className="row">
              <div className="col-xl-7 col-lg-9">
                <div className="slider-cont">
                  <h1 data-animation="fadeInLeft" data-delay="1s">Coaching</h1>
                  <p data-animation="fadeInUp" data-delay="1.3s">Get the right coaching to inspire your next level.</p>
                  <ul>
                    <li><a data-animation="fadeInUp" data-delay="1.6s" className="main-btn" href="register.html">Get Started</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="single-slider bg_cover pt-150" style={{ backgroundImage: 'url("images/2.png")' }} data-overlay="4">
          <div className="container">
            <div className="row">
              <div className="col-xl-7 col-lg-9">
                <div className="slider-cont">
                  <h1 data-animation="fadeInLeft" data-delay="1s">Personal Edge</h1>
                  <p data-animation="fadeInUp" data-delay="1.3s"> Our unique trainings will give you the edge you need.</p>
                  <ul>
                    <li><a data-animation="fadeInUp" data-delay="1.6s" className="main-btn" href="register.html">Get Started</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="single-slider bg_cover pt-150" style={{ backgroundImage: 'url("images/3.jpg")' }} data-overlay="4">
          <div className="container">
            <div className="row">
              <div className="col-xl-7 col-lg-9">
                <div className="slider-cont">
                  <h1 data-animation="fadeInLeft" data-delay="1s">Busines Edge</h1>
                  <p data-animation="fadeInUp" data-delay="1.3s">Get the best business insights from the proven trainers and instructors.</p>
                  <ul>
                    <li><a data-animation="fadeInUp" data-delay="1.6s" className="main-btn" href="register.html">Get Started</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    );
  }
}
