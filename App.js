import React from 'react';
import './App.css';
import Tooltip from './components/Tooltip';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <div style={{ display: flex, justifyContent: "center", alignItems: 'center' }}>
        <Tooltip text="This is a tooltip in React">
          <button>Hover me</button>
        </Tooltip>
      </div>
    </div>
  );
}

export default App;
