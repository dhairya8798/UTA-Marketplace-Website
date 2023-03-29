import React from "react";

import '../assets/css/Main.css';
import '../assets/css/Login.css';

import { NavLink } from "react-router-dom";

import {Helmet} from "react-helmet";
import Config from "../Config.json";


const TITLE = "Forgot Password | " + Config.SITE_TITLE;
const DESC = "Update password here";

const CANONICAL = Config.SITE_DOMAIN + "/forgotpassword";



class Forgotpassword extends React.Component {
    render() {
        return (
            <main>
                <Helmet>
                    <title>{TITLE}</title>
                    <link rel="canonical" href={CANONICAL} />
                    <meta name="description" content={DESC} />
                </Helmet>
                <div className="maintitle">
                    <span id="about">Forgot the password?</span>
                </div>
                <div className="main-container">
                    <div className="login-box">
                        <div className="login">
                            <div className="form-control1">
                                <input type="text" placeholder="Enter your email here" className="tbox" required />
                            </div>
                            <p>Password reset link will be sent to this email address if we find an existing account.</p>
                            <div className="form-control1">
                                <input type="submit" value="Submit" className="lbtn" />
                            </div>
                            <div className="forget-box">
                                <p>Remember the password?</p>
                                <NavLink to="/login" className="link">Login here</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        );
    }
}

export default Forgotpassword;