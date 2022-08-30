import './App.css';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import AboutUs from './Pages/AboutUs';
import Products from './Pages/Products';

function App() {
  return (
    <div className="App">
    <Router>
    <div className='navbar'> 
    <ul className='navbar-items'>
     <Link to='/'><li>Home</li></Link>
     <Link  to='/about-us'><li>About Us</li></Link>
     <Link  to='/our-products'><li>Our Products</li></Link>
    </ul>
    </div>
    <Routes>
    <Route path='/' element={<Home />}/>
    <Route path='/about-us' element={<AboutUs/>}/>
    <Route path='/our-products' element={<Products />}/>
    </Routes>
    </Router>
    <Footer/>
    </div>
  );
}

export default App;
