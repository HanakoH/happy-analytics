import React, { useContext, useEffect, useState } from "react"
import { ClientContext } from "../clients/ClientProvider"
import { useParams, useHistory } from "react-router-dom"
import { Card, Container, Button } from "semantic-ui-react"
import { ClientDetailCard } from "./ClientDetailCard"

export const ClientDetailForCoach = () => {
	const { getClientById, deleteClient } = useContext(ClientContext)
	
	const [client, setClient] = useState({})
	
	const {clientId} = useParams();
	const history = useHistory();
	 
    useEffect(() => {
		getClientById(clientId)
		.then((res) => {
			setClient(res)
		})
			}, [])


    return (
		<Container className="client">
				<h3 className="client__name">{client.first_name} {client.last_name}</h3>
				<Card.Group textAlign="center" className="client__journals">
					{
						client.testResults?.map(testResults => {
							return <ClientDetailCard key={testResults.id} testResults={testResults}  />
						})
					}
				</Card.Group>
				<Button style={{ margin: '1em' }} onClick={
					() => {
						deleteClient(client.id)
							.then(() => {
								history.push("/Coach")
							})
					}}>Delete Client
				</Button>
		</Container>
    )
}