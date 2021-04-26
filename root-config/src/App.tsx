import React from 'react';
import logo from './logo.svg';
import './App.css';

const ReactApp = React.lazy(() => import("ReactApp/App"));

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>root-config/src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <React.Suspense fallback={<div>Loading ReactApp...</div>}>
        <ReactApp />
      </React.Suspense>
    </div>
  );
}

export default App;
