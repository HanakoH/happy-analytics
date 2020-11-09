//Calculates SatisfactionResult
import React from 'react'
import { Link } from "react-router-dom"
import { Container, Header, Button } from 'semantic-ui-react'
import "../Tests.css"

const DisplayCorrectResult = ({satisfactionResult}) => {
    if (satisfactionResult >= 0 && satisfactionResult <= 10) {
        return <Container>
            <Header as="h2">Satisfaction Score: Extremely Dissatisfied</Header>
            <p>
                Your Score is {satisfactionResult}.
            </p>
        </Container> 
    } else if (satisfactionResult >= 11 && satisfactionResult <= 15) {
        return <Container>
            <Header as="h2">Satisfaction Score:  Very Dissatisfied</Header>
            <p>
                Your Score is {satisfactionResult}.
            </p>
        </Container> 
    } else if (satisfactionResult >= 16 && satisfactionResult <= 20) {
        return <Container>
            <Header as="h2">Satisfaction Score: Moderately Dissatisfied</Header>
            <p>
                Your Score is {satisfactionResult}.
            </p>
        </Container> 
    } else if (satisfactionResult >= 21 && satisfactionResult <= 25) {
        return <Container>
            <Header as="h2">Satisfaction Score: Somewhat Satisfied</Header>
            <p>
                Your Score is {satisfactionResult}.
            </p>
        </Container> 
    } else if (satisfactionResult >= 26 && satisfactionResult <= 28) {
        return <Container>
            <Header as="h2">Satisfaction Score: Moderately Satisfied</Header>
            <p>
                Your Score is {satisfactionResult}.
            </p>
        </Container> 
    } else {
        return <Container>
            <Header as="h2">Satisfaction Score: Extremely Satisfied</Header>
            <p>
                Your Score is {satisfactionResult}.
            </p>
        </Container> 
    }
}

export const SatisfactionResult = () => {
    const satisfactionResult = +sessionStorage.getItem("SatisfactionTest")
    return (
        <main>
            <Container className="resultsPage" style={{ marginTop: '3em' , textAlign: "center"}}>
            <DisplayCorrectResult key='4' satisfactionResult={satisfactionResult}/>
            <Button style={{ margin: "1em"}}>
                <Link to="/TemptationsTest">Continue to Temptations Test</Link> 
            </Button>
            </Container>
        </main>
    )
}