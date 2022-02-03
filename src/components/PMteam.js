// import React from 'react';
// import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBRow, MDBCol, MDBBtn } from 'mdb-react-ui-kit';

// export default function Team() {
//   return (
//     <MDBRow>
//       <MDBCol sm='6'>
//         <MDBCard>
//           <MDBCardBody>
//             <MDBCardTitle>Special title treatment</MDBCardTitle>
//             <MDBCardText>
//               With supporting text below as a natural lead-in to additional content.
//             </MDBCardText>
//             <MDBBtn href='#'>Go somewhere</MDBBtn>
//           </MDBCardBody>
//         </MDBCard>
//       </MDBCol>
//       <MDBCol sm='6'>
//         <MDBCard>
//           <MDBCardBody>
//             <MDBCardTitle>Special title treatment</MDBCardTitle>
//             <MDBCardText>
//               With supporting text below as a natural lead-in to additional content.
//             </MDBCardText>
//             <MDBBtn href='#'>Go somewhere</MDBBtn>
//           </MDBCardBody>
//         </MDBCard>
//       </MDBCol>
//     </MDBRow>
//   );
// }

import React from "react";
import { Card, ListGroup, Container, Row, Col, Button } from "react-bootstrap";

function PMteam() {
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
              <Card.Header style={{ color: "white", fontSize: "1.5rem" }}>
                <strong>TEAM MEMBERS</strong>
              </Card.Header>
              
              <ListGroup variant="flush">
                {/* <ListGroup.Item>Cras justo odio</ListGroup.Item> */}
                {/* <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                <ListGroup.Item>Vestibulum at eros</ListGroup.Item> */}
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
              <ListGroup variant="flush">
                {/* <ListGroup.Item>Cras justo odio</ListGroup.Item>
                <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                <ListGroup.Item>Vestibulum at eros</ListGroup.Item> */}
              </ListGroup>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default PMteam;
