import React from "react";
import Config from "../Config.json";
import { Helmet } from "react-helmet";
import { NavLink } from "react-router-dom";

import '../assets/css/Main.css';
import '../assets/css/Blog.css';


const TITLE = "Blog Page | " + Config.SITE_TITLE;
const DESC = "Read new blogs here";

const CANONICAL = Config.SITE_DOMAIN + "/blogs";



class Blog extends React.Component {
    render() {
        return (
            <main>
                <Helmet>
                    <title>{TITLE}</title>
                    <link rel="canonical" href={CANONICAL} />
                    <meta name="description" content={DESC} />
                </Helmet>
                <div className="maintitle">
                    <span id="about">Blogs</span>
                </div>
                <div className="mainContent">
                    <div className="recent">
                        <p id="head">Recent Blogs:</p>
                        <div className="blog">
                            <div className="iblog" id="blog1">
                                <img id="myblogimgs" src={require("../assets/img/uta_1.jpg")} alt="" />
                                <p className="title">Advantages of the new system</p>
                                <NavLink to="" id="linktoblog">Wordpress blog on UTA Cloud</NavLink>
                            </div>
                            <div className="iblog" id="blog2">
                                <img id="myblogimgs" src={require("../assets/img/uta_2.jpg")} alt="" />
                                <p className="title">Disadvantages of the current system</p>
                                <NavLink to="" id="linktoblog">Wordpress blog on UTA Cloud</NavLink>
                            </div>
                            <div className="iblog" id="blog3">
                                <img id="myblogimgs" src={require("../assets/img/uta_3.jpg")} alt="" />
                                <p className="title">Appropriate improvements required</p>
                                <NavLink to="" id="linktoblog">Wordpress blog on UTA Cloud</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        );
    }
}

export default Blog;
