import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import AuthState from "./context/auth/AuthState";
import AlertState from "./context/alert/AlertState";
import PrivateRoute from "./components/routing/PrivateRoute";
import ProfilePage from "./pages/ProfilePage";
import App2 from "./wallet/App";
import AlertComponent from "./components/AlertComponent";

import "./assets/css/Home.css";

function App() {
  return (
    <AuthState>
      <AlertState>
        <AlertComponent />
        <Router>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/register" component={RegisterPage} />
          <PrivateRoute exact path="/profile" component={ProfilePage} />
          <PrivateRoute exact path="/wallet" component={App2} />
        </Router>
      </AlertState>
    </AuthState>
  );
}

export default App;
