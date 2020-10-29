import React, { useContext, useEffect } from 'react'
import { ClientCard } from "./ClientCard"
import { ClientContext } from "./ClientProvider"
import { Container, Header } from 'semantic-ui-react'
import { Card } from 'semantic-ui-react'

export const ClientHome = () => {
    const { clients, getClients } = useContext(ClientContext)

    const activeClient = localStorage.getItem("clientName")

    useEffect(() => {
        getClients()
      }, [])

    return (
    <>
        <Container text style={{ marginTop: '7em' }} >
            <Header as="h2">Welcome to Happy Analytics, {activeClient}</Header>
            <Card.Group>
                {
                clients.map(client => {
                    if (client.first_name === activeClient) {
                        return <ClientCard key={client.id} client={client} />
                    }
                })
                }
            </Card.Group>
        </Container>
    </>)
}