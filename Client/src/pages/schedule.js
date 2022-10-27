import React, { useState, useEffect } from "react";
import { variables } from "../variables.js";
import axios from "axios";
import { InlineWidget } from "react-calendly";

function Schedule() {

  return (
    <>
      <div>
        <h1>Schedule Here!</h1>
      </div>
      <div>
        <p>Below you will find my Calendar link to schedule your sessions</p>
      </div>
      <div className="App">
        <InlineWidget url="https://calendly.com/garagegymcrofton?hide_gdpr_banner=1" />
      </div>
    </>
  );
}

export default Schedule;
