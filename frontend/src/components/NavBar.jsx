import React from "react";

function NavBar({handleOnSubmit}) {
  
  return ( 
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary"
      style={{ backgroundColor: "#C7DCD9" }}
    >
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo03"
          aria-controls="navbarTogglerDemo03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <a
        
          className="navbar-brand"
          style={{ fontSize: "3rem", fontWeight: "bold" }}
          href="/"
        >
          MovieFlix
        </a>
        <div
          className="collapse navbar-collapse "
          style={{ fontWeight: "bold" }}
          id="navbarTogglerDemo03"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">

            <li className="nav-item  mx-5 px-5">
              <a className="nav-link" href="/">
                Home
              </a>
            </li>
            <li className="nav-item mx-5 px-5 ">
              <a className="nav-link" href="/airbnb">
                AirBnb
              </a>
            </li>
            <li className="nav-item mx-5 px-5 ">
              <a className="nav-link" href="/hotel">
                Hotels
              </a>
            </li>

            <li className="nav-item mx-5 px-5 ">
              <a className="nav-link" href="/account">
                Account
              </a>
            </li>
          </ul>
          
          {/* <form className="d-flex" role="search" onSubmit={handleOnSubmit}>
            <input
              id="inputText"
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-dark" type="submit">
              🔍
            </button>
          </form> */}
        </div>
      </div>
    </nav>
  );
}

export default NavBar;