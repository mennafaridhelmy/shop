import './App.css';
import Category from './components/Category';
import Navbar from './components/Navbar';
import { Routes, Route } from "react-router-dom";
import Notfound from './components/Notfound';
import Home from './components/Home';
import Product from './components/Product';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:category" element={<Category />} />
        <Route path="product/:id" element={<Product />} />
        <Route path="*" element={<Notfound />} />
      </Routes>      
    </div>
  );
}

export default App;
