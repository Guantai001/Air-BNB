import React, { useState } from 'react'
import { Link } from "react-scroll";
import { navLinksdata } from "./index"

function NavBar({handleOnSubmit}) {
  
    const [showMenu, setShowMenu]=useState(false)
    //slide menu function
  
  
    const activeTab = (e) => {
  
      const navLinks = document.querySelectorAll('.nav__link');
      navLinks.forEach((link) => {
          link.classList.remove('active');
      });
      e.target.classList.add('active');
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
          id="navbarTogglerDemo03"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">

            <li className="nav-item  mx-5 px-5">
              <a className="nav-link nav__link active" 
              onClick={activeTab}
              href="/">
                Home
              </a>
            </li>
            <li className="nav-item mx-3 px-3">
              <a className="nav-link nav__link" 
              onClick={activeTab}
              href="/airbnb">
                AirBnbs
              </a>
            </li>
            <li className="nav-item nav__item mx-5 px-3 ">
              <a className="nav-link  nav__link" 
              onClick={activeTab}
              href="/hotel">
                Hotels
              </a>
            </li>
            <li className="nav-item mx-3 px-3 ">
              <a className="nav-link  nav__link" 
              onClick={activeTab}
              href="/addbnb">
                AddBnB
              </a>
            </li>
            <li className="nav-item mx-3 px-3 ">
              <a className="nav-link  nav__link" 
              onClick={activeTab}
              href="/about">
                About
              </a>
            </li>
            <li className="nav-item mx-3 px-4">
              <a className="nav-link  nav__link" 
              onClick={activeTab}
              href="/account">
                Account
              </a>
            </li>
          </ul>
        </div>

        <div class="nav__toggle"
                 id="nav-toggle">
                    <i class='bx bx-menu'
                     onClick={() => setShowMenu(!showMenu)}
                     ></i>

               
               {/* this is where the slide menu will appear */}
                <div className={showMenu ? "nav__menu show" : "nav__menu"}>
                    <ul className="nav__list">
                        {navLinksdata.map((item, index) => {
                            return (
                                <li key={index} className="nav__item">
                                    <Link
                                        activeClass="active"
                                        to={item.link}
                                        spy={true}
                                        smooth={true}
                                        offset={-70}
                                        duration={500}
                                        className="nav__link"
                                        onClick={() => setShowMenu(!showMenu)}
                                    >
                                        {item.title}
                                    </Link>


                                </li>
                            );
                        })}   
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