import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import useInput from "../../../hooks/useInput";
import axios from "axios";
import { toast } from "react-toastify";
import SubmitButton from "../../../components/parts/SubmitButton";

function Register() {
  const [validated, setValidated] = useState(false);
  const [email, bindEmail] = useInput();
  const [companyName, bindCompanyName] = useInput();
  const [motto, bindMotto] = useInput();
  const [confirmPassword, bindConfirmPassword] = useInput();
  const [password, bindPassword] = useInput();
  const [isPosting, setIsPosting] = useState(false);

  const register = async () => {
    setIsPosting(true);
    const data = {
      company_name: companyName.toLowerCase(),
      motto: motto.toLowerCase(),
      email: email.toLocaleLowerCase(),
      password: password,
    };

    axios
      .post(
        process.env.NEXT_PUBLIC_BACKEND_URL + "/auth/operator/register",
        data
      )
      .then((response) => {
        setIsPosting(false);
        toast.success(`${data.email} is now registered`);
      })
      .catch((error) => {
        setIsPosting(false);
        try {
          const { status } = error.response;
          if (status == 409) {
            toast.warning(
              `${data.email}. This Email is used by another operator`
            );
          } else {
            toast.error(`something went wrong. ${error.message}. \n try again`);
          }
        } catch (error) {
          toast.error("System Failure. try later");
        }
      });
  };

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    console.log(email, companyName, motto, confirmPassword, password);
    if (form.checkValidity() === false) {
      toast.warn("invalid inputs. double check the form");
      event.stopPropagation();
    } else {
      //registration form is valid register
      register();
    }
    setValidated(true);
  };

  return (
    <div className="container py-4">
      <div className="text-center">
        <h4>Operator Registration</h4>
        <p>Create an account to start managing and sell bus seat tickets</p>
      </div>

      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <div className="row g-4">
          <div className="col-md-6">
            <div className="input-group mb-3">
              <span
                className="input-group-text bg-primary text-white"
                id="inputGroup-sizing-default"
              >
                Company Name
              </span>
              <input
                {...bindCompanyName}
                type="text"
                pattern=".{2,50}"
                className="form-control"
                required
              />
              <div className="valid-feedback">looks good!</div>
              <div className="invalid-feedback">incorrect</div>
            </div>

            <div className="input-group mb-3">
              <span
                className="input-group-text bg-primary text-white"
                id="inputGroup-sizing-default"
              >
                Motto
              </span>
              <textarea {...bindMotto} type="text" className="form-control" />
            </div>
          </div>

          <div className="col-md-6">
            <div className="input-group mb-3">
              <span
                className="input-group-text bg-primary text-white"
                id="inputGroup-sizing-default"
              >
                Email
              </span>
              <input
                {...bindEmail}
                type="email"
                className="form-control"
                required
              />
              <div className="valid-feedback">Looks good!</div>
              <div className="invalid-feedback">incorrect</div>
            </div>

            <div className="input-group mb-3">
              <span
                className="input-group-text bg-primary text-white"
                id="inputGroup-sizing-default"
              >
                Password
              </span>
              <input
                {...bindPassword}
                type="password"
                className="form-control"
                required
                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
              />
              <div className="valid-feedback">strong password</div>
              <div className="invalid-feedback">
                weak password. the password must contain lowercase letter,
                uppercase letter,a number and 8 charaters in total
              </div>
            </div>
            <div className="input-group mb-3">
              <span
                className="input-group-text bg-primary text-white"
                id="inputGroup-sizing-default"
              >
                Confirm Password
              </span>
              <input
                {...bindConfirmPassword}
                type="password"
                pattern={password}
                className="form-control"
                required
              />
              <div className="valid-feedback">Looks good!</div>
              <div className="invalid-feedback">
                your passwords do not match
              </div>
            </div>
          </div>
        </div>

        <div className="d-flex justify-content-center my-2">
          <SubmitButton isLoading={isPosting}>
            <i className="bi bi-people"></i> register
          </SubmitButton>
        </div>
      </Form>
    </div>
  );
}

export default Register;
