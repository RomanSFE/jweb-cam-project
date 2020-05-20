import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import WebcamStreamCapture from './components/WebcamComponent'

function App() {
  return (
    <div className="app-mainpage-section">
      <WebcamStreamCapture/>
    </div>
  );
}

export default App;
