import React from 'react';
import { Toaster } from "react-hot-toast";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar';
import Page from "../src/components/neha/Page";
import Page2 from "../src/components/neha/Page2";
import Login from './components/Login';
import Register from './components/Register';
import Test from './components/Test';
import Register_M from './components/mayank/Register_M';
import Page from './components/neha/Page';

import Result_M from './components/mayank/Result_M';
import Analytics from "./components/Admin/Analytics";
import AdminQuestions from "./components/Admin/AdminQuestions";
import AdminUsers from "./components/Admin/AdminUsers";
import Register from "./components/Register"

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Toaster toastOptions={{ duration: 4000 }} />
        <Routes>
          {/* <Route path="/" element={<Home />} />*/}
          <Route path="/register" element={<Register/>} />
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
