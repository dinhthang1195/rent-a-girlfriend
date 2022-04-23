import NavSection from '../components/NavSection';
import FooterSection from '../components/FooterSection';
import CatchCopy from '../images/landingpage/catch-copy.png';
import Popular from '../components/landing/Popular';
import InfoLanding from '../components/landing/InfoLanding';

function Landing() {
  return (
    <>
      <NavSection />
      <div className='hero-header d-flex justify-content-center align-items-center '>
        <img src={CatchCopy} alt='catchlogo' className='catch-logo img-fluid   ' />
      </div>
      <Popular />
      <InfoLanding />
      <FooterSection />
    </>
  );
}

export default Landing;
