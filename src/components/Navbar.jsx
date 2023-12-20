import { NavLink } from "react-router-dom";
import { useAuth } from "./auth";

const Navbar = () => {
  const navLinksStyl = ({ isActive }) => {
    return {
      fontFamily: isActive ? "fantasy" : "sans-serif",
      textDecoration: isActive ? "underline" : "none"
    };
  };

  //Button can only be shown when user is not logged in .
  const auth = useAuth();

  return (
    <>
      <nav>
        <NavLink style={navLinksStyl} to="/">
          Home
        </NavLink>
        <NavLink style={navLinksStyl} to="about">
          About
        </NavLink>
        <NavLink style={navLinksStyl} to="product">
          Product
        </NavLink>
        <NavLink style={navLinksStyl} to="profile">
          Profile
        </NavLink>
        {!auth.user && (
          <NavLink style={navLinksStyl} to="login">
            Login
          </NavLink>
        )}
      </nav>
    </>
  );
};
export default Navbar;
