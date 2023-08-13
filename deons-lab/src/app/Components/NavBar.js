import React from "react";

const NavBar = () => {
  return (
    <div className="navbar">
      <div
        style={{
          display: "inline-flex",
          width: "100vw",
          //backgroundColor: "red",
          padding: "1rem 2rem",
        }}
      >
        <div
          style={{
            width: "64px",
            height: "64px",
            backgroundColor: "var(--royal_purple)",
          }}
        ></div>
        <div
          style={{
            display: "flex",
            margin: "auto",
            paddingRight: "3rem",
            marginRight: "0",
            gap: "1rem",
          }}
        >
          <NavItem title="About" />
          <NavItem title="Projects" />
          <NavItem title="Artwork" />
        </div>
      </div>
      <p
        style={{
          width: "30%",
          height: "100%",
          margin: "auto",
          textAlign: "center",
          //backgroundColor: "green",
        }}
      >
        Deon Coker
        <br />
        Creative Director / Artist
      </p>
    </div>
  );
};

export default NavBar;

const NavItem = ({ title, callback }) => {
  return (
    <div>
      <button>{title}</button>
    </div>
  );
};
