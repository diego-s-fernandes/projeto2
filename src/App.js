
import './App.css';
import CreateFormPage from './components/CreateFormPage';
import Read from './components/Read';
import Update from './components/Update';
import React from 'react';
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom'
import NavBar2 from './components/NavBar2';
import Detail from './components/Detail';





function App() {
  
  return (

    <div>          
    <Router>
    <NavBar2/>
      <div className="main">
        
        <h2 className="main-header">Registration of Service Providers</h2>
        <div>
        <Routes>
          <Route exact path='/' element={<CreateFormPage />} />
          <Route exact path='/read' element={<Read />} />
          <Route path='/read/:id' element={<Detail />} />
          <Route path='/update' element={<Update />} />
          </Routes>
        </div>
      </div>
    </Router>
    </div>
  );
}

export default App;
