import React, { useEffect } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { notes } from "./notes";
import axios from 'axios'
const Home = () => {
  useEffect(() => {
    
    
  }, [])
  
  return (
    <Container>
      <Row className="d-flex justify-content-center">
        {notes.map((note,index) => {
          return (
            <Col  md={4} xl={3} className='m-3' key={index}>
              <Card border="info">
                <Card.Header>Header</Card.Header>
                <Card.Body>
                  <Card.Title>Info Card Title</Card.Title>
                  <Card.Text>
                    {note.note}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          )
        })}
      </Row>
    </Container>
  );
};

export default Home;
