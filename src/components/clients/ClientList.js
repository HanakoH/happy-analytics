//Lists the Client Cards to DOM (to then be put in AppView)
import React, { useContext, useEffect } from "react"
import { Header, Button, Card } from "semantic-ui-react"
import { ClientContext } from "./ClientProvider"
import { ClientCard } from "./ClientCard"
import { useHistory } from "react-router-dom"

export const ClientList = () => {
  // This state changes when `getAnimals()` is invoked below
  const { clients, getClients } = useContext(ClientContext)

  const history = useHistory()
  const activeCoach = +localStorage.getItem("activeCoach")

  //useEffect - reach out to the world for something
  useEffect(() => {
    getClients()
  }, [])


  return (
    <>
      <Header centered as="h2">Clients</Header>
        <Button onClick={() => { history.push("/AddClient") }}>
            Add Client
        </Button>
      <Card.Group className="clients">
        {
          clients.map(client => {
              if (client.client_coach[0].coachId === activeCoach) {
                return <ClientCard key={client.id} client={client} />
              }
          })
        }
      </Card.Group>
    </>
  )
}