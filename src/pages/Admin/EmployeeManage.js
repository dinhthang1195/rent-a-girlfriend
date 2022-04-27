import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAlignLeft } from '@fortawesome/free-solid-svg-icons';

import React, { useState } from 'react';
import Sidebar from '../../components/landing/Sidebar';
import { useEffect } from 'react';
import employeeService from '../../services/employeeService';
import userService from '../../services/userService';

function EmployeeManage() {
  const [sidebarShown, setSidebarShown] = useState(true);
  const [employees, setEmployees] = useState([]);
  const [users, setUsers] = useState([]);

  const toggleSidebar = () => {
    setSidebarShown(!sidebarShown);
  };

  useEffect(() => {
    loadData();
    console.log(employees);
    console.log(users);
  }, []);

  const loadData = () => {
    employeeService.list().then((res) => {
      setEmployees(res.data);
    });
    userService.list().then((res) => {
      setUsers(res.data);
    });
  };

  const CustomerID = (timetable) => {
    console.log(timetable);
    let customerIDs = [];
    customerIDs = timetable.map((obj) => obj.customer);

    return customerIDs.join(',');
  };

  return (
    <div style={{ transform: 'translate(0,15%)' }}>
      <div className={sidebarShown ? `d-flex` : `d-flex toggled`} id='wrapper'>
        <Sidebar />
        <div id='page-content-wrapper'>
          <nav className='navbar navbar-expand-lg navbar-light bg-transparent py-4 px-4'>
            <div className='d-flex align-items-center'>
              <FontAwesomeIcon
                icon={faAlignLeft}
                className='primary-text fs-4 me-3'
                id='menu-toggle'
                onClick={() => toggleSidebar()}
              />
              <h2 className='fs-2 m-0'>Dashboard</h2>
            </div>
          </nav>
          <div className='container-fluid px-4'>
            <div className='row my-5'>
              <h3 className='fs-4 mb-3'>Recent Orders</h3>
              <div className='col'>
                <table className='table bg-white rounded shadow-sm  table-hover'>
                  <thead>
                    <tr>
                      <th scope='col' width={50}>
                        #
                      </th>
                      <th scope='col'>Name</th>
                      <th scope='col'>Rank</th>
                      <th scope='col'>Dating Partner</th>
                    </tr>
                  </thead>
                  <tbody>
                    {employees.map((employee, index) => (
                      <tr key={index}>
                        <th scope='row'>{index + 1}</th>
                        <td>{employee.name}</td>
                        <td>{employee.rank}</td>
                        <td>{CustomerID(employee.timetable)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmployeeManage;
