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
  const isLoggedIn = localStorage.getItem('isLoggedIn');

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

    userService.login(username, password).then(
      (res) => {
        setMessage('');
        navigate('/');
        handleLoginAction(res.data.accessToken, res.data);

        console.log(res.data);
      },
      (err) => {
        setMessage('Wrong username or password!');
        console.log(err);
      }
    );
  };

  useEffect(() => {
    usernameRef.current.focus();
  }, []);

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/');
    }
  }, [isLoggedIn, navigate]);

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
                  type={'text'}
                />
                <Input
                  inputRef={passwordRef}
                  title={'Password'}
                  id={'password'}
                  name={'password'}
                  placeholder={'Enter password'}
                  labelSize='4'
                  type={'password'}
                />

                <div className='row'>
                  <div className='offset-sm-4 col-auto'>
                    <button type='submit' className='btn  btn-light-alt'>
                      Log in
                    </button>
                  </div>
                </div>
                <div className='row mt-5  '>
                  <div className='col-auto'>
                    <p>
                      Don't have an account?
                      <br />
                      <span>
                        <a className=' text-black text-decoration-underline ' href='/signup'>
                          Sign Up
                        </a>
                      </span>
                    </p>
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
