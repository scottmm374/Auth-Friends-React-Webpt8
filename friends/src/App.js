import React from "react";
import LoginForm from "./forms/LoginForm";
import { Route, Link, withRouter } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
      </nav>
      <section>
        <Route exact path="/login" component={LoginForm} />
      </section>
    </div>
  );
}

export default App;
