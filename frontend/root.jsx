import React from 'react';

import Tabs from './tabs';

const tabInfo = [
  {title: 'tab 1', content: 'contents of tab 1'},
  {title: 'tab 2', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
  {title: 'tab 3', content: 'contents of tab 3'},
  {title: 'tab 4', content: 'contents of tab 4'},
  {title: 'tab 5', content: 'If two witches watched two watches, which witch would watch which watch when?'},
];

export default class Root extends React.Component {
  render () {
    return (
      <Tabs tabs={tabInfo} />
    );
  }
}
