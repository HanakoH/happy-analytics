//Calculates SatisfactionResult
import React from 'react'
import { Link } from "react-router-dom"
import { Container, Header, Button } from 'semantic-ui-react'

const DisplayCorrectResult = ({satisfactionResult}) => {
    if (satisfactionResult >= 0 && satisfactionResult <= 10) {
        return <Container>
            <Header as="h2">Satisfaction Score</Header>
            <p>
                Your Score is {satisfactionResult}. Extremely dissatisfied.
            </p>
        </Container> 
    } else if (satisfactionResult >= 11 && satisfactionResult <= 15) {
        return <Container>
            <Header as="h2">Satisfaction Score</Header>
            <p>
                Your Score is {satisfactionResult}. Very dissatisfied.
            </p>
        </Container> 
    } else if (satisfactionResult >= 16 && satisfactionResult <= 20) {
        return <Container>
            <Header as="h2">Satisfaction Score</Header>
            <p>
                Your Score is {satisfactionResult}. Moderately dissatisfied.
            </p>
        </Container> 
    } else if (satisfactionResult >= 21 && satisfactionResult <= 25) {
        return <Container>
            <Header as="h2">Satisfaction Score</Header>
            <p>
                Your Score is {satisfactionResult}. Somewhat satisfied.
            </p>
        </Container> 
    } else if (satisfactionResult >= 26 && satisfactionResult <= 28) {
        return <Container>
            <Header as="h2">Satisfaction Score</Header>
            <p>
                Your Score is {satisfactionResult}. Moderately satisfied.
            </p>
        </Container> 
    } else {
        return <Container>
            <Header as="h2">Satisfaction Score</Header>
            <p>
                Your Score is {satisfactionResult}. Extremely satisfied.
            </p>
        </Container> 
    }
}

export const SatisfactionResult = () => {
    const satisfactionResult = +sessionStorage.getItem("SatisfactionTest")
    return (
        <>
            <DisplayCorrectResult key='4' satisfactionResult={satisfactionResult}/>
            <Button>
                <Link to="/TemptationsTest">Continue to Temptations Test</Link> 
            </Button>
        </>
    )
}