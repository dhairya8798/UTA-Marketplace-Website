import React from "react";
import '../assets/css/Main.css';

import { NavLink } from "react-router-dom";

class Footer extends React.Component {
    render() {
        return (
            <div className="grid-container footer">
        <div className="item5">
            <p><b>Mercado Escolar</b></p>
            <p>Woolf Hall, University of Texas at arlington</p>
            <p>Ph. (817) 123 4567</p>
            <p> <NavLink to="#">Twitter</NavLink> | <NavLink to="#">Instagram</NavLink> </p>
        </div>
        <div className="item6">
            <p><b>Quick Links</b></p>
            <p><NavLink to="/about">About us</NavLink></p>
            <p><NavLink to="/contact">Contact us</NavLink></p>
            <p><NavLink to="#">FAQs</NavLink></p>
        </div>
        <div className="item7">
            <p><NavLink to="#">Help/Information</NavLink></p>
            <p><NavLink to="#">Return and Refund</NavLink></p>
            <p><NavLink to="#">Privacy Policy</NavLink></p>
            <p><NavLink to="#">Terms and Conditions</NavLink></p>
        </div>
        <div className="item8">
            <p>Sign up for the newsletter</p>
            <br />
            <input type="text" id="emailEnter" placeholder="Enter email here" />
            <img id="emailSend" src={require("../assets/icons/right-arrow.png")} alt="Go" />
        </div>
    </div>
        );
    }
}

export default Footer;