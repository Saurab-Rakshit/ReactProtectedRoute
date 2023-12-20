import { useAuth } from "./auth";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const auth = useAuth();

  const navigate = useNavigate();

  const handleLogout = () => {
    auth.logout();
    //after loggingout redirect the user to the home page.
    navigate("/");
  };
  return (
    <>
      <h1>Welcome {auth.user}</h1>
      <button className="btn btn-danger" onClick={handleLogout}>
        Logout
      </button>
    </>
  );
};
export default Profile;
