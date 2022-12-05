import React from "react";
import LoginForm from "../components/LoginForm";
import MetersList from "../components/MetersList";
import SearchMeter from "../components/SearchMeter";
import "./Common.css";

function Home({ isLogin, handleLogin }) {
  const [loggedUser, setLoggedUser] = React.useState({});

  React.useEffect(() => {
    setLoggedUser(JSON.parse(localStorage.getItem("user")));
  }, [isLogin]);

  return (
    <div className="screen-container">
      {!isLogin ? (
        <>
          <LoginForm handleLogin={handleLogin} />
        </>
      ) : (
        <>
          {loggedUser?.role === "admin" && <MetersList />}
          {loggedUser?.role === "reader" && <SearchMeter />}
        </>
      )}
    </div>
  );
}

export default Home;
