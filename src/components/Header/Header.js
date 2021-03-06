import React from 'react';
import './Header.css'
import { NavLink } from 'react-router-dom';

const Header = () => {
    const activeStyle = {
        fontWeight: "bold",
        color: "rgb(0, 180, 180)",
        textDecoration: "underline",
        backgronoundColor: "whitesmoke"
    }
    return (
        <div className="bg-gradient-to-r from-gray-600 to-gray-900 mb-4 py-2 text-gray-200 flex justify-between">
            <div className="flex items-center ml-8">
                <div className=" text-5xl">
                    <i className="fas fa-globe-americas"></i>
                </div>
                <div className="ml-2">
                    <h2 className="text-2xl font-bold">Mysterious English</h2>
                    <small>Your English Universe</small>
                </div>
            </div>
            <div className="text-right p-4">

                <nav>
                    <label id="icon">
                        <i className="fas fa-bars"></i>
                    </label>
                    <ul>
                        <li>
                            <NavLink className="font-semibold hover:bg-gray-300 p-2 hover:text-gray-900 rounded-lg" to="/home" activeStyle={activeStyle}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink className="font-semibold hover:bg-gray-300 p-2 hover:text-gray-900 rounded-lg" to="/courses" activeStyle={activeStyle}>Courses</NavLink>
                        </li>
                        <li>
                            <NavLink className="font-semibold hover:bg-gray-300 p-2 hover:text-gray-900 rounded-lg" to="/mycourses" activeStyle={activeStyle}>My Courses</NavLink>
                        </li>
                        <li><NavLink className="font-semibold hover:bg-gray-300 p-2 hover:text-gray-900 rounded-lg" to="/aboutus" activeStyle={activeStyle}>About Us</NavLink></li>
                        <li>
                            <NavLink className="font-semibold hover:bg-gray-300 p-2 hover:text-gray-900 rounded-lg" to="/login">Login</NavLink>
                        </li>
                        <li>
                            <NavLink className="font-semibold hover:bg-gray-300 p-2 hover:text-gray-900 rounded-lg" to="/signup">Sign up</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Header;