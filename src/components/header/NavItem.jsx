import { NavLink } from "react-router-dom";
 
const NavItem = ({ text, href, onClick }) => {
  return (
    <li>
      <NavLink to={href} end={href === "/"} onClick={onClick}>
        {text}
      </NavLink>
    </li>
  );
};
 
export default NavItem;
