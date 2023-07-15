import React from 'react';
import { Toaster } from "react-hot-toast";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Test from './components/Test';
import Register_M from './components/mayank/Register_M';
import Page from './components/neha/Page';

import Result_M from './components/mayank/Result_M';
import Analytics from "./components/Admin/Analytics";
import AdminQuestions from "./components/Admin/AdminQuestions";
import AdminUsers from "./components/Admin/AdminUsers";
import Register2 from "./components/testing/Register"

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Toaster toastOptions={{ duration: 4000 }} />
        <Routes>
          {/* <Route path="/" element={<Home />} />*/}
          <Route path="/register2" element={<Register2 />} />
          <Route path="/" element={<Page />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register_M />} />
          {/* <Route path="/temp/register" element={<Register_M />} /> */}
          <Route path="/test" element={<Test />} />
          <Route path="/admin/analytics" element={<Analytics />} />
          <Route path="/admin/questions" element={<AdminQuestions />} />
          <Route path="/admin/users" element={<AdminUsers />} />
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
