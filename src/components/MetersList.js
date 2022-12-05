import React from "react";
import { meters } from "../data";
import { useNavigate } from "react-router-dom";

function MetersList() {
  const navigate = useNavigate();
  const [energyMeters, setEnergyMeters] = React.useState([]);

  React.useEffect(() => {
    setEnergyMeters([...meters]);
  }, []);

  return (
    <div className="meters-list">
      <h2>Registered User's Meter List</h2>

      <table className="table">
        <thead>
          <tr>
            <td>Id</td>
            <td>Serial Number</td>
            <td>Recent Reading</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {energyMeters.length > 0 &&
            energyMeters.map((meter, index) => {
              return (
                <tr key={meter.serialNumber}>
                  <td>{index + 1}</td>
                  <td>{meter.serialNumber}</td>
                  <td>...</td>
                  <td>
                    <button
                      className="detail-btn"
                      onClick={() => navigate(`/meter/${meter.serialNumber}`)}
                    >
                      Detail
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}

export default MetersList;
