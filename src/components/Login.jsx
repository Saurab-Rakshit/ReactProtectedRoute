import { useState } from "react";
import { useNavigate , useLocation} from "react-router-dom";
import { useAuth } from "./auth";

const Login = () => {
  const [user, setUser] = useState("");

  const auth = useAuth();

  const navigate = useNavigate();
  const location = useLocation();//next step chek the path is set on the state object & use redirect path

  // we are doing this for redirecting to the Profile Component after logging in.
  const redirectPath = location.state?.path || '/';

  const handleLogin = () => {
    //we need to call login function from AuthContext.
    auth.login(user); //once we set the user name now navigate the User to Home Page
    //{replace:true} when we click back button on browser after doing login it again redirects to the Login Page so to avoid the redirection we use this.
    // navigate("/", { replace: true });
    navigate(redirectPath,{ replace: true }); //updated this "redirectPath" variable redirects to the profile page.
  };

  return (
    <>
      <label>
        Username:
        <input
          type="text"
          onChange={(e) => {
            setUser(e.target.value);
          }}
        />
      </label>
      <button className="btn btn-primary" onClick={handleLogin}>
        Login
      </button>
    </>
  );
};
export default Login;
