import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';

function CustomBtn({ color, index, link, icon, name }) {
  return (
    <>
      <NavLink key={index} to={link} className={color}>
        <FontAwesomeIcon icon={icon} /> {name}
      </NavLink>
    </>
  );
}

export default CustomBtn;
