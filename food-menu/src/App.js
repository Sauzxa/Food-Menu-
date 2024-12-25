import React from 'react'
import {Container} from 'react-bootstrap'
import NavBar from './Components/MyNav'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import Category from './Components/Category'

const App = () =>  {
  return (
    <div className='color-body font'>
     <NavBar/>
   <Container>
    <Header/>
    <Category/>
    </Container>   
    </div>
  )
}

export default App
