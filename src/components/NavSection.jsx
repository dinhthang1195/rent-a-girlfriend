import Logo from '../images/landingpage/logo.png';
import { Link, useNavigate } from 'react-router-dom';

function NavSection() {
  const navigate = useNavigate();
  const handleSignIn = (e) => {
    e.preventDefault();
    navigate('/login');
  };
  return (
    <>
      <div className=' d-flex z-idx w-100 '>
        <nav className=' ps-5 py-4 '>
          <div className='logo d-inline-block '>
            <img src={Logo} alt='logo' />
          </div>

          <Link
            to='/cast'
            className=' d-inline-block border-end text-nowrap py-0 px-4 ps-5 text-decoration-none text-black  '
          >
            Girlfriend List
          </Link>

          <Link to='/plan-price' className=' text-nowrap border-end py-0 px-5  text-decoration-none text-black  '>
            Price
          </Link>
          <Link to='/plan-price' className='text-nowrap py-0 px-5  text-decoration-none text-black  '>
            Date Plan
          </Link>

          <Link
            to='/usage'
            className=' border-end border-start  text-nowrap py-0 px-5   text-decoration-none text-black '
          >
            How to use
          </Link>

          <Link to='/experience' className=' border-end  text-nowrap py-0 px-4   text-decoration-none text-black '>
            Customer Experience
          </Link>

          <Link to='/faq' className=' border-end  text-nowrap py-0 px-4   text-decoration-none text-black '>
            FAQ
          </Link>
        </nav>

        <nav className=' ms-3'>
          <span>
            <button onClick={handleSignIn} className='d-block h-50 w-100 btn text-nowrap btn-sign-in me-1 '>
              Sign In
            </button>
          </span>
          <span>
            <button className='d-block h-50 w-100 btn text-nowrap btn-light '>Sign Up</button>
          </span>
        </nav>
        <nav className=' ms-3 align-self-center  '>
          <span className=' fw-bold '>Forgot password?</span>
        </nav>
      </div>
    </>
  );
}

export default NavSection;
