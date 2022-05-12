import employeeService from '../../services/fe/employeeService';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function EmployeeLanding() {
  const [employees, setEmployees] = useState([]);
  const navigateTo = useNavigate();
  const navigate = (e, path) => {
    e.preventDefault();
    navigateTo(path);
  };

  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    employeeService.list().then((res) => {
      setEmployees(res.data);
    });
  };

  return (
    <>
      <div className=' container my-3 '>
        <div className='row align-items-center h-100 text-center'>
          <p className=' display-5 my-5 '>Top girlfriends</p>
        </div>
        <div className='row align-items-center h-100 text-center '>
          {employees.map((employee, idx) => (
            <div key={idx} className='col-md-6 col-lg-3 my-2 '>
              <img
                style={{ cursor: 'pointer' }}
                src={employee.landingImg}
                alt={idx}
                className=' img-fluid '
                onClick={(e) => navigate(e, `/cast/${employee._id}`)}
              />
              <p className=' '>{employee.name}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default EmployeeLanding;
