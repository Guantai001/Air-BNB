import React, { useState } from 'react'

function NavBar({handleOnSubmit}) {

    const activeTab = (e) => {
        
        const tab = e.target;
        const tabList = document.querySelectorAll('.nav__link');
        tabList.forEach((tab) => {
            tab.classList.remove('active');
        });
        tab.classList.add('active');
    }
  


  return ( 
    <div className="navBar

     ">
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
          style={{ fontSize: "2rem", fontWeight: "semi-bold" }}
          href="/"
        >
        GuanBnb
        </a>
        <div
          className="collapse navbar-collapse "
          style={{ fontWeight: "bold" }}
          id="navbarTogglerDemo03  "
        >
      <div class="nav__menu" id="nav-menu">
          <ul className="nav__list navbar-nav me-auto mb-2 mb-lg-0 ">

        <li className="nav-item  mx-5 px-5"><a className="nav-link " class = "nav__link active" onClick={activeTab}href="/">Home</a></li>
        <li className="nav-item mx-3 px-3"><a className="nav-link" class="nav__link" onClick={activeTab}href="/airbnb">AirBnbs</a></li>
        <li className="nav-item nav__item mx-5 px-3 "><a className="nav-link" class="nav__link" onClick={activeTab}href="/hotel">Hotels</a></li>
        <li className="nav-item mx-3 px-3 "><a className="nav-link" class="nav__link"onClick={activeTab}href="/addbnb">AddBnB</a></li>
       <li className="nav-item mx-3 px-3 "> <a className="nav-link "class="nav__link" onClick={activeTab}href="/about">About</a></li>
       <li className="nav-item mx-3 px-4"><a className="nav-link  nav__link" onClick={activeTab}href="/account">Account</a></li>
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