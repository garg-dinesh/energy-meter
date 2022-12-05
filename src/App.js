import React from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./containers/Home";
import CreateMeter from "./containers/CreateMeter";
import EnergyMeter from "./components/EnergyMeter";
import MeterReading from "./containers/MeterReading";

import "./App.css";

function App() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = React.useState(false);
  const [users, setUsers] = React.useState([]);

  React.useEffect(() => {
    setUsers([...users]);
    setIsLogin(JSON.parse(localStorage.getItem("isLogin")));
  }, []);

  const handleUsers = (newUser) => {
    setUsers([...users, newUser]);
  };

  const handleAuthentication = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="App">
      <Navbar isLogin={isLogin} handleLogout={handleAuthentication} />
      <Routes>
        {isLogin ? (
          <>
            <Route
              exact
              path="/"
              element={
                <Home
                  isLogin={isLogin}
                  handleUsers={handleUsers}
                  handleLogin={handleAuthentication}
                />
              }
            />
            {JSON.parse(localStorage.getItem("user"))?.role === "admin" && (
              <>
                <Route exact path="/add-meter" element={<CreateMeter />} />
                <Route exact path="/meter/:id" element={<EnergyMeter />} />
              </>
            )}
            <Route exact path="/add-reading" element={<MeterReading />} />
            <Route
              path="*"
              element={<p className="not-found">404 Page Not Found</p>}
            />
          </>
        ) : pathname === "/" ? (
          <Route
            exact
            path="/"
            element={
              <Home
                isLogin={isLogin}
                handleUsers={handleUsers}
                handleLogin={handleAuthentication}
              />
            }
          />
        ) : (
          navigate("/")
        )}
      </Routes>
    </div>
  );
}

export default App;
