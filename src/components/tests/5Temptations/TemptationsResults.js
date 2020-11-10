//Calculates TemptationsResult 
import React from 'react'
import { Link } from "react-router-dom"
import { Container, Header, Button, Progress } from 'semantic-ui-react'
import "../Tests.css"

const DisplayCorrectResult = ({temptationsResult}) => {
    if (temptationsResult === 0 ) {
        return <Container>
            <Header as="h2">Temptations Scale:  No Temptations</Header>
            <p>
                Your score was {temptationsResult}!
            </p>
        </Container> 
    } else if (temptationsResult === 1 || temptationsResult === 2) {
        return <Container>
            <Header as="h2">Temptations Scale: A Little Temptation</Header>
            <p>
                Your score was {temptationsResult}.
            </p>
        </Container> 
    } else if (temptationsResult === 3 || temptationsResult === 4 || temptationsResult === 5) {
        return <Container>
            <Header as="h2">Temptations Scale: Mild Temptations</Header>
            <p>
                Your score was {temptationsResult}.
            </p>
        </Container> 
    } else if (temptationsResult >= 6 && temptationsResult <= 10) {
        return <Container>
            <Header as="h2">Temptations Scale: Moderate Temptations</Header>
            <p>
                Your score was {temptationsResult}.
            </p>
        </Container> 
    } else if (temptationsResult >= 11 && temptationsResult <= 15) {
        return <Container>
            <Header as="h2">Temptations Scale: Severe Temptations</Header>
            <p>
                Your score was {temptationsResult}.
            </p>
        </Container> 
    } else {
        return <Container>
            <Header as="h2">Temptations Scale: Extreme Temptations</Header>
            <p>
                Your score was {temptationsResult}.
            </p>
        </Container> 
    }
}

export const TemptationsResult = () => {
    const temptationsResult = +sessionStorage.getItem("TemptationsTest")
    return (
        <>
        <Progress value='5' total='7' progress='ratio' color='teal'/>
        <main>
            <Container className="resultsPage" style={{ marginTop: '3em' , textAlign: "center"}}>
            <DisplayCorrectResult key='5' temptationsResult={temptationsResult}/><br></br>
            <Container style={{ margin: "1em"}}>
                <p>
                    There are just a couple more tests for you to take. So far, we've been talking about negatives--gloomy moods, trouble relationships, and bad habits.
                     How about the other side of the coin? Let's find out how happy you are.
                </p>
            </Container>
            <Button style={{ margin: "1em"}}>
                <Link to="/HappinessTest">Continue to Happiness Test</Link> 
            </Button>
            </Container>
        </main>
        </>
    )
}