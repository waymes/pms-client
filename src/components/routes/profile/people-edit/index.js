import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import { getPerson, getPersonIsLoading, getPeopleError } from '../../../../store/selectors/people';
import {
  fetchPersonAction, createNewPersonAction,
  updatePersonAction, clearPersonAction,
  deletePersonAction
} from '../../../../store/actions/people';
import { relationTypes } from './constants';
import { withNotifications } from '../../../common/notification';
import ContentLayout from '../components/content-layout';
import TextField from '../../../common/text-field';
import Select from '../../../common/select';
import Button from '../../../common/button';
import Loader from '../../../common/loader';

class PeopleEdit extends Component {
  constructor(props) {
    super(props);
    this.firstInput = React.createRef();    
  }

  componentDidMount() {
    const { fetchPerson, match } = this.props;

    if (match.params.personId !== 'new') {
      fetchPerson(match.params.personId);
    } else {
      this.firstInput.current.focusInput();
    }
  }

  componentDidUpdate(prevProps) {
    const { errorMessage, queueNotification } = this.props;

    const newError = errorMessage && !prevProps.errorMessage;
    if (newError && errorMessage instanceof Array) {
      errorMessage.forEach(err => queueNotification(err, { variant: 'error' }));
    } else if (newError) {
      queueNotification(errorMessage, { variant: 'error' });
    }
  }

  componentWillUnmount() {
    const { clearPerson } = this.props;

    clearPerson();
  }

  delete = () => {
    const { match, deletePerson } = this.props;

    deletePerson(match.params.personId);
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
      <ContentLayout title={isNew ? 'New Person' : 'Edit Person'}>
        <form onSubmit={handleSubmit(this.submit)}>
          <TextField name="firstName" placeholder="First Name" required disabled={loading} ref={this.firstInput} />
          <TextField name="lastName" placeholder="Last Name" disabled={loading} />
          <TextField name="email" placeholder="Email" disabled={loading} />
          <TextField name="city" placeholder="City" disabled={loading} />
          <Select name="relation" options={relationTypes} />
          <div className="d-flex justify-content-end">
            {!isNew && (
              <Button
                className="mr-3"
                onClick={this.delete}
                disabled={loading}
              >Delete</Button>
            )}
            <Button type="submit" disabled={loading}>{isNew ? 'Create' : 'Save'}</Button>
          </div>
        </form>
        <Loader isLoading={loading} withBlur={true} />
      </ContentLayout>
    );
  }
}

PeopleEdit.propTypes = {
  person: PropTypes.object,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
  fetchPerson: PropTypes.func.isRequired,
  createPerson: PropTypes.func.isRequired,
  clearPerson: PropTypes.func.isRequired,
  updatePerson: PropTypes.func.isRequired,
  deletePerson: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  person: getPerson(state),
  initialValues: getPerson(state),
  loading: getPersonIsLoading(state),
  errorMessage: getPeopleError(state)
});

const mapDispatchToProps = dispatch => ({
  fetchPerson: (personId) => dispatch(fetchPersonAction(personId)),
  createPerson: (person) => dispatch(createNewPersonAction(person)),
  updatePerson: (person) => dispatch(updatePersonAction(person)),
  deletePerson: (personId) => dispatch(deletePersonAction(personId)),
  clearPerson: () => dispatch(clearPersonAction())
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  reduxForm({
    form: 'PersonEditForm',
    enableReinitialize: true,
    initialValues: { relation: 'NONE' }
  }),
  withNotifications
)(PeopleEdit);
