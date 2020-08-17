import React, {useState} from 'react';
import { Grid, Image, GridColumn, GridRow, Container } from 'semantic-ui-react';
import { Card, Button } from 'semantic-ui-react'
import authorImage from '../../images/article.jpg'
import * as ArticleData from '../../data'
import './home.css'

const Home = () => {
    const [selectId, setSelectID] = useState('')

    const onShowMore = (value) => {
        setSelectID(value)
    }

    return (
        <>
            <Grid className="article-section">
                <Container>
                    <Grid className="article-block-row" divided>
                    {
                        ArticleData.articles.map((obj, idx) => (
                            <GridRow key={idx} className="article-block">
                                <GridColumn>
                                    <Card className="article">
                                        <Image src={authorImage} wrapped ui={false} alt='Picture' />
                                        <div className="articleDetail">
                                            <Card.Content>
                                                <Card.Header>
                                                    <span>Article {obj.id}:</span>
                                                    <span className="article-title">{obj.title}</span>
                                                </Card.Header>
                                                <Card.Meta>
                                                    <span>Author Name:</span>
                                                    <span>{obj.author}</span>
                                                </Card.Meta>
                                                <Card.Description>
                                                    {selectId === idx.toString() ? obj.description : obj.description.slice(0,50)}
                                                </Card.Description>
                                            </Card.Content>
                                            {
                                                obj.description.length > 50 && selectId !== idx.toString() &&
                                                <Card.Content >
                                                    <div>
                                                        <Button onClick={() => onShowMore(idx.toString())}>
                                                            Show More
                                                        </Button>
                                                    </div>
                                                </Card.Content>
                                            }
                                        </div>
                                    </Card>
                                </GridColumn>
                            </GridRow>
                        ))
                    }
                </Grid>
                </Container>
            </Grid>
        </>
    )
};

export default Home
