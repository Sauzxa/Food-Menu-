import React from 'react'
import {Container} from 'react-bootstrap'
import NavBar from './Components/MyNav'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import Category from './Components/Category';
import ItemList from './Components/ItemList';

const App = () =>  {
  return (
    <div className='color-body font'>
     <NavBar/>
   <Container>
    <Header/>
    <Category/>
    <ItemList/>
    </Container>   
    </div>
  )
}

export default App
