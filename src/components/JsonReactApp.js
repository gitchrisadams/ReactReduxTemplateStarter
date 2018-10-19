import React from 'react';

// User defined component imports:
import JsonAddForm from './JsonAddForm';
import JsonOutput from './jsonOutput';

const jsonReactApp = (props) => (
<div className="container">
    <div className="row" id="jsonForm">
      <h1>React Redux Starter Template</h1>
    </div>

    <div className="row">
      <JsonAddForm />
    </div>

    <div className="row" id="jsonOutput">
      <JsonOutput />
    </div>

</div>
);

export default jsonReactApp;