import DeleteModal from "./DeleteModal";
import React, { useState } from "react";
import Link from "next/link";
function BusCard({ data }) {
  return (
    <div className="card rounded-0 shadow">
      <div className="card-body">
        <div className="row">
          <div className="col d-flex justify-content-center align-items-center">
            <div className="text-danger text-uppercase fw-bolder h6">
              {data.plate_number}
            </div>
          </div>
          <div className="col d-flex justify-content-center align-items-center">
            <h6 className="text-primary">{data.total_seat} seat capacity</h6>
          </div>
          <div className="col d-flex justify-content-center align-items-center ">
            <div
              className="btn-group"
              role="group"
              aria-label="Basic outlined example"
            >
              <Link href={`/operator/bus/delete/${data.id}`}>
                <a className="btn btn-danger">
                  <i className="bi bi-trash"></i>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BusCard;
