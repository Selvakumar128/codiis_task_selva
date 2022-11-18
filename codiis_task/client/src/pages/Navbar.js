import { useRef, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  const [ref, setRef] = useState(false);
  let cal = localStorage.getItem("cal") || "null";

  const logout = () => {
    localStorage.setItem("cal", null);
    setRef(!ref);
  };
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header>
      <h3>Video Streaming App</h3>
      <nav ref={navRef}>
        <Link to="/">
          <a>Home</a>
        </Link>
        {cal === "null" ? (
          <>
            <Link to="/register">
              <a>Register</a>
            </Link>
            <Link to="/login">
              <a>Login</a>
            </Link>
          </>
        ) : (
          <>
            <Link to="/upload">
              <a>Upload</a>
            </Link>
            <Link to="/" onClick={logout}>
              <a>Logout</a>
            </Link>
          </>
        )}

        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

export default Navbar;
