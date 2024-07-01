import React from 'react';
import { Container, Row, Col, Card, CardBody, CardTitle, CardText } from 'reactstrap';
import './UserIn.css'
const UserIn = () => {
  return (
    <Container>
      <Row className='mt-5'>
        <Col md="5">
          <Card className="mb-3">
            <CardBody>
              <CardTitle className="card-title">Religion</CardTitle>
              <CardText><span className="key">Caste:</span> xyzxyz, xyz</CardText>
              <CardText><span className="key">Zodiac Sign:</span> xyz</CardText>
              <CardText><span className="key">Gothra:</span> xyz, star name</CardText>
              <CardText><span className="key">Dosham:</span> Manglik</CardText>
            </CardBody>
          </Card>
          <Card className="mb-3">
            <CardBody>
              <CardTitle className="card-title">Family Information</CardTitle>
              <CardText><span className="key">Family Status:</span> Nuclear, Rich</CardText>
              <CardText><span className="key">Father:</span> Madhu, Business</CardText>
              <CardText><span className="key">Mother Name:</span> Yukthi, Homemaker</CardText>
              <CardText><span className="key">Siblings:</span> 1</CardText>
            </CardBody>
          </Card>
          <Card className="mb-3">
            <CardBody >
              <CardTitle className="card-title">Personal Information</CardTitle>
              <CardText><span className="key">Complexion:</span> xyzxyz</CardText>
              <CardText><span className="key">Body Type:</span> xyzxyz</CardText>
              <CardText><span className="key">Any Disabilities:</span> 11:55 PM</CardText>
              <CardText><span className="key">Weight:</span> 1</CardText>
              <CardText><span className="key">Height:</span> 1</CardText>
              <CardText><span className="key">Marital Status:</span> xyzxyz</CardText>
              <CardText><span className="key">Eating Habits:</span> Non Veg</CardText>
              <CardText><span className="key">Drinking Habits:</span> Never drink</CardText>
              <CardText><span className="key">Smoking Habits:</span> Never smoke</CardText>
              <CardText><span className="key">About me:</span></CardText>
              <textarea style={{
                width: '100%',
                height: '50px',
                marginTop: '10px',
                border: '1px solid #ced4da',
                borderRadius: '.25rem'
              }}></textarea>
            </CardBody>
          </Card>
        </Col>
        <Col md="1" className="d-flex justify-content-center">
          <div style={{
            borderLeft: "1px solid #ced4da",
            height: "100%"
          }}></div>
        </Col>
        <Col md="5">
          <Card className="mb-3">
            <CardBody>
              <CardTitle className="card-title">Professional Details</CardTitle>
              <CardText><span className="key">Highest Education :</span> B.Tech</CardText>
              <CardText><span className="key">Name Of the Institute :</span> abcdefgh</CardText>
              <CardText><span className="key">Year Of Passing :</span> 2222</CardText>
              <CardText><span className="key">Employment Status :</span> xyz</CardText>
              <CardText><span className="key">Employed in :</span> xyzxyz</CardText>
              <CardText><span className="key">Occupation :</span> xyz</CardText>
              <CardText><span className="key">Work Location :</span> India</CardText>
              <CardText><span className="key">State :</span> xyzxyz</CardText>
              <CardText><span className="key">City :</span> Xyz</CardText>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default UserIn;
