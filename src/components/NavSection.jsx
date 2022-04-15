import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Logo from '../images/landingpage/logo.png';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

function NavSection() {
  return (
    <>
      <div className=' d-flex '>
        <nav className='sticky-top ps-5 py-4 '>
          <div className='logo d-inline-block '>
            <img src={Logo} alt='logo' />
          </div>

          <Link
            to='/cast'
            className=' d-inline-block border-end text-nowrap py-0 px-5 text-decoration-none text-black  '
          >
            Girlfriend List
          </Link>

          <Link to='/plan-price' className='  plan-price  text-nowrap py-0 px-5  text-decoration-none text-black  '>
            Price / Date Plan
          </Link>

          <Link
            to='/usage'
            className=' border-end border-start  text-nowrap py-0 px-5   text-decoration-none text-black '
          >
            How to use
          </Link>

          <Link to='/experience' className=' border-end  text-nowrap py-0 px-5   text-decoration-none text-black '>
            Customer Experience
          </Link>

          <Link to='/faq' className=' border-end  text-nowrap py-0 px-5   text-decoration-none text-black '>
            FAQ
          </Link>
        </nav>

        <nav className='sticky-top ms-3'>
          <span>
            <button className='d-block h-50 w-100 btn text-nowrap btn-sign-in me-1 '>Sign In</button>
          </span>
          <span>
            <button className='d-block h-50 w-100 btn text-nowrap btn-light '>Sign Up</button>
          </span>
        </nav>
        <nav className='ms-3 align-self-center'>
          <span className=' fw-bold '>Forgot password?</span>
        </nav>
      </div>
    </>
  );
}

export default NavSection;
