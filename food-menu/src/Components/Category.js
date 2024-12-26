import React from 'react'
import { Row ,Col} from 'react-bootstrap'

const Category = ({filterBycategory}) => {
  const onFilter =(cat)=>{
     filterBycategory(cat)
  }
  return (
   <Row my-2 mb-5>
    <Col sm="12" className='d-flex justify-content-center'>
        <div>
             <button onClick={()=>{onFilter('all')}} style={{border : "1px solid rgb(100, 100, 179)"}} className='btn mx-2'>all</button>
             <button onClick={()=>{onFilter('breakfast')}} style={{border : "1px solid rgb(100, 100, 179)"}}  className='btn mx-2'>breakfast</button>
             <button onClick={()=>{onFilter('lunch')}} style={{border : "1px solid rgb(100, 100, 179)"}}  className='btn mx-2'>lunch</button>
             <button onClick={()=>{onFilter('dinner')}} style={{border : "1px solid rgb(100, 100, 179)"}}  className='btn mx-2'>dinner</button>
        </div>
       </Col>
   </Row>
  )
}

export default Category

