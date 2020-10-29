import React from 'react'
import { Container, Header } from 'semantic-ui-react'

export const CoachHome = () => {
    const activeCoach = localStorage.getItem("coachName")

    return (
    <>
        <Container text style={{ marginTop: '7em' }} >
            <Header as="h2">Welcome to Happy Analytics, {activeCoach}</Header>
            
        </Container>
    </>)
}