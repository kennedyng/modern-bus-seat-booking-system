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

function CreateTrip() {
  const [validated, setValidated] = useState(false);
  const [routeId, bindRouteId] = useInput("1");
  const [busId, bindBusId] = useInput("1");
  const [isPosting, setIsPosting] = useState(false);
  const [dateTime, setDateTime] = useState(dayjs(new Date()));
  const token = useToken();

  const { data: routes, error: routesError } = useSWR(
    [`${process.env.NEXT_PUBLIC_BACKEND_URL}/route/view/all?size=20`, token],
    {
      revalidateOnMount: true,
    }
  );

  const { data: buses, error: busesError } = useSWR(
    [`${process.env.NEXT_PUBLIC_BACKEND_URL}/bus/view/all?size=20`, token],
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
      departing_time: new Date(),
    };

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    axios
      .post(process.env.NEXT_PUBLIC_BACKEND_URL + "/trip/create/", data, config)
      .then((response) => {
        toast.success(` is created successfully`);
        setIsPosting(false);
      })
      .catch((error) => {
        console.log(error);
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
                Route
              </span>
              <select {...bindRouteId} className="form-select">
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
                Bus
              </span>
              <select {...bindBusId} className="form-select">
                {buses &&
                  !busesError &&
                  buses.data.map((bus) => (
                    <option key={bus.id} value={bus.id}>
                      {bus.id} - {bus.plate_number}
                    </option>
                  ))}
              </select>
            </div>

            <div className="input-group mb-3 d-flex justify-content-center">
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateTimePicker
                  label="departing time"
                  value={dateTime}
                  onChange={handleDateTime}
                  renderInput={(params) => <TextField {...params} />}
                  minDate={dayjs(new Date())}
                  className="text-primary h-15"
                />
              </LocalizationProvider>
            </div>
          </div>
        </div>

        <div className="d-flex justify-content-center my-2">
          <SubmitButton isLoading={isPosting}>Create Trip</SubmitButton>
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
