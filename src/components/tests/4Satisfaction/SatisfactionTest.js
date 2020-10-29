//Hosts all choices of questions and potential answers for the Satisfaction Test and sends the answers to be stored in Session Storage
import React, { useState, useRef } from 'react'
import { useHistory } from "react-router-dom"
import { Form, Header, Select, Container, Button } from 'semantic-ui-react'

const SatisfactionChoices = [
    { key: '0', text: '0 - Very dissatisfied', value: 0 },
    { key: '1', text: '1 - Moderately dissatisfied', value: 1 },
    { key: '2', text: '2 - Somewhat dissatisfied', value: 2 },
    { key: '3', text: '3 - Neutral', value: 3 },
    { key: '4', text: '4 - Somewhat satisfied', value: 4 },
    { key: '5', text: '5 - Moderately satisfied', value: 5 },
    { key: '6', text: '6 - Very satisfied', value: 6 }
  ]

export const SatisfactionTest = props => {
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
            const SatisfactionTest = firstQuestion + secondQuestion + thirdQuestion + fourthQuestion + fifthQuestion
            sessionStorage.setItem("SatisfactionTest", SatisfactionTest)
            history.push("/SatisfactionResult")
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
            <Header as='h2'>Satisfaction in your Relationships Test</Header>
            <Container textAlign='center'>
                Instructions: 
                Think about an important relationship, like your spouse, partner, friend, colleague, or family member.
                Answer all items.
            </Container>
            <Form.Field
                onChange={handleDropdownOne}
                required
                inline
                control={Select}
                label='1. Communication and openness'
                options={SatisfactionChoices}
                placeholder='How do you feel Now?'
            />
            <Form.Field
                onChange={handleDropdownTwo}
                required
                inline
                control={Select}
                label='2. Resolving conflicts'
                options={SatisfactionChoices}
                placeholder='How do you feel Now?'
            />
            <Form.Field
                onChange={handleDropdownThree}
                required
                inline
                control={Select}
                label='3. Degree of affection and caring'
                options={SatisfactionChoices}
                placeholder='How do you feel Now?'
            />
            <Form.Field
                onChange={handleDropdownFour}
                required
                inline
                control={Select}
                label='4. Intimacy and closeness'
                options={SatisfactionChoices}
                placeholder='How do you feel Now?'
            />
            <Form.Field
                onChange={handleDropdownFive}
                required
                inline
                control={Select}
                label='5. Overall satisfaction'
                options={SatisfactionChoices}
                placeholder='How do you feel Now?'
            />
            <Form.Field>
                <Button type="submit"> Satisfaction Results </Button>
            </Form.Field>
        </Form>
    </>
    )
}