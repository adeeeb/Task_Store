/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const NavLink = ({ to, children, onClick }) => {
  return (
    <Link
      to={to}
      className="block py-2 px-4 hover:text-amber-800 transition duration-300 ease-in-out"
      onClick={onClick}
    >
      {children}
    </Link>
  );
};

export default NavLink;
