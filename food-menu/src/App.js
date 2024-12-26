import React, { useState } from 'react'
import {Container} from 'react-bootstrap'
import NavBar from './Components/MyNav'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import Category from './Components/Category';
import ItemList from './Components/ItemList';
import { items } from './data';
const App = () =>  {
  const [itemsData , setData] = useState(items)
  const filterBycategory = (cat)=>{
    if(cat ==='all'){
      setData(items)
    }else{
      const catArray = items.filter((item)=> item.category === cat)
        setData(catArray)
    }
      } 

  return (
    <div className='color-body font'>
     <NavBar/>
   <Container>
    <Header/>
    <Category filterBycategory={filterBycategory} />
    <ItemList itemsData={itemsData} />
    </Container>   
    </div>
  )
}

export default App
