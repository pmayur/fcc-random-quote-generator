import React from 'react';
import '../styles/App.css';
import Quotes from './Quotes'

class App extends React.Component {

  render() {
    return (
      <div className="app">
        <Quotes />
      </div>
    )
  }
}

export default App;
