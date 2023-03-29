import React, { useState, useEffect } from "react";

import "../../assets/css/Main.css";
import "../../assets/css/Dash.css";

import { NavLink, Link } from "react-router-dom";

function BusinessDash() {
    const [user, setUser] = useState();

    const [fname, setFName] = useState(" ");
    const [lname, setLName] = useState(" ");

    const handleLogout = () => {
        setUser({});
        localStorage.clear();
    };

    useEffect(() => {
        try{
            const loggedInUser = localStorage.getItem("user");
            if (loggedInUser) {
                const foundUser = JSON.parse(loggedInUser);
                setUser(foundUser["user_type"]);
                setFName(foundUser["fname"]);
                setLName(foundUser["lname"]);
            }
        }catch{
            console.log("Error in getting the user from local storage.")
        }
    }, []);

    return (
        <main>
            <div className="myaccount-content">
                <div className="welcome">
                    <div className="yes">
                        <p>Hello <strong>{fname} {lname}</strong>,</p>
                    </div>
                    <div className="no">
                        <p>(Not <strong>{fname}? </strong><NavLink to="/login" onClick={handleLogout} className="logout"> Logout</NavLink>)</p>
                    </div>
                </div>
            </div>
            <div className="mygrid">
                <div className="mygridVal" style={{ backgroundColor: "pink" }}>
                    <div className="log">
                        <img id="topImg" src={require("../../assets/icons/dollar-sign.svg")} alt="" />
                    </div>
                    <div className="cont">
                        <p>Revenue</p>
                        <p>$87,086</p>
                    </div>
                </div>
                <div className="mygridVal" style={{ backgroundColor: "lightblue" }}>
                    <div className="log">
                        <img id="topImg" src={require("../../assets/icons/dollar-sign.svg")} alt="" />
                    </div>
                    <div className="cont">
                        <p>Sales this month</p>
                        <p>$1,086</p>
                    </div>
                </div>
                <div className="mygridVal" style={{ backgroundColor: "lightgreen" }}>
                    <div className="log">
                        <img id="topImg" src={require("../../assets/icons/users.svg")} alt="" />
                    </div>
                    <div className="cont">
                        <p>New Users</p>
                        <p>86</p>
                    </div>
                </div>
                <div className="mygridVal" style={{ backgroundColor: "lightslategrey" }}>
                    <div className="log">
                        <img id="topImg" src={require("../../assets/icons/dropbox.svg")} alt="" />
                    </div>
                    <div className="cont">
                        <p>Total Products</p>
                        <p>25</p>
                    </div>
                </div>
            </div>
            <div className="tab-pane fade active show" id="orders" role="tabpanel">
                <div className="myaccount-content">
                    <button id="shop">Show More</button>
                    <p>Recent Orders</p>
                    <hr />
                    <div className="myaccount-table table-responsive text-center">
                        <table className="table table-bordered">
                            <thead className="thead-light">
                                <tr>
                                    <th>Order</th>
                                    <th>Item</th>
                                    <th>Date</th>
                                    <th>Status</th>
                                    <th>Total</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Cheeseburger</td>
                                    <td>Aug 22, 2018</td>
                                    <td>Pending</td>
                                    <td>$3.69</td>
                                    <td><NavLink to="cart.html"
                                        className="btn btn btn-dark btn-hover-primary btn-sm rounded-0">View</NavLink>
                                    </td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Shake</td>
                                    <td>July 22, 2018</td>
                                    <td>Approved</td>
                                    <td>$8.99</td>
                                    <td><NavLink to="cart.html"
                                        className="btn btn btn-dark btn-hover-primary btn-sm rounded-0">View</NavLink>
                                    </td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>Wrap</td>
                                    <td>June 12, 2019</td>
                                    <td>On Hold</td>
                                    <td>$7.99</td>
                                    <td><NavLink to="cart.html"
                                        className="btn btn btn-dark btn-hover-primary btn-sm rounded-0">View</NavLink>
                                    </td>
                                </tr>
                                <tr>
                                    <td>.</td>
                                    <td>.</td>
                                    <td>.</td>
                                    <td>.</td>
                                    <td>.</td>
                                    <td><NavLink to="cart.html"
                                        className="btn btn btn-dark btn-hover-primary btn-sm rounded-0">View</NavLink>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div className="myaccount-content manageProds">
                <NavLink to=""><button id="shop">Show More</button></NavLink>
                <p>Manage My Products</p>
                <hr />
                <div className="multiple">
                    <NavLink to="">
                        <div className="prod1 prod">
                            <img className="myImg" src={require("../../assets/img/c_burger.png")} alt="" /><br />
                            <span>Maharaja Mac Burger</span>
                        </div>
                    </NavLink>
                    <NavLink to="">
                        <div className="prod2 prod">
                            <img className="myImg" src={require("../../assets/img/c_burger2.png")} alt="" /><br />
                            <span>Cheese burger</span>
                        </div>
                    </NavLink>
                    <NavLink to="">
                        <div className="prod3 prod">
                            <img className="myImg" src={require("../../assets/img/c_salad.png")} alt="" /><br />
                            <span>Veggie Salad</span>
                        </div>
                    </NavLink>
                    <NavLink to="">
                        <div className="prod4 prod">
                            <img className="myImg" src={require("../../assets/img/c_wrap_pdp.png")} alt="" /><br />
                            <span>Veggie Wrap</span>
                        </div>
                    </NavLink>
                </div>

            </div>

            <div className="myaccount-content">
                <button id="shop">Show More</button>
                <p>Manage My Posts/Advertises</p>
                <hr />
                <div className="multiple business">
                    <NavLink to="">
                        <div className="prod1 prod">
                            <img className="myImg" style={{ height: "150px" }} src={require("../../assets/img/c_banner1.jpg")} alt="" /><br />
                            <span>Are you ready to fall in love with the new Chick-fil-A® Autumn Spice Milkshake?</span>
                        </div>
                    </NavLink>
                    <NavLink to="">
                        <div className="prod1 prod">
                            <img className="myImg" style={{ height: "150px" }} src={require("../../assets/img/c_banner2.png")} alt="" /><br />
                            <span>Get to know Ms. Carol: Meet the 82-year-old hospitality director for Chick-fil-A
                                Guntersville</span>
                        </div>
                    </NavLink>
                    <NavLink to="">
                        <div className="prod1 prod">
                            <img className="myImg" style={{ height: "150px" }} src={require("../../assets/img/c_banner3.jpg")} alt="" /><br />
                            <span>Chick-fil-A Spices Up Fall with New Autumn Spice Milkshake and Return of Grilled Spicy Deluxe Sandwich</span>
                        </div>
                    </NavLink>
                </div>
            </div>
        </main>
    );
}

export default BusinessDash;
