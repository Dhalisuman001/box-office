import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  const LINK = [
    { to: "/", text: "Home" },
    { to: "/about", text: "Starred" },
  ];

  return (
    <div>
      <ul>
        {LINK.map((item) => (
          <li key={item.to}>
            <Link to={item.to}>{item.text}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
