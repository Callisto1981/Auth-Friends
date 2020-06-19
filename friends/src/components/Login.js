import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
//import {Route, Link} from "react-router-dom";

class Login extends React.Component {
  state = {
    credentials: {
      username: "",
      password: ""
    },
    isLoading: false
  };
  handleChange = e => {
    this.setState({
      credentails: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      },
      isLoading: true
    });
  };
  login = e => {
    e.prevenDefault();
    axiosWithAuth()
      .post("/api/login", this.state.credentials)
      .then(res => {
        //console.log(res.data.payload);
        this.setState({
          isLoading: false
        });
        localStorage.setItem("token", JSON.stringify(res.data.payload));
        this.props.history.push("/friends");
      })
      .catch(err => {
        console.log(err);
      });
  };
  render() {
    return (
      <div className="loginForm">
        <h2>Login to Friends</h2>
        <form className="login" onSubmit={this.login}>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="..."
            value={this.state.credentials.username}
            onChange={this.handleChange}
          />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={this.state.credentials.password}
            onChange={this.handleChange}
          />
        </form>
      </div>
    );
  }
}
