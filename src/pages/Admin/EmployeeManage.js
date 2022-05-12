import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAlignLeft } from '@fortawesome/free-solid-svg-icons';

import React, { useState } from 'react';
import Sidebar from '../../components/landing/Sidebar';
import { useEffect } from 'react';
import employeeService from '../../services/employeeService';
import userService from '../../services/userService';
import Input from '../../components/Input';
import InputArea from '../../components/InputArea';

import { toast } from 'react-toastify';
import { Modal, Button, Table } from 'react-bootstrap';
import * as Yup from 'yup';
import { useFormik } from 'formik';

function EmployeeManage() {
  const [sidebarShown, setSidebarShown] = useState(true);
  const [employees, setEmployees] = useState([]);
  const [users, setUsers] = useState([]);
  const [curEmp, setCurEmp] = useState([]);

  const [modalShow, setModalShow] = useState(false);
  const handleModalShow = () => setModalShow(true);
  const handleModalClose = () => {
    setModalShow(false);
    setCurEmp([]);
  };

  const pictures = [
    {
      name: 'Profile Picture',
      id: 'landingImg',
    },
    {
      name: 'Picture 1',
      id: 'imgPath1',
    },
    {
      name: 'Picture 2',
      id: 'imgPath1',
    },
    {
      name: 'Picture 3',
      id: 'imgPath1',
    },
    {
      name: 'Picture 4',
      id: 'imgPath1',
    },
    {
      name: 'Picture 5',
      id: 'imgPath1',
    },
    {
      name: 'Picture 6',
      id: 'imgPath1',
    },
    {
      name: 'Picture 7',
      id: 'imgPath1',
    },
    {
      name: 'Picture 8',
      id: 'imgPath1',
    },
  ];

  const info = [
    {
      name: 'bloodtype',
    },
    {
      name: 'height',
    },
    {
      name: 'birthplace',
    },
    {
      name: 'profession',
    },
    {
      name: 'personality',
    },
    {
      name: 'intro',
    },
    {
      name: 'manager',
    },
    {
      name: 'lineid',
    },
  ];

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
      landingImg: 'abc',
      timetable: [
        {
          customer: '',
          start: '',
          end: '',
        },
      ],
    },
    validationSchema: Yup.object({
      // id: Yup.string()
      name: Yup.string().required('Required'),
      bloodtype: Yup.string().required('Required'),
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
    console.log(data._id);
    console.log(data);
    if (data.id === '') {
      employeeService
        .add(data)
        .then((res) => {
          console.log(res);
          loadData();
          handleModalClose();
          toast.success('Add successful');
        })
        .catch((err) => {
          toast.error(err);
        });
    } else {
      let newData = { ...data, id: data._id };
      employeeService
        .update(newData)
        .then((res) => {
          console.log(res);
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
    // console.log(id);

    if (id.length > 0) {
      employeeService.get(id).then((res) => {
        setCurEmp(res.data.timetable);
        formik.setValues(res.data);
        handleModalShow();
      });
    } else {
      formik.resetForm();
      handleModalShow();
    }
  };

  useEffect(() => {
    console.log(curEmp);
  }, [curEmp]);

  const addDate = (e) => {
    e.preventDefault();
    setCurEmp([...curEmp, { customer: '', end: '', start: '' }]);
    // console.log('object');
  };

  const handleDelete = async (e, id) => {
    e.preventDefault();

    console.log(id);
    //TODO: remove?
    employeeService
      .remove(id)
      .then((res) => {
        loadData();
        toast.warning('Delete successful');
      })
      .catch((err) => {
        toast.error('Delete failed');
      });
  };

  const toggleSidebar = () => {
    setSidebarShown(!sidebarShown);
  };

  useEffect(() => {
    loadData();

    // console.log(users);
  }, []);
  const customer = (id) => {
    // console.log(id);
    let found = users.find((user) => user._id === id);
    // console.log(found);
    if (!found) {
      return '';
    }
    return found.username;
  };

  const removeDate = (e, id, setFieldValue) => {
    e.preventDefault();
    let newTime = curEmp.filter((time) => time._id !== id.value._id);
    setCurEmp(newTime);
    setFieldValue('timetable', newTime);
  };

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
                <table className='table bg-white rounded shadow-sm  table-hover w-75'>
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
      <Modal show={modalShow} onHide={handleModalClose} backdrop='static' keyboard={false} size='lg'>
        <Modal.Header closeButton>
          <Modal.Title>{formik.values.id !== '' ? 'Update' : 'New'} Employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <Input
              type='text'
              title='Name'
              id='txtEmployeeName'
              frmField={formik.getFieldProps('name')}
              err={formik.touched.name && formik.errors.name}
              errMessage={formik.errors.name}
              autoComplete='off'
              labelSize={3}
            />
            <button
              className='btn btn-info me-3'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#collapseExample'
              aria-expanded='false'
              aria-controls='collapseExample'
            >
              Personal Info
            </button>
            <div className='collapse' id='collapseExample'>
              <div className='card card-body mb-3'>
                {info.map((info, id) => {
                  let capitalName = info.name.toUpperCase();
                  let name = info.name;

                  return (
                    <Input
                      key={id}
                      type='text'
                      title={capitalName}
                      id={name}
                      frmField={formik.getFieldProps(name)}
                      err={formik.touched[name] && formik.errors[name]}
                      errMessage={formik.errors[name]}
                      autoComplete='off'
                      labelSize={3}
                    />
                  );
                })}
              </div>
            </div>
            <button
              className='btn btn-info me-3'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#collapseExample1'
              aria-expanded='false'
              aria-controls='collapseExample1'
            >
              URL For Pictures
            </button>
            <div className='collapse' id='collapseExample1'>
              <div className='card card-body mb-3'>
                {pictures.map((picture, id) => (
                  <Input
                    key={id}
                    type='text'
                    title={picture.name}
                    id='landingImg'
                    frmField={formik.getFieldProps(`${picture.id}`)}
                    err={formik.touched[`${picture.id}`] && formik.errors[`${picture.id}`]}
                    errMessage={formik.errors[`${picture.id}`]}
                    autoComplete='off'
                    labelSize={3}
                  />
                ))}
              </div>
            </div>
            <button
              className='btn btn-info me-3'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#collapseExample2'
              aria-expanded='false'
              aria-controls='collapseExample2'
            >
              Scheduled Dates
            </button>
            <div className='collapse' id='collapseExample2'>
              <div className='card card-body mb-3'>
                {/*TODO: Show current employee's schedule */}
                <button
                  type='button'
                  className='btn btn-primary fl w-25 m-3 ms-0 text-nowrap'
                  onClick={(e) => addDate(e)}
                >
                  <i className='bi-plus-lg  ' /> Add date
                </button>
                <table>
                  <thead>
                    <tr>
                      <th>&nbsp;&nbsp;&nbsp;&nbsp;</th>
                      <th className='ms-2'>Start Time</th>
                      <th>End Time</th>
                      <th>Customer&nbsp;</th>
                      <th className='ms-2'>Customer's ID</th>
                    </tr>
                  </thead>
                  {curEmp.map((date, idx) => {
                    return (
                      <tbody key={idx}>
                        <tr>
                          <td>{idx + 1}</td>
                          {/* <td>{date.start.split('T')[0]}</td> */}
                          <td>
                            <InputArea
                              type='text'
                              id='start'
                              frmField={formik.getFieldProps(`timetable[${idx}].start`)}
                              err={
                                formik.touched[`timetable[${idx}].start`] && formik.errors[`timetable[${idx}].start`]
                              }
                              errMessage={formik.errors[`timetable[${idx}].start`]}
                              autoComplete='off'
                            />
                          </td>

                          {/* <td>{date.end.split('T')[0]}</td> */}
                          <td>
                            <InputArea
                              type='text'
                              id='end'
                              frmField={formik.getFieldProps(`timetable[${idx}].end`)}
                              err={formik.touched[`timetable[${idx}].end`] && formik.errors[`timetable[${idx}].end`]}
                              errMessage={formik.errors[`timetable[${idx}].end`]}
                              autoComplete='off'
                            />
                          </td>

                          <td>{customer(date.customer)}</td>
                          <td>
                            <InputArea
                              type='text'
                              id='customer'
                              frmField={formik.getFieldProps(`timetable[${idx}].customer`)}
                              err={
                                formik.touched[`timetable[${idx}].customer`] &&
                                formik.errors[`timetable[${idx}].customer`]
                              }
                              errMessage={formik.errors[`timetable[${idx}].customer`]}
                              autoComplete='off'
                            />
                          </td>
                          <td>
                            {/* formik.getFieldProps(`timetable[${idx}]._id`) */}
                            <div
                              onClick={(e) =>
                                removeDate(e, formik.getFieldProps(`timetable[${idx}]`), formik.setFieldValue)
                              }
                            >
                              <i className='bi-trash text-danger' />
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    );
                  })}
                </table>
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
