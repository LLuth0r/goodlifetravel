// DEPENDENCIES
import { Switch, Route } from "react-router-dom";
import React from "react";

// COMPONENTS
import Home from "../screens/Home";
import CreateTrip from "../screens/CreateTrip";
import UserTrips from "../screens/UserTrips";
import Messages from "../screens/Messages";

const MainContainer = () => {
  return (
    <Switch>
      {/* LANDING PAGE */}
      <Route exact path="/">
        <Home />
      </Route>
      {/* MY TRIPS */}
      <Route path="/mytrips">
        <UserTrips />
      </Route>
      {/* CREATE TRIP */}
      <Route path="/create-trip">
        <CreateTrip />
      </Route>
      {/* TRIP OVERVIEW */}
      {/* BUDGET */}
      {/* ACTIVITIES */}
      {/* PHOTOS */}
      {/* FLIGHTS/TRAVEL INFO */}
      {/* MESSAGING */}
      <Route path="/messages">
        <Messages />
      </Route>
    </Switch>
  );
};

export default MainContainer;
