import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import useInput from "../../../hooks/useInput";
import axios from "axios";
import { toast } from "react-toastify";
import useSecurePage from "../../../hooks/useSecurePage";
import { getSession, useSession } from "next-auth/react";
import SubmitButton from "../../../components/parts/SubmitButton";
function CreateBus() {
  const [validated, setValidated] = useState(false);
  const [totalCapacity, bindTotalCapacity] = useInput();
  const [plateNumber, bindPlateNumber] = useInput();
  const [isPosting, setIsPosting] = useState(false);
  const { data: session } = useSession();

  const createBus = async () => {
    setIsPosting(true);
    const data = {
      plate_number: plateNumber,
      total_seat: totalCapacity,
    };

    const config = {
      headers: {
        Authorization: `Bearer ${session ? session.userData.token : ""}`,
      },
    };
    axios
      .post(process.env.NEXT_PUBLIC_BACKEND_URL + "/bus/create/", data, config)
      .then((response) => {
        toast.success(`${data.plate_number} is created`);
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
      createBus();
    }
    setValidated(true);
  };

  return (
    <div className="container py-4">
      <div className="text-center">
        <h4>Add New Bus</h4>
        <p>to add a new bus provide bus capacity and bus number plate</p>
      </div>

      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <div className="row d-flex justify-content-center">
          <div className="col-md-6">
            <div className="input-group mb-3">
              <span
                className="input-group-text bg-primary text-white"
                id="inputGroup-sizing-default"
              >
                plate number
              </span>
              <input
                {...bindPlateNumber}
                placeholder="ABC 123"
                type="text"
                pattern="[a-zA-z]{1,5} [0-9]{1,6}"
                className="form-control"
                required
              />
              <div className="valid-feedback">looks good!</div>
              <div className="invalid-feedback">
                check the number plate format
              </div>
            </div>

            <div className="input-group mb-3">
              <span
                className="input-group-text bg-primary text-white"
                id="inputGroup-sizing-default"
              >
                total capacity
              </span>
              <input
                {...bindTotalCapacity}
                type="number"
                min={16}
                max={200}
                className="form-control"
                required
              />
              <div className="valid-feedback">Looks good!</div>
              <div className="invalid-feedback">incorrect number</div>
            </div>
          </div>
        </div>

        <div className="d-flex justify-content-center my-2">
          <SubmitButton isLoading={isPosting}>create bus</SubmitButton>
        </div>
      </Form>
    </div>
  );
}

export default CreateBus;

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
