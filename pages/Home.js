import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Card, Button, Container} from "react-bootstrap";
// import shoesimage from '../assets/images/shoes.png'
// import shirt1 from '../assets/images/shirt1.jpg'
// import shirt2 from '../assets/images/shirt2.jpg'
// import iphone from '../assets/images/iphone.jfif'
const Home = () => {
  return (
    <React.Fragment>
      <Container fluid>
      <Row className="bg-info ">
        <Col sm={12} xs={12} lg={6} md={6}>
          <img src="/shoes.png" alt="shoesImage" className="Homeshoes "/>
        </Col>
        <Col  sm={12} xs={12} lg={6} md={6}>
        <Card style={{ width: '18rem' }} className="bg-info border-0 mt-5">
          <Card.Body className="mt-3">
            <Card.Title className="font-weight-bold"><h3>Finding your</h3></Card.Title>
            <Card.Title className="font-weight-bold"><h3>perfect shoes</h3></Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </Card.Text>
            <Button variant="primary">SHOP NOW</Button>
          </Card.Body>
        </Card>
        </Col>
      </Row>
      </Container>
      
      <Container className="mb-5">
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
          <Col xs={12} sm={12} md={4} xl={4} lg={4}>
            <div className="collections position-relative">
              <div>
                <img src="shirt1.jpg" alt="shirt1" height="100%"/>
              </div>
              <div className="collection-child" >
                <h6 className="text-white font-weight-normal">collection</h6>
                <h4 className="text-white font-weight-normal">Women</h4>
              </div>
            </div>
            
          </Col>
          <Col xs={12} sm={12} md={4} xl={4} lg={4}>
            <div className="collections position-relative">
              <img src="/shirt2.jpg" alt="shirt2"  height="100%"/>
            </div>
            <div className="collection-child ml-3">
              <h6 className="text-white font-weight-normal">collection</h6>
              <h4 className="text-white font-weight-normal">Women</h4>
            </div>
          </Col>
          <Col xs={12} sm={12} md={4} xl={4} lg={4}>
            <div className="collections position-relative">
              <img src="/shirt2.jpg"alt="shirt2"  height="100%"/>
            </div>
            <div className="collection-child ml-3">
              <h6 className="text-white font-weight-normal">collection</h6>
              <h4 className="text-white font-weight-normal">Women</h4>
            </div>
          </Col>
        </Row>
      </Container>
      <div className=" mb-5 bg-light">
      <Container>
        <div className="mt-5"></div>
        <hr className="mt-2" style={{width:"50px", height:"1px",backgroundColor:"grey" ,justifyContent:"center"}}></hr>
        <div className="text-center"><h4>Featured Products</h4></div>
        <Row >
          <Col xs={12} sm={12} md={4} lg={4} className="mb-5">
            <Card style={{ width: '15rem',}}>
              <Card.Img variant="top" src="/shirt2.jpg"  />
              <Card.Body className="text-center">
                <h6 className="text-primary">Tank Top</h6>
                <h6>Finding perfect t-shirt</h6>
                <h6 className="text-primary"> $50</h6>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} sm={12} md={4} lg={4} className="mb-5" >
            <Card style={{ width: '15rem',}}>
              <Card.Img variant="top" src="/shirt1.jpg"  />
              <Card.Body className="text-center">
                <h6 className="text-primary">Tank Top</h6>
                <h6>Finding perfect t-shirt</h6>
                <h6 className="text-primary"> $50</h6>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} sm={12} md={4} lg={4} className="mb-5">
            <Card style={{ width: '15rem',}}>
              <Card.Img variant="top" src="/shirt1.jpg"  />
              <Card.Body className="text-center">
                <h6 className="text-primary">Tank Top</h6>
                <h6>Finding perfect t-shirt</h6>
                <h6 className="text-primary"> $50</h6>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      </div>
      <hr className="mt-2" style={{width:"50px", height:"1px",backgroundColor:"blue" ,justifyContent:"center"}}></hr>
      <div className="text-center"><h4>Big Sale!</h4></div>
      <Container >
        <Row className="mt-4">
          <Col xs={12} sm={12} lg={6} md={6}>
            <div >
            <img src="/iphone.jfif" alt="shirt1" class="img-fluid" width="100%"/>
            </div>
          </Col>
          <Col xs={12} sm={12} lg={6} md={6}>
          <div className="text-center" style={{marginTop:"100px"}}>
            <h3 className="text-primary mb-3">50% less in all items</h3>
              <h6>
                <small>
                  <p>Some quick example text to build on the some fox are</p> 
                  <p>Some quick example text to build on the how are</p>
                  <p>Some quick example text to build on the</p>
                </small>
              </h6>
              <Button variant="primary" className="mt-2">Go somewhere</Button>
          </div>
          </Col>
        </Row>
        
      </Container> 
      

      
      </React.Fragment>

  );
};

export default Home;
