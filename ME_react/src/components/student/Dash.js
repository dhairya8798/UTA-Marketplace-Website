import React, { useState, useEffect } from "react";

import "../../assets/css/Main.css";
import "../../assets/css/Dash.css";

import { NavLink, Link } from "react-router-dom";

function Dash() {
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
            <div>
                <div className="myaccount-content">
                    <div className="welcome">
                        <div className="yes">
                            <p>
                                Hello <strong>{fname} {lname}</strong>
                            </p>
                        </div>
                        <div className="no">
                            <p>
                                (Not <strong>{fname} ? </strong>
                                <NavLink
                                    to="/"
                                    className="logout"
                                    onClick={handleLogout}
                                >
                                    {" "}
                                    Logout
                                </NavLink>
                                )
                            </p>
                        </div>
                    </div>
                </div>
                <div className="myaccount-content manageProds">
                    <Link style={{ pointerEvents: "none" }}>
                        {" "}
                        {/* <button id="shop">Show More</button> */}
                    </Link>
                    <p>Manage My Products</p>
                    <hr />
                    <div className="multiple">
                        <Link style={{ pointerEvents: "none" }}>
                            <div className="prod1 prod">
                                <div id="buttons">
                                    <button id="edit">
                                        <img
                                            className="editIcon"
                                            src={require("../../assets/icons/pen-to-square.svg")}
                                            alt=""
                                        />
                                    </button>
                                    <button id="delete">
                                        <img
                                            className="deleteIcon"
                                            src={require("../../assets/icons/xmark.svg")}
                                            alt=""
                                        />
                                    </button>
                                </div>
                                <img
                                    className="myImg"
                                    src={require("../../assets/img/introtoNN.jpg")}
                                    alt=""
                                />
                                <br />

                                <span>Intro to Neural nets Book</span>
                            </div>
                        </Link>
                        <Link style={{ pointerEvents: "none" }}>
                            <div className="prod2 prod">
                                <div id="buttons">
                                    <button id="edit">
                                        <img
                                            className="editIcon"
                                            src={require("../../assets/icons/pen-to-square.svg")}
                                            alt=""
                                        />
                                    </button>
                                    <button id="delete">
                                        <img
                                            className="deleteIcon"
                                            src={require("../../assets/icons/xmark.svg")}
                                            alt=""
                                        />
                                    </button>
                                </div>
                                <img
                                    className="myImg"
                                    src={require("../../assets/img/oldBag.jpeg")}
                                    alt=""
                                />
                                <br />

                                <span>Antique bag</span>
                            </div>
                        </Link>
                        <Link style={{ pointerEvents: "none" }}>
                            <div className="prod3 prod">
                                <div id="buttons">
                                    <button id="edit">
                                        <img
                                            className="editIcon"
                                            src={require("../../assets/icons/pen-to-square.svg")}
                                            alt=""
                                        />
                                    </button>
                                    <button id="delete">
                                        <img
                                            className="deleteIcon"
                                            src={require("../../assets/icons/xmark.svg")}
                                            alt=""
                                        />
                                    </button>
                                </div>
                                <img
                                    className="myImg"
                                    src={require("../../assets/img/oldSofa.jpeg")}
                                    alt=""
                                />
                                <br />

                                <span>Sofa in good condition</span>
                            </div>
                        </Link>
                        <Link style={{ pointerEvents: "none" }}>
                            <div className="prod4 prod">
                                <div id="buttons">
                                    <button id="edit">
                                        <img
                                            className="editIcon"
                                            src={require("../../assets/icons/pen-to-square.svg")}
                                            alt=""
                                        />
                                    </button>
                                    <button id="delete">
                                        <img
                                            className="deleteIcon"
                                            src={require("../../assets/icons/xmark.svg")}
                                            alt=""
                                        />
                                    </button>
                                </div>
                                <img
                                    className="myImg"
                                    src={require("../../assets/img/penBox.jpeg")}
                                    alt=""
                                />
                                <br />

                                <span>Box of Pens</span>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="myaccount-content manageClubs">
                    {/* <button id="shop">Show More</button> */}
                    <p>Manage Clubs</p>
                    <hr />
                    <div className="multiple">
                        <Link style={{ pointerEvents: "none" }}>
                            <div className="prod1 prod">
                                <div id="buttons">
                                    <button id="delete">
                                        <img
                                            className="deleteIcon"
                                            src={require("../../assets/icons/xmark.svg")}
                                            alt=""
                                        />
                                    </button>
                                </div>
                                <img
                                    className="myImg"
                                    src={require("../../assets/img/aeroMavs.jpeg")}
                                    alt=""
                                />
                                <br />

                                <span>Aero Mavericks</span>
                            </div>
                        </Link>
                        <Link style={{ pointerEvents: "none" }}>
                            <div className="prod1 prod">
                                <div id="buttons">
                                    <button id="delete">
                                        <img
                                            className="deleteIcon"
                                            src={require("../../assets/icons/xmark.svg")}
                                            alt=""
                                        />
                                    </button>
                                </div>
                                <img
                                    className="myImg"
                                    src={require("../../assets/img/autonobots.jpeg")}
                                    alt=""
                                />
                                <br />

                                <span>EE Autonobots Club</span>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="myaccount-content manageClubs">
                    {/* <button id="shop">Show More</button> */}
                    <p>My Recent Orders</p>
                    <hr />
                    <div className="multiple">
                        <Link style={{ pointerEvents: "none" }}>
                            <div className="prod1 prod">
                                <img
                                    className="myImg"
                                    src={require("../../assets/img/shake.jpeg")}
                                    alt=""
                                />
                                <br />
                                <span>Chocolate | Chick-Fil-A</span>
                            </div>
                        </Link>
                        <Link style={{ pointerEvents: "none" }}>
                            <div className="prod1 prod">
                                <img
                                    className="myImg"
                                    src={require("../../assets/img/sub.jpeg")}
                                    alt=""
                                />
                                <br />
                                <span>6 inch | Subway </span>
                            </div>
                        </Link>
                        <Link style={{ pointerEvents: "none" }}>
                            <div className="prod1 prod">
                                <img
                                    className="myImg"
                                    src={require("../../assets/img/halal.jpeg")}
                                    alt=""
                                />
                                <br />
                                <span>Veggie bowl | Halal Shack</span>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="myaccount-content">
                    {/* <button id="shop">Show More</button> */}
                    <p>Manage My Posts/Advertises</p>
                    <hr />
                    <div className="multiple">
                        <Link style={{ pointerEvents: "none" }}>
                            <div className="prod1 prod">
                                <div id="buttons">
                                    <button id="edit">
                                        <img
                                            className="editIcon"
                                            src={require("../../assets/icons/pen-to-square.svg")}
                                            alt=""
                                        />
                                    </button>
                                    <button id="delete">
                                        <img
                                            className="deleteIcon"
                                            src={require("../../assets/icons/xmark.svg")}
                                            alt=""
                                        />
                                    </button>
                                </div>
                                <img
                                    className="myImg"
                                    src={require("../../assets/img/2-570x370.webp")}
                                    alt=""
                                />
                                <br />
                                <span>New Table with transparent glass</span>
                            </div>
                        </Link>
                        <Link style={{ pointerEvents: "none" }}>
                            <div className="prod1 prod">
                                <div id="buttons">
                                    <button id="edit">
                                        <img
                                            className="editIcon"
                                            src={require("../../assets/icons/pen-to-square.svg")}
                                            alt=""
                                        />
                                    </button>
                                    <button id="delete">
                                        <img
                                            className="deleteIcon"
                                            src={require("../../assets/icons/xmark.svg")}
                                            alt=""
                                        />
                                    </button>
                                </div>
                                <img
                                    className="myImg"
                                    src={require("../../assets/img/8-570x370.webp")}
                                    alt=""
                                />
                                <br />
                                <span>
                                    Decorate your home with new furniture
                                </span>
                            </div>
                        </Link>
                        <Link style={{ pointerEvents: "none" }}>
                            <div className="prod1 prod">
                                <div id="buttons">
                                    <button id="edit">
                                        <img
                                            className="editIcon"
                                            src={require("../../assets/icons/pen-to-square.svg")}
                                            alt=""
                                        />
                                    </button>
                                    <button id="delete">
                                        <img
                                            className="deleteIcon"
                                            src={require("../../assets/icons/xmark.svg")}
                                            alt=""
                                        />
                                    </button>
                                </div>
                                <img
                                    className="myImg"
                                    src={require("../../assets/img/9-570x370.webp")}
                                    alt=""
                                />
                                <br />
                                <span>New house checklist</span>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Dash;
