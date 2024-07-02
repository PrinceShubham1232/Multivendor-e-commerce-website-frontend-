import './App.css';
import Home from './Component/Home';
import ProductView from './Component/ProductView';
import Cart from './Component/Cart';
import Prouduct_list from './Component/Product_list';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/product-view' element={<ProductView />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/product-list' element={<Prouduct_list />} />
    </Routes>
  );
}

export default App;
