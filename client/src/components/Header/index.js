import React from "react";
import { Link } from "react-router-dom";
import Auth from "../../utils/auth";

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <header className="text-light">
      <div className="container flex-row justify-center">
        <div>
          {Auth.loggedIn() ? (
            <>
              <Link className="btn btn-danger" onClick={logout}>
                Logout
              </Link>
            </>
          ) : (
            <>
              <h1>Elder Warfare Kart Simulator</h1>
              <Link className="btn text-light" to="/login">
                Login
              </Link>
              <Link className="btn text-light" to="/signup">
                Signup
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
