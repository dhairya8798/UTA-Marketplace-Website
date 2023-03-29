import React from "react";

import '../../assets/css/Main.css';
import '../../assets/css/Dash.css';
import '../../assets/css/Cart.css';

import { NavLink } from "react-router-dom";

function Adverts() {
    return (
        <main>
            <div className="myCart">
                <table>
                    <thead>
                        <tr className="bg-gray">
                            <th style={{ width: '10%' }}></th>
                            <th style={{ width: '40%' }}>Product</th>
                            <th style={{ width: '15%' }}>Price</th>
                            <th style={{ width: '15%' }}>Quantity</th>
                            <th style={{ width: '15%' }}>Total</th>
                            <th style={{ width: '5%' }}></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="">
                                <a href="#">
                                    <img src={require("../../assets/img/cart-01.webp")} alt="" />
                                </a>
                            </td>
                            <td className=""><a href="#">Plant pots</a></td>

                            <td className=""><span className="">$17.00</span></td>

                            <td className="">
                                <div className="">
                                    <div className="">
                                        <input className="qua" type="number" name="qtybutton" value="2" />
                                    </div>
                                </div>
                            </td>
                            <td className="">
                                <span className="">$ 34.00</span>
                            </td>
                            <td className="">
                                <a href="#"><img src={require("../../assets/icons/xmark.svg")} alt="" /></a>
                            </td>
                        </tr>
                        <tr>

                            <td className="">
                                <a href="#"><img src={require("../../assets/img/cart-02.webp")} alt="" /></a>
                            </td>
                            <td className=""><a href="#">Teapot with black tea</a></td>

                            <td className=""><span className="">$14.00</span></td>

                            <td className="">
                                <div className="">
                                    <div className="">
                                        <input className="qua" type="number" name="qtybutton" value="2" />
                                    </div>
                                </div>
                            </td>
                            <td className="">
                                <span className="">$ 28.00</span>
                            </td>
                            <td className="">
                                <a href="#"><img src={require("../../assets/icons/xmark.svg")} alt="" /></a>
                            </td>
                        </tr>
                        <tr>

                            <td className="">
                                <a href="#"><img src={require("../../assets/img/cart-03.webp")} alt="" /></a>
                            </td>
                            <td className=""><a href="#">Wooden Flowerpot</a></td>

                            <td className=""><span className="">$14.00</span></td>

                            <td className="">
                                <div className="">
                                    <div className="">
                                        <input className="qua" type="number" name="qtybutton" value="2" />
                                    </div>
                                </div>
                            </td>
                            <td className="">
                                <span className="">$ 28.00</span>
                            </td>
                            <td className="">
                                <a href="#"><img src={require("../../assets/icons/xmark.svg")} alt="" /></a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </main>
    );
}
export default Adverts;