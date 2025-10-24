import { CgAdidas } from "react-icons/cg";
import { FaUserCircle, FaShoppingCart, FaSearch } from "react-icons/fa";
import "./index.css";

export const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <CgAdidas size={30} />
        <span>AdidasShop</span>
      </div>
      <ul className="nav-links">
        <li>Home</li>
        <li>New Arrival</li>
        <li>Products</li>
        <li>Reviews</li>
      </ul>
      <div className="nav-icons">
        <FaSearch />
        <FaShoppingCart />
        <FaUserCircle />
      </div>
      <div className="hamburger">
        <div></div><div></div><div></div>
      </div>
    </nav>
  );
};
