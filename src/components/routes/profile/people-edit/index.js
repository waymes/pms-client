import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import { getPerson, getPeopleIsLoading } from '../../../../store/selectors/people';
import { fetchPersonAction, createNewPersonAction, updatePersonAction, clearPersonAction } from '../../../../store/actions/people';
import TextField from '../../../common/text-field';
import Button from '../../../common/button';
import Loader from '../../../common/loader';

class PeopleEdit extends Component {
  componentDidMount() {
    const { fetchPerson, match } = this.props;

    if (match.params.personId !== 'new') {
      fetchPerson(match.params.personId);
    }
  }

  componentWillUnmount() {
    const { clearPerson } = this.props;

    clearPerson();
  }

  submit = (person) => {
    const { createPerson, updatePerson, match } = this.props;

    if (match.params.personId === 'new') {
      createPerson(person);
    } else {
      updatePerson(person);
    }
  }

  render() {
    const { handleSubmit, loading, match } = this.props;

    const isNew = match.params.personId === 'new';
    return (
      <div className="profilePeople">
        <h3>{isNew ? 'New Person' : 'Edit Person'}</h3>
        <form onSubmit={handleSubmit(this.submit)}>
          <TextField name="firstName" required />
          <TextField name="lastName" required />
          <Button type="submit">{isNew ? 'Create' : 'Save'}</Button>
        </form>
        <Loader isLoading={loading} withBlur={true} />
      </div>
    );
  }
}

PeopleEdit.propTypes = {
  person: PropTypes.object,
  loading: PropTypes.bool.isRequired,
  fetchPerson: PropTypes.func.isRequired,
  createPerson: PropTypes.func.isRequired,
  clearPerson: PropTypes.func.isRequired,
  updatePerson: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  person: getPerson(state),
  initialValues: getPerson(state),
  loading: getPeopleIsLoading(state)
});

const mapDispatchToProps = dispatch => ({
  fetchPerson: (personId) => dispatch(fetchPersonAction(personId)),
  createPerson: (person) => dispatch(createNewPersonAction(person)),
  updatePerson: (person) => dispatch(updatePersonAction(person)),
  clearPerson: () => dispatch(clearPersonAction())
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  reduxForm({ form: 'PersonEditForm', enableReinitialize: true })
)(PeopleEdit);
