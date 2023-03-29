import React, {useState} from "react";

import '../../assets/css/Main.css';
import '../../assets/css/Dash.css';
import '../../assets/css/Cart.css';

import { NavLink } from "react-router-dom";

function MgSClubs() {
    const [showNewClub, setShowNewClub] = useState(false)

    return (
        <main>
            <div>
                <h2>Browse Clubs</h2>
            </div>
            <div className="myCart">
                <table>
                    <thead>
                        <tr className="bg-gray">
                            <th style={{ width: '10%' }}></th>
                            <th style={{ width: '30%' }}>Club Name</th>
                            <th style={{ width: '35%' }}>Description</th>
                            <th style={{ width: '15%' }}>Members</th>
                            <th style={{ width: '10%' }}>Options</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="">
                                <a href="#">
                                    <img className="myImg" src={require("../../assets/img/akp.jpeg")} alt="" />
                                </a>
                            </td>
                            <td className="">
                                <a href="#">Alpha Phi Sigma</a>
                            </td>
                            <td className="">
                                <span className="">Alpha Phi Sigma is the only Criminal Justice Honor Society for Criminal Justice students.</span>
                            </td>
                            <td className="">
                                <span className="">42</span>
                            </td>
                            <td className="">
                                <input type="button" value="Join" className="lbtn" style={{ backgroundColor: "green" , padding: "5px 20px 5px 20px" }} />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div>
                <h2>Clubs I am in</h2>
            </div>
            <div className="myCart">
                <table>
                    <thead>
                        <tr className="bg-gray">
                            <th style={{ width: '10%' }}></th>
                            <th style={{ width: '30%' }}>Club Name</th>
                            <th style={{ width: '35%' }}>Description</th>
                            <th style={{ width: '15%' }}>Members</th>
                            <th style={{ width: '10%' }}>Options</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="">
                                <a href="#">
                                    <img className="myImg" src={require("../../assets/img/aeroMavs.jpeg")} alt="" />
                                </a>
                            </td>
                            <td className="">
                                <a href="#">AeroMavs</a>
                            </td>
                            <td className="">
                                <span className="">Aeromavs is a club for students from Aeronotics Engineers</span>
                            </td>
                            <td className="">
                                <span className="">30</span>
                            </td>
                            <td className="">
                                <input type="button" value="Leave" className="lbtn" style={{ padding: "5px 20px 5px 20px" }} />
                            </td>
                        </tr>
                        <tr>
                            <td className="">
                                <a href="#">
                                    <img className="myImg" src={require("../../assets/img/autonobots.jpeg")} alt="" />
                                </a>
                            </td>
                            <td className="">
                                <a href="#">Autonobots</a>
                            </td>
                            <td className="">
                                <span className="">EE Autonobots is a club for interdisciplinary studies and robotics</span>
                            </td>
                            <td className="">
                                <span className="">62</span>
                            </td>
                            <td className="">
                                <input type="button" value="Leave" className="lbtn" style={{ padding: "5px 20px 5px 20px" }} />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <hr />
            <div style={{ width: "50%", margin:"auto" }}>
                <input type="button" value="Make a new club" className="lbtn" style={{ padding: "5px 20px 5px 20px", backgroundColor: "green" }} onClick={(e) => {setShowNewClub({ isActive: true })}}/>
                {showNewClub.isActive &&
                    <form action="" className="">
                        <div className="innerContent">
                            <div className="split">
                                <input id="inputss" type="text" placeholder="Club Name" style={{ 'padding-right': '20px' }} />
                                <input id="inputss" type="email" placeholder="Department" />
                            </div>
                        </div>
                        <textarea id="inputss" placeholder="Type Club description" style={{ padding: '10px' }}></textarea>
                        <input type="submit" className="placeOrderButton" />
                    </form>
                }
            </div>
            <hr />
            <div>
                <h2>MyClubs</h2>
            </div>
            <div className="myCart">
                <table>
                    <thead>
                        <tr className="bg-gray">
                            <th style={{ width: '10%' }}></th>
                            <th style={{ width: '30%' }}>Club Name</th>
                            <th style={{ width: '35%' }}>Description</th>
                            <th style={{ width: '15%' }}>Members</th>
                            <th style={{ width: '10%' }}>Options</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="">
                                <a href="#">
                                    <img className="myImg" src={require("../../assets/img/aeroMavs.jpeg")} alt="" />
                                </a>
                            </td>
                            <td className="">
                                <a href="#">AeroMavs</a>
                            </td>
                            <td className="">
                                <span className="">Aeromavs is a club for students from Aeronotics Engineers</span>
                            </td>
                            <td className="">
                                <span className="">30</span>
                            </td>
                            <td className="">
                                <input type="button" value="Edit" className="lbtn" style={{ padding: "5px 20px 5px 20px" }} />
                                <input type="button" value="Delete" className="lbtn" style={{ padding: "5px 20px 5px 20px" }} />
                                <input type="button" value="Leave" className="lbtn" style={{ padding: "5px 20px 5px 20px" }} />
                            </td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </main>
    );
}

export default MgSClubs;