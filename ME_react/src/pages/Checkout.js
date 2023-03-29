import React, {useState, useEffect} from "react";

import '../assets/css/Main.css';
import '../assets/css/Checkout.css';

import { NavLink, useNavigate } from "react-router-dom";

import {Helmet} from "react-helmet";
import Config from "../Config.json";


const TITLE = "Checkout | " + Config.SITE_TITLE;
const DESC = "Checkout the current cart";

const CANONICAL = Config.SITE_DOMAIN + "/checkout";



function Checkout() {
    const [user, setUser] = useState();

    const navigate = useNavigate();

    useEffect(() => {
        try {
            const loggedInUser = localStorage.getItem("user");
            if (loggedInUser) {
                const foundUser = JSON.parse(loggedInUser);
                setUser(foundUser);
            } else {
                setUser(0);
            }
        } catch {
            console.log("Error in getting the user from local storage.");
        }
    }, []);

    if (user === 0) {
        navigate("/login");
    }

        return (
            <main>
                <Helmet>
                    <title>{TITLE}</title>
                    <link rel="canonical" href={CANONICAL} />
                    <meta name="description" content={DESC} />
                </Helmet>
                <div className="maintitle">
                    <span id="about">Checkout</span>
                </div>
                <div className="mainContent">
                    <div className="left">
                        <div className="">
                            <p className="billDet">Billing Details</p>
                            <div className="row">
                                <div className="namee">
                                    <div className="half1">
                                        <div className="myBox">
                                            <label>First name <span className="" title="required">*</span></label>
                                            <input type="text" />
                                        </div>
                                    </div>
                                    <div className="half2">
                                        <div className="myBox">
                                            <label>Last name <span className="" title="required">*</span></label>
                                            <input type="text" />
                                        </div>
                                    </div>
                                </div>
                                <div className="full">
                                    <div className="myBox">
                                        <label>Card Number <span className="" title="required">*</span></label>
                                        <input type="text" />
                                    </div>
                                </div>
                                <div className="namee">
                                    <div className="half1">
                                        <div className="myBox">
                                            <label>Expiry Date <span className="" title="required">*</span></label>
                                            <input type="text" placeholder="MM/YY" />
                                        </div>
                                    </div>
                                    <div className="half2">
                                        <div className="myBox">
                                            <label>Security Code <span className="" title="required">*</span></label>
                                            <input type="text" placeholder="***" />
                                        </div>
                                    </div>
                                </div>
                                <div className="full">
                                    <div className="myBox">
                                        <label>Postcode / ZIP (optional) <span className="" title="required">*</span></label>
                                        <input type="text" />
                                    </div>
                                </div>
                                <div className="full">
                                    <div className="myBox">
                                        <label>School name (optional)</label>
                                        <input type="text" />
                                    </div>
                                </div>
                                <div className="full">
                                    <div className="myBox">
                                        <label>Country <span className="" title="required">*</span></label>
                                        <select className="select-active">
                                            <option>United States</option>
                                            <option>Mexico</option>
                                            <option>Canada</option>
                                            <option>China</option>
                                            <option>Japan</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="full">
                                    <div className="myBox">
                                        <label>Street address <span title="required">*</span></label>
                                        <input className="billing-address" placeholder="House number and street name" type="text" />
                                        <input placeholder="Apartment, suite, unit etc. (optional)" type="text" />
                                    </div>
                                </div>
                                <div className="full">
                                    <div className="myBox">
                                        <label>City <span className="" title="required">*</span></label>
                                        <input type="text" />
                                    </div>
                                </div>
                                <div className="full">
                                    <div className="myBox">
                                        <label>County <span className="" title="required">*</span></label>
                                        <select className="select-active">
                                            <option>ABC</option>
                                            <option>DEF</option>
                                            <option>GHI</option>
                                            <option>JKL</option>
                                            <option>MNO</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="full">
                                    <div className="myBox">
                                        <label>Phone <span className="" title="required">*</span></label>
                                        <input type="text" />
                                    </div>
                                </div>
                                <div className="full">
                                    <div className="myBox">
                                        <label>Email Address <span className="" title="required">*</span></label>
                                        <input type="text" />
                                    </div>
                                </div>
                            </div>
                            {/* <div className="">
                    <p className="">Additional information</p>
                    <label>Order notes (optional)</label>
                    <textarea placeholder="Notes about your order, e.g. special notes for delivery. "
                        name="message"></textarea>
                </div> */}
                        </div>
                    </div>
                    <div className="right">
                        <div className="">
                            <h6 className="billDet">Your order</h6>
                            <div className="your-order-area">
                                <div className="your-order-wrap">
                                    <div className="your-order-info-wrap">
                                        <div className="your-order-info" style={{borderBottom: '1px solid #cdcdcd'}}>
                                            <ul>
                                                <li>Product <span>Total</span></li>
                                            </ul>
                                        </div>
                                        <div className="your-order-middle">
                                            <ul>
                                                <li>Product Name X 1 <span>$10 </span></li><br />
                                                <li>Product Name X 3 <span>$30 </span></li>
                                            </ul>
                                        </div>
                                        <div className="your-order-info order-subtotal" style={{borderBottom: '1px solid #cdcdcd'}}>
                                            <ul>
                                                <li><strong>Subtotal</strong> <span>$100 </span></li>
                                            </ul>
                                        </div>
                                        <div className="your-order-info order-total">
                                            <ul>
                                                <li><strong>Total</strong> <span>$100.00 </span></li>
                                            </ul>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="">
                                <p style={{textAlign: 'justify'}}>Your personal data will be used to process the order, support your experience throughout this website, and for other purposes described in our <NavLink to="#">privacy policy</NavLink>.
                                </p>
                            </div>
                            <div className="placeOrder">
                                <NavLink to="/cart" className="placeOrderButton">Place Order</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        );
    }

export default Checkout;