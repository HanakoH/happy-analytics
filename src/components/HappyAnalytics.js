import React from "react";
import { Route, Redirect } from "react-router-dom";

import { SplashPage } from "./auth/SplashPage";
import { ClientLogin } from "./auth/ClientLogin";
import { CoachLogin } from "./auth/CoachLogin";
import { Register } from "./auth/Register";
import { WelcomeCoach } from "./WelcomeCoach";

import "./HappyAnalytics.css"

import { ClientNavBar } from "./clients/ClientNavBar";
import { AppViewClient } from "./AppViewClient";



export const HappyAnalytics = () => (
  <>
    <Route
      render={() => {
        if (localStorage.getItem("activeCoach")) {
          return (
            <>
              {/* <DepressionTest /> */}
              {/* <AppViews /> */}
            </>
          );
        } else if (localStorage.getItem("activeClient")) {
          return (
            <>
                <ClientNavBar />
                <AppViewClient />
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
    <Route exact path="/WelcomeCoach">
      <WelcomeCoach />
    </Route>

    
  </>
);