import React, { useEffect, useState } from "react";
import { towns } from "../../data/station";
function About() {
  const [stations, setStations] = useState([]);
  useEffect(() => {
    setStations(towns);
  }, []);

  return (
    <div className="container py-4 text-center mb-4">
      <h2 className="fw-bolder ">About Us</h2>
      <p className="text-secondary">
        The main objective of the web applicaiton is to be used by bus{" "}
        <b>operators to manage their trips </b>
        and also to used by{" "}
        <b>Passengers to Register and Manage ther Profiles</b>
      </p>
      <hr />
      <h4 className="fw-light text-muted">
        {stations.length} Supported Stations Within Zambia
      </h4>
      <p className="text-muted fw-light">
        buy and sell bus a passenger seat ticket from{" "}
        {stations.map((station) => (
          <b key={station.id} className="text-uppercase">
            {station.point}{" "}
          </b>
        ))}
        with few steps.
      </p>
    </div>
  );
}

export default About;
