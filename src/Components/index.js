import React, {useState} from 'react'
import HomePageComponent from './Home'
import FriendPageComponent from './Friends'
import {Button, Container, Grid} from "semantic-ui-react";
import './header.css';

const TabComponent = () => {
    const [selectedTab, setSelectedTab] = useState('Home')
    return (
        <div>
            <div className="header-main">
                <Container>
                    <Grid columns={2}>
                        <Grid.Row className="header-row">
                            <Grid.Column>
                                <h4>Test task</h4>
                            </Grid.Column>
                            <Grid.Column>
                                <div className="menu-list">
                                    <Button className={selectedTab === "Home" ? "active" : ""} onClick={() => setSelectedTab('Home')}>Home</Button>
                                    <Button className={selectedTab === "friends" ? "active" : ""} onClick={() => setSelectedTab('friends')}>Friends</Button>
                                </div>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Container>
            </div>
            {selectedTab === "Home" && <HomePageComponent/>}
            {selectedTab === "friends" && <FriendPageComponent/>}
        </div>
    )
}

export default TabComponent