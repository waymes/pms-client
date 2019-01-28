import React, { Component } from 'react';

import { characteristics } from './constants';
import Button from '../../common/button';
import './style.scss';

class HomePage extends Component {
  render() {
    return (
      <div className="homePage">
        <div className="homePage__header">
          <h1>Human Resources Management</h1>
          <h2>System overview</h2>
        </div>
        <div className="homePage__description bg-white">
          <div className="container">
            <div className="row">
              <div className="col-6">
                <h5 className="text-danger">INTEGRATED HUMAN RESOURCES SOFTWARE</h5>
                <h3 className="mb-4">Powerful features at your fingertips</h3>
                <p className="mb-4">
                  Designed for international organizations, PMS is a modern,
                  configurable and growing HR software suite that combines extensive functionality
                  for human resources management with the advantages of the latest Cloud technologies.
                </p>
                <p className="mb-4">
                  By choosing PMS, you’ll benefit from a secure, scalable and cost-effective
                  HR solution that is easy to manage, trusted worldwide, and regularly updated with
                  new features, so you’ll never get left behind.
                </p>
                <Button>See all modules</Button>
              </div>
              <div className="col-6">photo</div>
            </div>
          </div>
        </div>
        <div className="homePage__chars container text-center">
          <h5 className="text-danger mb-3">COMMON CHARACTERISTICS</h5>
          <h3 className="mb-4">Proven HR solution with a modern approach</h3>
          <p>
            Whichever modules you select from PMS integrated suite, you’ll
            benefit from centralized data, a consistent user-interface, time-saving automation,
            advanced security and much more.
          </p>
          <div className="row">
            {characteristics.map(char => (
              <div className="col-12 col-sm-6 col-md-4">
                <i className={char.icon} />
                <h5>{char.title}</h5>
                <p>{char.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
