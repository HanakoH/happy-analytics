import React, { useRef } from "react"
import { Button, Form, Header, Container } from 'semantic-ui-react'
import { useHistory } from "react-router-dom"
import "./Register.css"


export const ClientLogin = props => {
    const email = useRef()
    const existDialog = useRef()
    const history = useHistory()

    const existingUserCheck = () => {
        return fetch(`http://localhost:8088/clients?email=${email.current.value}`)
            .then(res => res.json())
            .then(user => user.length ? user[0] : false)
    }

    const handleLogin = (e) => {
        e.preventDefault()

        existingUserCheck()
            .then(exists => {
                if (exists) {
                    localStorage.setItem("activeClient", exists.id)
                    localStorage.setItem("clientName", exists.first_name)
                    history.push("/client")
                } else {
                    existDialog.current.showModal()
                }
            })
    }

    return (
        <main className="container--login">
            <dialog className="dialog dialog--auth" ref={existDialog}>
                <div>User does not exist</div>
                <button className="button--close" onClick={e => existDialog.current.close()}>Close</button>
            </dialog>

            <Container>
                <Form className="form--login" onSubmit={handleLogin}>
                    <Header as='h1'>Client Portal for Happy Analytics</Header>
                    <Header as='h3'>Please sign in</Header>
                    <Form.Field>
                        <label>First Name</label>
                        <input placeholder='First Name' autoFocus/>
                    </Form.Field>
                    <Form.Field>
                        <label htmlFor="inputEmail"> Email address </label>
                        <input ref={email} type="email"
                            id="email"
                            className="form-control"
                            placeholder="Email address"
                            required />
                    </Form.Field>
                    <Form.Field>
                        <Button type="submit">
                            Sign in
                        </Button>
                    </Form.Field>
                </Form>
            </Container>
        </main>
    )
}