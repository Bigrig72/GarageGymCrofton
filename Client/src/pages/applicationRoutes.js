import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Schedule from "./schedule";
import Services from "./services";
import Login from "./login";
import Welcome from "./welcome";
import Portal from "./portal";
import PersonalTrainingRates from "./personalTraining";

function ApplicationRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Welcome />} />
        <Route exact path="/schedule" element={<Schedule />} />
        <Route exact path="/services" element={<Services />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/portal" element={<Portal />} />      
        <Route exact path="/" element={<Welcome />} />      

        <Route
          exact
          path="/personalTraining"
          element={<PersonalTrainingRates />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default ApplicationRoutes;
    