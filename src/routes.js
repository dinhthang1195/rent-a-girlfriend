import Landing from './pages/Landing';
import Plan from './pages/Plan';
import Price from './pages/Price';
// import PlanPrice from './pages/PlanPrice';
import Cast from './pages/Cast';
import CastSingle from './pages/CastSingle';
import Usage from './pages/Usage';
import Experience from './pages/Experience';
import FAQ from './pages/FAQ';
import Login from './components/Login';
import Admin from './pages/Admin/Admin';
import SignUp from './components/landing/SignUp';
import Recruit from './pages/Recruit';

const routes = [
  { path: '/', page: <Landing /> },
  { path: '/login', page: <Login /> },
  { path: '/signup', page: <SignUp /> },
  { path: '/usage', page: <Usage /> },
  { path: '/experience', page: <Experience /> },
  { path: '/faq', page: <FAQ /> },
  { path: '/recruit', page: <Recruit /> },
  // { path: '/plan-price/*', page: <PlanPrice /> },
  { path: '/plan', page: <Plan /> },
  { path: '/price', page: <Price /> },
  { path: '/cast/*', page: <Cast /> },
  { path: '/cast/tachibana-ryo', page: <CastSingle /> },
  { path: '/admin/*', page: <Admin /> },
];

export default routes;
