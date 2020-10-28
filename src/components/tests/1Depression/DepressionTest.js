//Hosts all choices of questions and potential answers for the Depression Test and sends the answers to be stored in Session Storage
import React, { useState, useRef } from 'react'
import { useHistory } from "react-router-dom"
import { Form, Header, Select, Container, Button } from 'semantic-ui-react'

const depressionChoices = [
    { key: '0', text: '0 - Not at all', value: 0 },
    { key: '1', text: '1 - Somewhat', value: 1 },
    { key: '2', text: '2 - Moderately', value: 2 },
    { key: '3', text: '3 - A lot', value: 3 },
    { key: '4', text: '4 - Extremely', value: 4 }
  ]

export const DepressionTest = props => {
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
            const DepressionTest = firstQuestion + secondQuestion + thirdQuestion + fourthQuestion + fifthQuestion
            sessionStorage.setItem("DepressionTest", DepressionTest)
            history.push("/DepressionResult")
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

        <Form widths='equal' className="tests" onSubmit={saveTestResults}>
            <Header as='h2'>Depression Test</Header>
            <Container textAlign='center'>
                Instructions: 
                Select one choice per question to indicate how you’re feeling right now.
                Answer all items.
            </Container>
            <Form.Field
                onChange={handleDropdownOne}
                required
                inline
                control={Select}
                label='1. Sad or down in the dumps'
                options={depressionChoices}
                placeholder='How do you feel Now?'
            />
            <Form.Field
                onChange={handleDropdownTwo}
                required
                inline
                control={Select}
                label='2. Discouraged or hopeless'
                options={depressionChoices}
                placeholder='How do you feel Now?'
            />
            <Form.Field
                onChange={handleDropdownThree}
                required
                inline
                control={Select}
                label='3. Low in self-esteem, inferior, or worthless'
                options={depressionChoices}
                placeholder='How do you feel Now?'
            />
            <Form.Field
                onChange={handleDropdownFour}
                required
                inline
                control={Select}
                label='4. Unmotivated to do things'
                options={depressionChoices}
                placeholder='How do you feel Now?'
            />
            <Form.Field
                onChange={handleDropdownFive}
                required
                inline
                control={Select}
                label='5. Decreased pleasure or satisfaction in life'
                options={depressionChoices}
                placeholder='How do you feel Now?'
            />
            <Form.Field>
                <Button type="submit"> Depression Results </Button>
            </Form.Field>
        </Form>
    </>
    )
}