import React, { useState, useEffect } from 'react';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './pages/Home';
import Books from './pages/Books';
import BookInfo from './pages/BookInfo';
import Cart from './pages/Cart';
import { books } from './data';

function App() {
  const [cart, setCart] = useState([]);

  function addToCart(book) {
    setCart([...cart, {...book, quantity: 1}]);
  } 

  function changeQuantity(book, quantity) {
    setCart(cart.map((item) => item.id === book.id ? {...item, quantity: +quantity} : item));
  }

  function removeItem(item) {
    setCart(cart.filter((book => book.id !== item.id)));
  }

  function numberOfItems() {
    let counter = 0;
    cart.forEach((item) => {
      counter += item.quantity;
    });
    return counter;
  }

  useEffect(() => {
      }, [cart]);

  return (
    <Router>
    <div className="App">
      <Nav numberOfItems={numberOfItems()} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<Books books={books} />} />
        <Route path="/books/:id" element={<BookInfo books={books} 
        addToCart={addToCart} cart={cart} />} />
        <Route path="/cart" element={<Cart books={books} cart={cart} 
        changeQuantity={changeQuantity} removeItem={removeItem} />} />
      </Routes>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
