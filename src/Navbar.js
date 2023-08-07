import React from "react";

const Navbar = () => {
  return (
    <>
      <div id="nav_bar">
        <h1 className="Nav-head">The Dojo Blog</h1>
        <div className="btn-div">
          <button className="home-btn">Home</button>
          <button className="title-btn">Title</button>
        </div>
      </div>
      <hr />
    </>
  );
};
export default Navbar;
