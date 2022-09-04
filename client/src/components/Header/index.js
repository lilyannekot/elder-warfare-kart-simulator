import React from "react";
import { Link } from "react-router-dom";
import Auth from "../../utils/auth";
// import logoVideo from "client/public/assets/logoVideo.mp4";

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <header className="bg-danger text-light align-center">
      <div className="container flex-row justify-center align-center">
        {/* <div>
          <Link className="text-light" to="/">
            <video src={logoVideo} type="video/mp4" />
          </Link>
        </div> */}
        <div>
          {Auth.loggedIn() ? (
            <>
              <button className="btn btn-danger" onClick={logout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <Link className="btn btn-danger" to="/login">
                Login
              </Link>
              <Link className="btn btn-danger" to="/signup">
                Signup
              </Link>
              <Link className="btn btn-danger" to="/instructions">
                Instructions
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
