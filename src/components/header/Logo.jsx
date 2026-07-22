import { Link } from "react-router-dom";

const Logo = ({ text = "Fundación", href = "/" }) => {
  return <Link to={href}>{text}</Link>;
};

export default Logo;