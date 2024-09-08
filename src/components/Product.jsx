import { Container, Row, Col } from "react-bootstrap";
import Rating from "./Rating";

const Product = (props) => {
    return (
        <Container style={{ width: 500, marginTop: 5 }}>
            <Row style={{display:'flex'}}>
                <Col xs="auto" style={{marginRight: "12px" }}>
                    <img 
                        width={64} height={64} src={props.data.imageUrl}
                        alt={props.data.productName} />
                </Col>
                <Col>
                    <div>{props.data.productName}</div>
                    <div>{props.data.releasedDate}</div>
                    <Rating 
                        rating={props.data.rating}
                        numOfReviews={props.data.numOfReviews} />
                    <p style={{ marginTop: "2px" }}>{props.data.description}</p>
                </Col>
            </Row>
        </Container>
    )
}

export default Product;