import React from 'react';
import ReactDOM from 'react-dom';

import classes from './css/global/index.scss';

console.log(Object.keys(classes));

ReactDOM.render(
  <div className="App">
    <span>Hello, world.</span>
  </div>,
  document.getElementById('root'),
);
