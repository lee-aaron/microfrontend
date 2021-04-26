import React from 'react';
import './App.css';
import System from './System';

function App() {

  return (
    <div className="App">
      <div>This is the Root App and below is the imported WebComponent</div>
      <System system={{
        url: "http://localhost:8081/remoteEntry.js",
        scope: "ReactApp",
        module: "./App"
      }} />
    </div>
  );
}

export default App;
