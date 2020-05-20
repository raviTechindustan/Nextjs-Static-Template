import React from "react";

import { Breadcrumb, Col, Row, Container, Dropdown, Card, Form } from 'react-bootstrap'
import Header from "./Header";
import Footer from "./Footer";
import Navbar from './Navbar';
const Shop = () => {
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
            <Container>
                <Row>
                    <Col sm={12} xs={12} md={3} lg={3} >
                        <Col md={12} lg={12} className="border pt-3 pb-3">
                            <h6>CATEGORY</h6>
                            <div className="d-flex justify-content-between">
                                <div className="text-primary">Men</div>
                                <div>(2,220)</div>
                            </div>
                            <div className="d-flex justify-content-between">
                                <div className="text-primary">Women</div>
                                <div>(2,220)</div>
                            </div>
                            <div className="d-flex justify-content-between">
                                <div className="text-primary">Children</div>
                                <div>(2,220)</div>
                            </div>
                        </Col>
                        <Col md={12} lg={12} className="border mt-3 pt-3 pb-3">
                            <h6>FILTER BY PRICE</h6>
                            <Form>
                            <Form.Group controlId="formBasicRange">
                                <Form.Control type="range" />
                                <div>$75-$300</div>
                            </Form.Group>
                            </Form>
                            <h6>SIZE</h6>
                            <Form>
                                {['Small(1,432)','Medium(2,435)','Large(2,342)'].map((type,index) => (
                                    <div key={type} className="">
                                    <Form.Check 
                                        type="checkbox"
                                        id='checkbox'
                                        label={type}
                                    />
                                    </div>
                                ))}
                            </Form>
                            <h6 className="mb-2 mt-4">COLOR</h6>
                            <Form >
                                {['red','Green','purple','Blue'].map((type,index) => (
                                    <div key={type} >
                                    <Form.Check 
                                        type="radio"
                                        id='radio   '
                                        label={ type }
                                    />
                                    </div>
                                ))}
                            </Form>
                        </Col>
                    </Col>
                    <Col xs={12} sm={12} md={9} lg={9}>
                        <Col xs={12} sm={12} md={12} lg={12}>
                            <div className="d-flex justify-content-between">
                                <div>
                                    shop All
                                </div>
                                <div>
                                    <Dropdown>
                                        <Dropdown.Toggle variant="light" id="dropdown-basic" className="border-0 rounded-0 text-dark">
                                            LATEST
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                        </Dropdown.Menu>
                                        <Dropdown.Toggle variant="light" id="dropdown-basic" className="border-0 rounded-0 text-dark ml-2">
                                            REFRENCE
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} md={12} lg={12}>
                        {

                            [...Array(11)].map(value=> <Col xs={4} sm={4} md={4} lg={4} style={{display:"inline-block",marginBottom:"15px",marginTop:"10px"}}>
                            <Card style={{ width: '15rem'}}  >
                            <Card.Img variant="top" src="./shirt2.jpg" />
                            <Card.Body className="text-center">
                                <h6 className="text-primary">Tank Top</h6>
                                <h6>Finding perfect t-shirt</h6>
                                <h6 className="text-primary"> $50</h6>
                            </Card.Body>
                            </Card>
                            </Col>
                            )

                        }
                        </Col>
                        <Col xs={12} md={12} lg={12} sm={12} >
                            <div className="text-center mt-3"> 
                            {
                                ["<","1","2","3","4","5",">"].map(value=> {
                                    return(
                                        <div className="text-center border rounded-circle" style={{lineHeight: "25px",width:"30px",height:"30px",display:"inline-block"}} >
                                            {value}
                                        </div>
                                    )
                                })
                            }
                            </div>
                            
                        </Col>
                       
                    </Col>
                    </Row>
            </Container>          
            <hr className="mt-5" style={{width:"50px", height:"1px",backgroundColor:"blue" ,justifyContent:"center"}}></hr>
            <h5 className="text-center mt-2 mb-4">Category</h5> 
            <Container>
            <Row>
                    
                    <Col xs={12} sm={12} md={4} xl={4} lg={4}>
            <div className="collections position-relative">
              <div>
                <img src='/shirt1.jpg' alt="shirt1" height="100%"/>
              </div>
              <div className="collection-child" >
                <h6 className="text-white font-weight-normal">collection</h6>
                <h4 className="text-white font-weight-normal">Women</h4>
              </div>
            </div>
            
          </Col>
          <Col xs={12} sm={12} md={4} xl={4} lg={4}>
            <div className="collections position-relative">
              <img src='/shirt2.jpg' alt="shirt2"  height="100%"/>
            </div>
            <div className="collection-child ml-3">
              <h6 className="text-white font-weight-normal">collection</h6>
              <h4 className="text-white font-weight-normal">Women</h4>
            </div>
          </Col>
          <Col xs={12} sm={12} md={4} xl={4} lg={4}>
            <div className="collections position-relative">
              <img src='shirt2.jpg' alt="shirt2"  height="100%"/>
            </div>
            <div className="collection-child ml-3">
              <h6 className="text-white font-weight-normal">collection</h6>
              <h4 className="text-white font-weight-normal">Women</h4>
            </div>
          </Col>
                    </Row>

            </Container>
            <Footer />
        </React.Fragment>
    )
};

export default Shop ;