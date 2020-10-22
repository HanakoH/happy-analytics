import React from "react";
import { Route, Redirect } from "react-router-dom";
// import { AppViews } from "./AppViews";
// import { NavBar } from "./nav/NavBar";
import { CoachLogin } from "./auth/CoachLogin";
import { Register } from "./auth/Register";
import "./HappyAnalytics.css"

export const HappyAnalytics = () => (
  <>
    <Route
      render={() => {
        if (localStorage.getItem("activeCoach")) {
          return (
            <>
              {/* <NavBar /> */}
              {/* <AppViews /> */}
            </>
          );
        } else {
          return <Redirect to="/coach.login" />;
        }
      }}
    />

    <Route path="/coach.login">
      <CoachLogin />
    </Route>
    <Route path="/register">
      <Register />
    </Route>
  </>
);