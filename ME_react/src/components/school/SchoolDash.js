import React, { useState, useEffect } from "react";
import axios from "axios";

import "../../assets/css/Main.css";
import "../../assets/css/Dash.css";

import { NavLink, Link } from "react-router-dom";
import { render } from "@testing-library/react";

class SchoolDash extends React.Component { 
    constructor(props) {
        super(props);
        this.state = {
            total_users : []
        };
    }

    handleLogout() {
        localStorage.clear();
    };


    componentDidMount() {
        this.getData();
    }

    getData() {
        let payload = {
        }
        axios
            .post(
                "https://6458-64-189-206-43.ngrok.io/api/get-count.php",
                payload, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*'
                    },
            }).then((res) => {
                const total_users = res.data;
                this.setState({ total_users: total_users});
                // console.log(total_users);
            });
    }

    render() {
        return (
        <main>
            <div className="myaccount-content">
                <div className="welcome">
                    <div className="yes">
                        <p>Hello <strong>Yor Xio</strong>,</p>
                    </div>
                    <div className="no">
                        <p>(Not <strong>Yor ?</strong><NavLink to="/login" onClick={this.handleLogout} className="logout"> Logout</NavLink>)</p>
                    </div>
                </div>
            </div>
            <div className="mygrid school">
                <div className="mygridVal" style={{ backgroundColor: "lightblue" }}>
                    <div className="log">
                        <img
                            id="topImg"
                            src={require('../../assets/icons/users.svg')}
                            alt="" />
                    </div>
                    <div className="cont">
                        <p>Students</p>
                        
                        <p>{this.state.total_users && this.state.total_users[0] &&  this.state.total_users[0][1] }</p>
                        
                    </div>
                </div>
                <div className="mygridVal" style={{ backgroundColor: "lightgreen" }}>
                    <div className="log">
                        <img
                            id="topImg"
                            src={require('../../assets/icons/users.svg')}
                            alt="" />
                    </div>
                    <div className="cont">
                        <p>Businesses</p>
                        <p>{this.state.total_users && this.state.total_users[1] &&  this.state.total_users[1][2]}</p>
                    </div>
                </div>
            </div>
            <div className="tab-pane fade active show" id="orders" role="tabpanel">
                <div className="myaccount-content">
                    <button id="shop">Show More</button>
                    <p>Business Account Request</p>
                    <hr />
                    <div className="myaccount-table table-responsive text-center">
                        <table className="table table-bordered">
                            <thead className="thead-light">
                                <tr>
                                    <th>ID</th>
                                    <th>Business Name</th>
                                    <th>Manager</th>
                                    <th>Application Date</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>3</td>
                                    <td>McDonads</td>
                                    <td>Jose Morales</td>
                                    <td>Aug 22, 2018</td>
                                    <td>Pending</td>
                                    <td>View</td>
                                </tr>
                                <tr>
                                    <td>34</td>
                                    <td>Halal Shack</td>
                                    <td>Yaml Cooper</td>
                                    <td>May 2, 2021</td>
                                    <td>Approved</td>
                                    <td>View</td>
                                </tr>
                                <tr>
                                    <td>13</td>
                                    <td>Jack in the box</td>
                                    <td>Jack Reaper</td>
                                    <td>August 29, 2022</td>
                                    <td>On Hold</td>
                                    <td>View</td>
                                </tr>
                                <tr>
                                    <td>22</td>
                                    <td>Sonic</td>
                                    <td>Jim Terry</td>
                                    <td>December 15, 2021</td>
                                    <td>Approved</td>
                                    <td>View</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>

            <div className="tab-pane fade active show" id="orders" role="tabpanel">
                <div className="myaccount-content">
                    <button id="shop">Show More</button>
                    <p>Blogpost Requests</p>
                    <hr />
                    <div className="myaccount-table table-responsive text-center">
                        <table className="table table-bordered">
                            <thead className="thead-light">
                                <tr>
                                    <th>Number</th>
                                    <th>From</th>
                                    <th>Title</th>
                                    <th>Date</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>34</td>
                                    <td>Hue Jean</td>
                                    <td>New Updated System</td>
                                    <td>Aug 1, 2022</td>
                                    <td>Pending</td>
                                    <td>View</td>
                                </tr>
                                <tr>
                                    <td>22</td>
                                    <td>Marry Cun</td>
                                    <td>Food and pasta</td>
                                    <td>April 22, 2021</td>
                                    <td>Approved</td>
                                    <td>View</td>
                                </tr>
                                <tr>
                                    <td>31</td>
                                    <td>Koleman Tiddles</td>
                                    <td>Camera Tricks</td>
                                    <td>Sept 12, 2021</td>
                                    <td>On Hold</td>
                                    <td>View</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div className="tab-pane fade active show" id="orders" role="tabpanel">
                <div className="myaccount-content">
                    <button id="shop">Show More</button>
                    <p>Club Requests</p>
                    <hr />
                    <div className="myaccount-table table-responsive text-center">
                        <table className="table table-bordered">
                            <thead className="thead-light">
                                <tr>
                                    <th>REQ</th>
                                    <th>From</th>
                                    <th>Club Name</th>
                                    <th>Date</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>REQ6598</td>
                                    <td>Kent Starc</td>
                                    <td>Robos</td>
                                    <td>Aug 22, 2022</td>
                                    <td>Pending</td>
                                    <td>View</td>
                                </tr>
                                <tr>
                                    <td>REQ1234</td>
                                    <td>Bob Marley</td>
                                    <td>TiAcos</td>
                                    <td>July 2, 2022</td>
                                    <td>Approved</td>
                                    <td>View</td>
                                </tr>
                                <tr>
                                    <td>REQ3224</td>
                                    <td>Megan Stalli</td>
                                    <td>Aeros</td>
                                    <td>June 12, 2021</td>
                                    <td>On Hold</td>
                                    <td>View</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </main >
    );
    }
}

export default SchoolDash;
