import { Container, Row, Col, ListGroup } from "react-bootstrap"

interface DishCommentsProps {
    selectedPasta : any  ;
    
}

// console.log(selectedPasta)
 
const DishComments = ({ selectedPasta }:DishCommentsProps) => (
   
    <Container>
        <Row className="justify-content-center mt-3">
            <Col xs={12} md={6}>
               
                <ListGroup>
                    {
                        selectedPasta ? selectedPasta.comments.map((c:any)=> (
                            <ListGroup.Item key={c.id}>{c.comment}</ListGroup.Item>
                        )) : <p>Click on a dish to read its comments</p>
                    }
                </ListGroup>
            </Col>
        </Row>
    </Container>
)

export default DishComments