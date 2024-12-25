import React from 'react'
import {Container} from 'react-bootstrap'
import NavBar from './Components/MyNav'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';

const App = () =>  {
  return (
    <div className='color-body font'>
     <NavBar/>
   <Container>
    <Header/>
    </Container>   
    </div>
  )
}

export default App
