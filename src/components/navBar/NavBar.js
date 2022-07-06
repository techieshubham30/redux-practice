import "./navbar.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { searchProducts } from "../../actions/product";
import { BsSearch, BsCartFill } from "react-icons/bs";

const NavBar = ({ searchProducts,cart }) => {
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
            <BsSearch className="search-icon" />
            <input
              type="text"
              className="search-bar"
              placeholder="Search Products"
              onChange={(e) => searchProducts(e.target.value)}
            />
          </form>
        </div>

        <div className="nav-right">
          <Link to="/cart">
            <div className="cart-wrapper">
              <BsCartFill className="cart-icon" />
              <span>{cart.cartProducts.length}</span>
            </div>
          </Link>
        </div>
      </nav>
    </header>
  );
};
const mapStateToProps = (state) => {
  return {
    cart: state.cartReducer
  }
}
const mapDispatchToProp = (dispatch) => {
  return {
    searchProducts: (e) => dispatch(searchProducts(e)),
  };
};

export default connect(mapStateToProps, mapDispatchToProp)(NavBar);
