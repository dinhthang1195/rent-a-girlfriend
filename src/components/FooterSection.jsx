import ContactLogo from '../images/landingpage/mail-address.png';
import DialLogo from '../images/landingpage/free-dial.png';
import ProhibitLogo from '../images/landingpage/footer-banne01r-kinshi.jpg';
import DateLogo from '../images/landingpage/footer-banner02-date.jpg';
import RecruitLogo from '../images/landingpage/footer-banner03-recruit.png';
import BlogLogo from '../images/landingpage/footer-banner04-blog.jpg';
import FooterLogo from '../images/landingpage/footer-logo.png';

function FooterSection() {
  return (
    <>
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
      <div className='container '>
        <div className='row my-5 ms-4 me-4 align-items-center h-100 text-center '>
          <div className='col-lg-6 col-xl-3'>
            <img src={ProhibitLogo} alt='ProhibitLogo' />
          </div>
          <div className='col-lg-6 col-xl-3'>
            <img src={DateLogo} alt='DateLogo' />
          </div>
          <div className='col-lg-6 col-xl-3'>
            <img src={RecruitLogo} alt='RecruitLogo' />
          </div>
          <div className='col-lg-6 col-xl-3'>
            <img src={BlogLogo} alt='BlogLogo' />
          </div>
        </div>
      </div>
      <div className='footer-bg-2 p-5 '>
        <div className='container '>
          <div className='row text-white py-3 pb-5 align-items-center h-100 text-center'>
            <div className='col-lg-6 col-xl-3 my-2'>
              <div className='box'>
                <p>Rental girlfriend in Tokyo / Kanagawa / Chiba / Saitama</p>
                <img src={FooterLogo} alt='FooterLogo' />
              </div>
            </div>
            <div className='col-lg-6 col-xl-3 my-2'>
              <div className='box'>
                <ul>
                  <li>
                    <a href='#'>Home</a>
                  </li>
                  <li>
                    <a href='#'>List of Rental Girlfriends</a>
                  </li>
                  <li>
                    <a href='#'>How to use</a>
                  </li>
                  <li>
                    <a href='#'>Customer Experience</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className='col-lg-6 col-xl-3 my-2'>
              <div className='box'>
                <ul>
                  <li>
                    <a href='#'>Prohibited Matter</a>
                  </li>

                  <li>
                    <a href='#'>Inquiry</a>
                  </li>
                  <li>
                    <a href='#'>Contact</a>
                  </li>
                  <li>
                    <a href='#'>Recruitment</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className='col-lg-6 col-xl-3 my-2'>
              <div className='box'>
                <ul>
                  <li>
                    <a href='#'>FAQ</a>
                  </li>
                  <li>
                    <a href='#'>About Company</a>
                  </li>
                  <li>
                    <a href='#'>Privacy Policy</a>
                  </li>
                  <li>
                    <a href='#'>Features of Rent-A-Girlfriend Rencano EAST in Tokyo</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className='row text-white text-center pt-5 '>
            <div className='col'>
              <p>2017-2022 (C) Rental Girlfriend ??? Renkano EAST. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FooterSection;
