import React from 'react'
import { Row ,Col} from 'react-bootstrap'

const Category = ({filterBycategory , AllCategories}) => {
  // to filter by category
  const onFilter =(cat)=>{
     filterBycategory(cat)
  }
  return (
   <Row my-2 mb-5>
    <Col sm="12" className='d-flex justify-content-center'>
         {AllCategories.length > 0 ? (AllCategories.map((cat)=>{
          return(
           <div>
           <button onClick={()=>{onFilter(cat)}} style={{border : "1px solid rgb(100, 100, 179)"}} className='btn mx-2'>{cat}</button>
      </div>)
         })) : <h4>There is no Category</h4>  }
       </Col>
   </Row>
  )
}

export default Category

