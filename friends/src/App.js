import React from "react";
import { Route, Link, withRouter } from "react-router-dom";
import LoginForm from "./forms/LoginForm";
import AddFriend from "./forms/AddFriend";
import FriendView from "./components/FriendView";
import "./App.css";

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/add-friend">Add new friend</Link>
        <Link to="/friends">Friends list</Link>
      </nav>
      <section>
        <Route exact path="/login" component={LoginForm} />
        <Route exact path="/add-friend" component={AddFriend} />
        {/* <Route path="/friends" component={FriendView} /> */}
        <FriendView />
      </section>
    </div>
  );
}

export default withRouter(App);
