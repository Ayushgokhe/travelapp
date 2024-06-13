import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            Navbar
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  About
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Contact
                </a>
              </li>
              {/* <li class="nav-item" style={{marginTop:'7px'}}>
                <NavLink class="nav-link" to='/fillform' style={{textDecoration:'none', color:'black'}}>
                  Fill Form
                </NavLink>
              </li> */}
            </ul>
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 custom_ml">
              <li class="nav-item">
                <NavLink class="nav-link" to="/login" style={{textDecoration:'none', color:'black'}}>
                  Login
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink class="nav-link" to="/register" style={{textDecoration:'none', color:'black'}}>
                  Register
                </NavLink>
              </li>
            </ul>
            <form class="d-flex" role="search">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
