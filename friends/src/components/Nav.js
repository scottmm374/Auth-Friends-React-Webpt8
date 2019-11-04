import React, { useState } from "react";
import { getToken } from "../utils/api";
import LoginForm from "../forms/LoginForm";
import AddFriend from "../forms/AddFriend";
import FriendsList from "../components/FriendsList";
import Logout from "../components/Logout";
import ProtectedRoutes from "../utils/ProtectedRoutes";
import { Route, withRouter } from "react-router-dom";
import styled from "styled-components";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

const NavText = styled(NavbarBrand)`
  font-size: 3rem;
`;

const NewToggle = styled(NavbarToggler)`
  width: 80px;
  height: 40px;
`;

const NewNav = styled(Navbar)`
  padding-left: 5%;
  padding-right: 5%;
  background: #f4ca78;
`;
const NavBar = () => {
  const [collapsed, setCollapsed] = useState(true);
  const signedIn = getToken();

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
      <NewNav color="faded" light>
        <NavText href="/" className="mr-auto">
          My Friends
        </NavText>
        <NewToggle onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              {!signedIn && <NavLink href="/login">Login</NavLink>}
            </NavItem>
            <NavItem>
              {signedIn && <NavLink href="/add-friend">Add Friend</NavLink>}
            </NavItem>
            <NavItem>
              {signedIn && <NavLink href="/friends">Friend List</NavLink>}
            </NavItem>
            <NavItem>
              {signedIn && <NavLink href="/logout">Logout</NavLink>}
            </NavItem>
          </Nav>
        </Collapse>
      </NewNav>
      <section>
        <ProtectedRoutes exact path="/friends" component={FriendsList} />
        <Route path="/login" component={LoginForm} />
        <ProtectedRoutes exact path="/add-friend" component={AddFriend} />
        <ProtectedRoutes exact path="/logout" component={Logout} />
      </section>
    </div>
  );
};

export default withRouter(NavBar);
