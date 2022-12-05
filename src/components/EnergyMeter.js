import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { meters } from "../data";

function EnergyMeter() {
  const { id } = useParams();
  const [energyMeter, setEnergyMeter] = useState({});
  const [utility, setUtility] = useState(null);
  const utilities = ["Water", "Gas", "Electric"];

  React.useEffect(() => {
    setEnergyMeter(meters.find((meter) => meter.serialNumber === id));
  }, []);

  return (
    <div className="energy-meter">
      <h2>Find Your Energy Meter Details</h2>
      <div className="info">
        <p>Email: {energyMeter.email}</p>
        <p>Serail Number: {energyMeter.serialNumber}</p>
        <p>
          Utility:
          {utilities?.map((item) => (
            <button key={item} onClick={() => setUtility(item)}>
              {item}
            </button>
          ))}
        </p>
      </div>
      {utility && (
        <table className="table">
          <thead>
            <tr>
              <td>Id</td>
              <td>Utility</td>
              <td>Date</td>
              <td>Reading</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>{utility}</td>
              <td>2 Dec 2022</td>
              <td>111</td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
}

export default EnergyMeter;
