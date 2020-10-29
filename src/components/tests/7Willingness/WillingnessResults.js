//Calculates WillingnessResult
import React from 'react'
import { useHistory } from "react-router-dom"
import { Container, Header, Button, Form } from 'semantic-ui-react'

const DisplayCorrectResult = ({willingnessResult}) => {
    if (willingnessResult === 0) {
        return <Container>
            <Header as="h2">Willingness Result: Unwilling</Header>
            <p>
                Your Score is {willingnessResult}. Right now, you don't seem willing to do the exercises from your coach.
                 I totally get it and appreciate the fact that you are taking the steps to get better at all.
            </p>
            <br></br>
            <p>
                Congratulations! You made it through to the end. 
            </p>
        </Container> 
    } else if (willingnessResult >= 1 && willingnessResult <= 5) {
        return <Container>
            <Header as="h2">Willingness Result: Minimally Willing</Header>
            <p>
                Your Score is {willingnessResult}. It looks like you're not particularly enthusiastic about doing the exercises, which is totally understandable.
                 I hope you'll try a few of them, and if you like them, then you may get in the groove and do even more.
            </p>
            <br></br>
            <p>
                Congratulations! You made it through to the end. 
            </p>
        </Container> 
    } else if (willingnessResult >= 6 && willingnessResult <= 10) {
        return <Container>
            <Header as="h2">Willingness Result: Somewhat to Moderately Willing</Header>
            <p>
                Your Score is {willingnessResult}. You are somewhat willing to do the exercises, but perhaps a bit ambivalent.
                 I appreciate that you're open to the possibility of doing the exercises.
            </p>
            <br></br>
            <p>
                Congratulations! You made it through to the end. 
            </p>
        </Container> 
    } else if (willingnessResult >= 11 && willingnessResult <= 15) {
        return <Container>
            <Header as="h2">Willingness Result: Very Willing</Header>
            <p>
                Your Score is {willingnessResult}. You seem to be pretty willing to do the exercises.
            </p>
            <br></br>
            <p>
                Congratulations! You made it through to the end. 
            </p>
        </Container> 
    } else if (willingnessResult >= 16 && willingnessResult <= 19) {
        return <Container>
            <Header as="h2">Willingness Result: Extremely Willing</Header>
            <p>
                Your Score is {willingnessResult}. Your score is in a great range! You're willing to put forth extra effort to learn how to change the way you think and feel.
            </p>
            <br></br>
            <p>
                Congratulations! You made it through to the end. 
            </p>
        </Container>     
    } else {
        return <Container>
            <Header as="h2">Willingness Result: Totally Willing</Header>
            <p>
                Your Score is {willingnessResult}! This is fabulous!
            </p>
            <br></br>
            <p>
                Congratulations! You made it through to the end. 
            </p>
        </Container> 
    }
}

const SaveMoodJournalData = (MoodJournalEntry) => {
    return fetch("http://localhost:8088/testResults", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(MoodJournalEntry)
            })
            .then(clearMoodJournal)      
}

const MoodJournalCreator = () => {
    let moodJournal = {}

    const clientId = +localStorage.getItem("activeClient")
    const depressionTest = +sessionStorage.getItem("DepressionTest")
    const anxietyTest = +sessionStorage.getItem("AnxietyTest")
    const angerTest = +sessionStorage.getItem("AngerTest")
    const satisfactionTest = +sessionStorage.getItem("SatisfactionTest")
    const temptationsTest = +sessionStorage.getItem("TemptationsTest")
    const happinessTest = +sessionStorage.getItem("HappinessTest")
    const willingnessTest = +sessionStorage.getItem("WillingnessTest")

    return moodJournal = {
        clientId: clientId,
        date: Date.now(),
        depression_test: depressionTest,
        anxiety_test: anxietyTest,
        anger_test: angerTest,
        satisfaction_test: satisfactionTest,
        temptations_test: temptationsTest,
        happiness_test: happinessTest,
        willingness_test: willingnessTest
    }
}

const clearMoodJournal = () => {
    sessionStorage.removeItem("DepressionTest")
    sessionStorage.removeItem("AnxietyTest")
    sessionStorage.removeItem("AngerTest")
    sessionStorage.removeItem("SatisfactionTest")
    sessionStorage.removeItem("TemptationsTest")
    sessionStorage.removeItem("HappinessTest")
    sessionStorage.removeItem("WillingnessTest")
}


export const WillingnessResult = () => {
    const history = useHistory()

    const handleFinalizeJournal = () => {
        if (sessionStorage.getItem("DepressionTest") && sessionStorage.getItem("AnxietyTest") && sessionStorage.getItem("AngerTest") && sessionStorage.getItem("SatisfactionTest") && sessionStorage.getItem("TemptationsTest") && sessionStorage.getItem("HappinessTest") && sessionStorage.getItem("WillingnessTest")){
            SaveMoodJournalData(MoodJournalCreator())
            .then(history.push("/Client"))
        } else {
            alert("You have missing tests and must start back at the beginning")
            history.push("/coach")
        } 
    }
    const willingnessResult = +sessionStorage.getItem("WillingnessTest")
    return (
        <>
            <DisplayCorrectResult key='7' willingnessResult={willingnessResult}/>
            <Button type="submit" onClick={handleFinalizeJournal}>
                Save your Mood Journal
            </Button>
        </>
    )
}