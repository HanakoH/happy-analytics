import React, { useState, createContext } from "react"
/*
    The context is imported and used by individual components
    that need data
*/
export const ClientContext = createContext()
/*
 This component establishes what data can be used.
 */
export const ClientProvider = (props) => {

    const [clients, setClients] = useState([])

    const getClients = () => {
        return fetch("http://localhost:8088/clients?_embed=client_coach&_embed=testResults")
            .then(res => res.json())
            .then(setClients)
    }

    const getClientById = clientId => {
        return fetch(`http://localhost:8088/clients/${clientId}?_embed=testResults`)
            .then(res => res.json())
    }

    const deleteClient = clientId => {
        return fetch(`http://localhost:8088/clients/${clientId}`, {
            method: "DELETE"
        })
            .then(getClients)
    }

    return (
        <ClientContext.Provider value={{
            clients, getClients, getClientById, deleteClient
        }}>
            {props.children}
        </ClientContext.Provider>
    )
}