//Where everything that needs to be viewed for Coaches is called
import React from 'react'
import { Route } from "react-router-dom";
//Home
import { CoachHome } from './coaches/CoachHome';
import { ClientList } from './clients/ClientList';
import { ClientProvider } from './clients/ClientProvider';
import { ClientDetail } from './coaches/ClientDetailForCoach'
//ClientForm & Success Page
import { ClientForm } from './coaches/ClientForm';
import { SuccessfullyAdded } from './coaches/SuccessfullyAdded';

export const AppViewCoach = () => {
    return (
        <>
        <ClientProvider>
            <Route exact path="/Coach">
                <CoachHome />
                <ClientList />
            </Route>
        </ClientProvider>
            
        <ClientProvider>
            <Route exact path="/Clients/:clientId(\d+)">
                <ClientDetail />
            </Route>
        </ClientProvider>  

            <Route exact path="/AddClient">
                <ClientForm />
            </Route>
            <Route exact path="/SuccessfullyAdded">
                <SuccessfullyAdded />
            </Route>
        </>
    )
}