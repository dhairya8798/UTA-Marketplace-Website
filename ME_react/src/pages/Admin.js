import React from "react";

import '../assets/css/Main.css';
import '../assets/css/Admin.css';

import { NavLink, Link } from "react-router-dom";

import {Helmet} from "react-helmet";
import Config from "../Config.json";


const TITLE = "Admin | " + Config.SITE_TITLE;
const DESC = "Admin page to manage the web portal";

const CANONICAL = Config.SITE_DOMAIN + "/admin";


class Admin extends React.Component {
    // state = { showing: true };

    render() {
        // const { showing } = this.state;
        return (
            <main>
                <Helmet>
                    <title>{TITLE}</title>
                    <link rel="canonical" href={CANONICAL} />
                    <meta name="description" content={DESC} />
                </Helmet>

                <div className="adminContainer">
                    <nav className="navbar">
                        {/* <div className="nav_icon" onClick={() => this.setState({ showing: !showing })} > */}
                        <div className="nav_icon">
                            <img src={require("../assets/icons/bars.svg")} alt="bars"/>
                        </div>
                        <div className="navbar__left">
                            <Link style={{pointerEvents: 'none'}} className="active_link"> Super Admin</Link>
                        </div>
                        <div className="navbar__right">
                            <Link style={{pointerEvents: 'none'}}> 
                                <img src={require("../assets/icons/search-svgrepo-com.svg")} style={{ height: "20px" }} alt="" />
                            </Link>
                            <Link style={{pointerEvents: 'none'}}> 
                                <img width="30" src={require("../assets/icons/avatar.svg")} alt="" />
                            </Link>
                        </div>
                    </nav>
                    <main>
                        <div className="main__container">
                            <div className="main__title">
                                <img src={require("../assets/icons/hello.svg")} alt="" />
                                <div className="main__greeting">
                                    <h1>Hello Mark</h1>
                                    <p>Welcome to your admin dashboard</p>
                                </div>
                            </div>
                            <div className="main__cards">
                                <div className="card">
                                    <img className="iconn" src={require("../assets/icons/user.svg")} alt="" />
                                    <div className="card_inner">
                                        <p className="text-primary-p">Number of Users</p>
                                        <span className="font-bold text-title">1578</span>
                                    </div>
                                </div>

                                <div className="card">
                                    <img className="iconn" src={require("../assets/icons/calendar.svg")} alt="" />
                                    <div className="card_inner">
                                        <p className="text-primary-p">Daily new users</p>
                                        <span className="font-bold text-title">30</span>
                                    </div>
                                </div>

                                <div className="card">
                                    <img className="iconn" src={require("../assets/icons/video.svg")} alt="" />
                                    <div className="card_inner">
                                        <p className="text-primary-p">Media interactions</p>
                                        <span className="font-bold text-title">340</span>
                                    </div>
                                </div>

                                <div className="card">
                                    <img className="iconn" src={require("../assets/icons/thumbs-up.svg")} alt="" />
                                    <div className="card_inner">
                                        <p className="text-primary-p">Happy customers</p>
                                        <span className="font-bold text-title">645</span>
                                    </div>
                                </div>
                            </div>
                            <div className="boxx" style={{ marginBottom: "20px", padding: "10px" }}>
                                <ul className="">
                                    <li className=""><a className="nav-link active" data-bs-toggle="tab" href="#summery-today">Today</a>
                                    </li>
                                    <li className=""><a className="nav-link" data-bs-toggle="tab" href="#summery-week">Week</a></li>
                                    <li className=""><a className="nav-link" data-bs-toggle="tab" href="#summery-month">Month</a></li>
                                    <li className=""><a className="nav-link" data-bs-toggle="tab" href="#summery-year">Year</a></li>
                                </ul>
                                <div className="">
                                    <div className="input-group">
                                        <p id="filts">Filters</p>
                                        <input type="date" className="form-control" />
                                        <button className="btn" type="button"><img id="myIcon" style={{ height: "24px" }}
                                            src={require("../assets/icons/filter.svg")} alt="" /></button>
                                    </div>
                                </div>
                            </div>
                            <div className="summary" id="summery-today">
                                <div className="boxx">
                                    <div className="">
                                        <span className="">Customers</span>
                                        <div><span className="">14,208</span></div>
                                    </div>
                                    <div className="">
                                        <img id="myIcon" src={require("../assets/icons/user.svg")} alt="" />
                                    </div>
                                </div>
                                <div className="boxx">
                                    <div className="">
                                        <span className="">Order</span>
                                        <div><span className="">2314</span></div>
                                    </div>
                                    <div className="">
                                        <img id="myIcon" src={require("../assets/icons/discount.png")} alt="" />
                                    </div>
                                </div>
                                <div className="boxx">
                                    <div className="">
                                        <span className="">Avg Sale</span>
                                        <div><span className="">$1770</span></div>
                                    </div>
                                    <div className="">
                                        <img id="myIcon" src={require("../assets/icons/calculator.svg")} alt="" />
                                    </div>
                                </div>
                                <div className="boxx">
                                    <div className="">
                                        <span className="">Avg Item Sale</span>
                                        <div><span className="">185</span></div>
                                    </div>
                                    <div className="">
                                        <img id="myIcon" src={require("../assets/icons/bars.svg")} alt="" />
                                    </div>
                                </div>
                                <div className="boxx">
                                    <div className="">
                                        <span className="">Total Sale</span>
                                        <div><span className="">$35000</span></div>
                                    </div>
                                    <div className="">
                                        <img id="myIcon" src={require("../assets/icons/cart-svgrepo-com.svg")} alt="" />
                                    </div>
                                </div>
                                <div className="boxx">
                                    <div className="">
                                        <span className="">Visitors</span>
                                        <div><span className="">11452</span></div>
                                    </div>
                                    <div className="">
                                        <img id="myIcon" src={require("../assets/icons/users.svg")} alt="" />
                                    </div>
                                </div>
                                <div className="boxx">
                                    <div className="">
                                        <span className="">Total Products</span>
                                        <div><span className="">161</span></div>
                                    </div>
                                    <div className="">
                                        <img id="myIcon" src={require("../assets/icons/bag-shopping.svg")} alt="" />
                                    </div>
                                </div>
                                <div className="boxx">
                                    <div className="">
                                        <span className="">Top Selling Items</span>
                                        <div><span className="">122</span></div>
                                    </div>
                                    <div className="">
                                        <img id="myIcon" src={require("../assets/icons/star.svg")} alt="" />
                                    </div>
                                </div>
                                <div className="boxx">
                                    <div className="">
                                        <span className="">Businesses</span>
                                        <div><span className="">32</span></div>
                                    </div>
                                    <div className="">
                                        <img id="myIcon" src={require("../assets/icons/acquisition.png")} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="AllOrders">
                                <div className="tab-pane fade active show" id="orders" role="tabpanel">
                                    <div className="myaccount-content">
                                        <button id="shop">Show More</button>
                                        <p>Queries</p>
                                        <hr />
                                        <div className="myaccount-table table-responsive text-center">
                                            <table className="table table-bordered">
                                                <thead className="thead-light">
                                                    <tr>
                                                        <th>ID</th>
                                                        <th>User name</th>
                                                        <th>Subject</th>
                                                        <th>Application Date</th>
                                                        <th>Status</th>
                                                        <th>Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>1</td>
                                                        <td>Jean</td>
                                                        <td>Cannot log in</td>
                                                        <td>Aug 22, 2018</td>
                                                        <td>Pending</td>
                                                        <td><Link style={{pointerEvents: 'none'}}>View</Link>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>3</td>
                                                        <td>Codi</td>
                                                        <td>How to access the portal</td>
                                                        <td>May 2, 2021</td>
                                                        <td>Approved</td>
                                                        <td><Link style={{pointerEvents: 'none'}}>View</Link>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>13</td>
                                                        <td>Jean</td>
                                                        <td>Cannot sale an item</td>
                                                        <td>August 29, 2022</td>
                                                        <td>On Hold</td>
                                                        <td><Link style={{pointerEvents: 'none'}}>View</Link>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>22</td>
                                                        <td>Jim Peuyy</td>
                                                        <td>How to edit the last name mistake</td>
                                                        <td>December 15, 2021</td>
                                                        <td>Approved</td>
                                                        <td><Link style={{pointerEvents: 'none'}}>View</Link>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="charts">
                                <div className="charts__left">
                                    <div className="charts__left__title">
                                        <div>
                                            <h1>Daily Reports</h1>
                                            <p>Cupertino, California, USA</p>
                                        </div>
                                        <img className="iconn" src={require("../assets/icons/dollar-sign.svg")} alt="" />
                                    </div>
                                    <div id="apex1"></div>
                                </div>


                            </div>
                            {/* <!-- CHARTS ENDS HERE --> */}
                        </div>
                    </main>

                    {/* { showing && ( */}

                    <div id="sidebar">
                        <nav className="visible" id="nav">
                            <div className="sidebar__title">
                                <NavLink to="/" style={{ color: "white" }}>
                                    <div className="sidebar__img">
                                        <h1>Mercado Escolar</h1>
                                    </div>
                                </NavLink>
                                {/* <button id="men" type="button"> */}
                                <img className="iconn" id="sidebarIcon" src={require("../assets/icons/xmark.svg")} alt="" />
                                {/* Menu */}
                                {/* </button> */}
                            </div>

                            <div className="sidebar__menu">
                                <div className="sidebar__link active_menu_link">
                                    <img className="iconn" id="sidebarIcon" src={require("../assets/icons/house.svg")} alt="" />
                                    <Link style={{pointerEvents: 'none'}}> Dashboard</Link>
                                </div>
                                <h2>Management</h2>
                                <div className="sidebar__link">
                                    <Link style={{pointerEvents: 'none'}}> Student Management</Link>
                                </div>
                                <div className="sidebar__link">
                                    <Link style={{pointerEvents: 'none'}}> Business Management</Link>
                                </div>
                                <div className="sidebar__link">
                                    <Link style={{pointerEvents: 'none'}}> School Admin Management</Link>
                                </div>
                                <div className="sidebar__link">
                                    <Link style={{pointerEvents: 'none'}}> Queries</Link>
                                </div>
                                <h2>Payroll</h2>
                                <div className="sidebar__link">
                                    <Link style={{pointerEvents: 'none'}}> Student Assistant Payroll</Link>
                                </div>
                                <div className="sidebar__link">
                                    <Link style={{pointerEvents: 'none'}}> Paygrade</Link>
                                </div>
                                <h2>Leave</h2>
                                <div className="sidebar__link">
                                    <Link style={{pointerEvents: 'none'}}> Requests</Link>
                                </div>
                                <div className="sidebar__link">
                                    <Link style={{pointerEvents: 'none'}}> Apply for leave</Link>
                                </div>
                                <div className="sidebar__link">
                                    <Link style={{pointerEvents: 'none'}}> Leave Policy</Link>
                                </div>
                                <div className="sidebar__link">
                                    <Link style={{pointerEvents: 'none'}}> Special Days</Link>
                                </div>
                                <div className="sidebar__logout">
                                    <NavLink to="/login"> Log out</NavLink>
                                </div>
                            </div>
                        </nav>
                    </div>
                    {/* // )} */}
                </div>
            </main>
        );
    }
}

export default Admin;