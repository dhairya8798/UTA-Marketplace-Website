import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Config from "../Config.json";

import ManageStudents from "../components/school/MgStudents";
import ManageBusiness from "../components/school/MgBusiness";
import ManageClubs from "../components/school/MgClubs";
import Reports from "../components/school/Reports";
import AccountDetails from "../components/school/AccountDetails";
import Dash from "../components/school/SchoolDash";

import "../assets/css/Main.css";
import "../assets/css/Dash.css";

const TITLE = "School Admin Dashboard | " + Config.SITE_TITLE;
const DESC = "Welcome to the School Admin dashboard";

const CANONICAL = Config.SITE_DOMAIN + "/schooladmin";

function SchoolAdmin() {
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

            <div className="maintitle">
                <span id="about">School Admin Dashboard</span>
            </div>

            <div className="main-content">
                <div className="left">
                    <div className="myaccount-tab-menu nav" role="tablist">
                        <Link className="active" onClick={() => setIsToggled(1)}>
                            Dashboard
                        </Link>
                        <Link onClick={() => setIsToggled(2)}>Manage Students</Link>
                        <Link onClick={() => setIsToggled(3)}>Manage Business</Link>
                        <Link onClick={() => setIsToggled(4)}>Account Details</Link>
                        <Link onClick={() => setIsToggled(5)}>Manage Clubs and Posts</Link>
                        <Link onClick={() => setIsToggled(6)}>Reports</Link>
                        <NavLink to="/login"
                            style={{ borderBottom: "1px solid #ddd" }}
                            onClick={handleLogout}
                        >
                            Logout
                        </NavLink>
                    </div>
                </div>
                <div className="right">
                    {isToggled === 1 && <Dash />}
                    {isToggled === 2 && <ManageStudents />}
                    {isToggled === 3 && <ManageBusiness />}
                    {isToggled === 4 && <AccountDetails />}
                    {isToggled === 5 && <ManageClubs />}
                    {isToggled === 6 && <Reports />}
                </div>
            </div>
        </main>
    );
    // }
}

export default SchoolAdmin;
