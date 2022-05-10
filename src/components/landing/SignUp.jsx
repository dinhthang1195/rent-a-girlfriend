import Input from '../Input';
import { useRef, useState, useEffect } from 'react';
import userService from '../../services/userService';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

function SignUp() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoggedIn = localStorage.getItem('isLoggedIn');

  const usernameRef = useRef();
  const passwordRef = useRef();
  const errRef = useRef();
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(false);

  const [user, setUser] = useState('');
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [pwd, setPwd] = useState('');
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState('');
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/');
    }
  }, [isLoggedIn, navigate]);

  useEffect(() => {
    usernameRef.current.focus();
  }, []);

  useEffect(() => {
    setValidName(USER_REGEX.test(user));
  }, [user]);

  useEffect(() => {
    setValidPwd(PWD_REGEX.test(pwd));
    setValidMatch(pwd === matchPwd);
  }, [pwd, matchPwd]);

  useEffect(() => {
    setMessage('');
  }, [user, pwd, matchPwd]);

  const formSubmitHandler = (e) => {
    e.preventDefault();

    const v1 = USER_REGEX.test(user);
    const v2 = PWD_REGEX.test(pwd);
    if (!v1 || !v2) {
      setMessage('Invalid Entry');
      return;
    }

    const username = usernameRef.current.value;
    const password = passwordRef.current.value;

    userService.signup(username, password).then(
      (res) => {
        setMessage('');
        navigate('/');
        console.log(res.data);
      },
      (err) => {
        if (!err?.response) {
          setMessage('No Server Response');
        } else if (err.response?.status === 409) {
          setMessage('Username Taken');
        } else {
          setMessage('Registration Failed');
        }
      }
    );
  };

  return (
    <div className='container h-100'>
      <div className='row justify-content-center h-100 align-items-center'>
        <div className='col-sm-8 col-lg-5'>
          <div className='card bg-primary' style={{ transform: 'translateY(10%)' }}>
            <div className='card-header text-white'>
              <h4 className='card-title mb-0'>
                <i className='bi-grid-3x3-gap-fill'></i> Create Account
              </h4>
            </div>
            <div className='card-body bg-light rounded-bottom'>
              <p className='text-center text-danger'>{message}</p>
              <form onSubmit={formSubmitHandler}>
                <Input
                  inputRef={usernameRef}
                  title={'Username'}
                  id={'username'}
                  type='text'
                  name={'username'}
                  placeholder={'Enter your name'}
                  labelSize='4'
                  autoComplete='off'
                  onChange={(e) => setUser(e.target.value)}
                  required
                  aria-invalid={validName ? 'false' : 'true'}
                  onBlur={() => setUserFocus(false)}
                  onFocus={() => setUserFocus(true)}
                  aria-describedby='uidnote'
                />
                <p id='uidnote' className={userFocus && user && !validName ? 'instructions' : 'offscreen'}>
                  <FontAwesomeIcon icon={faInfoCircle} /> 4 to 24 characters.
                  <br />
                  Must begin with a letter.
                  <br />
                  Letters, numbers, underscores, hyphens allowed.
                </p>
                <Input
                  inputRef={passwordRef}
                  title={'Password'}
                  id={'password'}
                  type='password'
                  name={'password'}
                  placeholder={'Enter password'}
                  labelSize='4'
                  onChange={(e) => setPwd(e.target.value)}
                  onBlur={() => setPwdFocus(false)}
                  onFocus={() => setPwdFocus(true)}
                  required
                />
                <p id='pwdnote' className={pwdFocus && !validPwd ? 'instructions' : 'offscreen'}>
                  <FontAwesomeIcon icon={faInfoCircle} /> 8 to 24 characters.
                  <br />
                  Must include uppercase and lowercase letters, a number and a special character.
                  <br />
                  Allowed special characters: <span aria-label='exclamation mark'>!</span>
                  <span aria-label='at symbol'>@</span> <span aria-label='hashtag'>#</span>
                  <span aria-label='dollar sign'>$</span> <span aria-label='percent'>%</span>
                </p>
                <Input
                  title={'Confirm Password'}
                  id={'c-password'}
                  type='password'
                  name={'c-password'}
                  placeholder={'Confirm your password'}
                  labelSize='4'
                  onChange={(e) => setMatchPwd(e.target.value)}
                  onBlur={() => setMatchFocus(false)}
                  onFocus={() => setMatchFocus(true)}
                  aria-describedby='confirmnote'
                  aria-invalid={validMatch ? 'false' : 'true'}
                  required
                />
                <p id='confirmnote' className={matchFocus && !validMatch ? 'instructions' : 'offscreen'}>
                  <FontAwesomeIcon icon={faInfoCircle} />
                  Must match the first password input field.
                </p>

                <div className='row'>
                  <div className='offset-sm-4 col-auto'>
                    <button
                      type='submit'
                      className='btn btn-primary'
                      disabled={!validName || !validPwd || !validMatch ? true : false}
                    >
                      Sign Up
                    </button>
                  </div>
                </div>
                <div className='row mt-5  '>
                  <div className='col-auto'>
                    <p>
                      Already registered?
                      <br />
                      <span>
                        <a className=' text-black text-decoration-underline ' href='/login'>
                          Log In
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

export default SignUp;
