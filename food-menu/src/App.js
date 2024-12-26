import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import NavBar from './Components/MyNav';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import Category from './Components/Category';
import ItemList from './Components/ItemList';
import { items } from './data';

const App = () => {
  const [itemsData, setData] = useState(items);
  const AllCategories = ['all', ...new Set(items.map((i) => i.category))];

  const filterBycategory = (cat) => {
    if (cat === 'all') {
      setData(items);
    } else {
      const newArr = items.filter((item) => item.category === cat);
      setData(newArr);
    }
  };

  const filterBySearch = (word) => {
    const searchWord = word.toLowerCase(); // Make search case-insensitive
    if (word !== '') {
      const newArr = items.filter((item) => item.title.toLowerCase().includes(searchWord));
      setData(newArr);
    } else {
      setData(items); // Reset to all items if search is empty
    }
  };

  return (
    <div className="color-body font">
      <NavBar filterBySearch={filterBySearch} />
      <Container>
        <Header />
        <Category filterBycategory={filterBycategory} AllCategories={AllCategories} />
        <ItemList itemsData={itemsData} />
      </Container>
    </div>
  );
};

export default App;
