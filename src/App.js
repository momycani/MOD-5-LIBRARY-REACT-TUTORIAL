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
  return (
    <Router>
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<Books books={books}  
        addToCart={addToCart} cart={cart} />} />
        <Route path="/books/:id" element={<BookInfo books={books} />} />
        <Route path="/cart" element={<Cart books={books} cart={cart} 
        changeQuantity={changeQuantity} />} />
      </Routes>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
