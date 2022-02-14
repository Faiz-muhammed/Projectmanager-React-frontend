import React, { useState } from "react";
import { Card, ListGroup, Container, Row, Col, Button } from "react-bootstrap";
import Modal from "react-modal";
import { TextField } from "@mui/material";
import Axios from "axios";

function PMteam() {
  const initialValues = { email: "", project: "" };
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [formValues, setFormValues] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = async (e) => {
    setModalIsOpen(false)
    e.preventDefault();
    try {
      const inviteData = {
        teamMemberEmail: formValues.email,
        memberProject: formValues.project,
      };
      console.log(inviteData);
      await Axios.post(
        "http://localhost:3001/api/manager/invite",
        inviteData
      ).then((res) => {
        console.log(res);
      });
    } catch (err) {
      console.error("this", err.response.data);
      let error = err.response.data;
    }
  };
  return (
    <>
      <Container>
        <Row>
          <Col>
            <Card
              style={{
                width: "45rem",
                marginTop: "10rem",
                height: "30rem",
                borderRadius: "6px",
                backgroundColor: "#303E72",
              }}
            >
              <Card.Header
                style={{
                  display: "flex",
                  color: "white",
                  fontSize: "1.5rem",
                  justifyContent: "space-between",
                }}
              >
                <strong>TEAM MEMBERS</strong>
                <Button
                  style={{ color: "white", backgroundColor: "#F14A16" }}
                  onClick={() => setModalIsOpen(true)}
                >
                  Add member
                </Button>
              </Card.Header>

              <ListGroup variant="flush">
                <div style={{ padding: "0.5rem" }}>
                  <Card
                    style={{
                      backgroundColor: "white",
                      height: "4rem",
                      marginTop: "0.5rem",
                    }}
                  >
                    <Card.Body>Muhammed faiz</Card.Body>
                  </Card>
                  <Card
                    style={{
                      backgroundColor: "white",
                      height: "4rem",
                      marginTop: "0.5rem",
                    }}
                  >
                    <Card.Body>Muhammed faiz</Card.Body>
                  </Card>
                  <Card
                    style={{
                      backgroundColor: "white",
                      height: "4rem",
                      marginTop: "0.5rem",
                    }}
                  >
                    <Card.Body>Muhammed faiz</Card.Body>
                  </Card>
                </div>
              </ListGroup>
            </Card>
          </Col>
          <Col>
            <Card
              style={{
                width: "30rem",
                marginTop: "10rem",
                height: "30rem",
                borderRadius: "6px",
              }}
            >
              <Card.Header>Details</Card.Header>
              <ListGroup variant="flush"></ListGroup>
            </Card>
          </Col>
        </Row>
      </Container>
      <Modal
        isOpen={modalIsOpen}
        style={{
          overlay: {
            position: "fixed",
            top: "25%",
            left: "45%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            width: "45%",
            height: "60%",
            transform: "translate(-40%, -10%)",
            backgroundColor: "rgba(255, 255, 255, 0.75)",
          },
        }}
      >
        <h2 style={{ display: "flex", justifyContent: "center" }}>
          INVITE TEAM MEMBER
        </h2>
        <form onSubmit={handleSubmit}>
          <div style={{ marginTop: "40px" }}>
            <TextField
              id="outlined-password-input"
              label="Email Id"
              type="email"
              name="email"
              value={formValues.email}
              onChange={handleChange}
              autoComplete="current-password"
              style={{ width: "80%" }}
            >
              mail id
            </TextField>
          </div>

          <div style={{ marginTop: "10px" }}>
            <TextField
              id="outlined-password-input"
              label="Project name"
              type="text"
              name="project"
              value={formValues.project}
              onChange={handleChange}
              autoComplete="current-password"
            >
              add to
            </TextField>
          </div>
          <Button style={{ marginTop: "20px", width: "10rem"}} type="submit">
            submit
          </Button>
          {/* <Button type="submit" onClick={() => setModalIsOpen(false)}>close</Button> */}
        </form>
      </Modal>
    </>
  );
}

export default PMteam;
