
import './App.css';
import Create from './components/Create';
import Read from './components/Read';
import Update from './components/Update';
import React from 'react';
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom'
import NavBar from './components/NavBar';
import NavBar2 from './components/NavBar2';



function App() {
  
  return (

    <div>          
    <Router>
    <NavBar2/>
      <div className="main">
        
        <h2 className="main-header">Registration of Service Providers</h2>
        <div>
        <Routes>
          <Route exact path='/' element={<Create />} />
          <Route exact path='/read' element={<Read />} />
          <Route path='/update' element={<Update />} />
          </Routes>
        </div>
      </div>
    </Router>
    </div>
  );
}

export default App;
