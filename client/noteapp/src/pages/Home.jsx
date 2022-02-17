import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { notes } from "./notes";
const Home = () => {
  return (
    <Container>
      <Row className="d-flex justify-content-center">
        {notes.map((note) => {
          return (
            <Col  md={4} xl={3} className='m-3'>
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
