import React from "react";
import MeterReadingForm from "../components/MeterReadingForm";

import "./Common.css";

function MeterReading() {
  return (
    <div className="screen-container">
      <div className="container">
        <h2>Add Meter Reading</h2>
        <MeterReadingForm />
      </div>
    </div>
  );
}

export default MeterReading;
