import React from "react";
import "./NavLinks.css"

function NavLinks({logout}) {
  return ( 
    <ul className="nav-links-container">
      {/* Put 'current' class to Explore when its in the page */}
      <li className="nav-links-explore">Explore</li>
      <li className="nav-links-logout" onClick={logout}>Logout</li>
    </ul>
  );
}

export default NavLinks;