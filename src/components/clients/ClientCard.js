import React from "react"
import { Link } from "react-router-dom"
import { Card } from "semantic-ui-react"

export const ClientCard = ({ client }) => (
    <Card className="client">
        <Card.Content>
        <Card.Header as="h3" className="client__name">
            <Link to={`clients/${client.id}`}>
                {client.first_name} {client.last_name}
            </Link>
        </Card.Header>
        <Card.Meta></Card.Meta>
        <Card.Description>
          Number of Mood Journals completed: {client.testResults.length}
        </Card.Description>
      </Card.Content>
    </Card>
)