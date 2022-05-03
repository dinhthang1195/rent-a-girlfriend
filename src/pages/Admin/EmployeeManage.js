import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAlignLeft } from '@fortawesome/free-solid-svg-icons';

import React, { useState } from 'react';
import Sidebar from '../../components/landing/Sidebar';
import { useEffect } from 'react';
import employeeService from '../../services/employeeService';
import userService from '../../services/userService';
import Input from '../../components/Input';

import { toast } from 'react-toastify';
import { Modal, Button } from 'react-bootstrap';
import * as Yup from 'yup';
import { useFormik } from 'formik';

const personalInfo = [
  {
    name: 'bloodtype',
    capitalName: 'Bloodtype',
  },
  {
    name: 'height',
    capitalName: 'Height',
  },
  {
    name: 'birthplace',
    capitalName: 'Birthplace',
  },
  {
    name: 'profession',
    capitalName: 'Profession',
  },
  {
    name: 'style',
    capitalName: 'Style',
  },
  {
    name: 'personality',
    capitalName: 'Personality',
  },
  {
    name: 'sake',
    capitalName: 'Sake',
  },
  {
    name: 'tobaco',
    capitalName: 'Tobaco',
  },
  {
    name: 'intro',
    capitalName: 'Intro',
  },
  {
    name: 'rank',
    capitalName: 'Rank',
  },
  {
    name: 'manager',
    capitalName: 'Manager',
  },
  {
    name: 'lineid',
    capitalName: 'Lineid',
  },
];

function EmployeeManage() {
  const [sidebarShown, setSidebarShown] = useState(true);
  const [employees, setEmployees] = useState([]);
  const [users, setUsers] = useState([]);

  const [message, setMessage] = useState('');
  const [modalShow, setModalShow] = useState(false);
  const handleModalShow = () => setModalShow(true);
  const handleModalClose = () => setModalShow(false);

  const loadData = () => {
    employeeService.list().then((res) => {
      setEmployees(res.data);
    });
    userService.list().then((res) => {
      setUsers(res.data);
    });
  };

  const formik = useFormik({
    initialValues: {
      id: '',
      name: '',
      bloodtype: "I don't know the type",
      height: '162cm',
      birthplace: 'Chiba',
      profession: 'Cafe clerk',
      style: 'Standard',
      personality: 'Quiet',
      sake: 'Do not drink',
      tobacco: 'Do not smoke',
      intro: '',
      rank: '',
      manager: '',
      lineid: '',
      imgPath1: '',
      imgPath2: '',
      imgPath3: '',
      imgPath4: '',
      imgPath5: '',
      imgPath6: '',
      imgPath7: '',
      imgPath8: '',
      landingImg: '',
      timetable: [],
    },
    validationSchema: Yup.object({
      // id: Yup.string()
      name: Yup.string().required('Required'),
      bloodtype: Yup.string(),
      height: Yup.string(),
      birthplace: Yup.string(),
      profession: Yup.string(),
      style: Yup.string(),
      personality: Yup.string(),
      sake: Yup.string(),
      tobaco: Yup.string(),
      intro: Yup.string(),
      rank: Yup.string(),
      manager: Yup.string(),
      lineid: Yup.string(),
      imgPath1: Yup.string(),
      imgPath2: Yup.string(),
      imgPath3: Yup.string(),
      imgPath4: Yup.string(),
      imgPath5: Yup.string(),
      imgPath6: Yup.string(),
      imgPath7: Yup.string(),
      imgPath8: Yup.string(),
      landingImg: Yup.string(),
      timetable: Yup.array().of(
        Yup.object({
          customer: Yup.string(),
          start: Yup.string(),
          end: Yup.string(),
        })
      ),
    }),
    onSubmit: (values) => {
      handleFormSubmit(values);
    },
  });

  const handleFormSubmit = (data) => {
    if (data.id.length === 0) {
      employeeService
        .add(data)
        .then((res) => {
          loadData();
          handleModalClose();
          toast.success('Add successful');
        })
        .catch((err) => {
          toast.error(err);
        });
    } else {
      employeeService
        .update(data.id, data)
        .then((res) => {
          loadData();
          handleModalClose();
          toast.success('Update successful');
        })
        .catch((err) => {
          toast.error(err);
        });
    }
  };

  const showModalHandler = (e, id) => {
    if (e) e.preventDefault();
    console.log(id);
    if (id.length > 0) {
      employeeService.get(id).then((res) => {
        formik.setValues(res.data);
        handleModalShow();
      });
    } else {
      formik.resetForm();
      handleModalShow();
    }
  };

  const handleDelete = (e, id) => {
    e.preventDefault();
    employeeService.remove(id).then((res) => {
      try {
        loadData();
        toast.warning('Delete successful');
      } catch {
        toast.error('Delete failed');
      }
    });
  };

  const toggleSidebar = () => {
    setSidebarShown(!sidebarShown);
  };

  useEffect(() => {
    loadData();
    // console.log(employees);
    // console.log(users);
  }, []);

  return (
    <div style={{ transform: 'translate(0,20%)' }}>
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
              <h3 className='fs-4 mb-3'>List</h3>
              <div className='col-auto'>
                <button
                  onClick={(e) => {
                    showModalHandler(e, '');
                  }}
                  type='button'
                  className='btn btn-primary fl'
                >
                  <i className='bi-plus-lg' /> Add
                </button>
              </div>
              <div className='col'>
                <table className='table bg-white rounded shadow-sm  table-hover'>
                  <thead>
                    <tr>
                      <th scope='col' width={50}>
                        #
                      </th>
                      <th scope='col'>Name</th>
                      <th scope='col'>Rank</th>
                      <th scope='col'>Info</th>
                    </tr>
                  </thead>
                  <tbody>
                    {employees.map((employee, index) => (
                      <tr key={index}>
                        <th scope='row'>{index + 1}</th>
                        <td>{employee.name}</td>
                        <td>{employee.rank}</td>
                        <td>
                          <a href='/#' className='me-1' onClick={(e) => showModalHandler(e, employee._id)}>
                            <i className='bi-pencil-square text-primary' />
                          </a>
                          <a href='/#' onClick={(e) => handleDelete(e, employee._id)}>
                            <i className='bi-trash text-danger' />
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal show={modalShow} onHide={handleModalClose} backdrop='static' keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>{formik.values.id > 0 ? 'Update' : 'New'} Employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='text-center text-danger'>{message}</div>
          <form>
            <Input
              type='text'
              title='Name'
              id='txtEmployeeName'
              frmField={formik.getFieldProps('name')}
              err={formik.touched.name && formik.errors.name}
              errMessage={formik.errors.name}
              autoComplete='off'
              labelSize={4}
            />
            <button
              class='btn btn-info'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#collapseExample'
              aria-expanded='false'
              aria-controls='collapseExample'
            >
              Personal Info
            </button>
            <div class='collapse' id='collapseExample'>
              <div class='card card-body'>
                {personalInfo.map((data, index) => (
                  <Input
                    type='text'
                    title={data.capitalName}
                    id={`txt${data.capitalName}`}
                    frmField={`formik.getFieldProps(${data.name})`}
                    err={`formik.touched.${data.name} && formik.errors.${data.name}`}
                    errMessage={`formik.errors.${data.name}`}
                    autoComplete='off'
                    labelSize={4}
                  />
                ))}
              </div>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button type='button' variant='secondary' onClick={handleModalClose}>
            Close
          </Button>
          <Button
            type='button'
            variant='primary'
            onClick={formik.handleSubmit}
            disabled={!formik.dirty || !formik.isValid}
          >
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default EmployeeManage;
