import React from "react";
import { Switch, Router, Route, Redirect } from "react-router-native";
import { Container, View } from "react-native";

import Login from "./Login";
import Profile from "./Profile";

const Routes = (props) => {
  return (
    <Container>
      <Switch>
        <Route exact path="/" render={(props) => <Login {...props} />} />
        <Route path="/profile" render={(props) => <Profile {...props} />} />
      </Switch>
    </Container>
  );
};

export default Routes;
