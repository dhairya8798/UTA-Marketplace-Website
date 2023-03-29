import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Config from "../Config.json";


import RecentOrder from "../components/student/RecentOrder";
import MgSClubs from "../components/student/MgSClubs";
import MgProds from "../components/student/MgProds";
import Adverts from "../components/student/Adverts";
import Dash from "../components/student/Dash";
import AccountDetails from "../components/student/AccountDetails";

import '../assets/css/Main.css';
import '../assets/css/Dash.css';

const TITLE = "Dashboard | " + Config.SITE_TITLE;
const DESC = "Welcome to the dashboard";

const CANONICAL = Config.SITE_DOMAIN + "/dashboard";

function Dashboard() {

    const [isToggled, setIsToggled] = useState(1);
    const [user, setUser] = useState(localStorage.getItem("user"));

    const handleLogout = () => {
        setUser({});
        localStorage.clear();
    };

    return (
        <main>
            <Helmet>
                <title>{TITLE}</title>
                <link rel="canonical" href={CANONICAL} />
                <meta name="description" content={DESC} />
            </Helmet>
            <div className="maintitle">
                <span id="about">Student Dashboard</span>
                <p className="mb-0">From your account dashboard, you can easily check &amp; view your recent orders, your shipping
                    and billing addresses and edit your password and account details.</p>
            </div>

            <div className="main-content">
                <div className="left">
                    <div className="myaccount-tab-menu nav" role="tablist">
                        <Link className="active" onClick={() => setIsToggled(1)}>Dashboard</Link>
                        <Link onClick={() => setIsToggled(2)}>My Recent Orders</Link>
                        <Link onClick={() => setIsToggled(3)}>Account Details</Link>
                        <Link onClick={() => setIsToggled(4)}>Manage Clubs</Link>
                        <Link onClick={() => setIsToggled(5)}>Manage My Products</Link>
                        <Link onClick={() => setIsToggled(6)}>My Posts/Advertises</Link>
                        <Link onClick={() => setIsToggled(7)}>Orders</Link>
                        <NavLink to="/login" style={{ borderBottom: "1px solid #ddd" }} onClick={handleLogout}>
                            Logout
                        </NavLink>
                    </div>
                </div>
                <div className="right">
                    {isToggled === 1 && <Dash />}
                    {isToggled === 2 && <RecentOrder />}
                    {isToggled === 3 && <AccountDetails />}
                    {isToggled === 4 && <MgSClubs />}
                    {isToggled === 5 && <MgProds />}
                    {isToggled === 6 && <Adverts />}
                    {isToggled === 7 && <RecentOrder />}
                </div>
            </div>
        </main>
    );
}

export default Dashboard;