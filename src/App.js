import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route } from "react-router-dom";
import { useState } from "react";
import { SignupPage } from "./SignupPage";
import { Login } from "./Login";
import { Passwordreset } from "./forgetpassword";
import { Navbar, NavbarBrand, Nav } from "react-bootstrap";
import { Home } from "./Home";
import { Dashboard } from "./Dashboard";
import { Createlead } from "./Createlead";
import { Editlead } from "./Editlead";
export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState([]);
  // console.log(email,password,user)
  console.log(user);
  return (
    <div className="App">
      <Navbar>
        <NavbarBrand style={{ paddingLeft: "10px" }}>CRM APP</NavbarBrand>
        <div className="navlink">
          <Nav.Link to="/">Home</Nav.Link>
          <Nav.Link to="/signup">Sign Up</Nav.Link>
          <Nav.Link to="/login">Login</Nav.Link>
        </div>
      </Navbar>
      <div className="logincontainer">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/signup">
            <SignupPage />
          </Route>
          <Route path="/login">
            <Login
              email={email}
              password={password}
              setEmail={setEmail}
              setPassword={setPassword}
              setUser={setUser}
            />
          </Route>
          <Route path="/forgetpassword">
            <Passwordreset email={email} />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/createLead">
            <Createlead />
          </Route>
          <Route path="/editlead/:id">
            <Editlead />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

