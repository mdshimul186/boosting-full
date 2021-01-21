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
                    <div className="section-title st-fs-28">
                        <span className="sub-title">Testimonials</span>
                        <h2>Our Clients Feedback</h2>
                        <div className="bar"></div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>

                    <OwlCarousel 
                        className="ml-feedback-slides"
                        {...options}
                    >
                        <div className="single-testimonials-item">
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid ullam harum sit. Accusantium veritatis dolore ducimus illum, cumque excepturi, autem rerum illo amet placeat odit corporis!</p>

                            <div className="client-info">
                                <img src={require("../../static/images/client-image/client1.jpg")} alt="image" />

                                <div className="rating">
                                    <Icon.Star className="mr-1" />
                                    <Icon.Star className="mr-1" />
                                    <Icon.Star className="mr-1" />
                                    <Icon.Star className="mr-1" />
                                    <Icon.Star className="mr-1" />
                                </div>

                                <h3>Sarah Taylor</h3>
                                <span>CEO at Envato</span>
                            </div> 
                        </div>

                        <div className="single-testimonials-item">
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid ullam harum sit. Accusantium veritatis dolore ducimus illum, cumque excepturi, autem rerum illo amet placeat odit corporis!</p>

                            <div className="client-info">
                                <img src={require("../../static/images/client-image/client2.jpg")} alt="image" />

                                <div className="rating">
                                    <Icon.Star />
                                    <Icon.Star className="mr-1" />
                                    <Icon.Star className="mr-1" />
                                    <Icon.Star className="mr-1" />
                                    <Icon.Star className="mr-1" />
                                    <Icon.Star className="mr-1" />
                                </div>

                                <h3>Steven Smith</h3>
                                <span>CEO at Envato</span>
                            </div>
                        </div>

                        <div className="single-testimonials-item">
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid ullam harum sit. Accusantium veritatis dolore ducimus illum, cumque excepturi, autem rerum illo amet placeat odit corporis!</p>

                            <div className="client-info">
                                <img src={require("../../static/images/client-image/client3.jpg")} alt="image" />

                                <div className="rating">
                                    <Icon.Star />
                                    <Icon.Star className="mr-1" />
                                    <Icon.Star className="mr-1" />
                                    <Icon.Star className="mr-1" />
                                    <Icon.Star className="mr-1" />
                                    <Icon.Star className="mr-1" />
                                </div>

                                <h3>James Eva</h3>
                                <span>CEO at Envato</span>
                            </div>
                        </div>
                    </OwlCarousel>
                </div>

                {/* Shape Images */}
                <div className="user-shape1">
                    <img src={require("../../static/images/agency-image/agency-user1.png")} alt="shape" />
                </div>
                <div className="user-shape2">
                    <img src={require("../../static/images/agency-image/agency-user2.png")} alt="shape" />
                </div>
                <div className="user-shape3">
                    <img src={require("../../static/images/agency-image/agency-user3.png")} alt="shape" />
                </div>
                <div className="user-shape4">
                    <img src={require("../../static/images/agency-image/agency-user4.png")} alt="shape" />
                </div>
                <div className="user-shape5">
                    <img src={require("../../static/images/agency-image/agency-user5.png")} alt="shape" />
                </div>
                <div className="user-shape6">
                    <img src={require("../../static/images/agency-image/agency-user6.png")} alt="shape" />
                </div>
            </section>
        );
    }
}

export default Feedback;