import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './style.scss';

const ContentLayout = ({ title, headerLink, children }) => (
  <div className="contentLayout">
    <div className="contentLayout__header mb-3">
      <h3 className="mb-0">{title}</h3>
      {headerLink && <Link to={headerLink.to}>{headerLink.label}</Link>}
    </div>
    {children}
  </div>
);

ContentLayout.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  headerLink: PropTypes.shape({
    label: PropTypes.string,
    to: PropTypes.string
  })
};

ContentLayout.defaultProps = {
  headerLink: null
}

export default ContentLayout;
