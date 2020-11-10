//Form only Coaches can see to add new clients
import React, { useRef } from "react";
import { Header, Button, Form } from "semantic-ui-react"
import { useHistory } from "react-router-dom"


export const ClientForm = () => {

    const firstName = useRef()
    const lastName = useRef()
    const email = useRef()
    const conflictDialog = useRef()
    const history = useHistory()

    const existingUserCheck = () => {
        return fetch(`http://localhost:8088/clients?email=${email.current.value}`)
            .then(res => res.json())
            .then(user => !!user.length)
    }

    const handleRegister = (e) => {
        e.preventDefault()


        existingUserCheck()
            .then((userExists) => {
                if (!userExists) {
                    fetch("http://localhost:8088/clients", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            email: email.current.value,
                            first_name: firstName.current.value,
                            last_name: lastName.current.value
                        })
                    })
                        .then(_ => _.json())
                        .then(obj => {
                            const clientId = obj.id
                            const currentCoach = sessionStorage.getItem("activeCoach")
                            fetch("http://localhost:8088/client_coach", {
                                method: "POST",
                                headers: {
                                    "Content-Type": "application/json"
                                },
                                body: JSON.stringify({
                                    coachId: +currentCoach,
                                    clientId: clientId
                        })
                    })})
                        .then(history.push("/SuccessfullyAdded"))
                } else {
                    conflictDialog.current.showModal()
                }
            })
        
    }

    return (
        <main style={{ textAlign: "center" }}>

            <dialog className="dialog dialog--password" ref={conflictDialog}>
                <div>Account with that email address already exists</div>
                <button className="button--close" onClick={e => conflictDialog.current.close()}>Close</button>
            </dialog>

            <Form  widths='equal' className="form--login" onSubmit={handleRegister}>
                <Header as='h2' className="h2 mb-3 font-weight-normal">To add a new client add their first and last name and their email.</Header>
                <Form.Field>
                    <label htmlFor="firstName"> First Name </label>
                    <input ref={firstName} type="text" name="firstName" className="form-control" placeholder="First name" required autoFocus />
                </Form.Field>
                <Form.Field>
                    <label htmlFor="lastName"> Last Name </label>
                    <input ref={lastName} type="text" name="lastName" className="form-control" placeholder="Last name" required />
                </Form.Field>
                <Form.Field>
                    <label htmlFor="inputEmail"> Email address </label>
                    <input ref={email} type="email" name="email" className="form-control" placeholder="Email address" required />
                </Form.Field>
                <Form.Field>
                    <Button type="submit"> Add New Client </Button>
                </Form.Field>
            </Form>
        </main>
    )
}