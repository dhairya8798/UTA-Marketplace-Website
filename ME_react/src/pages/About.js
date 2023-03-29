import React from "react";
import {Helmet} from "react-helmet";
import Config from "../Config.json";

import '../assets/css/Main.css';
import '../assets/css/About.css';

const TITLE = "About | " + Config.SITE_TITLE;
const DESC = "This is a school marketplace web portal, available to all students by Management.";

const CANONICAL = Config.SITE_DOMAIN + "/";


class About extends React.Component {
    render() {
        return (
            <main>
                <Helmet>
                    <title>{TITLE}</title>
                    <link rel="canonical" href={CANONICAL} />
                    <meta name="description" content={DESC} />
                </Helmet>
                <div class="maintitle">
                    <span id="about">About Us</span>
                </div>
                <div class="mainContent">
                    <div class="writtenWork">
                        <div class="wp1">
                            <span id="tContent">Welcome to the <b>Mercado Escolar</b></span>
                            <p id="wContent">
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirm od tempor invidunt ut
                                labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
                                et ea rebum.

                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirm od tempor invidunt ut
                                labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
                                et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                                labore et dolore magna aliquyam erat
                            </p>
                            <div id="fixUL">
                                <div id="mySl">
                                    <img src={require("../assets/icons/icons8-trust-64.png")} alt="" />
                                    <p>Trusted Brands</p>
                                </div>
                                <div id="mySl">
                                    <img src={require("../assets/icons/icons8-quality-60.png")} alt="" />
                                    <p>Best Quality and Standards</p>
                                </div>
                            </div>
                            <button id="hshop">Shop Now</button>
                        </div>
                        <div class="wp2">
                            <img id="myImg" src={require("../assets/img/about_School.png")} alt="" />
                        </div>
                    </div>

                </div>
                <div class="brands">
                    <p id="btitle">Brands on campus</p>
                    <div class="brandsLogos">
                        <div class="logo1">
                            <img id="mlogos" src={require("../assets/img/brands/chick-fil-a-1.svg")} alt="" />
                        </div>
                        <div class="logo2">
                            <img id="mlogos" src={require("../assets/img/brands/starbucks-coffee.svg")} alt="" />
                        </div>
                        <div class="logo7">
                            <img id="mlogos" src={require("../assets/img/brands/einstein-bros-bagels.svg")} alt="" />
                        </div>
                        <div class="logo4">
                            <img id="mlogos" src={require("../assets/img/brands/panda-express-logo-1.svg")} alt="" />
                        </div>
                        <div class="logo3">
                            <img id="mlogos" src={require("../assets/img/brands/subway-12.svg")} alt="" />
                            </div>
                        <div class="logo5">
                            <img id="mlogos" src={require("../assets/img/brands/panera-bread-1.svg")} alt="" />
                        </div>
                        <div class="logo6">
                            <img id="mlogos" src={require("../assets/img/brands/current-kroger-logo.svg")} alt="" />
                        </div>
                        <div class="logo6">
                            <img id="mlogos" src={require("../assets/img/brands/under-armour.svg")} alt="" />
                        </div>
                    </div>
                </div>
                <div class="testimonials">
                    <p id="tMyTitle">Our Client Testimonials</p>

                    <div class="testi">
                        <div class="test1 myTest">
                            <img id="testID" src={require("../assets/img/test/testimonial1.jpg")} alt="" />
                            <span id="tTitle">Really nice features</span>
                            <hr />
                            <p class="name">Megan S </p>
                            <p>Computer Science</p>
                        </div>
                        <div class="test2 myTest">
                            <img id="testID" src={require("../assets/img/test/testimonial2.jpg")} alt="" />
                            <span id="tTitle">Buying and renting furniture is really easy</span>
                            <hr />
                            <p class="name">Mark B </p>
                            <p>Business Analytics</p>
                        </div>
                        <div class="test3 myTest">
                            <img id="testID" src={require("../assets/img/test/testimonial3.jpg")} alt="" />
                            <span id="tTitle">Chick-fil-a has really nice shake but it is a bit costly</span>
                            <hr />
                            <p class="name">Carlos G </p>
                            <p> Nursing</p>
                        </div>
                    </div>
                    {/* <a class="prev"><img id="leftA" src={require("../assets/icons/left-svgrepo-com.svg")} alt="" /></a> */}
                    {/* <a class="next"><img id="rightA" src={require("../assets/icons/right-svgrepo-com.svg")} alt="" /></a> */}
                </div>
            </main>
        );
    }
}

export default About;