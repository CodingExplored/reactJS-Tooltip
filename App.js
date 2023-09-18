import React from 'react';
import './App.css';
import Tooltip from './components/Tooltip';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <div>
        <Tooltip style={{ marginTop: '500px', marginLeft: '500px' }} text="This is a tooltip in React">
          <button>Hover me</button>
        </Tooltip>
      </div>
    </div>
  );
}

export default App;
