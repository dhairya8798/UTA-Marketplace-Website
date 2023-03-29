import React from "react";
import {Helmet} from "react-helmet";
import Config from "../Config.json";

import '../assets/css/Main.css';
import '../assets/css/Home.css';

const TITLE = "Home | " + Config.SITE_TITLE;
const DESC = "This is a school marketplace web portal, available to all students by Management.";

const CANONICAL = Config.SITE_DOMAIN + "/";

// import { Carousel } from 'react-responsive-carousel';
// import "react-responsive-carousel/lib/styles/carousel.min.css";

class Home extends React.Component {
    render() {
        return (
            <main>
                <Helmet>
                    <title>{TITLE}</title>
                    <link rel="canonical" href={CANONICAL} />
                    <meta name="description" content={DESC} />
                </Helmet>
                <div className="carousal">
                    <div className="title">
                        <p id="sec">New chair collection of 2022</p>
                        <span>Get a new chair </span><br />
                        <span>with wooden back</span><br />
                        <button id="hshop">Shop now</button>
                    </div>
                </div>
                <div className="featured">
                    <div className="title">
                        <p id="sec">FEATURED PRODUCT</p>
                        <span>Wooden Table</span><br />
                        <span>with wooden back</span><br />
                        <button id="hshop">Shop now</button>
                    </div>
                </div>
                <div className="bestSelling">
                    <p id="heading">Best Selling</p>
                    <br />
                    <div className="imgsgrid">
                        <div className="item1 myitems">
                            <img src={require("../assets/img/1_1-300x300.webp")} alt="" /><br />
                            <span>Small Flower Vase</span><br />
                            <span id="price">$20</span>
                        </div>
                        <div className="item2 myitems">
                            <span id="outOfStock">Out Of Stock</span>
                            <img src={require("../assets/img/1_2-300x300.webp")} alt="" /><br />
                            <span>White Chair</span><br />
                            <span id="price">$80</span>
                        </div>
                        <div className="item3 myitems">
                            <span id="discount">-20%</span>
                            <img src={require("../assets/img/1_3-300x300.webp")} alt="" /><br />
                            <span>Empty bowl</span><br />
                            <span id="price">$20</span>
                        </div>
                        <div className="item4 myitems">
                            <img src={require("../assets/img/1_4-300x300.webp")} alt="" /><br />
                            <span>Long Flower Vase</span><br />
                            <span id="price">$40</span>
                        </div>
                    </div>
                </div>
                <div className="sale">
                    <div className="title">
                        <span id="sec" className="newSale">New Sale</span>&nbsp;<span id="percent" style={{ color: 'red' }}>30% off</span><br />
                        <hr />
                        <span>Table lamp</span><br />
                        <span>and other items</span>
                        <hr />
                        <span style={{ 'fontSize': '25px' }}>Last 3 Days</span><br />
                        <button id="hshop">Shop now</button>
                    </div>
                </div>
                <div className="services">
                    <p id="heading">Recent Blogs</p>
                    <br />
                    <div className="blogsGrid">
                        <div className="item1 myitems">
                            <a href="http://dxp8341.uta.cloud/blogs/imprv/" rel="noopener noreferrer" target="_blank">
                                <img id="myblogimgs" src={require("../assets/img/uta_1.jpg")} alt="" /><br />
                                <div className="contentTitle">
                                    <span>Room for improvements</span><br />
                                    <span id="price">October 24 / ERB</span>
                                </div>
                            </a>
                        </div>
                        <div className="item2 myitems">
                            <a href="http://dxp8341.uta.cloud/blogs/adv/" rel="noopener noreferrer" target="_blank">
                                <img id="myblogimgs" src={require("../assets/img/uta_2.jpg")} alt="" /><br />
                                <div className="contentTitle">
                                    <span>What is Mercado Escolar?</span><br />
                                    <span id="price">October 22 / UTA</span>
                                </div>
                            </a>
                        </div>
                        <div className="item3 myitems">
                            <a href="http://dxp8341.uta.cloud/blogs/disadv/" rel="noopener noreferrer" target="_blank">
                                <img id="myblogimgs" src={require("../assets/img/uta_3.jpg")} alt="" /><br />
                                <div className="contentTitle">
                                    <span>Addressing the development phase</span><br />
                                    <span id="price">October 24 / Nedderman Hall</span>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="newsL">
                    <h2 id="title">Get the latest updates with our Newsletter</h2>
                    <form action="#" className="newsletter">
                        <input className="input-box" name="newsletter" type="email" placeholder="Your email address" />
                        <button className="submit">Subscribe</button>
                    </form>
                </div>
            </main>
        );
    }
}

export default Home;