import React, { useState } from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import {Container, Image, Menu, Button } from 'semantic-ui-react'
import mainLogo from "./images/no_text_200x200.png";


export const ClientNavBar = () => {
    const [activeItem, setActiveItem] = useState({ activeItem: 'Home' })

    const handleItemClick = (e, { name }) => setActiveItem({ activeItem: name })

    const history = useHistory()

    const clearStorage = () => {
        localStorage.clear()
        history.push("/")
    }
   
        return (
            <div>
                <Menu fixed='top' inverted>
                <Container>
                    <Menu.Item 
                        className="HappyAnalytics"
                        style={{ fontSize: 24 }}
                        name="Home"
                        as={NavLink}
                        to="/Client" header
                        active={activeItem === 'Home'}>
                        <Image size='mini' src={mainLogo} style={{ marginRight: '1.5em' }} />
                            Happy Analytics
                    </Menu.Item>
                    <Menu.Item 
                        style={{ fontSize: 16 }}
                        name="Mood Test"
                        as={NavLink}
                        to="/DepressionTest" 
                        link
                        active={activeItem === 'Mood Test'} 
                        onClick={handleItemClick}>
                            Take Mood Test
                    </Menu.Item>
                    <Menu.Item 
                        style={{ fontSize: 16 }}
                        name="Analytics"
                        as={NavLink}
                        to="/Analytics" 
                        link
                        active={activeItem === 'Analytics'} 
                        onClick={handleItemClick}>
                            Analytics
                    </Menu.Item>
                    <Menu.Menu position="right">
                        <Button inverted onClick={clearStorage}>
                            Log Out
                        </Button>
                    </Menu.Menu>
                </Container>
                </Menu>
            </div>
        )
}
