import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <nav
        style={{ backgroundColor: "#4C4C6D" }}
        class="navbar navbar-expand-lg navbar-light   shadow"
      >
        <div class="container-fluid">
          <Link class="navbar-brand ms-5 text-white" to="#">
            Tour Advisor
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto me-5 ">
              <li class="nav-item me-3">
                <Link class="nav-link text-white" to="/">
                  Home
                </Link>
              </li>
              <li class="nav-item me-3">
                <Link class="nav-link text-white" to="/hotel">
                  Hotel
                </Link>
              </li>
              <li class="nav-item me-3">
                <Link class="nav-link text-white" to="#">
                  Packages
                </Link>
              </li>

              <li class="nav-item dropdown me-3">
                <Link
                  class="nav-link text-white dropdown-toggle"
                  to="#"
                  id="navbarDropdownContact"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Service
                </Link>
                <ul
                  class="dropdown-menu"
                  aria-labelledby="navbarDropdownContact"
                >
                  <li>
                    <Link class="dropdown-item " to="#">
                      Map
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" to="#">
                      Medical
                    </Link>
                  </li>
                </ul>
              </li>
              <li class="nav-item me-3">
                <Link class="nav-link text-white" to="#">
                  Contact us
                </Link>
              </li>
              <li class="nav-item dropdown">
                <Link
                  class="nav-link text-white dropdown-toggle"
                  to="#"
                  id="navbarDropdownAccount"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Account
                </Link>
                <ul
                  class="dropdown-menu"
                  aria-labelledby="navbarDropdownAccount"
                >
                  <li>
                    <Link class="dropdown-item" to="#">
                      Sign In
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" to="#">
                      Sign Up
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
