//Hosts all choices of questions and potential answers for the Willingness Test and sends the answers to be stored in Session Storage
import React, { useState, useRef } from 'react'
import { useHistory } from "react-router-dom"
import { Form, Header, Select, Container, Button } from 'semantic-ui-react'

const WillingnessChoices = [
    { key: '0', text: '0 - Do not agree', value: 0 },
    { key: '1', text: '1 - Agree slightly', value: 1 },
    { key: '2', text: '2 - Agree moderately', value: 2 },
    { key: '3', text: '3 - Agree strongly', value: 3 },
    { key: '4', text: '4 - Agree completely', value: 4 }
  ]

export const WillingnessTest = props => {
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
            const WillingnessTest = firstQuestion + secondQuestion + thirdQuestion + fourthQuestion + fifthQuestion
            sessionStorage.setItem("WillingnessTest", WillingnessTest)
            history.push("/WillingnessResult")
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
        <Container style={{ marginTop: '7em' }}>
        <Form widths='equal' className="tests" onSubmit={saveTestResults}>
            <Header as='h2'>Willingness Test</Header>
            <Container textAlign='center'>
                Instructions: 
                Select one choice per question to indicate how strongly you agree with each of the following statements.
                Answer all items.
            </Container>
            <Form.Field
                onChange={handleDropdownOne}
                required
                inline
                control={Select}
                label="1. I'm willing to do the exercises from my coach this week."
                options={WillingnessChoices}
                placeholder='How strongly do you agree?'
            />
            <Form.Field
                onChange={handleDropdownTwo}
                required
                inline
                control={Select}
                label="2. I'm willing to do the exercises even if I am not in the mood."
                options={WillingnessChoices}
                placeholder='How strongly do you agree?'
            />
            <Form.Field
                onChange={handleDropdownThree}
                required
                inline
                control={Select}
                label="3. I'm willing to do the exercises even if I feel hopeless or unmotivated."
                options={WillingnessChoices}
                placeholder='How strongly do you agree?'
            />
            <Form.Field
                onChange={handleDropdownFour}
                required
                inline
                control={Select}
                label="4. I'm willing to do them even if I feel overwhelmed or tired."
                options={WillingnessChoices}
                placeholder='How strongly do you agree?'
            />
            <Form.Field
                onChange={handleDropdownFive}
                required
                inline
                control={Select}
                label="5. I'm willing to do them even if they seem difficult at first."
                options={WillingnessChoices}
                placeholder='How strongly do you agree?'
            />
            <Form.Field>
                <Button type="submit"> Willingness Results </Button>
            </Form.Field>
        </Form>
        </Container>
    </>
    )
}