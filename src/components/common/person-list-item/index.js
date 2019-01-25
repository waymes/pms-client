import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import DefaultPhoto from '../../../assets/default.png';
import './style.scss';

const PersonItem = ({ person }) => (
  <li key={person._id} className="personItem">
    <div className="personItem__photo" style={{ backgroundImage: `url(${DefaultPhoto})` }} />
    <div className="personItem__info">
      <Link to={`/profile/people/${person._id}`} className="personItem__name">
        {person.firstName} {person.lastName}
      </Link>
    </div>
  </li>
);

PersonItem.propTypes = {
  person: PropTypes.shape({
    _id: PropTypes.string,
    firstName: PropTypes.string,
    lastName: PropTypes.string
  }).isRequired
};

export default PersonItem;
