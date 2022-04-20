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
        <li className='nav-item me-3  '>
          <button onClick={handleSignIn} className=' btn text-nowrap btn-sign-in mb-2  '>
            Log In
          </button>
        </li>
        <li className='nav-item'>
          <button className='  btn text-nowrap btn-light '>Sign Up</button>
        </li>
      </>
    );
  }
  if (isLoggedIn && userInfo.roles.includes(5150)) {
    return (
      <>
        <li className='nav-item me-3  '>
          <button onClick={() => navigate('/admin')} className=' btn text-nowrap btn-primary mb-2 '>
            Administration
          </button>
        </li>
        <li className='nav-item  '>
          <button onClick={handleLogOut} className=' btn text-nowrap btn-danger  '>
            <FontAwesomeIcon icon={faRightFromBracket} />
          </button>
        </li>
      </>
    );
  }
  return (
    <>
      <li className='nav-item me-3  '>
        <div className=' btn text-nowrap welcome mb-2 '>Hi There!</div>
      </li>
      <li className='nav-item  '>
        <button onClick={handleLogOut} className=' btn text-nowrap btn-danger  '>
          <FontAwesomeIcon icon={faRightFromBracket} />
        </button>
      </li>
    </>
  );
}

export default SignInButtonGroup;
