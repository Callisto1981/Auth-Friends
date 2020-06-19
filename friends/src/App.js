import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "./App.css";

import Login from "";
import FriendsList from "";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <div className="App">
      <Route exact path="/">
        <Link to="/login">
          <button>LOGIN</button>
        </Link>
      </Route>
      <PrivateRoute exact path="/friends" component={FriendsList} />
      <Route exact path="/login" component={Login} />
    </div>
  );
}

export default App;
