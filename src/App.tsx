import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Navigation from "./componet/Navigation";
//1
function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Navigation/>
        </BrowserRouter>
    </div>
  );
}

export default App;
