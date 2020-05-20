import React from "react";
// import './Header.css'
import styles from './Header.module.css'
import { Button, Col,Row } from 'react-bootstrap'
function Header() {
    return (
        <div>
            <Row>
                <Col xs={12} sm={12} lg={12} xl={12}>
                    <div className={`d-flex justify-content-around mt-2 mb-2 ${styles.headerborder}`} >
                        <div className="d-flex justify-content-around">
                        <i class="fas fa-search fa-lg" style={{margin:"5px"}}></i><i>search</i>
                        </div>
                        <div>
                            <Button variant="outline-secondary rounded-0 font-weight-bold headerborder">E-MART</Button>{' '}
                        </div>
                        <div>
                        <i class="far fa-user fa-lg" style={{margin:"10px"}}></i>
                        <i class="far fa-heart fa-lg" style={{margin:"10px"}}></i>
                        <i class="fas fa-cart-plus fa-lg" style={{margin:"10px"}}></i>
                        </div>
                    </div>
                </Col>
            </Row>
            
        </div>
    )
}
export default Header;