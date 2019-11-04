import React from "react";
import { Route, Link, withRouter } from "react-router-dom";
import ProtectedRoutes from "./utils/ProtectedRoutes";
import { getToken } from "./utils/api";
import LoginForm from "./forms/LoginForm";
import AddFriend from "./forms/AddFriend";
import FriendsList from "./components/FriendsList";
import "./App.css";

function App() {
  const signedIn = getToken();
  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link>
        {!signedIn && <Link to="/login">Login</Link>}
        {signedIn && <Link to="/add-friend">Add new friend</Link>}
        {signedIn && <Link to="/friends">Friends list</Link>}
      </nav>
      <section>
        <ProtectedRoutes exact path="/friends" component={FriendsList} />
        <Route path="/login" component={LoginForm} />
        <ProtectedRoutes exact path="/add-friend" component={AddFriend} />
      </section>
    </div>
  );
}

export default withRouter(App);
