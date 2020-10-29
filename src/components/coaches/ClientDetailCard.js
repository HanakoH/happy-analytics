import React from 'react'
import { Card } from "semantic-ui-react"

export const ClientDetailCard = ({testResults}) => (
    <>
        <Card.Content>
            <Card.Header>{new Date(testResults.date).toLocaleString("en-US")}</Card.Header>
            <Card.Meta>Co-Worker</Card.Meta>
            <Card.Description>
                Depression Test Score = {testResults.depression_test} <br/>
                Anxiety Test Score = {testResults.anxiety_test} <br/>
                Anger in Relationships Score = {testResults.anger_test} <br/>
                Satisfaction in Relationships Score = {testResults.satisfaction_test} <br/>
                Temptations Score = {testResults.temptations_test} <br/>
                Happiness Score = {testResults.happiness_test} <br/>
                Willingness Score = {testResults.willingness_test}
            </Card.Description>
        </Card.Content>
    </>
)