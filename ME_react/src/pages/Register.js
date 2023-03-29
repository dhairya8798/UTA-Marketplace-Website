import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet";
import Config from "../Config.json";
import axios from "axios";

import "../assets/css/Main.css";
import "../assets/css/Login.css";

const TITLE = "Register | " + Config.SITE_TITLE;
const DESC = "New to the portal? Register yourself here";

const CANONICAL = Config.SITE_DOMAIN + "/register";

const Register = () => {
    const [passwordsame, setPasswordsame] = useState(false);
    const [userregistered, setUserregistered] = useState(false);
    
    const [registered, setRegistered] = useState(false);

    // const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        if (inputs.password === inputs.retypepassword) {
            axios
                .post(
                    "https://6458-64-189-206-43.ngrok.io/api/user/register.php",
                    inputs
                )
                .then(function(response) {
                    if (response.data.status !== 0) {
                        // const userType = [1, 2, 3, 4];
                        // const data = JSON.parse(response.data.user_type);
                        // if (userType.indexOf(data) !== -1) {
                            // if (data === 1) {
                                //     navigate("/dashboard");
                            // } else if (data === 2) {
                                //     navigate("/dashboard");
                                // } else if (data === 3) {
                                    //     navigate("/admin");
                                    // } else {
                                        //     navigate("/admin");
                                        // }
                        console.log("Success");
                        setUserregistered({ isActive: false });
                        setPasswordsame({ isActive: false });
                        setRegistered({ isActive: true });
                        // console.log(JSON.parse(response.data.user_type));
                        // } else {
                        //     // console.log("No data found");
                        //     setState({ isActive: true });
                        // }
                    }else{
                        setPasswordsame({ isActive: false });
                        setUserregistered({ isActive: true });
                        setRegistered({ isActive: false });
                    }
                });
        } else {
            setRegistered({ isActive: false });
            setUserregistered({ isActive: false });
            setPasswordsame({ isActive: true });
        }
    };

    const [inputs, setInputs] = useState({
        username: " ",
        email: " ",
        mobile: " ",
        password: " ",
        retypepassword: " ",
    });

    return (
        <main>
            <Helmet>
                <title>{TITLE}</title>
                <link rel="canonical" href={CANONICAL} />
                <meta name="description" content={DESC} />
            </Helmet>
            <div className="maintitle">
                <span id="about">Register new account</span>
            </div>
            <div className="main-container">
                <div className="login-box">
                    <form onSubmit={handleSubmit}>
                        <div className="login">
                            <div className="form-control1">
                                <input
                                    type="text"
                                    placeholder="Username"
                                    className="tbox"
                                    onChange={(e) =>
                                        setInputs({
                                            ...inputs,
                                            username: e.target.value,
                                        })
                                    }

                                    required
                                />
                            </div>
                            <div className="form-control1">
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="tbox"
                                    onChange={(e) =>
                                        setInputs({
                                            ...inputs,
                                            email: e.target.value,
                                        })
                                    }
                                    required
                                />
                            </div>
                            <div className="form-control1">
                                <input 
                                    type='tel' 
                                    className="tbox"
                                    pattern='^\+?\d{10,13}' 
                                    placeholder='Phone Number'
                                    onChange={(e) =>
                                        setInputs({
                                            ...inputs,
                                            mobile: e.target.value,
                                        })
                                    }
                                    required
                                />
                            </div>
                            <div className="form-control1">
                                <input
                                    type="password"
                                    placeholder="Password"
                                    className="tbox"
                                    onChange={(e) =>
                                        setInputs({
                                            ...inputs,
                                            password: e.target.value,
                                        })
                                    }
                                    minLength="8"
                                    required
                                />
                            </div>
                            <div className="form-control1">
                                <input
                                    type="password"
                                    placeholder="Retype Password"
                                    className="tbox"
                                    onChange={(e) =>
                                        setInputs({
                                            ...inputs,
                                            retypepassword: e.target.value,
                                        })
                                    }
                                    required
                                />
                            </div>
                            <div id="noAcc">
                                {passwordsame.isActive && (
                                    <span>Password not same</span>
                                )}
                                {userregistered.isActive && (
                                    <span>username unavailable</span>
                                )}
                            </div>
                            {registered.isActive && (
                                <div>
                                    <span style={{color:"green", textAlign:"center"}}>Registration Successful. Check your email. </span>
                                    <div className="forget-box">
                                        <NavLink to="/login">
                                            <input type="button" value="Login" className="lbtn" style={{padding: "10px 20px 10px 20px"}}/>
                                        </NavLink>
                                    </div>
                                </div>
                            )}
                            {!registered.isActive && (
                                <div>
                                    <p>
                                        By creating an account, you agree to the terms
                                        and conditions.
                                    </p>
                                    <div className="form-control1">
                                        <input
                                            type="submit"
                                            value="Register Now"
                                            className="lbtn"
                                        />
                                    </div>
                                    <div className="forget-box">
                                        <p>Already have an account?</p>
                                        <NavLink to="/login" className="link">
                                            Login here
                                        </NavLink>
                                    </div>
                                </div>
                            )}
                            
                        </div>
                    </form>
                </div>
            </div>
        </main>
    );
};

export default Register;
