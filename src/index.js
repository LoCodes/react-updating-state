import React from 'react';
import ReactDOM from 'react-dom';
import ClickityClick from './components/ClickityClick';
import LightSwitch from './components/LightSwitch';


ReactDOM.render(
  <div>
    <ClickityClick />
    Mount Components Here

    <LightSwitch />
  </div>,
  document.getElementById('root')
);
