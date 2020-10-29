//Where everything that needs to be viewed for Clients is called
import React from 'react'
import { Route } from "react-router-dom";
//Home
import { ClientHome } from './clients/ClientHome';
//Depression
import { DepressionTest } from "./tests/1Depression/DepressionTest";
import { DepressionResult } from "./tests/1Depression/DepressionResult";
//Anxiety
import { AnxietyTest } from "./tests/2Anxiety/AnxietyTest";
import { AnxietyResult } from "./tests/2Anxiety/AnxietyResult";
//Anger
import { AngerTest } from "./tests/3Anger/AngerTest";
import { AngerResult } from "./tests/3Anger/AngerResult";
//Satisfaction
import { SatisfactionTest } from "./tests/4Satisfaction/SatisfactionTest";
import { SatisfactionResult } from "./tests/4Satisfaction/SatisfactionResult";
//Temptations
import { TemptationsTest } from "./tests/5Temptations/TemptationsTest";
import { TemptationsResult } from "./tests/5Temptations/TemptationsResults";
//Happiness
import { HappinessTest } from "./tests/6Happiness/HappinessTest";
import { HappinessResult } from "./tests/6Happiness/HappinessResults";
//Willingness
import { WillingnessTest } from "./tests/7Willingness/WillingnessTest";
import { WillingnessResult } from "./tests/7Willingness/WillingnessResults";

export const AppViewClient = () => {
    return (
        <>
            <Route exact path="/Client">
                <ClientHome />
            </Route>

            <Route exact path="/DepressionTest">
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
        </>
    )
}
    