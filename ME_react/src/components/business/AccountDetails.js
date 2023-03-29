import React from "react";

import '../../assets/css/Main.css';
import '../../assets/css/Dash.css';

// import { NavLink } from "react-router-dom";

class AccountDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userID: JSON.parse(localStorage.getItem("user"))["user_id"],
            fname: JSON.parse(localStorage.getItem("user"))["fname"],
            lname: JSON.parse(localStorage.getItem("user"))["lname"],
            email: JSON.parse(localStorage.getItem("user"))["email"],
        };
    }

    render() {
        return (
            <div className="" id="account-info" role="tabpanel">
                <div className="myaccount-content">
                    <h3 className="title">Account Details</h3>
                    <div className="">
                        <form action="#">
                            <div className="fullname">
                                <div className="">
                                    <label htmlFor="first-name" className="">First Name</label>
                                    <input type="text" id="first-name" placeholder="First Name" value={this.state.fname}/>
                                </div>
                                <div className="">
                                    <label htmlFor="last-name" className="">Last Name</label>
                                    <input type="text" id="last-name" placeholder="Last Name" value={this.state.lname}/>
                                </div>
                            </div>
                            <div className="regInputs">
                                <label htmlFor="display-name" className="">Display Name</label>
                                <input type="text" id="display-name" placeholder="Display Name" value={this.state.fname}/>
                            </div>
                            <div className="regInputs">
                                <label htmlFor="email" className="">Email Address</label>
                                <input type="email" id="email" placeholder="Email Address" value={this.state.email}/>
                            </div>

                            <div className="regInputs">
                                <label htmlFor="billing" className="">Billing Address</label>
                                <div className="SaveButton">
                                    <button id="shop" className="">Edit Address</button>
                                </div>
                                <address id="aaddress">
                                    <p>1234 Market ##, Suite 900 <br /></p>
                                    <p>Ohio, US 12345</p>
                                </address>
                            </div>

                            <fieldset>
                                <legend>Change Password</legend>
                                <div className="regInputs">
                                    <label htmlFor="current-pwd" className="">Current Password</label>
                                    <input type="password" id="current-pwd" placeholder="Current Password" />
                                </div>
                                <div className="fullname">
                                    <div className="">
                                        <div className="">
                                            <label htmlFor="new-pwd" className="">New Password</label>
                                            <input type="password" id="new-pwd" placeholder="New Password" />
                                        </div>
                                    </div>
                                    <div className="">
                                        <div className="">
                                            <label htmlFor="confirm-pwd" className="">Confirm Password</label>
                                            <input type="password" id="confirm-pwd" placeholder="Confirm Password" />
                                        </div>
                                    </div>
                                </div>
                            </fieldset>
                            <div className="SaveButton">
                                <button id="shop" className="">Save Changes</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default AccountDetails;