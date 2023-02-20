import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function PortfolioData(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button className="project-btn" onClick={handleShow}>
        View Website
      </button>
      <Modal show={show} onHide={handleClose} centered className="modal">
        <Modal.Header closeButton className="flex-column-reverse">
          <Modal.Title>
            <h1>{props.title}</h1>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row>
              <Col xs={12} md={8}>
                <div className="popUpLeft">
                  <img src={props.image} alt={props.name} className="appear" />
                </div>
              </Col>
              <Col xs={12} md={4}>
                <div className="popUpRight">
                  <h3>{props.subject}</h3>
                  <p>{props.description}</p>
                  <div className="proj-container">
                    <a href={props.github} target="_blank" rel="noreferrer noopener" className="proj-links proj-link-1">
                    View Code
                  </a>
                  <a href={props.websiteUrl} className="proj-links proj-link-2">
                    {" "}
                    View Project
                  </a>
                  </div>
                  
                </div>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default PortfolioData;
