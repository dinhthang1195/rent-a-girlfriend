import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightFromBracket, faUser, faUserFriends, faUserSecret } from '@fortawesome/free-solid-svg-icons';

import CustomBtn from '../admin/CustomBtn';

function Sidebar() {
  const data = [
    // {
    //   link: '/admin/dashboard',
    //   icon: faUserSecret,
    //   name: 'Dashboard',
    // },
    {
      link: '/admin/user',
      icon: faUser,
      name: 'Users',
    },
    {
      link: '/admin/employee',
      icon: faUserFriends,
      name: 'Employees',
    },
  ];

  return (
    <>
      <div className='bg-white' id='sidebar-wrapper'>
        <div className='sidebar-heading text-center py-4 primary-text fs-4 fw-bold text-uppercase border-bottom'>
          ADMIN PAGE
        </div>
        <div className='list-group list-group-flush my-3'>
          {data.map((data, index) => (
            <CustomBtn
              key={index}
              link={data.link}
              icon={data.icon}
              color='list-group-item list-group-item-action bg-transparent second-text fw-bold'
              name={data.name}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Sidebar;
