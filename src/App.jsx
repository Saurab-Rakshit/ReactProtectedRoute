import Home from "./components/Home";
import About from "./components/About";
import Product from "./components/Product";
import Profile from "./components/Profile";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import { Routes, Route } from "react-router-dom";
import AuthProvider from "./components/auth";
import RequireAuth from "./components/RequireAuth";

const App = () => {
  return (
    <AuthProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="product" element={<Product />} />
        {/*wrap the Profile component with RequireAuth compo for protected route*/}
        <Route path="profile" element={<RequireAuth><Profile/></RequireAuth>} />
        <Route path="login" element={<Login />} />
      </Routes>
    </AuthProvider>
  );
};
export default App;
