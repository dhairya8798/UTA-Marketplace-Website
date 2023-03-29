import React from "react";

import '../assets/css/Main.css';
import '../assets/css/services.css';

import { NavLink } from "react-router-dom";

import {Helmet} from "react-helmet";
import Config from "../Config.json";


const TITLE = "Services | " + Config.SITE_TITLE;
const DESC = "Services available to the students";

const CANONICAL = Config.SITE_DOMAIN + "/services";



class Services extends React.Component {
    render() {
        return (
            <main>
                <Helmet>
                    <title>{TITLE}</title>
                    <link rel="canonical" href={CANONICAL} />
                    <meta name="description" content={DESC} />
                </Helmet>
                <div className="maintitle">
                    <span id="about">Services</span>
                </div>
                <div className="container">
                    <div className="leftpane">
                        <img className="myImg" src={require("../assets/icons/lightbulb.svg")} alt="" />
                        <h1 className="title">Exchange new ideas with peers</h1>
                        <p className="contentt">
                            Your peers can help with your innovative ideas and to make them achieve your organizational objectives through expert management consulting, project management, technical evaluations, analysis, and due diligence services
                            <br />
                        </p>
                        <div className="learnMore"><NavLink to="" className="">Learn More</NavLink></div>
                    </div>
                    <div className="middlepane">
                        <img className="myImg" src={require("../assets/icons/handshake.svg")} alt="" />
                        <h1 className="title">Checkout new clubs</h1>
                        <p className="contentt">Improve your knowledge with cutting-edge data analytics and Artificial
                            Intelligence (AI) expertise that can grow with you. Your peers Advanced Analytics skills can help you to
                            capture
                            and organize your enterprise-level data information, analyze that data in a coherent manner, and turn it
                            into sophisticated visual representations.</p>
                        <div className="learnMore"><NavLink to="" className="">Learn More</NavLink></div>
                    </div>
                    <div className="rightpane">
                        <img className="myImg" src={require("../assets/icons/copy.svg")} alt="" />
                        <h1 className="title">Trade books with other students</h1>
                        <p className="contentt">University's highly talented, multi-disciplinary students produce purpose-built software
                            designed to trade your old books.</p>
                        <div className="learnMore"><NavLink to="" className="">Learn More</NavLink></div>
                    </div>
                </div>
            </main>
        );
    }
}

export default Services;