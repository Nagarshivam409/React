import React from 'react';


import './App.css';
import Form from './components/Form';
import Navbar from './components/Navbar';
import PageNotFound from './components/PageNotFound';
import {Routes, Route,Navigate} from 'react-router-dom';
import Studentlist from './components/Studentlist';
import Editform from './components/Editform';

function App() {
  return (
    <div className="App">
    <Navbar/>
    <Routes>
            <Route path="/" element={<Navigate to="/student" />} />
            <Route path="/student" element={ <Form/>} />
            <Route path="/student/edit/:id" element={ <Editform/>} />
            <Route path="/student/list" element={ <Studentlist/>} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
   
    </div>
  );
}

export default App;
