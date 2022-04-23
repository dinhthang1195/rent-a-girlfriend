import EmployeeLanding from './EmployeeLanding';
import OnlinePic from '../../images/landingpage/513fb72aebac61d0186b1fc3da6d2504.jpg';
import ContactLogo from '../../images/landingpage/mail-address.png';
import DialLogo from '../../images/landingpage/free-dial.png';
import { useNavigate } from 'react-router-dom';

function Popular() {
  const navigate = useNavigate();

  return (
    <>
      <EmployeeLanding />
      <div className='container'>
        <div className='row align-items-center h-100 text-center'>
          <div className=' col mx-auto footer-bg-3  '>
            <img src={OnlinePic} alt='' className='img-fluid' />
          </div>
        </div>
      </div>
      <div className='container h-25'>
        <div className='row align-items-center h-100 text-center '>
          <div className=' col '>
            <button onClick={() => navigate('/cast')} className='btn btn-sign-in w-25 mx-auto py-3 '>
              {' '}
              See the list of rental girlfriends
            </button>{' '}
          </div>
        </div>
        {/* <div className='row align-items-center h-50 text-center '>
          <div className=' col mb-2  '>
            <button className='btn btn-sign-in w-30 mx-auto py-3 mb-4'>
              List of rental girlfriends who left the store
            </button>
          </div>
        </div> */}
      </div>
      <div className='footer-bg '>
        <div className=' container h-100'>
          <div className='row align-items-center h-100 text-center '>
            <div className='col-md-12 col-lg-6  '>
              <img src={ContactLogo} alt='contact' />
            </div>
            <div className='col-md-12 col-lg-6 '>
              <img src={DialLogo} alt='dial' />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Popular;
