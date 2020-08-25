import React from "react";
import { Container, Row, Col } from 'reactstrap';

const Weed = (props) => {
    return (
      <Container>
        <Row>
        <div>
            {props.weed.map(weed => (
             <Col>
                <div key={weed.id}>
                    <img src = {weed.url} alt = "Bud type" />
                    <h2>{weed.name}</h2>
                    <p>{weed.effects}</p>
                    <p>{weed.flavors}</p>
                </div>
             </Col>
            ))}
        </div>
        </Row>
      </Container>
    );
};

export default Weed;