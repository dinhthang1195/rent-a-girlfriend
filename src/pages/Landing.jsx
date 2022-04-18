import NavSection from '../components/NavSection';
import FooterSection from '../components/FooterSection';
import CatchCopy from '../images/landingpage/catch-copy.png';
import Popular from '../components/landing/Popular';

function Landing() {
  return (
    <>
      <NavSection />
      <div className='hero-header d-flex justify-content-center align-items-center '>
        <img src={CatchCopy} alt='catchlogo' className='catch-logo  ' />
      </div>
      <Popular />
      <FooterSection />
    </>
  );
}

export default Landing;
