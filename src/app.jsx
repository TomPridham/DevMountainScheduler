import React from 'react';
import {render} from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';


class App extends React.Component{
  render() {
    return (
      <div>
      its working
      </div>

    )
  }
}

render(<App/>, document.getElementById('app'));
