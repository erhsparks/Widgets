import React from 'react';
import ReactDOM from 'react-dom';

import Tabs from './tabs';

document.addEventListener('DOMContentLoaded', function () {
  ReactDOM.render(<Root />, document.getElementById('main'));
});

class Root extends React.Component {
  render () {
    return (
      <Tabs tabs={tabInfo} />
    );
  }
}

const tabInfo = [
  {title: 'tab 1', content: 'contents of tab 1'},
  {title: 'tab 2', content: 'contents of tab 2'}
];
