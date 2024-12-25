import React from 'react'
import { Row ,Col ,Card} from 'react-bootstrap'
const ItemList = () => {
  return (
     <Row>
        <Col sm='12' className='mt-4 mb-2'  >
        <Card className='d-flex flex-row '>
            <Card.Img variant="top" className='img-item' src="imgs/breakfast.jpg" />
            <Card.Body>
              <Card.Title className='d-flex justify-content-between '>
                <div className='item-title'>
                breakfast
                </div>
                 <div className='item-price'>20$</div>
              </Card.Title>
              <Card.Text>
                 <div className='item-description'>
                 breakfast description
                 </div>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
     </Row>

)
}

export default ItemList
