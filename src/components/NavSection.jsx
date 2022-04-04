import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Logo from '../images/logo.png';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function NavSection() {
  return (
    <>
      <Navbar sticky='top' className=' ml-0 py-4 '>
        <div className='container'>
          <div className='row justify-content-between'>
            <div className='logo ps-0 pe-4   col pe-4 ps-1'>
              <img src={Logo} alt='logo' />
            </div>
            <div className='  col pe-4 ps-1'>
              <Link to='/cast' className=' border-end text-nowrap pe-4  text-decoration-none text-black '>
                Girlfriend List
              </Link>
            </div>
            <div className='  col pe-4 ps-1'>
              <Link to='/price-plan' className=' border-end  text-nowrap pe-4  text-decoration-none text-black '>
                Price / Date Plan
              </Link>
            </div>
            <div className='  col pe-4 ps-1'>
              <Link to='/usage' className=' border-end  text-nowrap pe-4  text-decoration-none text-black '>
                How to use
              </Link>
            </div>
            <div className='  col pe-4 ps-1'>
              <Link to='/experience' className=' border-end  text-nowrap pe-4  text-decoration-none text-black '>
                Customer Experience
              </Link>
            </div>
            <div className='  col pe-4 ps-1'>
              <Link to='/faq' className=' border-end  text-nowrap pe-4  text-decoration-none text-black '>
                FAQ
              </Link>
            </div>

            <div className=' col ps-1'>
              <div>
                <Button className=' btn-sign-in'>Sign In</Button>
              </div>
              <div>
                <Button className=' btn btn-light '>Sign Up</Button>
              </div>
            </div>
          </div>
        </div>
      </Navbar>
    </>
  );
}

export default NavSection;
