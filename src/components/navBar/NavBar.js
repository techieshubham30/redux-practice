import "./navbar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
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
            />
          </form>
        </div>
        <div className="nav-right"></div>
      </nav>
    </header>
  );
};

export { NavBar };
