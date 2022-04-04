import Landing from './pages/Landing';
import Plan from './pages/Plan';
import Price from './pages/Price';
import PlanPrice from './pages/PlanPrice';
import Cast from './pages/Cast';
import CastSingle from './pages/CastSingle';
import Usage from './pages/Usage';
import Experience from './pages/Experience';
import FAQ from './pages/FAQ';

const routes = [
  { path: '/', page: <Landing /> },
  { path: '/usage', page: <Usage /> },
  { path: '/experience', page: <Experience /> },
  { path: '/faq', page: <FAQ /> },
  { path: '/plan-price/*', page: <PlanPrice /> },
  { path: '/plan-price/plan', page: <Plan /> },
  { path: '/plan-price/price', page: <Price /> },
  { path: '/cast/*', page: <Cast /> },
  { path: '/cast/tachibana-ryo', page: <CastSingle /> },
];

export default routes;
