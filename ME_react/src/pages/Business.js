import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Config from "../Config.json";

import MgProds from "../components/business/MgProds";
import RecentOrder from "../components/business/RecentOrder";
import AccountDetails from "../components/business/AccountDetails";
import BusinessDash from "../components/business/BusinessDash";

import "../assets/css/Main.css";
import "../assets/css/Dash.css";

const TITLE = "Business Dashboard | " + Config.SITE_TITLE;
const DESC = "Welcome to the business dashboard";

const CANONICAL = Config.SITE_DOMAIN + "/businessdashboard";

function BusinessDashboard() {
    const [isToggled, setIsToggled] = useState(1);
    const [user, setUser] = useState();
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

            <div class="maintitle">
                <span id="about">Business Dashboard</span>
                <p class="mb-0">
                    From your account dashboard, you can easily check &amp; view
                    your recent orders, your shipping and billing addresses and
                    edit your password and account details.
                </p>
            </div>

            <div className="main-content">
                <div className="left">
                    <div className="myaccount-tab-menu nav" role="tablist">
                        <Link className="active" onClick={() => setIsToggled(1)}>
                            Dashboard
                        </Link>
                        <Link onClick={() => setIsToggled(2)}>Manage Products</Link>
                        <Link onClick={() => setIsToggled(3)}>Account Details</Link>
                        <Link onClick={() => setIsToggled(4)}>My Posts/Advertises</Link>
                        <NavLink to="/login"
                            style={{ borderBottom: "1px solid #ddd" }}
                            onClick={handleLogout}
                        >
                            Logout
                        </NavLink>
                    </div>
                </div>
                <div className="right">
                    {isToggled === 1 && <BusinessDash />}
                    {isToggled === 2 && <MgProds />}
                    {isToggled === 3 && <AccountDetails />}
                    {isToggled === 4 && <RecentOrder />}
                </div>
            </div>
        </main>
    );
    // }
}

export default BusinessDashboard;
