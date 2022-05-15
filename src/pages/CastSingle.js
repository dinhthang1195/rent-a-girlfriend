import { useState, useEffect, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import employeeService from '../services/fe/employeeService';
import userService from '../services/userService';

import { useSelector } from 'react-redux';
import { Carousel, Table, Button } from 'react-bootstrap';
import ReadMore from '../components/ReadMore';

import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { addDays } from 'date-fns';
import { toast } from 'react-toastify';

function CastSingle() {
  const param = useParams();
  const navigate = useNavigate();
  const userInfo = useSelector((state) => state.auth.currentUser);

  const [curTimetable, setCurTimetable] = useState([]);
  const [flag, setFlag] = useState(false);

  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: 'selection',
    },
  ]);

  const [users, setUsers] = useState([]);

  const loadData = () => {
    userService.list().then((res) => {
      setUsers(res.data);
    });
  };

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    console.log('Default timetable', curTimetable);
  }, [curTimetable]);

  useEffect(() => {
    if (param.id !== '') {
      employeeService.get(param.id).then((res) => {
        setEmployee(res.data);
        setCurTimetable(res.data.timetable);
      });
    }
  }, [param.id]);

  const [employee, setEmployee] = useState({
    id: '',
    name: '',
    bloodtype: '',
    height: '',
    birthplace: '',
    profession: '',
    style: '',
    personality: '',
    sake: '',
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
    timetable: [
      {
        customer: '',
        start: '',
        end: '',
      },
    ],
  });

  const handleBack = () => {
    navigate('/');
  };

  const updateDate = (data) => {
    employeeService
      .update(data)
      .then((res) => {
        console.log(res);
        toast.success('Successful selection.');
      })
      .catch((err) => {
        toast.error(err);
      });
  };

  let user = users.find((user) => user.username === userInfo.username);
  const addDate = (data) => {
    let newData = { ...data, id: data._id, timetable: curTimetable };
    console.log('Time for addDate ', newData.timetable);
    updateDate(newData);
  };

  const updateTimetable = (e) => {
    e.preventDefault();
    setFlag(!flag);
    Object.entries(state).forEach(([key, value]) => {
      setCurTimetable((prev) => [...prev, { customer: user._id, start: value.startDate, end: value.endDate }]);
      console.log('newTimetable ', curTimetable);
    });
  };

  useEffect(() => {
    addDate(employee);
  }, [flag]);

  return (
    <>
      <div className='container w-100 mt-4 ' style={{ transform: 'translateY(150px)' }}>
        <div className='row'>
          <div className='col text-center'>
            <h2 className='card-title text-danger'>{employee.name}</h2>
          </div>
        </div>

        <div className='card-body'>
          <div className='row'>
            <div className='col left-card mt-5 me-1  ' style={{ transform: 'translateX(10%)' }}>
              <Carousel className=' w-50 align-items-center mx-auto mb-5'>
                <Carousel.Item>
                  <img className='d-block w-100 image img-fluid' src={employee.imgPath1} alt='First slide' />
                </Carousel.Item>
                <Carousel.Item>
                  <img className='d-block w-100 image img-fluid' src={employee.imgPath2} alt='Second slide' />
                </Carousel.Item>
                <Carousel.Item>
                  <img className='d-block w-100 image img-fluid' src={employee.imgPath3} alt='Third slide' />
                </Carousel.Item>
                <Carousel.Item>
                  <img className='d-block w-100 image img-fluid' src={employee.imgPath4} alt='Fourth slide' />
                </Carousel.Item>
                <Carousel.Item>
                  <img className='d-block w-100 image img-fluid' src={employee.imgPath5} alt='Fifth slide' />
                </Carousel.Item>
              </Carousel>
            </div>
            <div className='col right-card ' style={{ transform: 'translateX(-10%)' }}>
              <div className='row'>
                <div className=' text-center fs-5 fw-bolder mb-3 '>Information</div>
              </div>
              <div className='row'>
                <div className='table-responsive '>
                  <Table striped bordered hover responsive>
                    <tbody className=' text-nowrap '>
                      <tr>
                        <td className=' table-danger '>Blood type</td>
                        <td>{employee.bloodtype}</td>
                        <td className=' table-danger'>Height</td>
                        <td>{employee.height}</td>
                      </tr>
                      <tr>
                        <td className=' table-danger'>Birthplace</td>
                        <td>{employee.birthplace}</td>
                        <td className=' table-danger'>Profession</td>
                        <td>{employee.profession}</td>
                      </tr>
                      <tr>
                        <td className=' table-danger'>Style</td>
                        <td>{employee.style}</td>
                        <td className=' table-danger'>Personality</td>
                        <td>{employee.personality}</td>
                      </tr>
                      <tr>
                        <td className=' table-danger'>Drink</td>
                        <td>{employee.drink}</td>
                        <td className=' table-danger'>Rank</td>
                        <td>{employee.rank}</td>
                      </tr>
                      <tr>
                        <td className=' table-danger '>Self Introduction</td>
                        <td colSpan={3} className='text-wrap '>
                          <ReadMore>{employee.intro}</ReadMore>
                        </td>
                      </tr>
                      <tr>
                        <td className=' table-danger'>LINE ID</td>
                        <td colSpan={3} className='text-wrap '>
                          {employee.lineid}
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=' container  d-flex flex-column justify-content-center align-items-center'>
          <div className='row my-3 display-6 text-danger'>What's your ideal time?</div>
          <div className='row '>
            <form>
              <DateRangePicker
                onChange={(item) => setState([item.selection])}
                showSelectionPreview={true}
                moveRangeOnFirstSelection={false}
                minDate={addDays(new Date(), 0)}
                maxDate={addDays(new Date(), 30)}
                months={1}
                ranges={state}
                direction='horizontal'
                preventSnapRefocus={true}
                calendarFocus='backwards'
              />
            </form>
          </div>
          <div className='row'>
            <button type='button' className='btn btn-light-alt w-50' onClick={(e) => updateTimetable(e)}>
              Select
            </button>
          </div>
        </div>

        <div className='container d-flex flex-column justify-content-center align-items-center mt-4 '>
          <div className='row mb-5'>
            <div className=' col-auto'>
              <Button onClick={handleBack} color='secondary'>
                Back To Homepage
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CastSingle;
