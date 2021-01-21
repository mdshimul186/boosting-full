import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel3';

const options = {
    loop: false,
    nav: false,
    dots: true,
    autoplay: true,
    smartSpeed: 1000,
    autoplayTimeout: 5000,
    items: 1,
}

class Feedback extends Component {
    render() {
        return (
            <section className="feedback-area ptb-80">
                <div className="container">
                    <div className="section-title">
                        <h2>What users Saying</h2>
                        <div className="bar"></div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>

                    <OwlCarousel 
                        className="testimonials-slides owl-carousel owl-theme"
                        {...options}
                    >
                        <div className="single-feedback-item">
                            <div className="client-info align-items-center">
                                <div className="image">
                                    <img 
                                        src={require("../../static/images/client-image/client1.jpg")}
                                        alt="image"
                                    />
                                </div>

                                <div className="title">
                                    <h3>Steve Lucy</h3>
                                    <span>Lead Developer at Envato</span>
                                </div>
                            </div>

                            <p>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>

                        <div className="single-feedback-item">
                            <div className="client-info align-items-center">
                                <div className="image">
                                    <img 
                                        src={require("../../static/images/client-image/client2.jpg")}
                                        alt="image"
                                    />
                                </div>

                                <div className="title">
                                    <h3>David Luiz</h3>
                                    <span>Lead Developer at Envato</span>
                                </div>
                            </div>

                            <p>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>

                        <div className="single-feedback-item">
                            <div className="client-info align-items-center">
                                <div className="image">
                                    <img 
                                        src={require("../../static/images/client-image/client3.jpg")}
                                        alt="image"
                                    />
                                </div>

                                <div className="title">
                                    <h3>Marta Smith</h3>
                                    <span>Lead Developer at Envato</span>
                                </div>
                            </div>

                            <p>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </OwlCarousel>
                </div>

                <div className="shape1"><img src={require("../../static/images/shape1.png")} alt="shape" /></div>
                <div className="shape2 rotateme"><img src={require("../../static/images/shape2.svg")} alt="shape" /></div>
                <div className="shape4"><img src={require("../../static/images/shape4.svg")} alt="shape" /></div>
                <div className="shape5"><img src={require("../../static/images/shape5.png")} alt="shape" /></div>
                <div className="shape6 rotateme"><img src={require("../../static/images/shape4.svg")} alt="shape" /></div>
                <div className="shape7"><img src={require("../../static/images/shape4.svg")} alt="shape" /></div>
                <div className="shape8 rotateme"><img src={require("../../static/images/shape2.svg")} alt="shape" /></div>
            </section>
        );
    }
}

export default Feedback;
