import React, { useState, useEffect} from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import Config from "../Config.json";
import axios from "axios";

import "../assets/css/Main.css";
import "../assets/css/Login.css";

const TITLE = "Login | " + Config.SITE_TITLE;
const DESC = "Login through this page to the portal";

const CANONICAL = Config.SITE_DOMAIN + "/login";

const Login = () => {
    const [state, setState] = useState(false);
    const [wrongpass, setWrongpass] = useState(false);
    const [user, setUser] = useState();

    // const [fname, setFName] = useState(" ");
    // const [lname, setLName] = useState(" ");


    const navigate = useNavigate();

    useEffect(() => {
        try{
            const loggedInUser = localStorage.getItem("user");
            if (loggedInUser) {
                const foundUser = JSON.parse(loggedInUser);
                setUser(foundUser["user_type"]);
                // setFName(foundUser["fname"]);
                // setLName(foundUser["lname"]);
            }
        }catch{
            console.log("Error in getting the user from local storage.")
        }
    }, []);

    if (user === 1) {
        navigate("/dashboard");
    }else if(user === 2) {
        navigate("/businessdashboard");
    }else if(user === 3) {
        navigate("/schooladmin");
    }else if(user === 4){
        navigate("/superadmin");
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post(
                "https://6458-64-189-206-43.ngrok.io/api/user/login.php",
                inputs
            )
            .then(function(response) {
                if (response.data.status !== 2) {
                    const userType = [1, 2, 3, 4];
                    const dataUT = JSON.parse(response.data.user_type);
                    if (userType.indexOf(dataUT) !== -1) {
                        if (dataUT === 1) {
                            navigate("/dashboard");
                        } else if (dataUT === 2) {
                            navigate("/businessdashboard");
                        } else if (dataUT === 3) {
                            navigate("/schooladmin");
                        } else {
                            navigate("/admin");
                        }
                        localStorage.setItem("user", JSON.stringify(response.data));
                        // console.log(JSON.parse(localStorage.getItem("user"))["user_type"]);
                    } else {
                        console.log("user type is not from defined ones");
                        setState({ isActive: true });
                    }
                } else {
                    setWrongpass({ isActive: true });
                }
            });
    };

    const [inputs, setInputs] = useState({
        username: " ",
        password: " ",
    });

    return (
        <main>
            <Helmet>
                <title>{TITLE}</title>
                <link rel="canonical" href={CANONICAL} />
                <meta name="description" content={DESC} />
            </Helmet>

            <div className="maintitle">
                <span id="about">Log into your account</span>
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
                                    type="password"
                                    placeholder="Password"
                                    className="tbox"
                                    onChange={(e) =>
                                        setInputs({
                                            ...inputs,
                                            password: e.target.value,
                                        })
                                    }
                                    required
                                />
                            </div>
                            <div id="noAcc">
                                {state.isActive && (
                                    <span>Account not found</span>
                                )}
                                {wrongpass.isActive && (
                                    <span>Invalid username/password</span>
                                )}
                            </div>
                            <div className="checkbox-wrap">
                                <label className="label-for-checkbox">
                                    <input
                                        className="input-checkbox"
                                        name="rememberme"
                                        type="checkbox"
                                        id="rememberme"
                                        value="forever"
                                    />
                                    <span>Remember me</span>
                                </label>
                                <NavLink to="/forgotpassword" className="">
                                    Forgot password?
                                </NavLink>
                            </div>
                            <div className="form-control1">
                                <input
                                    type="submit"
                                    value="Submit"
                                    className="lbtn"
                                />
                            </div>
                            <div className="forget-box">
                                <p>Do not have an account yet?</p>
                                <NavLink to="/register" className="link">
                                    Register here
                                </NavLink>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    );
};

export default Login;
