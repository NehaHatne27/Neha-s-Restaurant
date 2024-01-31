import './App.css';
import { Link, Routes, Route, BrowserRouter } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Home from './pages/Home';
import Menu from './pages/Menu';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <>
    <Navbar expand="lg" className='fixed-top bg-body-light shadow'>
      <Container>
        <Navbar.Brand>
          <Link to="/" className='navbar-brand text-success fw-semibold text-dark'><b>
            Neha's Restaurant
          </b></Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav ' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className=' text-dark me-auto justify-content-end w-100 '>
            <Link to='/' className='active text-uppercase text-decoration-none text-dark mx-3'>Home</Link>
            <Link to='/menu' className='text-uppercase text-decoration-none text-dark mx-3'>Menu</Link>
            <Link to='/about' className='text-uppercase text-decoration-none text-dark mx-3'>About</Link>
            <Link to='/contact' className='text-uppercase text-decoration-none text-dark mx-3'>Contact</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes><footer className='bg-body-light'>
        <p className='text-center'><b> Neha's restaurant | 9112236877 | nehasrestaurant@gmail.com |
          All rights reserved. Impressively crafted with love and passion.</b></p>
      </footer></>
  
  );
}

export default App;
