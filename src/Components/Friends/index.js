import React from 'react';
import { Card, Popup, Image, Container} from 'semantic-ui-react'
import authorImage from '../../images/article.jpg'
import * as FriendsData from '../../friends'
import './friends.css'

const Friend = () => {
    return (
        <div className="main-wrap">
            <Container>
                <div className="friend-wrap">
                {FriendsData.users.map((data, index) => (
                    <Popup
                        className="popup-wrap"
                        key={index}
                        trigger={
                            <Card className="friend-list">
                                <div className="friend-img">
                                    <Image src={authorImage} />
                                </div>
                                <Card.Content>
                                    <Card.Header>{data.Name}</Card.Header>
                                </Card.Content>
                            </Card>
                        }
                    >
                        <Popup.Header>{data.name}</Popup.Header>
                        <Popup.Content>
                            <span>Age: {data.age}</span>
                            <p>{data.description}</p>
                        </Popup.Content>
                    </Popup>
                ))

                }
                </div>
            </Container>
        </div>
    )
};

export default Friend
