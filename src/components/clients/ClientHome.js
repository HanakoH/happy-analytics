import React from 'react'
import { Container, Header } from 'semantic-ui-react'

export const ClientHome = () => {
    const activeClient = localStorage.getItem("clientName")

    return (
    <>
        <Container text style={{ marginTop: '7em' }} >
            <Header as="h2">Welcome to Happy Analytics, {activeClient}</Header>
            <small>Loving care when you're not there.</small>

            <address>
                <div>Visit Us at the Nashville North Location</div>
                <div>500 Puppy Way</div>
            </address>
        </Container>
    </>)
}