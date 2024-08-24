import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';

import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Product from './Pages/Product';
import Shop from './Pages/Shop';
import Display from './Components/Display/Display';


function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
  
      <Routes>
      <Route path='/' element={<Shop/>}/>
      <Route path='/display' element={<Display/>}/>
      <Route path='/product' element={<Product/>}>
           <Route path=':productId' element={<Product/>}/>
          </Route>
          
      </Routes>
      <Footer/>
      </BrowserRouter>
      
      
      
    </div>
  );
}

export default App;
