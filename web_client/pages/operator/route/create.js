import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import useInput from "../../../hooks/useInput";
import axios from "axios";
import { toast } from "react-toastify";
import { getSession, useSession } from "next-auth/react";
import SubmitButton from "../../../components/parts/SubmitButton";
import { towns } from "../../../data/station";
function CreateRoute() {
  const [validated, setValidated] = useState(false);
  const [startingPoint, bindStartingPoint] = useInput("");
  const [endingPoint, bindEndingPoint] = useInput("");
  const [fare, bindFare] = useInput();

  const [isPosting, setIsPosting] = useState(false);
  const { data: session } = useSession();
  const [stations, setStations] = useState([]);
  //geting stations
  useEffect(() => {
    setStations(towns);
  }, []);

  const createRoute = async () => {
    setIsPosting(true);
    const data = {
      starting_point: startingPoint,
      ending_point: endingPoint,
      fare: fare,
    };

    const config = {
      headers: {
        Authorization: `Bearer ${session ? session.userData.token : ""}`,
      },
    };
    axios
      .post(
        process.env.NEXT_PUBLIC_BACKEND_URL + "/route/create/",
        data,
        config
      )
      .then((response) => {
        toast.success(
          `${data.starting_point} - ${data.ending_point} is created successfully`
        );
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
      createRoute();
    }
    setValidated(true);
  };

  return (
    <div className="container py-4">
      <div className="text-center">
        <h4>Add New Route</h4>
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
                Origin <i className="bi bi-geo-fill"></i>
              </span>
              <select
                {...bindStartingPoint}
                className="form-select fw-light text-center"
                required
              >
                <option value="" disabled>
                  select destination
                </option>
                {stations.map((station) => (
                  <option key={station.id} value={station.point}>
                    {station.point}
                  </option>
                ))}
              </select>
            </div>

            <div className="input-group mb-3">
              <span
                className="input-group-text bg-primary text-white"
                id="inputGroup-sizing-default"
              >
                Destination <i className="bi bi-geo-fill"></i>
              </span>
              <select
                {...bindEndingPoint}
                className="form-select fw-light text-center"
                required
              >
                <option value="" disabled>
                  select destination
                </option>
                {stations.map((station) => (
                  <option key={station.id} value={station.point}>
                    {station.point}
                  </option>
                ))}
              </select>
            </div>

            <div className="input-group mb-3">
              <span
                className="input-group-text bg-primary text-white"
                id="inputGroup-sizing-default"
              >
                Fare
              </span>
              <input
                {...bindFare}
                type="number"
                min={0}
                max={10000}
                className="form-control"
                required
              />

              <div className="valid-feedback">Looks good!</div>
              <div className="invalid-feedback">incorrect number</div>
            </div>
          </div>
        </div>

        <div className="d-flex justify-content-center my-2">
          <SubmitButton isLoading={isPosting}>Create Route</SubmitButton>
        </div>
      </Form>
    </div>
  );
}

export default CreateRoute;

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
