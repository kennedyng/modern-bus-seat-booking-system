import React, { useState } from "react";
import Link from "next/link";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import TextField from "@mui/material/TextField";
function Card({ data }) {
  return (
    <div className="card rounded-0 shadow ">
      <div className="card-body">
        <div className="row">
          <div className="col d-flex justify-content-center align-items-center">
            <div className="py-2">
              <h6 className="text-secondary">
                <span className="text-white fw-bolder btn btn-dark rounded-4">
                  #{data.id}
                </span>
              </h6>
            </div>
          </div>
          <div className="col text-center ">
            <h6 className="text-muted fw-bold">TRIP</h6>
            <h6 className="text-muted text-uppercase">
              {data.Route.starting_point} - {data.Route.ending_point}
            </h6>
            <h6 className="text-dark fw-light">
              K{data.Route.fare} per passenger
            </h6>

            <p className="text-primary text-uppercase">
              Bus {data.Bus.plate_number}
            </p>
            <div>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateTimePicker
                  label="departing time"
                  onChange={() => null}
                  value={data.departing_time}
                  renderInput={(params) => (
                    <TextField
                      size="small"
                      fullWidth
                      variant="outlined"
                      {...params}
                    />
                  )}
                />
              </LocalizationProvider>
            </div>
          </div>
          <div className="col d-flex justify-content-center align-items-center">
            <div
              className="btn-group"
              role="group"
              aria-label="Basic outlined example"
            >
              <Link href={`/operator/trip/delete/${data.id}`}>
                <a>
                  <button type="button" className="btn btn-danger rounded-0">
                    <i className="bi bi-trash"></i>
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
