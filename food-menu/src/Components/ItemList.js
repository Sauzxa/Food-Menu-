import React from 'react'
import { Row ,Col ,Card} from 'react-bootstrap'
import Zoom from 'react-reveal/Zoom';
const ItemList = ({itemsData}) => {
  return (
     <Row>
      <Zoom>
{ itemsData.length > 0 ? (itemsData.map((item)=>{
    return (
      <Col sm='12' className='mt-4 mb-2'  >
     <Card className='d-flex flex-row '>
         <Card.Img variant="top" className='img-item' src={item.imgURL} />
         <Card.Body>
           <Card.Title className='d-flex justify-content-between '>
             <div className='item-title'>
             {item.title}
             </div>
              <div className='item-price'>{item.price}</div>
           </Card.Title>
           <Card.Text>
              <div className='item-description'>
              {item.description}
              </div>
           </Card.Text>
         </Card.Body>
       </Card>
     </Col> 
      )
})) : <h3>There is no categories</h3>  }

      </Zoom>


           </Row>

)
}

export default ItemList
