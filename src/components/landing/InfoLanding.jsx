import RecruitLogo from '../../images/landingpage/B2D63D54-0A79-42FA-9B3D-67DF7168AC3B.png';
import YoutubeLogo from '../../images/landingpage/3293418D-B110-4FE4-ABA7-D1FA6765DE32.png';
import PriceLogo from '../../images/landingpage/top-image-1.png';
import ExpLogo from '../../images/landingpage/top-image-2.png';
import { useNavigate } from 'react-router-dom';

function InfoLanding() {
  const navigate = useNavigate();
  return (
    <>
      <div className='container py-5 '>
        <div className='row align-items-center h-20 text-center '>
          <div className=' col pt-4  bg-infor px-5 '>
            <div className='container'>
              <div className='row align-items-center h-100 text-center'>
                <p className=' fs-1 text-danger py-2 mt-2 '>- Job Information -</p>
                <p className=' fs-4 mx-auto py-3 mb-4 '>Looking for a rental girlfriend part-time job</p>
                <img
                  src={RecruitLogo}
                  alt=''
                  className=' w-100'
                  style={{ cursor: 'pointer' }}
                  onClick={() => navigate('/recruit')}
                />
                <button className='btn btn-sign-in w-50 my-5 text-nowrap mx-auto' onClick={() => navigate('/recruit')}>
                  Click here for Job Information
                </button>
              </div>
            </div>
          </div>

          <div className=' col pt-4 bg-inform px-5  '>
            <div className='container'>
              <div className='row align-items-center h-100 text-center'>
                <p className=' fs-1 text-danger py-2 mt-2 '>--Part-time job experience--</p>
                <p className=' fs-4 mx-auto py-3 mb-4 '>Tenchimu also experienced a part-time job</p>
                <img
                  src={YoutubeLogo}
                  onClick={() => window.location.replace('https://www.youtube.com/watch?v=drBtEtgVRPI')}
                  alt=''
                  style={{ cursor: 'pointer' }}
                  className=' w-100'
                />
                <button
                  onClick={() => window.location.replace('https://www.youtube.com/watch?v=drBtEtgVRPI')}
                  className='btn btn-sign-in w-50 my-5 text-nowrap mx-auto'
                >
                  Watch Tenchimu's video
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className='row align-items-center h-20 text-center '>
          <div className=' col pt-4  bg-infor px-5  '>
            <div className='container'>
              <div className='row align-items-center h-100 text-center'>
                <p className=' fs-1 text-danger py-2 mt-2 '>- PLAN / PRICE -</p>
                <p className=' fs-4 mx-auto py-3 mb-4 '>Rental her price / charge</p>
                <img src={PriceLogo} alt='' style={{ cursor: 'pointer' }} className=' w-100' />
                <p className='mt-3'>
                  From 6,000 yen per hour (6,600 yen including tax). We offer prices and date plans to suit your needs.
                  We set prices that match the cuteness and popularity of girls.
                </p>
                <button className='btn btn-sign-in w-50 mb-5  text-nowrap mx-auto' onClick={() => navigate('/price')}>
                  Click here for detailed price
                </button>
              </div>
            </div>
          </div>

          <div className=' col pt-4 bg-inform px-5  '>
            <div className='container'>
              <div className='row align-items-center h-100 text-center'>
                <p className=' fs-1 text-danger py-2 mt-2 '>- What customers say? -</p>
                <p className=' fs-4 mx-auto py-3 mb-4 '>Customer experience</p>
                <img src={ExpLogo} alt='' style={{ cursor: 'pointer' }} className=' w-100' />
                <p className='mt-3'>
                  There are many joyful voices such as "The outlook on life has changed" and "I'm glad I used her
                  rental." We also receive comments such as "It's a lot of fun because we have the same hobbies."
                </p>
                <button
                  className='btn btn-sign-in w-50 mb-5 text-nowrap mx-auto'
                  onClick={() => navigate('/experience')}
                >
                  Click here for experiences
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default InfoLanding;
