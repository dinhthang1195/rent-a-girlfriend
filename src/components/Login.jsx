// import Input from './Input';
// import { useRef, useState, useEffect, useContext } from 'react';
// import { useNavigate } from 'react-router-dom';
// import NavSection from './NavSection';
// import FooterSection from './FooterSection';
// import api from '../services/api';

// function Login() {
//   return (
//     <>
//       <NavSection />
//       <div className='container h-100'>
//         <div className='row justify-content-center h-100 align-items-center'>
//           <div className='col-sm-8 col-lg-5'>
//             <div className='card footer-bg-2'>
//               <div className='card-header text-white'>
//                 <h4 className='card-title mb-0'>
//                   <i className='bi-grid-3x3-gap-fill'></i> Login
//                 </h4>
//               </div>
//               <div className='card-body bg-white rounded-bottom'>
//                 <p className='text-center text-danger'>{success ? '' : errMsg}</p>
//                 <form onSubmit={handleSubmit}>
//                   <Input
//                     onChange={(e) => setUser(e.target.value)}
//                     value={user}
//                     inputRef={usernameRef}
//                     title={'Username'}
//                     id={'username'}
//                     name={'username'}
//                     placeholder={'Enter your username'}
//                     labelSize='4'
//                     autoComplete='off'
//                     required
//                   />
//                   <Input
//                     onChange={(e) => setPwd(e.target.value)}
//                     value={pwd}
//                     title={'Password'}
//                     id={'password'}
//                     name={'password'}
//                     placeholder={'Enter password'}
//                     labelSize='4'
//                     required
//                   />

//                   <div className='row'>
//                     <div className='offset-sm-4 col-auto'>
//                       <button type='submit' className='btn footer-bg-2 btn-sign-in '>
//                         Sign in
//                       </button>
//                     </div>
//                   </div>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <FooterSection />
//     </>
//   );
// }

// export default Login;

import Input from './Input';
import { useRef, useState, useEffect } from 'react';
import userService from '../services/userService';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import ActionTypes from '../store/actions';

function Login() {
  const usernameRef = useRef();
  const passwordRef = useRef();
  const [message, setMessage] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLoginAction = (token, userInfo) => {
    dispatch({
      type: ActionTypes.LOGIN_USER,
      token: token,
      currentUser: userInfo,
    });
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    const username = usernameRef.current.value;
    const password = passwordRef.current.value;

    userService.login(username, password).then((res) => {
      if (res.errorCode === 0) {
        setMessage('');
        navigate('/');
        handleLoginAction(res.data.accessToken, res.data);
      } else {
        setMessage('Wrong username or password!');
      }
    });
  };

  useEffect(() => {
    usernameRef.current.focus();
  }, []);

  return (
    <div className='container h-100'>
      <div className='row justify-content-center h-100 align-items-center'>
        <div className='col-sm-8 col-lg-5'>
          <div className='card footer-bg-2'>
            <div className='card-header text-white'>
              <h4 className='card-title mb-0'>
                <i className='bi-grid-3x3-gap-fill'></i> Login
              </h4>
            </div>
            <div className='card-body bg-white rounded-bottom'>
              <p className='text-center text-danger'>{message}</p>
              <form onSubmit={formSubmitHandler}>
                <Input
                  inputRef={usernameRef}
                  title={'Username'}
                  id={'username'}
                  name={'username'}
                  placeholder={'Enter your name'}
                  labelSize='4'
                  autoComplete='off'
                />
                <Input
                  inputRef={passwordRef}
                  title={'Password'}
                  id={'password'}
                  name={'password'}
                  placeholder={'Enter password'}
                  labelSize='4'
                />

                <div className='row'>
                  <div className='offset-sm-4 col-auto'>
                    <button type='submit' className='btn footer-bg-2 btn-sign-in'>
                      Sign in
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
