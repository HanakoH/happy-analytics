//Calculates AngerResult 
import React from 'react'
import { Link } from "react-router-dom"
import { Container, Header, Button, Progress } from 'semantic-ui-react'
import "../Tests.css"

const DisplayCorrectResult = ({angerResult}) => {
    if (angerResult === 0 ) {
        return <Container>
            <Header as="h2">Anger Scale: No Anger</Header>
            <p>
                Your score was {angerResult}!
            </p>
        </Container> 
    } else if (angerResult === 1 || angerResult === 2) {
        return <Container>
            <Header as="h2">Anger Scale: A Little Anger</Header>
            <p>
                Your score was {angerResult}.
            </p>
        </Container> 
    } else if (angerResult === 3 || angerResult === 4 || angerResult === 5) {
        return <Container>
            <Header as="h2">Anger Scale: Mild Anger</Header>
            <p>
                Your score was {angerResult}.
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
            <Header as="h2">Anger Scale: Severe Anger</Header>
            <p>
                Your score was {angerResult}.
            </p>
        </Container> 
    } else {
        return <Container>
            <Header as="h2">Anger Scale: Extreme Anger</Header>
            <p>
                Your score was {angerResult}.
            </p>
        </Container> 
    }
}

export const AngerResult = () => {
    const angerResult = +sessionStorage.getItem("AngerTest")
    return (
    <>    
        <Progress value='3' total='7' progress='ratio' color='teal'/>
        <main>
            <Container className="resultsPage" style={{ marginTop: '3em' , textAlign: "center"}}>
            <DisplayCorrectResult key='3' angerResult={angerResult}/>
            <Button style={{ margin: "1em"}}>
                <Link to="/SatisfactionTest">Continue to Relationship Satisfaction Test</Link> 
            </Button>
            </Container>
        </main>
    </>    
    )
}