import React, { useState } from "react";
// import SimpleDateTime from "react-simple-timestamp-to-date";
import Link from "next/link";
function Card({ data }) {
  console.log("data ==", data);
  return (
    <div className="card rounded-0 ">
      <div className="card-body">
        <div className="row">
          <div className="col">
            <div className="py-2">
              <h6 className="text-secondary">
                Trip
                <span className="text-danger"> #{data.id}</span>
              </h6>
            </div>
          </div>
          <div className="col text-center">
            <h6 className="text-primary">Trip</h6>
            <h6 className="text-muted">
              {data.Route.starting_point} - {data.Route.ending_point} :
              <small className="text-danger fw-light">
                {" "}
                K{data.Route.fare}
              </small>
            </h6>
            <p className="text-muted">
              <small className="text-danger">
                {/* <SimpleDateTime
                  dateSeparator="-"
                  format="MYD"
                  timeSeparator=":"
                  meridians="1"
                >
                  {data.departing_time}
                </SimpleDateTime> */}
              </small>
            </p>
            <p className="text-dark">Bus #: {data.Bus.plate_number} </p>
          </div>
          <div className="col">
            <div
              className="btn-group"
              role="group"
              aria-label="Basic outlined example"
            >
              <Link href={`/operator/trip/delete/${data.id}`}>
                <a>
                  <button type="button" className="btn btn-outline-danger">
                    delete
                  </button>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
