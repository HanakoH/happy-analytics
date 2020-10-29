import React, { useState } from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import {Container, Image, Menu, Header } from 'semantic-ui-react'
import mainLogo from "./images/no_text_200x200.png";


export const CoachNavBar = () => {
    const [activeItem, setActiveItem] = useState({ activeItem: 'Home' })

    const handleItemClick = (e, { name }) => setActiveItem({ activeItem: name })

    const history = useHistory()

    const clearStorage = () => {
        localStorage.clear()
        history.push("/")
    }
   
        return (
            <div>
                <Menu secondary>
                <Container>
                    <Menu.Item 
                        className="HappyAnalytics"
                        style={{ fontSize: 24 }}
                        name="Home"
                        as={NavLink}
                        to="/Coach" header
                        active={activeItem === 'Home'}>
                        <Image size='mini' src={mainLogo} style={{ marginRight: '1.5em' }} />
                            Happy Analytics
                    </Menu.Item>
                    <Menu.Item 
                        style={{ fontSize: 16 }}
                        name="Add Client"
                        as={NavLink}
                        to="/AddClient" 
                        link
                        active={activeItem === 'Add Client'} 
                        onClick={handleItemClick}>
                            Add New Client
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
                    <Menu.Item position="right"
                        onClick={clearStorage}>
                            Log Out
                    </Menu.Item>
                </Container>
                </Menu>
            </div>
        )
    
}