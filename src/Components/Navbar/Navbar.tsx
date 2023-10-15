import React from "react";
import logo from "../../logo.svg"
import "./Navbar.css";
import { Link } from "react-router-dom";

interface Props {}

const Navbar = (props: Props) => {
  return (
    <nav className="relative container mx-auto p-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-20">
            <Link to = "/">
                <img src={logo} alt="" style={{width: 100, height: 50 }}/>
            </Link>
          <div className="hidden font-bold lg:flex">
            <Link to="/" className="text-black hover:text-darkBlue">
              Dashboard
            </Link>
          </div>
        </div>
        <div className="hidden lg:flex items-center space-x-6 text-back">
          <Link
            to="/login"
            className="px-8 py-3 font-bold rounded text-white bg-lightGreen hover:opacity-70"
          >
            Login
          </Link>
          <Link
             to="/signup"
            className="hover:text-darkBlue"
          >
            Signup
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;