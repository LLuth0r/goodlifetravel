// DEPENDENCIES
import { Switch, Route, useHistory } from "react-router-dom";
import {
  loginUser,
  registerUser,
  removeToken,
  verifyUser,
} from "./services/auth";
import { useState, useEffect } from "react";

// COMPONENTS
// import Layout from "../src/layouts/Layout";
import MainContainer from "../src/containers/MainContainer";
import Register from "../src/screens/Register";
import Login from "../src/screens/Login";
import { withTheme } from "./services/Theme";

// STYLES
import "./App.css";
import Onboarding from "./screens/Onboarding";
import MyAccount from "./screens/MyAccount";
import Explore from "./screens/Explore";

function App() {
  // Define current user to pass down as props
  const [currentUser, setCurrentUser] = useState(null);

  // useHistory to redirect user when they log in and/or register
  const history = useHistory();

  // Verify returning user
  useEffect(() => {
    const handleVerify = async () => {
      const userData = await verifyUser();
      setCurrentUser(userData);
    };
    handleVerify();
  }, []);

  // Login user
  const handleLogin = async (loginData) => {
    const userData = await loginUser(loginData);
    setCurrentUser(userData);
    // Set up onboarding screen
    // userData.onboarding_check ? Redirect("/onboarding") :
    history.push("/");
  };

  // Register user
  const handleRegister = async (registerData) => {
    const userData = await registerUser(registerData);
    setCurrentUser(userData);
    history.push("/onboarding");
  };

  // Logout user
  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem("authToken");
    removeToken();
  };

  return (
    <Switch>
      {/* LOGIN */}
      <Route path="/login">
        <Login handleLogin={handleLogin} />
      </Route>

      {/* REGISTER */}
      <Route path="/register">
        <Register handleRegister={handleRegister} />
      </Route>

      {/* ONBOARDING */}
      <Route path="/onboarding">
        <Onboarding />
      </Route>

      {/* MY ACCOUNT */}
      <Route path="/my-account">
        <MyAccount />
      </Route>

      {/* EXPLORE */}
      <Route path="/explore">
        <Explore />
      </Route>

      {/* LANDING */}
      <Route path="/">
        <MainContainer currentUser={currentUser} handleLogout={handleLogout} />
      </Route>
    </Switch>
  );
}

export default withTheme(App);
