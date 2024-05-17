import React, { useState } from "react";
import Sidebar from "../Pages/AdminPanel/Sidebar/Sidebar";
import Home from "../Pages/AdminPanel/Home/Home";
import Login from "../Pages/LoginRegister/Login/Login";
import Register from "../Pages/LoginRegister/Register/Register";
import AdminPanel from "../Pages/AdminPanel";
import ChoosePatient from "../Pages/ChoosePatient/ChoosePatient";
import PatientProgram from "../Pages/AdminPanel/PatientProgram/PatientProgram";
import ChatPatient from "../Pages/AdminPanel/ChatPatient/ChatPatient";
import PatientInformation from "../Pages/AdminPanel/PatientInformation/PatientInformation";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./styles.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/chatpatient" element={<ChatPatient />} />
        <Route path="/PatientInformation" element={<PatientInformation />} />

        <Route path="/adminpanel" element={<AdminPanel />} />
        <Route path="/choosepatient" element={<ChoosePatient />} />
        <Route path="/patientprogram" element={<PatientProgram />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
