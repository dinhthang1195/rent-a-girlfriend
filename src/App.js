import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import routes from './routes';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';

function App() {
  return (
    <>
      <Router>
        <Routes>
          {routes.map((route, idx) => (
            <Route path={route.path} element={route.page} key={idx} />
          ))}
        </Routes>
      </Router>
    </>
  );
}

export default App;
