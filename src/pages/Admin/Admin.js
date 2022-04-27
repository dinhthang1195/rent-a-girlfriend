import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAlignLeft } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import Sidebar from '../../components/landing/Sidebar';

function Admin() {
  const [sidebarShown, setSidebarShown] = useState(true);

  const toggleSidebar = () => {
    setSidebarShown(!sidebarShown);
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
                      <th scope='col'>Product</th>
                      <th scope='col'>Customer</th>
                      <th scope='col'>Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope='row'>1</th>
                      <td>Television</td>
                      <td>Jonny</td>
                      <td>$1200</td>
                    </tr>
                    <tr>
                      <th scope='row'>2</th>
                      <td>Laptop</td>
                      <td>Kenny</td>
                      <td>$750</td>
                    </tr>
                    <tr>
                      <th scope='row'>3</th>
                      <td>Cell Phone</td>
                      <td>Jenny</td>
                      <td>$600</td>
                    </tr>
                    <tr>
                      <th scope='row'>4</th>
                      <td>Fridge</td>
                      <td>Killy</td>
                      <td>$300</td>
                    </tr>
                    <tr>
                      <th scope='row'>5</th>
                      <td>Books</td>
                      <td>Filly</td>
                      <td>$120</td>
                    </tr>
                    <tr>
                      <th scope='row'>6</th>
                      <td>Gold</td>
                      <td>Bumbo</td>
                      <td>$1800</td>
                    </tr>
                    <tr>
                      <th scope='row'>7</th>
                      <td>Pen</td>
                      <td>Bilbo</td>
                      <td>$75</td>
                    </tr>
                    <tr>
                      <th scope='row'>8</th>
                      <td>Notebook</td>
                      <td>Frodo</td>
                      <td>$36</td>
                    </tr>
                    <tr>
                      <th scope='row'>9</th>
                      <td>Dress</td>
                      <td>Kimo</td>
                      <td>$255</td>
                    </tr>
                    <tr>
                      <th scope='row'>10</th>
                      <td>Paint</td>
                      <td>Zico</td>
                      <td>$434</td>
                    </tr>
                    <tr>
                      <th scope='row'>11</th>
                      <td>Carpet</td>
                      <td>Jeco</td>
                      <td>$1236</td>
                    </tr>
                    <tr>
                      <th scope='row'>12</th>
                      <td>Food</td>
                      <td>Haso</td>
                      <td>$422</td>
                    </tr>
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

export default Admin;
