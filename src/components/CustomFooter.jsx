// import React from 'react';
// import {  Container, Row, Col, Card, CardBody, CardTitle, CardLink  } from 'reactstrap';

// const CustomFooter = () => {
//   return (
//     <footer className="footer">
//       <Container >

// <Row className="justify-content-center">

//   <Col xs="12" sm="6" md="4">

//     <Card className="text-center">

//       <CardBody>

//         <CardTitle tag="h5">Brand Name</CardTitle>

//         <CardLink href="#">About Us</CardLink>

//         <CardLink href="#">Contact Us</CardLink>

//         <CardLink href="#">Privacy Policy</CardLink>

//       </CardBody>

//     </Card>

//   </Col>

// </Row>

// </Container>
//     </footer>
//   );
// }

// export default CustomFooter;

import React from 'react';
import { Container, Row, Col, Card, CardBody, CardTitle, CardLink } from 'reactstrap';

const Footer = () => {
  return (
    <footer className="footer">
      <Container fluid>
        <Row >
          <Col xs="12" sm="12" md="12">
            <Card>
              <CardBody>
                <CardTitle tag="h5">ProBlogger</CardTitle>
                <CardLink href="#">About Us</CardLink>
                <CardLink href="#">Contact Us</CardLink>
                <CardLink href="#">Privacy Policy</CardLink>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
