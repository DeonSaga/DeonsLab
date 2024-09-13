"use client";
import React, { useState, useEffect } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const NavBar = ({ callback }) => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  // useEffect(() => {
  //   window.addEventListener("scroll", () => {
  //     console.log("scroll");
  //     setScroll(window.scrollY >= 10);
  //   });
  // }, []);

  const changeTo = (e) => {
    callback(e);
  };
  return (
    <div className="navbar">
      <div
        style={{
          display: "flex",
          width: "100%",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "86px",
            height: "86px",
          }}
        >
          <img id="logo" src="/agdeon.png" alt="Deons Logo" />
        </div>
        <h1 style={{ fontWeight: "900", marginBottom: "0px" }}>Deons Lab</h1>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            width: "100%",
            gap: "1rem",
          }}
        >
          <div
            className={`navItemsContainer ${showMenu ? "showNavMenu" : " "}`}
          >
            {" "}
            <div className="navClose" onClick={toggleMenu}>
              <CloseIcon />
            </div>
            <NavItem title="About" callback={() => changeTo("About")} />
            <NavItem title="Services" callback={() => changeTo("Services")} />
            <NavItem title="Projects" callback={() => changeTo("Projects")} />
            <button className="NavbarCTA">Contact Now</button>
          </div>
        </div>
        <div className="navToggle" onClick={toggleMenu}>
          <MenuIcon />
        </div>
        <div
          style={{
            display: "flex",

            height: "100%",
            margin: "auto",
            paddingRight: "3rem",
            textAlign: "center",

            lineHeight: "0.3rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default NavBar;

const NavItem = ({ title, callback }) => {
  return (
    <div>
      <h3 className="navItem" onClick={callback}>
        {title}
      </h3>
    </div>
  );
};
