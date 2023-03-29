import React from "react";

import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Signin";
import Register from "./pages/Register";
import Forgotpassword from "./pages/Forgot";
import Checkout from "./pages/Checkout";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Blog from "./pages/Blog";
import Admin from "./pages/Admin";
import Dashboard from "./pages/Dashboard";
import BusinessDashboard from "./pages/Business";
import SchoolAdmin from "./pages/School";
import Chat from "./components/chat";

import Header from "./components/Header";
import Footer from "./components/Footer";
// import './App.css';

import {
    BrowserRouter,
    Routes,
    Route,
    Outlet,
} from "react-router-dom";



function BasicLayout() {
    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
            <Chat />
        </div>
    )
}

function AdminLayout() {
    return <Outlet />
}


function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<BasicLayout />}>
                        <Route index element={<Home />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/cart" element={<Cart />} />
                        <Route path="/checkout" element={<Checkout />} />
                        <Route path="/forgotpassword" element={<Forgotpassword />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/services" element={<Services />} />
                        <Route path="/blogs" element={<Blog />} />
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/businessdashboard" element={<BusinessDashboard />} />
                        <Route path="/schooladmin" element={<SchoolAdmin />} />
                    </Route>
                    <Route path="/admin" element={<AdminLayout />}>
                        <Route index element={<Admin />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
