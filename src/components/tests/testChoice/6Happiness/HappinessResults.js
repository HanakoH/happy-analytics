//Calculates HappinessResult
import React from 'react'
import { Link } from "react-router-dom"
import { Container, Header, Button } from 'semantic-ui-react'

const DisplayCorrectResult = ({happinessResult}) => {
    if (happinessResult === 0 || happinessResult === 1) {
        return <Container>
            <Header as="h2">Happiness Result: No Happiness</Header>
            <p>
                Your Score is {happinessResult}. It seems like you're barely having any positive feelings at all right now.
                 That's really sad, but there's some good news-if you want, you can work together with your coach and fix that.
            </p>
            <br></br>
            <p>
                If you want to change the way you're thinking and feeling--and want to feel happier--then you'll also have to do the exercises given by your coach.
                 Are you willing to do them? Let's find out! Take the Willingness Test on the next page.
            </p>
        </Container> 
    } else if (happinessResult >= 2 && happinessResult <= 3) {
        return <Container>
            <Header as="h2">Happiness Result: Minimal Happiness</Header>
            <p>
                Your Score is {happinessResult}. This score indicates that you have very few positive feelings. There's lots of room for improvement.
            </p>
            <br></br>
            <p>
                If you want to change the way you're thinking and feeling--and want to feel happier--then you'll also have to do the exercises given by your coach.
                 Are you willing to do them? Let's find out! Take the Willingness Test on the next page.
            </p>
        </Container> 
    } else if (happinessResult >= 4 && happinessResult <= 5) {
        return <Container>
            <Header as="h2">Happiness Result: Some Happiness</Header>
            <p>
                Your Score is {happinessResult}. Although your score is not greatly elevated, this is enough happiness to take the joy out of life.
            </p>
            <br></br>
            <p>
                If you want to change the way you're thinking and feeling--and want to feel happier--then you'll also have to do the exercises given by your coach.
                 Are you willing to do them? Let's find out! Take the Willingness Test on the next page.
            </p>
        </Container> 
    } else if (happinessResult >= 6 && happinessResult <= 10) {
        return <Container>
            <Header as="h2">Happiness Result: Moderate Happiness</Header>
            <p>
                Your Score is {happinessResult}. You seem to be feeling moderately positive. That's good! I'd love to see your scores increase even more.
            </p>
            <br></br>
            <p>
                If you want to change the way you're thinking and feeling--and want to feel happier--then you'll also have to do the exercises given by your coach.
                 Are you willing to do them? Let's find out! Take the Willingness Test on the next page.
            </p>
        </Container> 
    } else if (happinessResult >= 11 && happinessResult <= 15) {
        return <Container>
            <Header as="h2">Happiness Result: A lot of Happiness</Header>
            <p>
                Your Score is {happinessResult}. You seem to be feeling very positive and happy, but there's room for feeling even happier.
            </p>
            <br></br>
            <p>
                If you want to change the way you're thinking and feeling--and want to feel happier--then you'll also have to do the exercises given by your coach.
                 Are you willing to do them? Let's find out! Take the Willingness Test on the next page.
            </p>
        </Container> 
    } else if (happinessResult >= 16 && happinessResult <= 19) {
        return <Container>
            <Header as="h2">Happiness Result: Extreme Happiness</Header>
            <p>
                Your Score is {happinessResult}. Your score is in a range that is really good. You're feeling extremely positive in at least one of the five areas on the test.
                 Way to go! there's still a little room for feeling even better.
            </p>
            <br></br>
            <p>
                If you want to change the way you're thinking and feeling--and want to feel happier--then you'll also have to do the exercises given by your coach.
                 Are you willing to do them? Let's find out! Take the Willingness Test on the next page.
            </p>
        </Container>     
    } else {
        return <Container>
            <Header as="h2">Happiness Result: Tremendous Happiness</Header>
            <p>
                Your Score is {happinessResult}! This is fabulous!
            </p>
        </Container> 
    }
}

export const HappinessResult = () => {
    const happinessResult = +sessionStorage.getItem("HappinessTest")
    return (
        <>
            <DisplayCorrectResult key='6' happinessResult={happinessResult}/>

            <Button>
                <Link to="/WillingnessTest">Continue to Willingness Test</Link> 
            </Button>
        </>
    )
}