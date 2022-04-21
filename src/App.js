import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import "./App.css";
import AddUser from "./components/AddUser";
import User from "./components/User";
import UsersList from "./components/UsersList";

function App() {
  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <a href="/users" className="navbar-brand">
          CSV Webapp
        </a>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/users"} className="nav-link">
              Users
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/add"} className="nav-link">
              Add Users
            </Link>
          </li>
        </div>
      </nav>

      <div className="container mt-3">
        <Switch>
          <Route exact path={["/", "/users"]} component={UsersList} />
          <Route exact path="/add" component={AddUser} />
          <Route path="/users/:id" component={User} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
