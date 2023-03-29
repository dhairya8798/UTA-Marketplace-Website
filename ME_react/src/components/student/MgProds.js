import React from "react";
import axios from "axios";
import { NavLink, Link } from "react-router-dom";

import '../../assets/css/Main.css';
import '../../assets/css/Dash.css';
import '../../assets/css/Cart.css';

class MgProds extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            delProd: [],
            userID: JSON.parse(localStorage.getItem("user"))["user_id"],
        };
    }

    handleAdd = async e => {
        this.setState({
            [e.target.name]: e.target.value,
        })
        // console.log(this.state.name);
    }

    componentDidMount() {
        this.getProductData();
        // this.deleteProd();
    }

    deleteProd(){
        let prodID= this.state.deleteId;
        let payload = {
            prodID:prodID
        }
        // console.log(payload);
        const url = "https://6458-64-189-206-43.ngrok.io/api/get-products.php";
        axios.post(url, payload, {headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        }).then((res) => {
            console.log('deleted');
            this.getProductData();
        }).catch(function (err) {
            if (err) {
                this.setState({
                    delProd: [],
                });
            } else {
                this.setState({ loader: false });
            }
            this.setState({
                delProd: [],
            });
        });
        //console.log(user);
    }

    getProductData() {
        let payload = {
            "userID": this.state.userID,
        }
        // console.log(this.state.userID + "dfghew");
        const url = "https://6458-64-189-206-43.ngrok.io/api/get-products.php";
        axios.post(url, payload, {
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
        }).then((res) => {
            // console.log(res);
            if (res) {
                const products = res.data;
                // console.log(products);
                this.setState({ products });
            } else {
                this.setState({
                    students: [],
                });
            }
        }).catch(function (err) {
            if (err) {
                this.setState({
                    students: [],
                });
            } else {
                this.setState({ loader: false });
            }
            this.setState({
                students: [],
            });
        });
    }

    renderProductData = () => {
        return this.state.products.map(product => {
            return (
                <tr key={product.product_id}>
                    <td>{product.product_id}</td>
                    <td><img src={product.image_path}/></td>
                    <td>{product.product_name}</td>
                    <td>{product.price}</td>
                    <td>{product.quantity}</td>
                    <td className="tdclass" data-label="Action">
                        <input 
                            type="button" 
                            value="Update Stock" 
                            className="lbtn" 
                            style={{ padding: "5px 20px 5px 20px" }} 
                        />
                        <input 
                            type="button" 
                            value="Edit" 
                            className="lbtn" 
                            style={{ padding: "5px 20px 5px 20px" }} 
                        />
                        <input 
                            type="button" 
                            value="Delete" 
                            className="lbtn" 
                            style={{ padding: "5px 20px 5px 20px" }} 
                            onClick={() => this.setState(
                                { 
                                    deleteId: product.product_id
                                }, 
                            () => this.deleteProd())} 
                        />
                    </td>
                </tr>
            )
        })
    }

    render() {
        return (
            <main>
                <div><h2>Manage Products</h2></div>
                <div className="myaccount-content myCart">
                    <table>
                        <thead>
                            <tr className="bg-gray">
                                <th style={{ width: '10%' }}>Product ID</th>
                                <th style={{ width: '20%' }}>Image</th>
                                <th style={{ width: '15%' }}>Product</th>
                                <th style={{ width: '15%' }}>Price</th>
                                <th style={{ width: '15%' }}>Quantity</th>
                                <th style={{ width: '15%' }}>Options</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderProductData()}
                        </tbody>
                    </table>
                </div>
            </main>
        );
    }
}
export default MgProds;