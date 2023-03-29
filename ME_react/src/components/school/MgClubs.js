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
                <h2>Manage Club requests</h2>
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
                                <input type="button" value="Accept" className="lbtn" style={{ backgroundColor: "green" , padding: "5px 20px 5px 20px" }} />
                                <input type="button" value="Decline" className="lbtn" style={{ backgroundColor: "red" , padding: "5px 20px 5px 20px" }} />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div>
                <h2>Manage Post requests</h2>
            </div>
            <div className="myCart">
                <table>
                    <thead>
                        <tr className="bg-gray">
                            <th style={{ width: '10%' }}></th>
                            <th style={{ width: '30%' }}>Post Title</th>
                            <th style={{ width: '35%' }}>Description</th>
                            <th style={{ width: '15%' }}>From</th>
                            <th style={{ width: '10%' }}>Options</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="">
                                <a href="#">
                                    <img className="myImg" src={require("../../assets/img/sofa-banner.jpeg")} alt="" />
                                </a>
                            </td>
                            <td className="">
                                <a href="#">New Updated System</a>
                            </td>
                            <td className="">
                                <span className="">With the new advancements in industry, sofas are being updated and smart.</span>
                            </td>
                            <td className="">
                                <span className="">Hue Jean</span>
                            </td>
                            <td className="">
                                <input type="button" value="Accept" className="lbtn" style={{ backgroundColor: "green" , padding: "5px 20px 5px 20px" }} />
                                <input type="button" value="Decline" className="lbtn" style={{ backgroundColor: "red" , padding: "5px 20px 5px 20px" }} />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </main>
    );
}

export default MgSClubs;