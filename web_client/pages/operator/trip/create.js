import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import useInput from "../../../hooks/useInput";
import axios from "axios";
import { toast } from "react-toastify";
import { getSession, useSession } from "next-auth/react";
import SubmitButton from "../../../components/parts/SubmitButton";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import TextField from "@mui/material/TextField";
import useToken from "../../../hooks/useToken";
import useSWR from "swr";
import ReactLoading from "react-loading";

function CreateTrip() {
  const [validated, setValidated] = useState(false);
  const [isPosting, setIsPosting] = useState(false);
  const [routeId, bindRouteId] = useInput();
  const [busId, bindBusId] = useInput();

  const [dateTime, setDateTime] = useState(dayjs(new Date()));

  const token = useToken();

  const { data: routes, error: routesError } = useSWR(
    token
      ? [`${process.env.NEXT_PUBLIC_BACKEND_URL}/route/view/all?size=50`, token]
      : null,
    {
      revalidateOnMount: true,
    }
  );

  const { data: buses, error: busesError } = useSWR(
    token
      ? [`${process.env.NEXT_PUBLIC_BACKEND_URL}/bus/view/all?size=50`, token]
      : null,
    {
      revalidateOnMount: true,
    }
  );

  const handleDateTime = (newValue) => {
    setDateTime(newValue);
  };

  const createTrip = async () => {
    setIsPosting(true);

    const data = {
      busId: busId,
      routeId: routeId,
      departing_time: dateTime.$d,
    };

    console.log("data", data);

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    axios
      .post(process.env.NEXT_PUBLIC_BACKEND_URL + "/trip/create/", data, config)
      .then((response) => {
        toast.success(`ID ${data.busId} Trip is created`);
        setIsPosting(false);
      })
      .catch((error) => {
        setIsPosting(false);
        try {
          toast.error(`something went wrong. ${error.message}. \n try again`);
        } catch (error) {
          toast.error("System Failure. try later");
        }
      });
  };

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    if (form.checkValidity() === false) {
      toast.warn("invalid inputs. double check the form");
      if (!routes.totalPages) {
        toast.info(
          "you do not have any routes info. go to route route management to add route information"
        );
      }
      if (!buses.totalPages) {
        toast.info(
          "you do have any bus information. go to bus management to add bus information"
        );
      }
      event.stopPropagation();
    } else {
      //registration form is valid register
      createTrip();
    }
    setValidated(true);
  };

  return (
    <div className="container py-4">
      <div className="text-center">
        <h4>Add New Trip</h4>
        <p>to add a new route provide bus capacity and bus number plate</p>
      </div>

      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <div className="row d-flex justify-content-center">
          <div className="col-md-6">
            <div className="input-group mb-3">
              <span
                className="input-group-text bg-primary text-white"
                id="inputGroup-sizing-default"
              >
                route <i className="bi bi-pin-map"></i>
              </span>
              <select
                disabled={!routes && !routesError}
                {...bindRouteId}
                className="form-select text-center fw-light"
                required
              >
                <option value="" disabled>
                  choose route
                </option>

                {routes &&
                  !routesError &&
                  routes.data.map((route) => (
                    <option key={route.id} value={route.id}>
                      {route.id} - {route.starting_point} - {route.ending_point}
                    </option>
                  ))}
              </select>
            </div>

            <div className="input-group mb-3">
              <span
                className="input-group-text bg-primary text-white"
                id="inputGroup-sizing-default"
              >
                bus
              </span>
              <select
                {...bindBusId}
                disabled={!buses && !busesError}
                className="form-select text-center fw-light"
                required
              >
                <option value="" disabled>
                  select bus
                </option>
                {buses &&
                  !busesError &&
                  buses.data.map((bus) => (
                    <option
                      className="text-primary"
                      key={bus.id}
                      value={bus.id}
                    >
                      {bus.id} - {bus.plate_number}
                    </option>
                  ))}
              </select>
            </div>

            <div className="input-group mb-3 ">
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateTimePicker
                  label="Departing Time"
                  value={dateTime}
                  onChange={handleDateTime}
                  renderInput={(params) => (
                    <TextField
                      variant="outlined"
                      helperText="select time your trip will start"
                      label="Time"
                      fullWidth
                      size="small"
                      {...params}
                    />
                  )}
                  minDate={dayjs(new Date())}
                />
              </LocalizationProvider>
            </div>
          </div>
        </div>

        <div className="d-flex justify-content-center my-2">
          <SubmitButton isLoading={isPosting}>create trip</SubmitButton>
        </div>
      </Form>
    </div>
  );
}

export default CreateTrip;

export async function getServerSideProps({ req }) {
  const session = await getSession({ req });
  if (!session) {
    return {
      redirect: {
        destination: "/operator/auth/login",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}
