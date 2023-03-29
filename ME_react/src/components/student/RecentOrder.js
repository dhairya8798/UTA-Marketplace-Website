import React from "react";

import '../../assets/css/Main.css';
import '../../assets/css/Dash.css';
import '../../assets/css/Cart.css';

import { Link } from "react-router-dom";

class RecentOrder extends React.Component {
    render() {
        return (
            <main>
                <div className="myaccount-content "><h2>Recent Orders</h2></div>
                <div className="myaccount-content myCart">
                    <table>
                        <thead>
                            <tr className="bg-gray">
                                <th style={{ width: '10%' }}></th>
                                <th style={{ width: '15%' }}>From</th>
                                <th style={{ width: '15%' }}>Product</th>
                                <th style={{ width: '15%' }}>Price</th>
                                <th style={{ width: '10%' }}>Quantity</th>
                                <th style={{ width: '15%' }}>Total</th>
                                <th style={{ width: '20%' }}>Options</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="">
                                    <Link style={{pointerEvents: 'none'}}> 
                                        <img style={{ width: "175px"}} src={require("../../assets/img/sub.jpeg")} alt="" />
                                    </Link>
                                </td>
                                <td className=""><Link style={{pointerEvents: 'none'}}>Subway</Link></td>

                                <td className=""><span className="">6 inch Sub</span></td>

                                <td className=""><span className="">$ 7.89</span></td>
                                <td className=""><span className="">1</span></td>
                                <td className=""><span className="">$ 7.89</span></td>
                                <td className="">
                                    <input type="button" value="Reorder" className="lbtn" style={{ padding: "5px 20px 5px 20px" }} />
                                    <input type="button" value="Start Return" className="lbtn" style={{ padding: "5px 20px 5px 20px" }} />
                                </td>
                            </tr>
                            <tr>
                                <td className="">
                                    <Link style={{pointerEvents: 'none'}}> 
                                        <img style={{ width: "175px"}} src={require("../../assets/img/shake.jpeg")} alt="" />
                                    </Link>
                                </td>
                                <td className=""><Link style={{pointerEvents: 'none'}}>Chick-Fil-A</Link></td>

                                <td className=""><span className="">Chocolate shake</span></td>

                                <td className=""><span className="">$ 4.69</span></td>
                                <td className=""><span className="">1</span></td>
                                <td className=""><span className="">$ 4.69</span></td>
                                <td className="">
                                    <input type="button" value="Reorder" className="lbtn" style={{ padding: "5px 20px 5px 20px" }} />
                                    <input type="button" value="Start Return" className="lbtn" style={{ padding: "5px 20px 5px 20px" }} />
                                </td>
                            </tr>
                            <tr>
                                <td className="">
                                    <Link style={{pointerEvents: 'none'}}> 
                                        <img style={{ width: "175px"}} src={require("../../assets/img/halal.jpeg")} alt="" />
                                    </Link>
                                </td>
                                <td className=""><Link style={{pointerEvents: 'none'}}>Halal Shack</Link></td>

                                <td className=""><span className="">Veggie Bowl</span></td>

                                <td className=""><span className="">$ 8.99</span></td>
                                <td className=""><span className="">1</span></td>
                                <td className=""><span className="">$ 8.99</span></td>
                                <td className="">
                                    <input type="button" value="Reorder" className="lbtn" style={{ padding: "5px 20px 5px 20px" }} />
                                    <input type="button" value="Start Return" className="lbtn" style={{ padding: "5px 20px 5px 20px" }} />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </main>
        );
    }
}

export default RecentOrder;