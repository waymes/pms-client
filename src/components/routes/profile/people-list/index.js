import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getPeopleList, getPeopleIsLoading } from '../../../../store/selectors/people';
import { fetchMyPeopleAction } from '../../../../store/actions/people';
import ContentLayout from '../components/content-layout';
import Loader from '../../../common/loader';
import PersonItem from '../../../common/person-list-item';

class PeopleList extends Component {
  componentDidMount() {
    const { fetchPeople } = this.props;

    fetchPeople();
  }

  render() {
    const { peopleList, match, loading } = this.props;

    const headerLink = { label: 'New Person', to: `${match.url}/new` };
    return (
      <ContentLayout title="My People" headerLink={headerLink}>
        <ul className="mt-3 mb-0 p-0">
          {peopleList.map(person => <PersonItem person={person} key={person._id} />)}
        </ul>
        <Loader isLoading={peopleList.length === 0 && loading} />
      </ContentLayout>
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
