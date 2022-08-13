import React from "react";
import { useLocation } from "react-router-dom";
import { LinkStyled, NavList } from "./NavbarStyle";


const LINK = [
  { to: "/", text: "Home" },
  { to: "/starred", text: "Starred" },
];

const Navbar = () => {
  const location = useLocation()

  return (
    <div>
      <NavList>
        {LINK.map((item) => (
          <li key={item.to}>
            <LinkStyled className={item.to === location.pathname ? 'active' : ''} to={item.to}>{item.text}</LinkStyled>
          </li>
        ))}
      </NavList>
    </div>
  );
};

export default Navbar;
