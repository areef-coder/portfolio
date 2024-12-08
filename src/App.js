import logo from './logo.svg';
import './App.css';
import Home from "./components/Pages/Home"
import Nav from "./bar/Nav"
import About from "./components/Pages/About"
import Contact from "./components/Pages/Contact"
import Footer from './bar/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sslc from "./components/ShortCodes/Sslc"


function App() {
  return (
    <div >
 <BrowserRouter>
 <Nav/>
 <Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='About' element={<About/>}/>
  <Route path='Contact' element={<Contact/>}/>
  <Route path='Sslc' element={<Sslc/>}/>

 </Routes>
 <Footer/>
 </BrowserRouter>
   
    </div>
  );
}

export default App;
