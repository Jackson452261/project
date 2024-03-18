import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../src/components/Home'
 
import Navbar from './Navbar';
import Favorite from './components/Favorite';
import ProductDetail from './components/ProductDetail';

 

function App() {
  return (
<BrowserRouter> 
    <div className='App'>
      <Navbar />
      <Routes > 
      <Route path="/" element={<Home />} />
      <Route path="favorite" element={<Favorite />} />
      <Route path="productdetail/:id" element={<ProductDetail />} />
      </Routes>
    </div>
    
    </BrowserRouter>


  );
}

export default App;
