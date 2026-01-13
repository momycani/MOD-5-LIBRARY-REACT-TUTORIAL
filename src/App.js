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
    setCart((prevCart) => {
      const isBookInCart = prevCart.find((cartItem) => cartItem.id === book.id);

      if (isBookInCart) {
        return prevCart.map((cartItem) =>
          cartItem.id === book.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }

      return [...prevCart, { ...book, quantity: 1 }];
    });
  }

  function changeQuantity(bookId, quantity) {
    setCart((prevCart) =>
      prevCart
        .map((cartItem) =>
          cartItem.id === bookId ? { ...cartItem, quantity } : cartItem
        )
        .filter((cartItem) => cartItem.quantity > 0)
    );
  }
  return (
    <Router>
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<Books books={books} />} />
        <Route path="/books/:id" element={<BookInfo books={books} 
        addToCart={addToCart} cart={cart} />} />
        <Route path="/cart" element={<Cart books={books} cart={cart} 
        changeQuantity={changeQuantity} />} />
      </Routes>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
