import { Navigate,useLocation } from "react-router-dom";
import { useAuth } from "./auth";

const RequireAuth = ({ children }) => {
  //Redirect the user to the protected route Profile Component after logging in.On the Navigate compoentn pass in the state prop we will use this state prop in Login Component.
  const location = useLocation();
  //within the component get hold of the AuthContext;
  const auth = useAuth();
  //check wether the user is not logged in ?
  if (!auth.user) {
    //redirect the user to the Login Page Route.
    return <Navigate to="/login" state={{path:location.pathname}}/>;
  }
  //if the user is loggedin however we are going to return the children prop.
  return children;
};
export default RequireAuth;
