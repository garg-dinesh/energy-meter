import React from "react";
import Camera from "./Camera";

import "./Common.css";

function MeterReadingForm() {
  const [meterReading, setMeterReading] = React.useState({
    serialNumber: "",
    utility: "",
    reading: "",
  });
  const [meterPhoto, setMeterPhoto] = React.useState(null);

  const handleChange = (evt) => {
    setMeterReading({
      ...meterReading,
      [evt.target.name]: evt.target.value,
    });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log("meterReading", meterReading);
    console.log("meterPhoto", meterPhoto);
  };

  const handlePhotoClick = (url) => {
    setMeterPhoto(url);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label htmlFor="serialNumber">Meter Serial Number</label>
      <input
        type={"text"}
        id="serialNumber"
        name="serialNumber"
        value={meterReading.serialNumber}
        onChange={handleChange}
        required
      />

      <label htmlFor="utility">Utility</label>
      <select
        name="utility"
        value={meterReading.utility}
        onChange={handleChange}
        required
      >
        <option value="">select</option>
        <option value="water">Water</option>
        <option value="gas">Gas</option>
        <option value="electric">Electric</option>
      </select>

      <label htmlFor="reading">Reading</label>
      <input
        type={"text"}
        id="reading"
        name="reading"
        value={meterReading.reading}
        onChange={handleChange}
        required
      />

      <div className="camera-container">
        <Camera onClick={handlePhotoClick} />
      </div>

      <input
        type={"submit"}
        value="Add"
        className="form-submit-button"
        disabled={meterPhoto ? false : true}
      />
    </form>
  );
}

export default MeterReadingForm;
