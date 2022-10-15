import React, { useState } from "react";
import Link from "next/link";
function RouteCard({ data }) {
  return (
    <div className="card rounded-0 shadow ">
      <div className="card-body">
        <div className="row">
          <div className="col d-flex justify-content-center align-items-center">
            <button className="btn btn-dark rounded-4">{data.id}</button>
          </div>
          <div className="col text-center ">
            <h6 className="text-muted text-uppercase">{data.starting_point}</h6>
            <h6>to</h6>
            <h6 className="text-muted text-uppercase">{data.ending_point}</h6>

            <small className="text-danger">fare K{data.fare}</small>
          </div>

          <div className="col d-flex justify-content-center align-items-center">
            <Link href={`/operator/route/delete/${data.id}`}>
              <a>
                <div
                  className="btn-group"
                  role="group"
                  aria-label="Basic outlined example"
                >
                  <button type="button" className="btn btn-danger">
                    <i className="bi bi-trash"></i>
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
