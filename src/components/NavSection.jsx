import Logo from '../images/landingpage/logo.png';
import { Link, useNavigate } from 'react-router-dom';

import SignInButtonGroup from './landing/SignInButtonGroup';
import { useDispatch } from 'react-redux';
import ActionTypes from '../store/actions';
import { Container, Nav, Navbar, NavLink } from 'react-bootstrap';

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

  const data = [
    {
      link: '/',
      name: 'Girlfriend List',
    },
    {
      link: '/',
      name: 'Price',
    },
    {
      link: '/',
      name: 'Date Plan',
    },
    {
      link: '/',
      name: 'How to use',
    },
    {
      link: '/',
      name: 'Experience',
    },
    {
      link: '/',
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
                <Nav.Link as={Link} key={index} to={data.link} className=' text-bl  '>
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
