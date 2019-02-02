import React, { Component } from 'react';

import { characteristics } from './constants';
import Button from '../../common/button';
import './style.scss';

class HomePage extends Component {
  componentDidMount() {
    if (window && window.particlesJS) {
      window.particlesJS.load('particles-js', 'particles.json');
    }
  }

  render() {
    return (
      <div className="homePage">
        <div className="homePage__header">
          <div id="particles-js" className="homePage__headerParticles" />
          <div className="homePage__headerTitle">
            <h1>Human Resources Management</h1>
            <h2>System overview</h2>
          </div>
        </div>
        <div className="homePage__description bg-white">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-6">
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
              <div className="col-12 col-md-6">photo</div>
            </div>
          </div>
        </div>
        <div className="homePage__chars bg-light">
          <div className="container text-center">
            <h5 className="text-danger mb-3">COMMON CHARACTERISTICS</h5>
            <h3 className="mb-4">Proven HR solution with a modern approach</h3>
            <p>
              Whichever modules you select from PMS integrated suite, you’ll
              benefit from centralized data, a consistent user-interface, time-saving automation,
              advanced security and much more.
            </p>
            <div className="row mt-4">
              {characteristics.map((char, id) => (
                <div className="col-12 col-sm-6 col-md-4 homePage__characteristic" key={id}>
                  <i className={char.icon} />
                  <h5>{char.title}</h5>
                  <p>{char.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="homePage__support bg-white">
          <div className="container text-center">
            <h5 className="text-danger mb-3">FAST TO IMPLEMENT, EASY TO MANAGE</h5>
            <h3 className="mb-4">With expert support when you need it</h3>
            <p className="mb-4">
              Thanks to clever design, and support from our dedicated team of product experts,
              you can start benefiting from your new HR system in no time at all. We’ll be
              available to assist with data upload, provide advice on set up, train you on
              your own HR system, and provide a helping hand with configuration.
            </p>
            <Button>READ ABOUT OUR SERVICES</Button>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
