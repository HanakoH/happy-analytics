//Calculates DepressionResults 
import React from 'react'
import { Link } from "react-router-dom"
import { Container, Header, Button, Progress } from 'semantic-ui-react'
import "../Tests.css"

const DisplayCorrectResult = ({depressionResult}) => {
    if (depressionResult === 0 ) {
        return <Container>
            <Header as="h2">Depression Result: No Symptoms</Header>
            <p>
                Your Score is {depressionResult}. That's terrific! You don't seem to have any symptoms at all.
            </p>
        </Container> 
    } else if (depressionResult === 1 || depressionResult === 2) {
        return <Container>
            <Header as="h2">Depression Result: Borderline</Header>
            <p>
                Your Score is {depressionResult}. This score is normal, but you could use a little tune-up.
            </p>
        </Container> 
    } else if (depressionResult === 3 || depressionResult === 4 || depressionResult === 5) {
        return <Container>
            <Header as="h2">Depression Result: Mild</Header>
            <p>
                Your Score is {depressionResult}. Although your score is not greatly elevated, this is enough depression to take the joy out of life.
            </p>
        </Container> 
    } else if (depressionResult >= 6 && depressionResult <= 10) {
        return <Container>
            <Header as="h2">Depression Result: Moderate</Header>
            <p>
                Your Score is {depressionResult}. You're feeling quite a bit of depression. Although you're not in the severe range, this score reflects considerable unhappiness.
            </p>
        </Container> 
    } else if (depressionResult >= 11 && depressionResult <= 15) {
        return <Container>
            <Header as="h2">Depression Result: Severe</Header>
            <p>
                Your Score is {depressionResult}. You have fairly strong feelings of depression. That makes me sad, but there is some really good news.
                 The tools and exercises your coach will give you can help transform your negative feelings into joy.
            </p>
        </Container> 
    } else {
        return <Container>
            <Header as="h2">Depression Result: Extreme</Header>
            <p>
                Your Score is {depressionResult}. Scores in this range indicate that your suffering is intense. Friends or family may have trouble grasping how much pain you're in.
                 The good news is that the prognosis for improvement is very positive. In fact, recovery is one of the greatest feelings a human being can have.
            </p>
        </Container> 
    }
}

export const DepressionResult = () => {
    const depressionResult = +sessionStorage.getItem("DepressionTest")
    return (
    <> 
        <Progress value='1' total='7' progress='ratio' color='teal'/>
        <main>
            <Container className="resultsPage" style={{ marginTop: '3em' , textAlign: "center"}}>
            <DisplayCorrectResult key='1' depressionResult={depressionResult}/>
            <Button style={{ margin: "1em"}}>
                <Link to="/AnxietyTest">Continue to Anxiety Test</Link> 
            </Button>
            </Container>
        </main>
    </>
    )
}
