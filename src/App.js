import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from './components/header/header';
import Home from './pages/Home/index';
import About from './pages/About/index';
import Listing from './pages/Listing';
import Footer from './components/footer/footer';

function App() {
  return (
   <BrowserRouter>
      {/* component header */}
      <Header/>

      {/* Các route được bọc trong routes */}
      <Routes>
        <Route exact={true} path="/" element={<Home/>}/>
        <Route exact={true} path="/listing" element={<Listing/>}/>
      </Routes>
      
      {/* component footer */}
      <Footer/>
   </BrowserRouter>
         
  );
}

export default App;
