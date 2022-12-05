import React from "react";
import "./Common.css";

function MeterForm() {
  const [meter, setMeter] = React.useState({
    latitude: "",
    longitude: "",
    serialNumber: "",
    utility: "",
  });

  const handleChange = (evt) => {
    setMeter({
      ...meter,
      [evt.target.name]: evt.target.value,
    });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log("meter", meter);
    setMeter({
      latitude: "",
      longitude: "",
      serialNumber: "",
      utility: "",
    });
  };

  return (
    <div className="container">
      <h2>Meter Registeration</h2>

      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="latitude">Latitude</label>
        <input
          id="latitude"
          type="text"
          value={meter.latitude}
          name="latitude"
          onChange={handleChange}
          required
        />

        <label htmlFor="longitude">Longitude</label>
        <input
          id="longitude"
          type="text"
          value={meter.longitude}
          name="longitude"
          onChange={handleChange}
          required
        />

        <label htmlFor="serialNumber">Meter Serial Number</label>
        <input
          id="serialNumber"
          type="text"
          value={meter.serialNumber}
          name="serialNumber"
          onChange={handleChange}
          required
        />

        <label htmlFor="utility">Utility</label>
        <select
          name="utility"
          id="utility"
          value={meter.utility}
          onChange={handleChange}
          required
        >
          <option value="">select</option>
          <option value="water">Water</option>
          <option value="gas">Gas</option>
          <option value="electric">Electric</option>
        </select>

        <input type="submit" value="Register" className="form-submit-button" />
      </form>
    </div>
  );
}

export default MeterForm;
