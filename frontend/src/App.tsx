import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
  Navigate
} from "react-router-dom";

import './App.css';
import Login from './pages/Login';
import Logout from './pages/Logout';
import Dashboard from './pages/Dashboard';
import PrivateRoute from './components/PrivateRoute';
import { Button, ConfigProvider, theme } from 'antd';
import About from './pages/About';

function App() {

  const PrivateRoutes = () => {
    return (
      <>
        <PrivateRoute>
          <Outlet />
        </PrivateRoute>
      </>
    )
  }


  // using antd basic components to show frontend in a more user friendly way
  return (
      <Router>
        <Routes>
          <Route path="/">
            <Route path="login" element={<Login />} />
            <Route path="/" element={ <PrivateRoutes /> }>
              <Route path="logout" element={ <Logout /> } />
              <Route path="dashboard" element={ <Dashboard /> } />
              <Route path="about" element={ <About /> } />
            </Route>
          </Route>
          <Route path="*" element={ <Navigate to="/dashboard" /> } />
        </Routes>
      </Router>
  );
}

export default App;
