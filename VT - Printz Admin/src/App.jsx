import React from "react";
import Admin from "./Pages/Admin";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import AdminFeedbackList from "./Pages/AdminFeedbackList.jsx";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Admin />} />
        <Route path="/admin/feedback" element={<AdminFeedbackList />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;