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
import { Field, useFormik } from 'formik';

function EmployeeManage() {
  const [sidebarShown, setSidebarShown] = useState(true);
  const [employees, setEmployees] = useState([]);
  const [users, setUsers] = useState([]);
  const [curEmp, setCurEmp] = useState([]);

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
      landingImg: 'abc',
      timetable: [],
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
    console.log(id);

    if (id.length > 0) {
      employeeService.get(id).then((res) => {
        formik.setValues(res.data);
        handleModalShow();
        setCurEmp(formik.values.timetable);
      });

      // console.log(curEmp); //TODO: 2 click delay ?
    } else {
      formik.resetForm();
      handleModalShow();
    }
  };

  useEffect(() => {
    console.log(curEmp); //TODO: 1 click delay with with useEffect
  }, [curEmp]);

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
              labelSize={4}
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
                <Input
                  type='text'
                  title='Bloodtype'
                  id='bloodtype'
                  frmField={formik.getFieldProps('bloodtype')}
                  err={formik.touched['bloodtype'] && formik.errors['bloodtype']}
                  errMessage={formik.errors['bloodtype']}
                  autoComplete='off'
                  labelSize={4}
                />
                <Input
                  type='text'
                  title='Height'
                  id='height'
                  frmField={formik.getFieldProps('height')}
                  err={formik.touched['height'] && formik.errors['height']}
                  errMessage={formik.errors['height']}
                  autoComplete='off'
                  labelSize={4}
                />
                <Input
                  type='text'
                  title='Birthplace'
                  id='birthplace'
                  frmField={formik.getFieldProps('birthplace')}
                  err={formik.touched['birthplace'] && formik.errors['birthplace']}
                  errMessage={formik.errors['birthplace']}
                  autoComplete='off'
                  labelSize={4}
                />
                <Input
                  type='text'
                  title='Profession'
                  id='profession'
                  frmField={formik.getFieldProps('profession')}
                  err={formik.touched['profession'] && formik.errors['profession']}
                  errMessage={formik.errors['profession']}
                  autoComplete='off'
                  labelSize={4}
                />
                <Input
                  type='text'
                  title='Style'
                  id='style'
                  frmField={formik.getFieldProps('style')}
                  err={formik.touched['style'] && formik.errors['style']}
                  errMessage={formik.errors['style']}
                  autoComplete='off'
                  labelSize={4}
                />
                <Input
                  type='text'
                  title='Personality'
                  id='personality'
                  frmField={formik.getFieldProps('personality')}
                  err={formik.touched['personality'] && formik.errors['personality']}
                  errMessage={formik.errors['personality']}
                  autoComplete='off'
                  labelSize={4}
                />
                <Input
                  type='text'
                  title='Sake'
                  id='sake'
                  frmField={formik.getFieldProps('sake')}
                  err={formik.touched['sake'] && formik.errors['sake']}
                  errMessage={formik.errors['sake']}
                  autoComplete='off'
                  labelSize={4}
                />

                <Input
                  type='text'
                  title='Intro'
                  id='intro'
                  frmField={formik.getFieldProps('intro')}
                  err={formik.touched['intro'] && formik.errors['intro']}
                  errMessage={formik.errors['intro']}
                  autoComplete='off'
                  labelSize={4}
                />
                <Input
                  type='text'
                  title='Rank'
                  id='rank'
                  frmField={formik.getFieldProps('rank')}
                  err={formik.touched['rank'] && formik.errors['rank']}
                  errMessage={formik.errors['rank']}
                  autoComplete='off'
                  labelSize={4}
                />
                <Input
                  type='text'
                  title='Manager'
                  id='manager'
                  frmField={formik.getFieldProps('manager')}
                  err={formik.touched['manager'] && formik.errors['manager']}
                  errMessage={formik.errors['manager']}
                  autoComplete='off'
                  labelSize={4}
                />
                <Input
                  type='text'
                  title='Line Id'
                  id='lineid'
                  frmField={formik.getFieldProps('lineid')}
                  err={formik.touched['lineid'] && formik.errors['lineid']}
                  errMessage={formik.errors['lineid']}
                  autoComplete='off'
                  labelSize={4}
                />
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
                <Input
                  type='text'
                  title='Profile Picture'
                  id='landingImg'
                  frmField={formik.getFieldProps('landingImg')}
                  err={formik.touched['landingImg'] && formik.errors['landingImg']}
                  errMessage={formik.errors['landingImg']}
                  autoComplete='off'
                  labelSize={4}
                />
                <Input
                  type='text'
                  title='Picture 1'
                  id='imgPath1'
                  frmField={formik.getFieldProps('imgPath1')}
                  err={formik.touched['imgPath1'] && formik.errors['imgPath1']}
                  errMessage={formik.errors['imgPath1']}
                  autoComplete='off'
                  labelSize={4}
                />
                <Input
                  type='text'
                  title='Picture 2'
                  id='imgPath2'
                  frmField={formik.getFieldProps('imgPath2')}
                  err={formik.touched['imgPath2'] && formik.errors['imgPath2']}
                  errMessage={formik.errors['imgPath2']}
                  autoComplete='off'
                  labelSize={4}
                />
                <Input
                  type='text'
                  title='Picture 3'
                  id='imgPath3'
                  frmField={formik.getFieldProps('imgPath3')}
                  err={formik.touched['imgPath3'] && formik.errors['imgPath3']}
                  errMessage={formik.errors['imgPath3']}
                  autoComplete='off'
                  labelSize={4}
                />
                <Input
                  type='text'
                  title='Picture 4'
                  id='imgPath3'
                  frmField={formik.getFieldProps('imgPath4')}
                  err={formik.touched['imgPath4'] && formik.errors['imgPath4']}
                  errMessage={formik.errors['imgPath4']}
                  autoComplete='off'
                  labelSize={4}
                />
                <Input
                  type='text'
                  title='Picture 5'
                  id='imgPath5'
                  frmField={formik.getFieldProps('imgPath5')}
                  err={formik.touched['imgPath5'] && formik.errors['imgPath5']}
                  errMessage={formik.errors['imgPath5']}
                  autoComplete='off'
                  labelSize={4}
                />
                <Input
                  type='text'
                  title='Picture 6'
                  id='imgPath6'
                  frmField={formik.getFieldProps('imgPimgPath6ath5')}
                  err={formik.touched['imgPath6'] && formik.errors['imgPath6']}
                  errMessage={formik.errors['imgPath6']}
                  autoComplete='off'
                  labelSize={4}
                />
                <Input
                  type='text'
                  title='Picture 7'
                  id='imgPath7'
                  frmField={formik.getFieldProps('imgPath7')}
                  err={formik.touched['imgPath7'] && formik.errors['imgPath7']}
                  errMessage={formik.errors['imgPath7']}
                  autoComplete='off'
                  labelSize={4}
                />
                <Input
                  type='text'
                  title='Picture 8'
                  id='imgPath8'
                  frmField={formik.getFieldProps('imgPath8')}
                  err={formik.touched['imgPath8'] && formik.errors['imgPath8']}
                  errMessage={formik.errors['imgPath8']}
                  autoComplete='off'
                  labelSize={4}
                />
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
                {/* {curEmp.map((date, idx) => {
                  return <div key={idx}> {date.timetable} </div>;
                })} */}
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
