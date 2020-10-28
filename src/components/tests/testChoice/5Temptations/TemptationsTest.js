//Hosts all choices of questions and potential answers for the Temptations Test and sends the answers to be stored in Session Storage
import React, { useState, useRef } from 'react'
import { useHistory } from "react-router-dom"
import { Form, Header, Select, Container, Button } from 'semantic-ui-react'

const TemptationsChoices = [
    { key: '0', text: '0 - Not at all', value: 0 },
    { key: '1', text: '1 - Slightly true', value: 1 },
    { key: '2', text: '2 - Moderately true', value: 2 },
    { key: '3', text: '3 - Very true', value: 3 },
    { key: '4', text: '4 - Completely true', value: 4 }
  ]

export const TemptationsTest = props => {
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
            const TemptationsTest = firstQuestion + secondQuestion + thirdQuestion + fourthQuestion + fifthQuestion
            sessionStorage.setItem("TemptationsTest", TemptationsTest)
            history.push("/TemptationsResult")
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
            <Header as='h2'>Temptations Test</Header>
            <Container textAlign='center'>
                Instructions: 
                Select one choice per question to indicate how much each statement describes how you have been feeling in the past week, including today.
                Answer all items.
            </Container>
            <Form.Field
                onChange={handleDropdownOne}
                required
                inline
                control={Select}
                label='1. Sometimes I crave drugs or alcohol.'
                options={TemptationsChoices}
                placeholder='How have you felt in the past week?'
            />
            <Form.Field
                onChange={handleDropdownTwo}
                required
                inline
                control={Select}
                label='2. Sometimes I have the urge to use drugs or alcohol.'
                options={TemptationsChoices}
                placeholder='How have you felt in the past week?'
            />
            <Form.Field
                onChange={handleDropdownThree}
                required
                inline
                control={Select}
                label='3. Sometimes I really want to use drugs or alcohol.'
                options={TemptationsChoices}
                placeholder='How have you felt in the past week?'
            />
            <Form.Field
                onChange={handleDropdownFour}
                required
                inline
                control={Select}
                label="4. Sometimes it's hard to resist the urge to use drugs or alcohol."
                options={TemptationsChoices}
                placeholder='How have you felt in the past week?'
            />
            <Form.Field
                onChange={handleDropdownFive}
                required
                inline
                control={Select}
                label='5. Sometimes I struggle with the temptation to use drugs or alcohol.'
                options={TemptationsChoices}
                placeholder='How have you felt in the past week?'
            />
            <Container>
                <p>
                    You are so close to finishing your full journal! Don't be tempted to stop now, you can do it!
                </p>
            </Container>
            <Form.Field>
                <Button type="submit"> Temptations Results </Button>
            </Form.Field>
        </Form>
    </>
    )
}