import React, { useContext, useEffect, useState } from "react"
import { ClientContext } from "../clients/ClientProvider"
import { useParams } from "react-router-dom"
import { Card, Container } from "semantic-ui-react"
import { ClientDetailCard } from "../coaches/ClientDetailCard"

export const ClientDetailForClient = () => {
	const { getClientById } = useContext(ClientContext)
	
	const [client, setClient] = useState({})
	
	const {clientId} = useParams();
	
	 
    useEffect(() => {
		getClientById(clientId)
		.then((res) => {
			setClient(res)
		})
			}, [])


    return (
        <Container style={{ marginTop: '3em' }}>
			<section className="client">
			<h3 className="client__name">{client.first_name} {client.last_name}</h3>
			<Card.Group className="client__journals">
				{
					client.testResults?.map(testResults => {
						return <ClientDetailCard key={testResults.id} testResults={testResults}  />
					})
				}
			</Card.Group>
			</section>
        </Container>
    )
}