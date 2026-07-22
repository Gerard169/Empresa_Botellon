import { Link } from "react-router-dom";
 
export const FooterLink = ({ text, href }) => {
  return (
    <li>
      <Link to={href}>{text}</Link>
    </li>
  );
};
