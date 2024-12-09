import React, { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import MainLayout from './component/MainLayout';
import Register from './component/Register';
import Login from './component/Login';
import Dashboard from './component/Dashboard';
import Logout from './component/Logout';

const App = () => {
  const [data,setData]=useState();
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainLayout/>}>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          </Route>
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='/logout' element={<Logout/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App