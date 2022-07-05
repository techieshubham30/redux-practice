import "./navbar.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import {BsSearch} from 'react-icons/bs'
import { connect } from "react-redux";
import { filterProducts } from "../../actions/product";

const NavBar = ({filterProducts}) => {
  return (
    <header className="header shadow-box">
      <nav className="navbar">
        <div className="nav-left">
          <Link to="/">
            <span className="logo">Axelsen</span>
          </Link>
        </div>

        <div className="nav-center">
          <form className="search-bar-container">
            <BsSearch className="search-icon"/>
            <input
              type="text"
              className="search-bar"
              placeholder="Search Products"
              onChange={(e)=>filterProducts(e.target.value)}
            />
          </form>
        </div>
        <div className="nav-right"></div>
      </nav>
    </header>
  );
};

const mapDispatchToProp = (dispatch) => {
  console.log(dispatch)
  return {
    filterProducts: (search) => dispatch(filterProducts(search)),
  }
}
export default connect(null,mapDispatchToProp)(NavBar);
