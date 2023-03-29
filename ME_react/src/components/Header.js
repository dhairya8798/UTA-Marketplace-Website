import React from "react";
import '../assets/css/Main.css';

import { NavLink } from "react-router-dom";

class Header extends React.Component {
    render() {
        return (
            <div className="grid-container header">
                <div className="item1">
                    <NavLink to="/">
                        <img id="logoo" src={require("../assets/icons/MercadoEscolar2.png")} alt="" />
                    </NavLink>
                </div>
                <div className="item2">
                    <input type="text" id="searchMain" placeholder="Search here" />
                    <img id="searchIcon" src={require("../assets/icons/search-svgrepo-com.svg")} alt="" />
                </div>
                <div className="item3">
                    <div id="nav-bar">
                        <ul className="table">
                            <li>
                                <NavLink to="">
                                    <img id="mainScreenIcons" src={require("../assets/icons/bookmark-empty-svgrepo-com.svg")} alt="Wishlist" />
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/cart">
                                    <img id="mainScreenIcons" src={require("../assets/icons/shopping-cart.png")} alt="Cart" />
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/login">
                                    <img id="mainScreenIcons" src={require("../assets/icons/profile-circled-svgrepo-com.svg")} alt="Cart" />
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;