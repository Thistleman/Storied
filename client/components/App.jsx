import React from 'react';

import Clist from './ui/clist.jsx';
import LocList from './ui/loclist.jsx';
import Elist from './ui/elist.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        Hello from the App
        <Clist />
        <LocList />
        <Elist />
      </div>
    );
  }
}

export default App;
