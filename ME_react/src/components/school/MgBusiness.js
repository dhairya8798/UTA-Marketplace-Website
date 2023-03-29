import React from "react";
import axios from "axios";

import '../../assets/css/Main.css';
import '../../assets/css/Dash.css';
import '../../assets/css/Cart.css';

import edit from '../../assets/icons/edit.png';
import deleteimage from '../../assets/icons/delete.png';
// import create from '../../assets/icons/create.png';


import { NavLink } from "react-router-dom";

class ManageBusiness extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            delUser : [],
            students: [],
        };
    }

    componentDidMount() {
        this.getStudentData();
        this.deleteUser();
    }
    
    deleteUser(){
        let userName= this.state.deleteId;
        console.log(userName);
        let payload = {
            username:userName
        }
        const url = "https://a3cc-64-189-206-43.ngrok.io/api/delete-user.php";
        axios.post(url, payload, {headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        }).then((res) => {
            console.log('deleted');
            this.getStudentData();
        }).catch(function (err) {
            if (err) {
                this.setState({
                    delUser: [],
                });
            } else {
                this.setState({ loader: false });
            }
            this.setState({
                delUser: [],
            });
        });
        //console.log(user);
    }

    getStudentData() {
        let payload = {
        }
        const url = "https://6458-64-189-206-43.ngrok.io/api/get-business.php";
        axios.post(url, payload, {
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
        }).then((res) => {
            console.log(res);
            if (res) {
                const students = res.data;
                console.log(students);
                this.setState({ students });
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

    renderStudentData = () => {
        return this.state.students.map(user => {
            return (
                <tr key={user.email}>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>{user.first_name}</td>
                    <td>{user.last_name}</td>
                    <td>{user.mobile}</td>
                    <td className="tdclass" data-label="Action">
                        <img 
                            style={{ marginRight: "10px" }} 
                            src={edit} 
                            onClick={() => this.setState(
                                        { 
                                            editModal: true,
                                            username: user.username,
                                            email: user.email,
                                            fname: user.first_name,
                                            lname: user.last_name,
                                            phone: user.mobile 
                                        }
                                    )
                                    } 
                        />
                        <img 
                            src={deleteimage} 
                            onClick={() => this.setState(
                                { 
                                    deleteId: user.username 
                                }, 
                            () => this.deleteUser())} 
                        />
                    </td>
                </tr>
            )
        })
    }

    render() {
        return (
            <main>
                <div><h2>Registered Students</h2></div>
                <div className="myCart">
                    <table>
                        <thead>
                            <tr className="bg-gray">
                                <th scope="col">Username</th>
                                <th scope="col">Email</th>
                                <th scope="col">First Name</th>
                                <th scope="col">Last Name</th>
                                <th scope="col">Phone</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderStudentData()}
                        </tbody>
                    </table>
                </div>
            </main>
        );
    }
}

export default ManageBusiness;