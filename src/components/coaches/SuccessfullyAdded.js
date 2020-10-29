import React from 'react'
import { Link } from "react-router-dom"
import { Button, Container, Header } from 'semantic-ui-react'

export const SuccessfullyAdded = () => {

    return (
    <>
        <Container text style={{ marginTop: '7em' }} >
        <Header as="h2">You successfully added a new client!</Header>
            <Button>
                <Link to="/Coach">Back to Home</Link>
            </Button>
        </Container>
    </>)
}