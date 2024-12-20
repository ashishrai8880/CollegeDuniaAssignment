import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  let location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // console.log(location.pathname);
  }, [location]);

  const logOut = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          iNoteBook
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className={`nav-link ${location.path === "/" ? "active" : ""}`}
                aria-current="page"
                to="/"
              >
                Home
              </Link>
            </li>
          </ul>
          {localStorage.getItem("token") ? (
            <button className="btn btn-primary" onClick={logOut}>
              Log Out
            </button>
          ) : (
            <form className="d-flex" role="search">
              <Link type="button" className="btn btn-primary mx-1" to="/login">
                Login
              </Link>
              <Link type="button" className="btn btn-primary mx-1" to="/signup">
                SignUp
              </Link>
            </form>
          )}
        </div>
      </div>
    </nav>
  );
};
