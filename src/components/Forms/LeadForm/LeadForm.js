import React from 'react';
import PropTypes from 'prop-types';
import Flag from 'react-flags';

const LeadCard = props => {
  const {
    firstName = '', 
    email='',
    statusType='',
    role = {}
  } = props.lead || {};

  return (
    <div className="col-sm-6 col-md-4 country-card">
      <div className="country-card-container border-gray rounded border mx-2 my-3 d-flex flex-row align-items-center p-0 bg-light">
        <div className="h-100 position-relative border-gray border-right px-2 bg-white rounded-left">
          <Flag firstName={firstName}  />
        </div>
        <div className="px-3">
          <span className="country-name text-dark d-block font-weight-bold">{ name.common }</span>
          <span className="country-region text-secondary text-uppercase">{ region }</span>
        </div>
      </div>
    </div>
  )
}

LeadCard.propTypes = {
  lead: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    name: PropTypes.shape({
      common: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};

export default LeadCard;