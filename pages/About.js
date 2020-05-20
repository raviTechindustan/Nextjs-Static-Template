import React from "react";
import { Breadcrumb, Container, Row, Col, Button, Card } from 'react-bootstrap'
import Navbar from './Navbar'
import Header from './Header'
import Footer from './Footer'
const About = () => {
    return (
        <React.Fragment>
            <Header />
            <Navbar />
            <div style={{backgroundColor:"#e9ecef"}}>
                <Container>
                <Breadcrumb className="bg-secondary">
                <Breadcrumb.Item >Home</Breadcrumb.Item>
                <Breadcrumb.Item >About</Breadcrumb.Item>
            </Breadcrumb>
                </Container>
            </div>
            <Container >
                <Row className="mt-4">
                <Col xs={12} sm={12} lg={6} md={6}>
                    <div className="AboutBackground">
                    </div>
                </Col>
                <Col xs={12} sm={12} lg={6} md={6} >
                <div className="ml-5"> 
                    <div className="" style={{width:"50px", height:"2px",backgroundColor:"blue"}}></div>
                    <div className="mt-2" ><h3>How We Started</h3></div>
                    <div style={{marginTop:"50px"}}>
                        <div>
                            Indicate the current page’s location within a navigational hierarchy that automatically adds separators via CSS. Add active prop to active Breadcrumb.Item . Do not set both active and href attributes. active overrides href and span element is rendered instead of a .
                            Indicate the current page’s location within a navigational hierarchy that automatically adds separators via CSS. Add active prop to active Breadcrumb.Item . Do not set both active and href attributes. active overrides href and span element is rendered instead of a .
                        </div>
                    </div>
                </div>
                </Col>
                </Row>
                <Container fluid>
                <hr className="mt-5" style={{width:"50px", height:"1px",backgroundColor:"blue" ,justifyContent:"center"}}></hr>
                <div className="text-center"><h4>The Team</h4></div>
                <Row className="mt-5">
                <Col xs={6} sm={6} md={3} lg={3}>  
                    <div className="text-center text-secondary">
                        <img src='/shirt2.jpg' height="100px" width="100px" className="rounded-circle mb-3"/>
                        <h4>Elixant  Gramhs</h4>
                        <div>CEO/Co-Founder</div>
                        <p> Indicate the current page’s location within a navigational hierarchy that automatically adds separators via CSS. Add active prop to active Breadcrumb.Item . Do not set 
                        </p>
                    </div>
                </Col>
                <Col xs={6} sm={6} md={3} lg={3}>  
                    <div className="text-center text-secondary">
                        <img src='/shirt2.jpg'  height="100px" width="100px" className="rounded-circle mb-3"/>
                        <h4>Elixant  Gramhs</h4>
                        <div>CEO/Co-Founder</div>
                        <p> Indicate the current page’s location within a navigational hierarchy that automatically adds separators via CSS. Add active prop to active Breadcrumb.Item . Do not set 
                        </p>
                    </div>
                </Col>
                <Col xs={6} sm={6} md={3} lg={3}>  
                    <div className="text-center text-secondary">
                        <img src='/shirt2.jpg'  height="100px" width="100px" className="rounded-circle mb-3"/>
                        <h4>Elixant  Gramhs</h4>
                        <div>CEO/Co-Founder</div>
                        <p> Indicate the current page’s location within a navigational hierarchy that automatically adds separators via CSS. Add active prop to active Breadcrumb.Item . Do not set 
                        </p>
                    </div>
                </Col>
                <Col xs={6} sm={6} md={3} lg={3}>  
                    <div className="text-center text-secondary">
                        <img src='/shirt2.jpg'  height="100px" width="100px" className="rounded-circle mb-3"/>
                        <h4>Elixant  Gramhs</h4>
                        <div>CEO/Co-Founder</div>
                        <p> Indicate the current page’s location within a navigational hierarchy that automatically adds separators via CSS. Add active prop to active Breadcrumb.Item . Do not set 
                        </p>
                    </div>
                </Col>
                </Row>
                
                <Row>
                    <Col sm={12} xs={12} md={4} lg={4}>
                        <Card style={{ width: '18rem' }} className="border-0 mt-5">
                        <Card.Body className="mt-3">
                            <Card.Title className="font-weight-bold">FREE SHIPING</Card.Title>
                            <Card.Text className="font-weight-light">
                            <h6>
                                <small>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </small>
                            </h6>
                            </Card.Text>
                        </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={12} xs={12} md={4} lg={4}>
                        <Card style={{ width: '18rem' }} className="border-0 mt-5">
                        <Card.Body className="mt-3">
                            <Card.Title className="font-weight-bold">FREE RETURNS</Card.Title>
                            <Card.Text className="font-weight-light">
                            <h6>
                                <small>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </small>
                                </h6>
                            </Card.Text>
                        </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={12} xs={12} md={4} lg={4}>
                        <Card style={{ width: '18rem' }} className="border-0 mt-5">
                        <Card.Body className="mt-3">
                            <Card.Title className="font-weight-bold">CUSTOMER SUPPORT</Card.Title>
                            <Card.Text >
                            <h6>
                                <small>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                </small>
                            </h6>
                            </Card.Text>
                        </Card.Body>
                        </Card>
                    </Col>
                </Row>
                </Container> 
            </Container>
            <Footer />
            <style JSX>{`
            .AboutBackground{
                width:90%;
                height:90%;
                position:absolute;
                background: url('/shirt2.jpg') no-repeat;
            }
        `}</style>
        </React.Fragment>
        
    )
}

export default About;
