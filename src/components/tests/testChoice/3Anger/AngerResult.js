//Calculates AngerResult 
import React from 'react'
import { Link } from "react-router-dom"
import { Container, Header, Button } from 'semantic-ui-react'

const DisplayCorrectResult = ({angerResult}) => {
    if (angerResult === 0 ) {
        return <Container>
            <Header as="h2">Anger Scale</Header>
            <p>
                Your score was {angerResult}! No anger.
            </p>
        </Container> 
    } else if (angerResult === 1 || angerResult === 2) {
        return <Container>
            <Header as="h2">Anger Scale</Header>
            <p>
                Your score was {angerResult}: A little anger.
            </p>
        </Container> 
    } else if (angerResult === 3 || angerResult === 4 || angerResult === 5) {
        return <Container>
            <Header as="h2">Anger Scale</Header>
            <p>
                Your score was {angerResult}: Mild anger.
            </p>
        </Container> 
    } else if (angerResult >= 6 && angerResult <= 10) {
        return <Container>
            <Header as="h2">Anger Scale</Header>
            <p>
                Your score was {angerResult}: Moderate anger.
            </p>
        </Container> 
    } else if (angerResult >= 11 && angerResult <= 15) {
        return <Container>
            <Header as="h2">Anger Scale</Header>
            <p>
                Your score was {angerResult}: Severe anger.
            </p>
        </Container> 
    } else {
        return <Container>
            <Header as="h2">Anger Scale</Header>
            <p>
                Your score was {angerResult}: Extreme anger.
            </p>
        </Container> 
    }
}

export const AngerResult = () => {
    const angerResult = +sessionStorage.getItem("AngerTest")
    return (
        <>
            <DisplayCorrectResult key='2' angerResult={angerResult}/>
            <Button>
                <Link to="/SatisfactionTest">Continue to Relationship Satisfaction Test</Link> 
            </Button>
        </>
    )
}