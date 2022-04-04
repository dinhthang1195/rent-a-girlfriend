import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Logo from '../images/logo.png';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

function NavSection() {
  return (
    <>
      <Navbar sticky='top' className='  py-4 '>
        <Container>
          <div className='logo '>
            <img src={Logo} alt='logo' />
          </div>

          <Nav.Link href='/cast' className=' border-end text-nowrap py-0 px-5 text-decoration-none text-black '>
            Girlfriend List
          </Nav.Link>

          <Nav.Link
            href='/plan-price'
            className=' plan-price border-end  text-nowrap py-0 px-5  text-decoration-none text-black '
          >
            Price / Date Plan
          </Nav.Link>

          <Nav.Link href='/usage' className=' border-end  text-nowrap py-0 px-5   text-decoration-none text-black '>
            How to use
          </Nav.Link>

          <Nav.Link
            href='/experience'
            className=' border-end  text-nowrap py-0 px-5   text-decoration-none text-black '
          >
            Customer Experience
          </Nav.Link>

          <Nav.Link href='/faq' className=' border-end  text-nowrap py-0 px-5   text-decoration-none text-black '>
            FAQ
          </Nav.Link>

          <div className=' d-flex ms-3'>
            <span className='  '>
              <button className=' btn col-auto text-nowrap btn-sign-in me-1 '>Sign In</button>
            </span>
            <span className=''>
              <button className=' btn col-auto text-nowrap btn-light '>Sign Up</button>
            </span>
          </div>
        </Container>
      </Navbar>
    </>
  );
}

export default NavSection;
