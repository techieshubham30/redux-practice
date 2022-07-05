import "./navbar.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { searchProducts } from "../../actions/product";

const NavBar = ({ searchProducts }) => {
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
            <label htmlFor="search-bar" className="fas fa-search" />
            <input
              type="text"
              className="search-bar"
              placeholder="Search Products"
              onChange={(e) => searchProducts(e.target.value)}
            />
          </form>
        </div>
      </nav>
    </header>
  );
};

const mapDispatchToProp = (dispatch) => {
  return {
    searchProducts: (e) => dispatch(searchProducts(e)),
  };
};

export default connect(null, mapDispatchToProp)(NavBar);
