import React from "react";
import { Link } from "react-router-dom";


import '../assets/css/Main.css';
import '../assets/css/Contact.css';

import { Helmet } from "react-helmet";
import Config from "../Config.json";
import axios from "axios";


const TITLE = "Contact Us | " + Config.SITE_TITLE;
const DESC = "For any queries, feel free to contact us";

const CANONICAL = Config.SITE_DOMAIN + "/contact";


class Contact extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            name: "",
            reason: "",
            subject: "",
            redirect: false
        };
    }
    handleAdd = async e => {
        this.setState({
            [e.target.name]: e.target.value,
        })
        // console.log(this.state.name);
    }

    handleSubmitData = () => {
        let payload = {
            email: this.state.email,
            name: this.state.name,
            subject: this.state.subject,
            reason: this.state.reason,
        }
        console.log(payload);
        const url = "https://6458-64-189-206-43.ngrok.io/api/contact-us.php";
        axios.post(url, payload, {
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
        }).then(res => {
            alert('sent successfully');
            console.log('sent successfully');
        }).catch(err => console.log("inside catch", err));
    }

    render() {
        return (
            <main>
                <Helmet>
                    <title>{TITLE}</title>
                    <link rel="canonical" href={CANONICAL} />
                    <meta name="description" content={DESC} />
                </Helmet>
                <div className="maintitle">
                    <span id="about">Contact Us</span>
                </div>
                <div className="mainContent newC">
                    <div className="details">
                        <div className="ll">
                            <div className="">
                                <img id="myLogo" src={require("../assets/icons/clock.svg")} alt="" />
                            </div>
                            <div className="">
                                <p id="touch">Open houses</p>
                                <p>Mon-Fri : 8:30-17:00 <br />Sat-Sun : 9:00-17:00</p>
                            </div>
                        </div>
                        <div className="ll">
                            <div className="">
                                <img id="myLogo" src={require("../assets/icons/phone.svg")} alt="" />
                            </div>
                            <div className="">
                                <p id="touch">Phone number</p>
                                <p>(817) 123-4567 <br /> (682) 123-4567</p>
                            </div>
                        </div>
                        <div className="ll">
                            <div className="">
                                <img id="myLogo" src={require("../assets/icons/envelope-open.svg")} alt="" />
                            </div>
                            <div className="">
                                <p id="touch">Our email</p>
                                <p>office@mercadoescolar.com <br />info@mercadoescolar.com</p>
                            </div>
                        </div>
                        <div className="ll">
                            <div className="">
                                <img id="myLogo" src={require("../assets/icons/location-pin.svg")} alt="" />
                            </div>
                            <div className="">
                                <p id="touch">Our location</p>
                                <p>1500 W. First St.,<br />Arlington, TX , USA</p>
                            </div>
                        </div>
                    </div>
                    <div className="detailsNew">
                        <div className="myleft">
                            <p id="touch">Get in touch</p>
                            <form action="" className="">
                                <div className="innerContent">
                                    <div className="split">
                                        <input 
                                            id="inputss" 
                                            type="text" 
                                            name="name"
                                            placeholder="Your Name" 
                                            style={{ paddingRight: '20px' }} 
                                            onChange=
                                                {
                                                    this.handleAdd
                                                } 
                                        />
                                        <input 
                                            name="email"
                                            id="inputss" 
                                            type="email" 
                                            placeholder="Email" 
                                            onChange={this.handleAdd}
                                        />
                                    </div>
                                    <input 
                                        id="inputss" 
                                        type="text" 
                                        name="subject"
                                        placeholder="Subject" 
                                        onChange={this.handleAdd}
                                    />
                                </div>
                                <textarea
                                    name="reason"
                                    id="inputss" 
                                    placeholder="Write us your query" 
                                    style={{ padding: '10px' }} 
                                    onChange={this.handleAdd}
                                ></textarea>
                                <input type="submit" className="placeOrderButton" onClick={this.handleSubmitData}/>
                            </form>
                        </div>
                        <div className="myright">
                            <div className="dataFields">
                                <p id="touch">Our Address</p>
                                <p>
                                    The head office of the Mercadoescolar is located in the heart of the Arlington.
                                    <br />
                                    The address is:
                                </p>
                                <p className="">
                                    500 W. First St., Arlington, TX , USA <br />
                                    (817) 123-4567 <br />
                                    office@mercadoescolar.com
                                </p>
                                <div className="">
                                    <span className="">Follow us on social media:</span>
                                    <ul className="social">
                                        <li>
                                            <Link style={{ pointerEvents: 'none' }}>
                                                <img id="myLogo" src={require("../assets/icons/linkedin.svg")} alt="linkedin" />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link style={{ pointerEvents: 'none' }}>
                                                <img id="myLogo" src={require("../assets/icons/square-facebook.svg")} alt="Facebook" />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link style={{ pointerEvents: 'none' }}>
                                                <img id="myLogo" src={require("../assets/icons/square-instagram.svg")} alt="Instagram" />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link style={{ pointerEvents: 'none' }}>
                                                <img id="myLogo" src={require("../assets/icons/square-youtube.svg")} alt="Youtube" />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link style={{ pointerEvents: 'none' }}>
                                                <img id="myLogo" src={require("../assets/icons/square-twitter.svg")} alt="Twitter" />
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        );
    }
}



export default Contact;