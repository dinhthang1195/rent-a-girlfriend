import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function SignInButtonGroup({ handleSignIn, handleLogOut }) {
  const isLoggedIn = localStorage.getItem('isLoggedIn');
  const userInfo = useSelector((state) => state.auth.currentUser);
  const navigate = useNavigate();
  if (!isLoggedIn) {
    return (
      <>
        <ul className='navbar-nav'>
          <li className='nav-item me-3  '>
            <button onClick={handleSignIn} className=' btn text-nowrap btn-sign-in mb-2  '>
              Log In
            </button>
          </li>
          <li className='nav-item'>
            <button className=' btn text-nowrap btn-light ' onClick={() => navigate('/signup')}>
              Sign Up
            </button>
          </li>
        </ul>
      </>
    );
  }
  if (isLoggedIn && userInfo.roles.includes(5150)) {
    return (
      <>
        <ul className='navbar-nav'>
          <li className='nav-item me-3  '>
            <button onClick={() => navigate('/admin/employee')} className=' btn text-nowrap btn-primary mb-2 '>
              Administration
            </button>
          </li>
          <li className='nav-item  '>
            <button onClick={handleLogOut} className=' btn text-nowrap btn-danger  '>
              <FontAwesomeIcon icon={faRightFromBracket} />
            </button>
          </li>
        </ul>
      </>
    );
  }
  return (
    <ul className='navbar-nav'>
      <li className='nav-item me-3  '>
        <div className=' btn text-nowrap welcome mb-2 '>Hi There!</div>
      </li>
      <li className='nav-item  '>
        <button onClick={handleLogOut} className=' btn text-nowrap btn-danger  '>
          <FontAwesomeIcon icon={faRightFromBracket} />
        </button>
      </li>
    </ul>
  );
}

export default SignInButtonGroup;
