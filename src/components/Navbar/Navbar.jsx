import React, { useState, useEffect } from "react";

// ICONS

import { IconContext } from "react-icons";

// ROUTING

import { Link } from "react-router-dom";

// DATA FILE
import { NavbarData } from "./NavbarData";

// STYLES
import "./Navbar.css";

//ASSETS
import NavIcon from "../../images/nav-icon.svg";

const setActiveItem = e => {
  const navItems = document.querySelectorAll(".nav-text");
  navItems.forEach(navItem => {
    navItem.classList?.remove("nav-active");
  });
  const navLinks = document.querySelectorAll(".nav-text a");
  navLinks?.forEach(navLink => {
    navLink.classList?.remove("nav-link--active");
  });
  e.target.closest(".nav-text").classList.add("nav-active");
  e.target.closest("a").classList.add("nav-link--active");
};

export default function Navbar() {
  useEffect(() => {
    const home = document.querySelector(".nav-text");
    home?.classList.add("nav-active");
    const homeLink = document.querySelector(".nav-text a");
    homeLink?.classList.add("nav-link--active");
  }, []);
  return (
    <>
      <IconContext.Provider value={{ color: "#FFF" }}>
        {/* All the icons now are white */}
        <nav className="nav-menu active">
          <ul className="nav-menu-items">
            <li className="navbar-zocket--icon">
              <Link to="/" className="menu-bars">
                <img src={NavIcon} alt="nav-icon" width={50} />
              </Link>
            </li>

            {NavbarData.map((item, index) => {
              return (
                <li key={index} className={item.cName} onClick={setActiveItem}>
                  <Link to={item.path} style={{ color: "#ffffff" }}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}
