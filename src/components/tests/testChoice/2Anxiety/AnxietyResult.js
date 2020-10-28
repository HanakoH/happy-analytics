//Calculates AnxietyResult
import React from 'react'
import { Link } from "react-router-dom"
import { Container, Header, Button } from 'semantic-ui-react'

const DisplayCorrectResult = ({anxietyResult}) => {
    if (anxietyResult === 0 ) {
        return <Container>
            <Header as="h2">Anxiety Result: No Symptoms</Header>
            <p>
                Your Score is {anxietyResult}. That's terrific! You don't seem to have any symptoms at all.
            </p>
        </Container> 
    } else if (anxietyResult === 1 || anxietyResult === 2) {
        return <Container>
            <Header as="h2">Anxiety Result: Borderline</Header>
            <p>
                Your Score is {anxietyResult}. These scores are normal, but you could use a little tune-up.
            </p>
        </Container> 
    } else if (anxietyResult === 3 || anxietyResult === 4 || anxietyResult === 5) {
        return <Container>
            <Header as="h2">Anxiety Result: Mild</Header>
            <p>
                Your Score is {anxietyResult}. Although your scores are not greatly elevated, this is enough anxiety to take the joy out of life.
            </p>
        </Container> 
    } else if (anxietyResult >= 6 && anxietyResult <= 10) {
        return <Container>
            <Header as="h2">Anxiety Result: Moderate</Header>
            <p>
                Your Score is {anxietyResult}. You're feeling quite a bit of anxiety. Although you're not in the severe range, this score reflects considerable unhappiness.
            </p>
        </Container> 
    } else if (anxietyResult >= 11 && anxietyResult <= 15) {
        return <Container>
            <Header as="h2">Anxiety Result: Severe</Header>
            <p>
                Your Score is {anxietyResult}. You have fairly strong feelings of anxiety. That makes me sad, but there is some really good news.
                 The tools and exercises your coach will give you can help transform your negative feelings into joy.
            </p>
        </Container> 
    } else {
        return <Container>
            <Header as="h2">Anxiety Result: Extreme</Header>
            <p>
                Your Score is {anxietyResult}. Scores in this range indicate that your suffering is intense. Friends or family may have trouble grasping how much pain you're in.
                 The good news is that the prognosis for improvement is very positive. In fact, recovery is one of the greatest feelings a human being can have.
            </p>
        </Container> 
    }
}

export const AnxietyResult = () => {
    const anxietyResult = +sessionStorage.getItem("AnxietyTest")
    return (
        <>
            <DisplayCorrectResult key='2' anxietyResult={anxietyResult}/>
            <Button>
                <Link to="/AngerTest">Continue to Anger Test</Link> 
            </Button>
        </>
    )
}