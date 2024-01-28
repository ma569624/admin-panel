import React from 'react'
import { Col, Container, Row,  ListGroup, Nav, Tab } from 'react-bootstrap'

import Banner from '../../component/Banner'
import Feature from '../../component/Feature'
import Testimonial from '../../component/Testimonial'

const Home = () => {
    
    return (
        <Container>
            <Tab.Container id="left-tabs-example" defaultActiveKey="banner">
                <Row className='mt-3'>
                    <Col xs='12'>

                        <Nav variant="pills" className="flex-row">
                            <ListGroup horizontal>
                                <ListGroup.Item className='p-0'><Nav.Link eventKey="banner">Banners</Nav.Link></ListGroup.Item>
                                <ListGroup.Item className='p-0'><Nav.Link eventKey="feature">feature</Nav.Link></ListGroup.Item>
                                <ListGroup.Item className='p-0'><Nav.Link eventKey="testimonials">testimonials</Nav.Link></ListGroup.Item>
                            </ListGroup>

                        </Nav>
                    </Col>
                </Row>
                <Row>
                    <Col xs='12'>
                        <Tab.Content>
                            <Tab.Pane eventKey="banner">
                                <Banner />
                            </Tab.Pane>
                            <Tab.Pane eventKey="feature">
                                    <Feature />
                            </Tab.Pane>
                            <Tab.Pane eventKey="testimonials">
                                <Testimonial />
                            </Tab.Pane>
                        </Tab.Content>


                    </Col>
                </Row>
            </Tab.Container>
        </Container>
    )
}

export default Home
