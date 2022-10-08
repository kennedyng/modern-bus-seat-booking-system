import React, { useState } from 'react'
import destination from "../../../public/svg/destination.svg"
import Image from 'next/image'
import Form from 'react-bootstrap/Form';
import Link from "next/link"
function Login() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();

    if (form.checkValidity() === false) {
      event.stopPropagation();
    }
    setValidated(true);
  };


  return (
    <div className="container py-4">
        
        <div className="row g-4">
            <div className="col-md-6 d-flex flex-column justify-content-center">
            <h4 className="fw-bolder text-primary py-2">Operator Login</h4>
                <p className="text-secondary">
                    provide your credentails to login as operator and start managing you trips with
                    few steps
                </p>
                <div>
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <div  className='border-primary'>
                    <div className="input-group mb-2">
                        <span className="input-group-text bg-dark text-white" id="inputGroup-sizing-default">Email</span>
                        <input  type="text" className="form-control" required />
                            <div className="valid-feedback">
                                Looks good!
                            </div>
                            <div className="invalid-feedback">
                                incorrect 
                            </div>
                    </div>
                    <div className="input-group mb-2">
                        <span className="input-group-text bg-dark text-white" id="inputGroup-sizing-default">Password</span>
                        <input  type="text" className="form-control" required />
                            <div className="valid-feedback">
                                Looks good!
                            </div>
                            <div className="invalid-feedback">
                                incorrect 
                            </div>
                    </div>


                    </div>
                    
                    <div className="d-flex justify-content-center">
                        <button className="text-center btn btn-primary rounded-0 fw-bold w-25 " type="submit">Login</button>
                    </div> 
                    <div className="text-center">
                        <Link href="/operator/auth/register">
                            <a className='btn btn-link text-danger'>create an account if you dont have one</a>
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
  )
}

export default Login