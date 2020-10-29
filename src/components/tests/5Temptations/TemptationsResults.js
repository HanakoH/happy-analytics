//Calculates TemptationsResult 
import React from 'react'
import { Link } from "react-router-dom"
import { Container, Header, Button } from 'semantic-ui-react'

const DisplayCorrectResult = ({temptationsResult}) => {
    if (temptationsResult === 0 ) {
        return <Container>
            <Header as="h2">Temptations Scale</Header>
            <p>
                Your score was {temptationsResult}! No temptations.
            </p>
        </Container> 
    } else if (temptationsResult === 1 || temptationsResult === 2) {
        return <Container>
            <Header as="h2">Temptations Scale</Header>
            <p>
                Your score was {temptationsResult}: A little temptation.
            </p>
        </Container> 
    } else if (temptationsResult === 3 || temptationsResult === 4 || temptationsResult === 5) {
        return <Container>
            <Header as="h2">Temptations Scale</Header>
            <p>
                Your score was {temptationsResult}: Mild temptations.
            </p>
        </Container> 
    } else if (temptationsResult >= 6 && temptationsResult <= 10) {
        return <Container>
            <Header as="h2">Temptations Scale</Header>
            <p>
                Your score was {temptationsResult}: Moderate temptations.
            </p>
        </Container> 
    } else if (temptationsResult >= 11 && temptationsResult <= 15) {
        return <Container>
            <Header as="h2">Temptations Scale</Header>
            <p>
                Your score was {temptationsResult}: Severe temptations.
            </p>
        </Container> 
    } else {
        return <Container>
            <Header as="h2">Temptations Scale</Header>
            <p>
                Your score was {temptationsResult}: Extreme temptations.
            </p>
        </Container> 
    }
}

export const TemptationsResult = () => {
    const temptationsResult = +sessionStorage.getItem("TemptationsTest")
    return (
        <>
            <Container style={{ marginTop: '7em' }}>
            <DisplayCorrectResult key='5' temptationsResult={temptationsResult}/><br></br>
            <Container>
                <p>
                    There are just a couple more tests for you to take. So far, we've been talking about negatives--gloomy moods, trouble relationships, and bad habits.
                     How about the other side of the coin? Let's find out how happy you are.
                </p>
            </Container>
            <Button>
                <Link to="/HappinessTest">Continue to Happiness Test</Link> 
            </Button>
            </Container>
        </>
    )
}