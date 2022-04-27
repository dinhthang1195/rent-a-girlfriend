import NavSection from '../components/NavSection';
import { Routes, Route } from 'react-router-dom';
import routes from '../routes';

const DefaultLayout = () => {
  return (
    <>
      <NavSection />
      <Routes>
        {routes.map((route, i) => (
          <Route path={route.path} element={route.page} key={i} />
        ))}
      </Routes>
    </>
  );
};

export default DefaultLayout;
