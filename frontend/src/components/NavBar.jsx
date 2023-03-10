import React from 'react'

function NavBar() {

  const activeTab = (e) => {

    const tab = e.target;
    const tabList = document.querySelectorAll('.nav__link');
    tabList.forEach((tab) => {
      tab.classList.remove('active');
    });
    tab.classList.add('active');
  }



  return (
    <div className="navBar">
      <header className="l-header ">
        <nav
          className="navbar 
      background__nav
        navbar-expand-lg
        bd-grid 
     
      "
        >
          <div className="container-fluid">

            <a

              className="navbar-brand"
              style={{ fontSize: "2rem", fontWeight: "semi-bold", color: "white" }}
              href="/"
            >
              GuanBnb
            </a>
            <div
              className="collapse navbar-collapse "
              style={{ fontWeight: "bold", color: "white" }}
              id="navbarTogglerDemo03  "
            >
              <div
                style={{
                  color: "white",
                }}
                class="nav__menu" id="nav-menu">
                <ul
                  style={{
                    color: "white",
                  }}
                  className="nav__list navbar-nav me-auto mb-2 mb-lg-0 ">

                  <li
                    style={{
                      color: "white",
                    }}
                    className="nav-item  mx-5 px-5"><a className="nav-link text-light" class="nav__link active text-light" onClick={activeTab} href="/">Home</a></li>
                  <li
                    style={{
                      color: "white",
                    }}
                    className="nav-item mx-2 px-3"><a className="nav-link text-light" class="nav__link text-light" onClick={activeTab} href="/booking">Bookings</a></li>
                  <li
                    style={{
                      color: "white",
                    }}
                    className="nav-item mx-2 px-3"><a className="nav-link text-light" class="nav__link text-light" onClick={activeTab} href="/airbnb">AirBnbs</a></li>
                  <li
                    style={{
                      color: "white",
                    }}
                    className="nav-item mx-2 px-3 "><a className="nav-link  text-light" class="nav__link text-light" onClick={activeTab} href="/addbnb">AddBnB</a></li>
                  <li
                    style={{
                      color: "white",
                    }}
                    className="nav-item mx-2 px-3 v"> <a className="nav-link text-light" class="nav__link text-light" onClick={activeTab} href="/about">About</a></li>
                  <li
                    className="nav-item mx-2 px-3 "> <a className="nav-link text-light" class="nav__link text-light" onClick={activeTab} href="/account">Account</a></li>
                </ul>
              </div>


            </div>


          </div>
        </nav>

      </header>
    </div>
  );
}

export default NavBar;