import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { getPeopleList, getPeopleIsLoading } from '../../../../store/selectors/people';
import { fetchMyPeopleAction } from '../../../../store/actions/people';
import Loader from '../../../common/loader';

class PeopleList extends Component {
  componentDidMount() {
    const { fetchPeople } = this.props;

    fetchPeople();
  }

  render() {
    const { peopleList, match, loading } = this.props;

    return (
      <div className="peopleList">
        <h3>My People</h3>
        <div>
          <Link to={`${match.url}/new`}>New Person</Link>
        </div>
        <ul>
          {peopleList.map(person => (
            <li key={person._id}>
              <Link to={`${match.url}/${person._id}`}>{person.firstName} {person.lastName}</Link>
            </li>
          ))}
        </ul>
        <Loader isLoading={peopleList.length === 0 && loading} />
      </div>
    );
  }
}

PeopleList.propTypes = {
  peopleList: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  fetchPeople: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  peopleList: getPeopleList(state),
  loading: getPeopleIsLoading(state)
});

const mapDispatchToProps = dispatch => ({
  fetchPeople: () => dispatch(fetchMyPeopleAction())
});

export default connect(mapStateToProps, mapDispatchToProps)(PeopleList);
