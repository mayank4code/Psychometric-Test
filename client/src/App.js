import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar';
// import Home from './components/Home';
import Page from "../src/components/neha/Page";
import Page2 from "../src/components/neha/Page2";
import Login from './components/Login';
// import Register from './components/Register';
import Test from './components/Test';
import Register_M from './components/mayank/Register_M';
import Result_M from './components/mayank/Result_M';
import Analytics from "./components/Admin/Analytics";
import AdminQuestions from "./components/Admin/AdminQuestions";
import AdminUsers from "./components/Admin/AdminUsers";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          {/* <Route path="/" element={<Home />} />*/}
          <Route path="/" element={<Page />} />
          <Route path="/page2" element={<Page2 />} />

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register_M />} />
          <Route path="/result" element={<Result_M />} />
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
