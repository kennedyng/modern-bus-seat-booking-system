import React, { useState } from "react";
import Link from "next/link";
function RouteCard({ data }) {
  console.log("card", data);
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
            <h6 className="text-primary">Route</h6>
            <h6 className="text-muted">
              {data.starting_point} - {data.ending_point}
            </h6>
          </div>
          <div className="col text-center">
            <h6 className="text-primary">Fare</h6>
            <h6 className="text-danger">K {data.fare}</h6>
          </div>
          <div className="col">
            <Link href={`/operator/route/delete/${data.id}`}>
              <a>
                <div
                  className="btn-group"
                  role="group"
                  aria-label="Basic outlined example"
                >
                  <button type="button" className="btn btn-outline-danger">
                    delete
                  </button>
                </div>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RouteCard;
