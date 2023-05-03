import React from 'react';
import logo from "../assets/logo.png";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
const Navbar = () => {
    return (
        <div className="header_top">
            <nav className="navbar navbar-expand-lg">
                <div className="container">
                    <div className="col-xs-3">
                        <div className="logo-wrap">
                            <a target="blank" href="#home"><img className="img-fluid" alt="logo" src={logo} /></a>
                        </div>
                    </div>
                    <div className="col-xs-9">
                        <button
                            class="navbar-toggler collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbar-content"
                        >
                            <div class="hamburger-toggle">
                                <FaBars className="hamburger" />
                            </div>
                        </button>
                        <div className="collapse navbar-collapse justify-content-end" id="navbar-content">
                            <ul className="nav navbar-nav flex-row align-items-center">
                                <li className="nav-item nav-link">
                                    <Link to="/">Home</Link>
                                </li>
                                <li className="nav-item nav-link">
                                    <Link to="/">Market</Link>
                                </li>
                                <li className="nav-item nav-link">
                                    <Link to="/explore">Explore</Link>
                                </li>
                                <li className="nav-item nav-link">
                                    <Link to="/exhibition">Exhibition</Link>
                                </li>
                                <li className="nav-item nav-link">
                                    <Link to="/">Artist & Collectors</Link>
                                </li>
                                <li className="nav-item nav-link">
                                    <Link to="/">Comunity</Link>
                                </li>
                                <li className="nav-item nav-link">
                                    <Link className="common-btn" to="/">Connect Wallet</Link>
                                </li>
                            </ul>

                        </div>
                    </div>
                </div>
            </nav>

        </div>

    );
}
export default Navbar;