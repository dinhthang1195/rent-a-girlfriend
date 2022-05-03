import Logo from '../images/landingpage/logo.png';
import { Link, useNavigate } from 'react-router-dom';

import SignInButtonGroup from './landing/SignInButtonGroup';
import { useDispatch } from 'react-redux';
import ActionTypes from '../store/actions';
import { Container, Nav, Navbar, NavLink } from 'react-bootstrap';
import { useEffect } from 'react';

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

  useEffect(() => {
    console.log('abc');
  }, []);

  const data = [
    {
      link: '/cast',
      name: 'Girlfriend List',
    },
    {
      link: '/price',
      name: 'Price',
    },
    {
      link: '/plan',
      name: 'Date Plan',
    },
    {
      link: '/usage',
      name: 'How to use',
    },
    {
      link: '/experience',
      name: 'Experience',
    },
    {
      link: '/faq',
      name: 'FAQ',
    },
  ];

  return (
    <>
      <Navbar bg='bg-white' fixed='top' expand='lg' className='z-idx py-4 '>
        <Container>
          <Navbar.Brand as={Link} to='/'>
            <img
              src={Logo}
              height='70'
              alt=''
              loading='lazy'
              style={{ cursor: 'pointer' }}
              onClick={() => navigate('/')}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='me-auto '>
              {data.map((data, index) => (
                <Nav.Link as={NavLink} key={index} to={data.link} className=' text-bl  '>
                  {data.name}
                </Nav.Link>
              ))}
            </Nav>
            <SignInButtonGroup handleSignIn={handleSignIn} handleLogOut={handleLogOut} />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavSection;
