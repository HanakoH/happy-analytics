import React from 'react'
import { Container, Header } from 'semantic-ui-react'

export const ClientHome = () => {
    const activeClient = localStorage.getItem("clientName")

    return (
    <>
        <Container text style={{ marginTop: '7em' }} >
            <Header as="h2">Welcome to Happy Analytics, {activeClient}</Header>
        </Container>
    </>)
}