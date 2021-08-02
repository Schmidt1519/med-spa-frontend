import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import './home.css';

function Home(props) {
    return(
        <div>
            <Container>
            <Col className="vision"><h1>Our Vision</h1> 
            <p>Our vision is to instill confidence within people and provide every person with the opportunity to look and feel like the best version of themselves.</p>
            </Col>
            <Col className="team"><h1>Our Team</h1>
            <p>Our dedicated team of highly qualified staff is looking forward to providing you with the highest quality services and experience.</p>
            <p>Our aestheticians and injectors pride themselves on exceeding the highest standard of care. Excellent customer service and quality results allow us to consistently provide positive experiences to each client.</p>
            </Col>
            </Container>
        </div>
    )
}

export default Home;
