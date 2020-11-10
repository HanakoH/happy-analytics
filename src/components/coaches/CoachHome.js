import React from 'react'
import { Container, Header } from 'semantic-ui-react'

export const CoachHome = () => {
    const activeCoach = sessionStorage.getItem("coachName")

    return (
    <>
        <Container text style={{ marginTop: '3em' }} >
            <Header as="h2">Welcome to Happy Analytics, {activeCoach}</Header>
        </Container>
    </>)
}