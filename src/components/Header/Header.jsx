import { useContext } from "react";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { HeartedContext } from "../../contexts/HeartedContext";
import { FaSun } from "react-icons/fa";
import { BsMoonStarsFill } from "react-icons/bs";
import { ThemeContext } from "../../contexts/DarkModeContext";
import "./Header.css";

function Header() {
  const { hearted } = useContext(HeartedContext);
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  return (
    <header className={`header-container ${darkMode ? "dark" : ""}`}>
      {/* Logo */}
      <Link to="/" className="logo">
       My Store
      </Link>

      {/* Dark Mode Toggle */}
      <div className="theme-toggle" onClick={() => setDarkMode(!darkMode)}>
        <div className={`toggle-circle ${darkMode ? "toggle-dark" : ""}`}>
          {darkMode ? <FaSun className="toggle-icon" /> : <BsMoonStarsFill className="toggle-icon" />}
        </div>
      </div>

      {/* Cart Icon */}
      <Link to="/checkout" className="cart-container">
        <AiOutlineShoppingCart className="cart-icon" />
        {hearted.length > 0 && <span className="cart-badge">{hearted.length}</span>}
      </Link>
    </header>
  );
}

export default Header;
