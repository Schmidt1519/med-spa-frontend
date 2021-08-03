import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import './results.css';

function Results(props) {
    // return(
    //     <div>
    //         <h1 className="results">Before / After </h1>
    //         <Container className="container-results">
    //         <Row>
    //         <Col>
    //         <div className="before-after">
    //             <h3>Before/After Botox Injection</h3>
    //             <img src="/images/before-after-botox.jpg" class="w3-image" alt="Before After Botox Injection"></img>
    //         </div>
    //         </Col>
    //         <Col>
    //         <div>
    //             <h3>Before/After-Microdermabrasion</h3>
    //             <img src="/images/before-after-microdermabrasion.jpg" class="w3-image" alt="Before After Microdermabrasion"></img>
    //         </div>
    //         </Col>
    //         </Row>
    //         </Container>
    //     </div>
    // )


    return(
        <div>
            <h1 className="results">Before / After </h1>
            <div className="before-after-b">
                <h3>Before/After Botox Injection</h3>
                <img src="/images/before-after-botox.jpg" class="w3-image" alt="Before After Botox Injection"></img>
            </div>

            <div className="before-after-m">
                <h3>Before/After-Microdermabrasion</h3>
                <img src="/images/before-after-microdermabrasion.jpg" class="w3-image" alt="Before After Microdermabrasion"></img>
            </div>

        </div>
    )


}

export default Results;
