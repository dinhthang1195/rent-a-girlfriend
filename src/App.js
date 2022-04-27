import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import routes from './routes';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';
import DefaultLayout from './containers/DefaultLayout';
import Login from './components/Login';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/*' element={<DefaultLayout />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
