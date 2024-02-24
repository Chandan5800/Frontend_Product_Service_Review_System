import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./components/Home";
import Login from "./components/Login";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import Register from "./components/Register";
import Product from "./components/Product";
import Service from "./components/Service";
import Forgetpassword from './components/Forgetpassword';
import Resetpassword from './components/Resetpassword';
import Aboutmore from './components/Aboutmore';
import { ToastContainer } from 'react-toastify';
import Productdetails from './components/Productdetails';


function App() {
  return (

    <Router>
      <ToastContainer/>

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contactus" element={<ContactUs />} />  
        <Route exact path="/product" element={<Product />} /> 
        <Route exact path="/service" element={<Service />} />
        <Route exact path="/forget" element={<Forgetpassword />} />   
        <Route exact path="/reset" element={<Resetpassword />} />   
        <Route exact path="/aboutmore" element={<Aboutmore />} />     
        <Route exact path="/productdetails" element={<Productdetails />} /> 
      </Routes>

    </Router>
  );
}

export default App;
