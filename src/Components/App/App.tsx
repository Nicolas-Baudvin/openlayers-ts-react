import React from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css'

import Header from '../Header';
import Home from '../Home';


function App() {
  return (
    <div className="App">
      <Header title="Title" />
      <Home />
    </div>
  );
}

export default App;
