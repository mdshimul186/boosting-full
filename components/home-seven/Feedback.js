import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel3';
import * as Icon from 'react-feather';

const options = {
    loop: false,
    nav: false,
    dots: true,
    autoplay: true,
    smartSpeed: 1000,
    autoplayTimeout: 5000,
    items: 1,
    animateOut: 'fadeOut',
}

class Feedback extends Component {
    render() {
        return (
            <section className="ml-feedback-area ptb-80">
                <div className="container">
                    <div className="section-title">
                        <h2>Our Clients Feedback</h2>
                        <div className="bar"></div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>

                    <OwlCarousel 
                        className="ml-feedback-slides"
                        {...options}
                    >
                        <div className="single-ml-feedback-item">
                            <div className="client-info">
                                <img src={require("../../static/images/client-image/client1.jpg")} alt="image" />
                                <h3>Sarah Taylor</h3>
                                <span>CEO at Envato</span>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid ullam harum sit. Accusantium veritatis dolore ducimus illum, cumque excepturi, autem rerum illo amet placeat odit corporis!</p>
                            <div className="rating">
                                <Icon.Star className="mr-1" />
                                <Icon.Star className="mr-1" />
                                <Icon.Star className="mr-1" />
                                <Icon.Star className="mr-1" />
                                <Icon.Star className="mr-1" />
                            </div>
                        </div>

                        <div className="single-ml-feedback-item">
                            <div className="client-info">
                                <img src={require("../../static/images/client-image/client2.jpg")} alt="image" />
                                <h3>Steven Smith</h3>
                                <span>CEO at Envato</span>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid ullam harum sit. Accusantium veritatis dolore ducimus illum, cumque excepturi, autem rerum illo amet placeat odit corporis!</p>
                            <div className="rating">
                            <Icon.Star />
                                <Icon.Star className="mr-1" />
                                <Icon.Star className="mr-1" />
                                <Icon.Star className="mr-1" />
                                <Icon.Star className="mr-1" />
                                <Icon.Star className="mr-1" />
                            </div>
                        </div>

                        <div className="single-ml-feedback-item">
                            <div className="client-info">
                                <img src={require("../../static/images/client-image/client3.jpg")} alt="image" />
                                <h3>James Eva</h3>
                                <span>CEO at Envato</span>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid ullam harum sit. Accusantium veritatis dolore ducimus illum, cumque excepturi, autem rerum illo amet placeat odit corporis!</p>
                            <div className="rating">
                            <Icon.Star />
                                <Icon.Star className="mr-1" />
                                <Icon.Star className="mr-1" />
                                <Icon.Star className="mr-1" />
                                <Icon.Star className="mr-1" />
                                <Icon.Star className="mr-1" />
                            </div>
                        </div>
                    </OwlCarousel>
                </div>

                {/* Shape Images */}
                <div className="shape1">
                    <img src={require("../../static/images/shape1.png")} alt="shape" />
                </div>
                <div className="shape2 rotateme">
                    <img src={require("../../static/images/shape2.svg")} alt="shape" />
                </div>
                <div className="shape3">
                    <img src={require("../../static/images/shape3.svg")} alt="shape" />
                </div>
                <div className="shape4">
                    <img src={require("../../static/images/shape4.svg")} alt="shape" />
                </div>
                <div className="shape7">
                    <img src={require("../../static/images/shape4.svg")} alt="shape" />
                </div>
                <div className="shape8 rotateme">
                    <img src={require("../../static/images/shape2.svg")} alt="shape" />
                </div>
            </section>
        );
    }
}

export default Feedback;