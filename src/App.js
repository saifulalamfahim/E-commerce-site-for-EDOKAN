import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact'; 
import Shop from './pages/Shop';
import Login from './pages/Login';
import Favorite from './pages/Favorite';
import Cart from './pages/Cart';

function App() {
  return (
   <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path='about' element={<About/>}/>
          <Route path='contact' element={<Contact/>}/>
          <Route path='shop' element={<Shop/>}/>
          <Route path='login' element={<Login/>}/>
          <Route path='favorite' element={<Favorite/>}/>
          <Route path='cart' element={<Cart/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
   </>
  );
}

export default App;
