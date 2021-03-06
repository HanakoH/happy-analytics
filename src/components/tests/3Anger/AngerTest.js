//Hosts all choices of questions and potential answers for the Anger Test and sends the answers to be stored in Session Storage
import React, { useState, useRef } from 'react'
import { useHistory } from "react-router-dom"
import { Form, Header, Select, Container, Button, Progress } from 'semantic-ui-react'
import "../Tests.css"

const AngerChoices = [
    { key: '0', text: '0 - Not at all', value: 0 },
    { key: '1', text: '1 - Somewhat', value: 1 },
    { key: '2', text: '2 - Moderately', value: 2 },
    { key: '3', text: '3 - A lot', value: 3 },
    { key: '4', text: '4 - Extremely', value: 4 }
  ]

export const AngerTest = props => {
    const conflictDialog = useRef()
    const [firstQuestion, setFirstQuestion] = useState("")
    const [secondQuestion, setSecondQuestion] = useState("")
    const [thirdQuestion, setThirdQuestion] = useState("")
    const [fourthQuestion, setFourthQuestion] = useState("")
    const [fifthQuestion, setFifthQuestion] = useState("")
    const history = useHistory()

    const handleDropdownOne = (e, data) => {
        setFirstQuestion(data.value)
    }

    const handleDropdownTwo = (e, data) => {
        setSecondQuestion(data.value)
    }

    const handleDropdownThree = (e, data) => {
        setThirdQuestion(data.value)
    }

    const handleDropdownFour = (e, data) => {
        setFourthQuestion(data.value)
    }

    const handleDropdownFive = (e, data) => {
        setFifthQuestion(data.value)
    }

    const saveTestResults = (e) => {
        e.preventDefault()
        if (firstQuestion !== "" && secondQuestion !== "" && thirdQuestion !== "" && fourthQuestion !== "" && fifthQuestion !== "") {
            const AngerTest = firstQuestion + secondQuestion + thirdQuestion + fourthQuestion + fifthQuestion
            sessionStorage.setItem("AngerTest", AngerTest)
            history.push("/AngerResult")
        } else {
            conflictDialog.current.showModal()
        }
        
    }

    return (
    <>
        <dialog className="dialog dialog--password" ref={conflictDialog}>
                <div>You must choose an option for each question.</div>
                <button className="button--close" onClick={e => conflictDialog.current.close()}>Close</button>
        </dialog>
        <Progress value='2' total='7' progress='ratio' color='teal'/>
        <main>
        <Container>
            <Header as='h2'>Anger in your Relationships Test</Header>
            <Container textAlign='center' style={{ margin: '1em' }}>
                <p>Instructions: 
                Select one choice per question to indicate how you’re feeling right now.
                <b> Answer all items.</b></p>
            </Container>
        <Form widths='equal' className="tests" onSubmit={saveTestResults}>
            <Form.Field
                onChange={handleDropdownOne}
                required
                inline
                control={Select}
                label='1. Frustrated'
                options={AngerChoices}
                placeholder='How do you feel Now?'
            />
            <Form.Field
                onChange={handleDropdownTwo}
                required
                inline
                control={Select}
                label='2. Annoyed'
                options={AngerChoices}
                placeholder='How do you feel Now?'
            />
            <Form.Field
                onChange={handleDropdownThree}
                required
                inline
                control={Select}
                label='3. Resentful'
                options={AngerChoices}
                placeholder='How do you feel Now?'
            />
            <Form.Field
                onChange={handleDropdownFour}
                required
                inline
                control={Select}
                label='4. Angry'
                options={AngerChoices}
                placeholder='How do you feel Now?'
            />
            <Form.Field
                onChange={handleDropdownFive}
                required
                inline
                control={Select}
                label='5. Irritated'
                options={AngerChoices}
                placeholder='How do you feel Now?'
            />
            <Form.Field>
                <Button type="submit"> Anger Results </Button>
            </Form.Field>
        </Form>
        </Container>
        </main>
    </>
    )
}
