import React from 'react'
import { Row, Col, Container, Form,InputGroup,FormControl,Button } from 'react-bootstrap'

function Footer() {
    return(
        <React.Fragment>
            <Container>
                <Row className="mt-5">
                    <Col md={2} xl={2} sm={4}>
                        <h5> sell </h5>
                        <div>Nordic Skiing</div>
                        <div> Snowboarding</div>
                        <div> Snowplow</div>
                    </Col>
                    <Col md={2} xl={2} sm={4}>
                        <h5>.</h5>
                        <div>Mobile commerce</div>
                        <div>DropShoping</div>
                        <div>website development</div>
                    </Col>
                    <Col md={2} xl={2} sm={4}>
                        <h5>.</h5>
                        <div>Point sale</div>
                        <div>Hardware</div>
                        <div>software</div>
                    </Col>
                    <Col >
                        <h5>Promo</h5>
                        <div className="bg-primary text-center" >
                            <img src="/shoes.png" alt="shoes" width="70px" className='mt-3 mb-3'/>                            
                        </div>
                        <h6>finding your profile shoes</h6>
                    </Col>
                    <Col md={3} xl={3} sm={4}>
                    <h6>Contact info</h6>
                    <div><i class="fas fa-map-marker-alt fa-lg" style={{color:"#5f7ab7"}}></i>{` `}Address #789/3 mohali nepal</div>
                    <div><i class="fas fa-phone-alt fa-lg" style={{color:"#5f7ab7"}}></i>{` `}94923892822</div>
                    <div><i class="fas fa-envelope fa-lg" style={{color:"#5f7ab7"}}></i>{` `}emailaddress@domain.com</div>
                    <h6>Subscribe</h6>
                    <div className="d-flex">
                        <div>
                        <Form.Control type="email" placeholder="Enter email" className="rounded-0"  />
                        </div>
                        <div>
                            <Button variant="primary" type="submit" className="rounded-0">
                                Submit
                            </Button>
                        </div>
                    </div>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    )
}
export default Footer   