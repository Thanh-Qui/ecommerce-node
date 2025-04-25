import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from './components/header/header';
import Home from './pages/Home/index';
import About from './pages/About/index';
import Listing from './pages/Listing';
import Footer from './components/footer/footer';
import NotFound from './pages/NotFound';
import DetailsPage from './pages/Details';

function App() {
  return (
   <BrowserRouter>
      {/* component header */}
      <Header/>

      {/* Các route được bọc trong routes */}
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/listing" element={<Listing/>}/>
        <Route path="/product/details" element={<DetailsPage/>}/>

        {/* Đặt ở cuối. nếu không khớp với bất kỳ route nào ở trên thì sẽ tự động truy cập vào page 404 */}
        <Route path="*" element={<NotFound/>}/>
      </Routes>
      
      {/* component footer */}
      <Footer/>
      
   </BrowserRouter>
         
  );
}

export default App;
