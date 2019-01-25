import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { getPeopleList, getPeopleIsLoading } from '../../../../store/selectors/people';
import { fetchMyPeopleAction } from '../../../../store/actions/people';
import Loader from '../../../common/loader';
import PersonItem from '../../../common/person-list-item';
import './style.scss';

class PeopleList extends Component {
  componentDidMount() {
    const { fetchPeople } = this.props;

    fetchPeople();
  }

  render() {
    const { peopleList, match, loading } = this.props;

    return (
      <div className="peopleList">
        <div className="peopleList__header">
          <h3>My People</h3>
          <Link to={`${match.url}/new`}>New Person</Link>
        </div>
        <ul className="peopleList__list">
          {peopleList.map(person => <PersonItem person={person} key={person._id} />)}
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
