import React from "react";
import { Link } from 'react-router-dom';
import { ReactComponent as CartIcon } from "../assets/cart.svg";
import { ReactComponent as Logo } from "../assets/logo.svg";
import "./NavBar.css";

function NavBar() {
  return (
    <div className="header">
      <div className="logo-container">
        <Link to={'/'}>
          <Logo className="logo" />
        </Link>
      </div>
      <div className="options">
        <h3>SHOP</h3>
        <h3>CONTACT</h3>
        <h3>SIGN IN</h3>
        <CartIcon className="cart" />
      </div>
    </div>
  );
}

export default NavBar;
