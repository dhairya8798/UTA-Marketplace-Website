import React, { useState, useEffect } from "react";

import "../assets/css/Main.css";
import "../assets/css/Cart.css";

import { NavLink, Link, useNavigate } from "react-router-dom";

import { Helmet } from "react-helmet";
import Config from "../Config.json";

const TITLE = "Cart | " + Config.SITE_TITLE;
const DESC = "Customize your cart through this page";

const CANONICAL = Config.SITE_DOMAIN + "/cart";

function Cart() {
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
                <span id="about">Cart</span>
            </div>
            <div className="main-wrapper">
                <div className="myCart">
                    <table>
                        <thead>
                            <tr className="bg-gray">
                                <th style={{ width: "10%" }}></th>
                                <th style={{ width: "40%" }}>Product</th>
                                <th style={{ width: "15%" }}>Price</th>
                                <th style={{ width: "15%" }}>Quantity</th>
                                <th style={{ width: "15%" }}>Total</th>
                                <th style={{ width: "5%" }}></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="">
                                    <Link style={{ pointerEvents: "none" }}>
                                        <img
                                            src={require("../assets/img/cart-01.webp")}
                                            alt=""
                                        />
                                    </Link>
                                </td>
                                <td className="">
                                    <Link style={{ pointerEvents: "none" }}>
                                        Plant pots
                                    </Link>
                                </td>

                                <td className="">
                                    <span className="">$17.00</span>
                                </td>

                                <td className="">
                                    <div className="">
                                        <div className="">
                                            <input
                                                className="qua"
                                                type="number"
                                                name="qtybutton"
                                                value="2"
                                            />
                                        </div>
                                    </div>
                                </td>
                                <td className="">
                                    <span className="">$ 34.00</span>
                                </td>
                                <td className="">
                                    <Link style={{ pointerEvents: "none" }}>
                                        <img
                                            src={require("../assets/icons/xmark.svg")}
                                            alt=""
                                        />
                                    </Link>
                                </td>
                            </tr>
                            <tr>
                                <td className="">
                                    <Link style={{ pointerEvents: "none" }}>
                                        <img
                                            src={require("../assets/img/cart-02.webp")}
                                            alt=""
                                        />
                                    </Link>
                                </td>
                                <td className="">
                                    <Link style={{ pointerEvents: "none" }}>
                                        Teapot with black tea
                                    </Link>
                                </td>

                                <td className="">
                                    <span className="">$14.00</span>
                                </td>

                                <td className="">
                                    <div className="">
                                        <div className="">
                                            <input
                                                className="qua"
                                                type="number"
                                                name="qtybutton"
                                                value="2"
                                            />
                                        </div>
                                    </div>
                                </td>
                                <td className="">
                                    <span className="">$ 28.00</span>
                                </td>
                                <td className="">
                                    <Link style={{ pointerEvents: "none" }}>
                                        <img
                                            src={require("../assets/icons/xmark.svg")}
                                            alt=""
                                        />
                                    </Link>
                                </td>
                            </tr>
                            <tr>
                                <td className="">
                                    <Link style={{ pointerEvents: "none" }}>
                                        <img
                                            src={require("../assets/img/cart-03.webp")}
                                            alt=""
                                        />
                                    </Link>
                                </td>
                                <td className="">
                                    <Link style={{ pointerEvents: "none" }}>
                                        Wooden Flowerpot
                                    </Link>
                                </td>

                                <td className="">
                                    <span className="">$14.00</span>
                                </td>

                                <td className="">
                                    <div className="">
                                        <div className="">
                                            <input
                                                className="qua"
                                                type="number"
                                                name="qtybutton"
                                                value="2"
                                            />
                                        </div>
                                    </div>
                                </td>
                                <td className="">
                                    <span className="">$ 28.00</span>
                                </td>
                                <td className="">
                                    <Link style={{ pointerEvents: "none" }}>
                                        <img
                                            src={require("../assets/icons/xmark.svg")}
                                            alt=""
                                        />
                                    </Link>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="flex-container-update-cart">
                    <div className="flex-item-left">
                        <Link
                            style={{ pointerEvents: "none" }}
                            className="button"
                        >
                            Continue Shopping
                        </Link>
                    </div>
                    <div className="flex-item-right">
                        <Link
                            style={{ pointerEvents: "none" }}
                            className="button"
                        >
                            Update cart
                        </Link>
                    </div>
                </div>
                <div className="">
                    <div className="flex-container row">
                        <div className="flex-item-left">
                            <div className="discount-code">
                                <p className="coup">Coupon Discount</p>
                                <p>
                                    Enter coupon code (Only applicable for
                                    certain items)
                                </p>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Coupon code"
                                />
                                <button className="button" type="submit">
                                    Apply coupon
                                </button>
                            </div>
                        </div>
                        <div className="flex-item-right">
                            <div className="grand-total-wrap">
                                <div className="grand-total-content">
                                    <ul>
                                        <li>
                                            Subtotal{" "}
                                            <span id="total"> $90.00</span>
                                        </li>
                                        <hr />
                                        <li>
                                            Total <span id="total">$90.00</span>{" "}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="proceed">
                                <NavLink to="/checkout" className="button">
                                    Proceed to checkout
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Cart;
