import React, { useState } from "react";
import destination from "../../../public/svg/destination.svg";
import Image from "next/image";
import Form from "react-bootstrap/Form";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import useInput from "../../../hooks/useInput";
import { toast } from "react-toastify";
import SubmitButton from "../../../components/parts/SubmitButton";
import Router from "next/router";

function Login() {
  const [validated, setValidated] = useState(false);
  const [email, bindEmail] = useInput();
  const [password, bindPassword] = useInput();
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async () => {
    setIsLoading(true);
    const res = await signIn("credentials", {
      email: email.toLocaleLowerCase(),
      password: password,
      redirect: false,
    })
      .then((response) => {
        setIsLoading(false);
        if (response.status == 200) {
          toast.success(email + ". Welcome to the Platform. Enjoy your vist");
          Router.push("/operator");
        } else {
          toast.error("Authentication failed. " + response.error);
        }
      })
      .catch((error) => {
        setIsLoading(false);
        toast.error("failed to login");
      });

    console.log("login", res);
  };
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();

    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      //login
      handleLogin();
    }
    setValidated(true);
  };

  return (
    <div className="container py-4">
      <div className="row g-4">
        <div className="col-md-6 d-flex flex-column justify-content-center">
          <h4 className="fw-bolder text-primary py-2">Operator Login</h4>
          <p className="text-secondary">
            provide your credentails to login as operator and start managing you
            trips with few steps
          </p>
          <div>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <div className="border-primary">
                <div className="input-group mb-2">
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
                <div className="input-group mb-2">
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
                    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                    required
                  />
                  <div className="valid-feedback">Looks good!</div>
                  <div className="invalid-feedback">incorrect</div>
                </div>
              </div>

              <div className="d-flex justify-content-center">
                <SubmitButton isLoading={isLoading}>Login</SubmitButton>
              </div>
              <div className="text-center">
                <Link href="/operator/auth/register">
                  <a className="btn btn-link text-danger">
                    create an account if you dont have one
                  </a>
                </Link>
              </div>
            </Form>
          </div>
        </div>
        <div className="col-md-6">
          <Image src={destination} />
        </div>
      </div>
    </div>
  );
}

export default Login;
