import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar({ isLogin, handleLogout }) {
  const navigate = useNavigate();
  const [loggedUser, setLoggedUser] = React.useState({});

  React.useEffect(() => {
    setLoggedUser(JSON.parse(localStorage.getItem("user")));
  }, [isLogin]);

  const onLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("isLogin");
    handleLogout();
    navigate("/");
  };

  return (
    <div className="navbar">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        {isLogin && loggedUser?.role?.toLowerCase() === "admin" && (
          <>
            <li>
              <Link to="/add-meter">Add Meter</Link>
            </li>
          </>
        )}

        {isLogin && (
          <>
            <li>
              <Link to="/add-reading">Add Meter Reading</Link>
            </li>
            <li className="logout">
              <button onClick={onLogout} className="logout-btn">
                Logout
              </button>
            </li>
          </>
        )}
      </ul>
    </div>
  );
}

export default Navbar;
