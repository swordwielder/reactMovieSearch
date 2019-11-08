import React, { Component } from 'react';
import { ReactiveBase } from '@appbaseio/reactivesearch';
import Navbar from './Component/NavBar.js'

class Main extends React.Component {
  render() {
    return (
      <div className="main-container">
        <ReactiveBase
          app="tidy-grocer-ddrskv"
          credentials="1ZyzNH0jN:e3a84017-503f-4502-8e89-6a010b645f23"
         >
          Hello from ReactiveSearch!

          <Navbar />
        </ReactiveBase>

        
        
      </div>
    );
  }
}

export default Main;