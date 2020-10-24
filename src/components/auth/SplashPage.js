//Page that asks visitors whether they are a coach or a client
import React from "react";
import { Header, Image } from "semantic-ui-react"
import { Link } from "react-router-dom"
import "./SplashPage.css"
import mainLogo from "./images/happy_analytics_200x200.png";

export const SplashPage = () => {

    return (
    <main>
        <Header as="h1">
            <Image src={mainLogo} className="headLogo" />
            Welcome To Happy Analytics
        </Header>
        <Header as="h3">Are you a Client or a Coach?</Header>
        <div className="choiceOfLogin">
            <section className="link--login">
                    <Link to="/client.login">I am a Client</Link>
            </section>
            <section className="link--login">
                    <Link to="/coach.login">I am a Coach</Link>
            </section>
        </div>
    </main>)
}