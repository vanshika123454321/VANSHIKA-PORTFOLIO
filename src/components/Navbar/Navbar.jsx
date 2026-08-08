import "./Navbar.css";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    "home",
    "about",
    "education",
    "skills",
    "projects",
    "achievements",
    "contact",
  ];

  return (
    <nav className="navbar">
      <div className="logo">
        Vanshika<span>.</span>
      </div>

      <ul className={menuOpen ? "nav-links active" : "nav-links"}>
        {menuItems.map((item) => (
          <li key={item}>
            <Link
              to={item}
              smooth={true}
              duration={600}
              offset={-80}
              onClick={() => setMenuOpen(false)}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </Link>
          </li>
        ))}
      </ul>

      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
}

export default Navbar;
