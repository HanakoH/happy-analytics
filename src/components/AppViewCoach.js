//Where everything that needs to be viewed for Coaches is called
import React from 'react'
import { Route } from "react-router-dom";
//Home
import { CoachHome } from './coaches/CoachHome';
//ClientForm & Success Page
import { ClientForm } from './coaches/ClientForm';
import { SuccessfullyAdded } from './coaches/SuccessfullyAdded';

export const AppViewCoach = () => {
    return (
        <>
            <Route exact path="/Coach">
                <CoachHome />
            </Route>
            <Route exact path="/AddClient">
                <ClientForm />
            </Route>
            <Route exact path="/SuccessfullyAdded">
                <SuccessfullyAdded />
            </Route>
        </>
    )
}