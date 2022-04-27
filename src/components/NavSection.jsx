import Logo from '../images/landingpage/logo.png';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import SignInButtonGroup from './landing/SignInButtonGroup';
import { useDispatch } from 'react-redux';
import ActionTypes from '../store/actions';

function NavSection() {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const handleSignIn = (e) => {
    e.preventDefault();
    navigate('/login');
  };
  const handleLogOut = (e) => {
    e.preventDefault();
    dispatch({
      type: ActionTypes.LOGOUT_USER,
    });
    navigate('/');
  };

  return (
    <>
      <nav className='navbar navbar-expand-xl fixed-top navbar-scroll z-idx p-3 py-4'>
        <div className='container'>
          <img
            src={Logo}
            height='70'
            alt=''
            loading='lazy'
            style={{ cursor: 'pointer' }}
            onClick={() => navigate('/')}
          />
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon d-flex justify-content-start align-items-center fa-bars'>
              <FontAwesomeIcon icon={faBars} />
            </span>
          </button>
          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav  me-auto mb-2 mb-lg-0'>
              <li className='nav-item active'>
                <a className='nav-link' href='/cast'>
                  Girlfriend List
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='/plan'>
                  Date Plan
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='/price'>
                  Price
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='/usage'>
                  How to use
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='/experience'>
                  Experience
                </a>
              </li>
              <li className='nav-item '>
                <a className='nav-link' href='/faq'>
                  FAQ
                </a>
              </li>
            </ul>
            <SignInButtonGroup handleSignIn={handleSignIn} handleLogOut={handleLogOut} />
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavSection;
