import React from 'react'
import { Button,Card,CardText,CardTitle,Row,Col,CardImg} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
const Cards = () => {
  return (
    <div><Row>
    <Col sm="4">
      <Card body>
      <CardImg
      alt="Card image cap"
      src="https://picsum.photos/318/180"
      top
      width="100%"
    />
        
      </Card>
    </Col>
    <Col sm="4">
      <Card body>
        <CardTitle tag="h5">
          Special Title Treatment
        </CardTitle>
        <CardText>
          With supporting text below as a natural lead-in to additional content.
        </CardText>
        <Button>
          Go somewhere
        </Button>
      </Card>
    </Col>
  </Row></div>
  )
}

export default Cards
