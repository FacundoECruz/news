import React from "react";
import "./NavLinks.css"
import {Link} from "react-router-dom"

function NavLinks() {
  return ( 
    <ul className="nav-links-container">
      {/* Put 'current' class to Explore when its in the page */}
      <Link to="/explore" className="nav-links-explore">Explore</Link>
    </ul>
  );
}

export default NavLinks;