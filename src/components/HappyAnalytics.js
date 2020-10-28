import React from "react";
import { Route, Redirect } from "react-router-dom";
import { SplashPage } from "./auth/SplashPage";
import { ClientLogin } from "./auth/ClientLogin";
import { CoachLogin } from "./auth/CoachLogin";
import { Register } from "./auth/Register";
import { WelcomeCoach } from "./WelcomeCoach";
import { DepressionTest } from "./tests/testChoice/1Depression/DepressionTest";
import { DepressionResult } from "./tests/testChoice/1Depression/DepressionResult";
import { AnxietyTest } from "./tests/testChoice/2Anxiety/AnxietyTest";
import { AnxietyResult } from "./tests/testChoice/2Anxiety/AnxietyResult";
import "./HappyAnalytics.css"
import { AngerTest } from "./tests/testChoice/3Anger/AngerTest";
import { AngerResult } from "./tests/testChoice/3Anger/AngerResult";
import { SatisfactionTest } from "./tests/testChoice/4Satisfaction/SatisfactionTest";
import { SatisfactionResult } from "./tests/testChoice/4Satisfaction/SatisfactionResult";
import { TemptationsTest } from "./tests/testChoice/5Temptations/TemptationsTest";
import { TemptationsResult } from "./tests/testChoice/5Temptations/TemptationsResults";
import { HappinessTest } from "./tests/testChoice/6Happiness/HappinessTest";
import { HappinessResult } from "./tests/testChoice/6Happiness/HappinessResults";
import { WillingnessTest } from "./tests/testChoice/7Willingness/WillingnessTest";
import { WillingnessResult } from "./tests/testChoice/7Willingness/WillingnessResults";

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
              {/* <NavBar /> */}
              {/* <AppViews /> */}
            </>
          );
        } else {
          return <Redirect to="/" />;
        }
      }}
    />
    <Route exact path="/coach">
      <DepressionTest />
    </Route>
    <Route exact path="/DepressionResult">
      <DepressionResult />
    </Route>
    <Route exact path="/AnxietyTest">
      <AnxietyTest />
    </Route>
    <Route exact path="/AnxietyResult">
      <AnxietyResult />
    </Route>  
    <Route exact path="/AngerTest">
      <AngerTest />
    </Route>
    <Route exact path="/AngerResult">
      <AngerResult />
    </Route>
    <Route exact path="/SatisfactionTest">
      <SatisfactionTest />
    </Route>
    <Route exact path="/SatisfactionResult">
      <SatisfactionResult />
    </Route>
    <Route exact path="/TemptationsTest">
      <TemptationsTest />
    </Route>
    <Route exact path="/TemptationsResult">
      <TemptationsResult />
    </Route>
    <Route exact path="/HappinessTest">
      <HappinessTest />
    </Route>
    <Route exact path="/HappinessResult">
      <HappinessResult />
    </Route>
    <Route exact path="/WillingnessTest">
      <WillingnessTest />
    </Route>
    <Route exact path="/WillingnessResult">
      <WillingnessResult />
    </Route>

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