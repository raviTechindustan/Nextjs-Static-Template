import React from "react";
import { Container, Row, Col, Breadcrumb, Button, Form} from 'react-bootstrap'
import Header from "./Header";
import Navbar from './Navbar'
import Footer from './Footer'
const Catalogue = () => {
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
                <table className="table table-bordered text-center mt-3">
                    <thead>
                        <tr>
                        <th scope="col">Images</th>
                        <th scope="col">Product</th>
                        <th scope="col">Price</th>
                        <th scope="col">Total</th>
                        <th scope="col">Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <th scope="row"><img src='/shirt1.jpg' width="40px"/></th>
                        <td>Top Up T-Shirt</td>
                        <td>$49.00</td>
                        <td>$49.00</td>
                        <td><button type="button" class="btn btn-primary">X</button></td>
                        </tr>
                        <tr>
                        <th scope="row"><img src='shirt2.jpg' width="40px"/></th>
                        <td>Polo Shirt</td>
                        <td>$49.00</td>
                        <td>$49.00</td>
                        <td><button type="button" class="btn btn-primary">X</button></td>
                        </tr>
                    </tbody>
                </table>
                </Row>
            </Container>
            <Container>
                <Row>
                    <Col xs={6} sm={6} md={3} lg={3} className="mt-3">
                    <Button variant="primary" size="lg" block>
                        UPDATE CART
                    </Button>
                    </Col>
                    <Col xs={6} sm={6} md={3} lg={3} className="mt-3">
                    <Button variant="white" size="lg" block  className="text-primary border-primary">
                        CONTINUE SHOPPING
                    </Button>
                    </Col>
                    <Col xs={6} sm={6} md={3} lg={3}>
                    </Col>
                    <Col xs={6} sm={6} md={3} lg={3}>
                        <Button variant="white" size="lg" block  className="text-dark border-bottom">
                            CART TOTAL
                        </Button>
                    </Col>
                    <Col md={6} sm={6} lg={6}>
                        <h4 className="mt-4">Coupon</h4>
                        <Row>
                        <Col md={8} lg={8}>
                            <Form className="mt-3">
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Enter Code if you have </Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" />
                                    
                                </Form.Group>
                            </Form>
                        </Col>
                        <Col md={4} lg={4}>
                            <Button variant="primary" type="submit" className="mt-5">
                                    Submit
                            </Button>
                        </Col>
                        </Row>
                    </Col>
                    <Col xs={2} md={3} lg={3}>
                    </Col>
                    <Col xs={2} md={3} lg={3} className="mt-4">
                         <div className="d-flex justify-content-between">
                            <div className="text-primary">Men</div>
                            <div>(2,220)</div>
                        </div>
                        <div className="d-flex justify-content-between mt-3">
                            <div className="text-primary">Men</div>
                            <div>(2,220)</div>
                        </div>
                        <Button variant="primary" size="lg" block className="mt-3">
                            PROCEED TO CHECKOUT
                        </Button>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </React.Fragment>
            
        
    )
}

export default Catalogue;
