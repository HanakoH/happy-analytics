import React from "react";
import { Route, Redirect } from "react-router-dom";
import { ClientLogin } from "./auth/ClientLogin";
import { SplashPage } from "./auth/SplashPage";
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
        } else if (localStorage.getItem("activeClient")) {
          return (
            <>
              {/* <NavBar /> */}
              {/* <AppViews /> */}
            </>
          );
        } else {
          return <Redirect to="/" />;
        }
      }}
    />
    <Route exact path="/">
      <SplashPage />
    </Route>
    <Route exact path="/client.login">
      <ClientLogin />
    </Route>
    <Route exact path="/coach.login">
      <CoachLogin />
    </Route>
    <Route exact path="/register">
      <Register />
    </Route>
  </>
);