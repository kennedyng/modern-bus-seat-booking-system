import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import useInput from '../../hooks/useInput';
import axios from "axios";
function Register() {
    const [validated, setValidated] = useState(false);
    const [firstName, bindFirstName] = useInput();
    const [lastName, bindLastName] = useInput();
    const [middleName, bindMiddleName] = useInput();
    const [nrc, bindNrc] = useInput();
    const [address, bindAddress] = useInput();
    const [phoneNumber, bindPhoneNumber] = useInput();
    const [confirmPassword, bindConfirmPassword] = useInput();
    const [password, bindPassword] = useInput();



    const handleSubmit = (event) => {
      const form = event.currentTarget;
      event.preventDefault();

      console.log(firstName, lastName, middleName, nrc, address, phoneNumber, confirmPassword)
      if (form.checkValidity() === false) {
        event.stopPropagation();
      }
      setValidated(true);
    };
  return (
    <div className='container py-4'>
        <div className="text-center">
          <h4>Passenger Registration</h4>
          <p>Create an account to start buying tickets with our platform</p>
        </div>
        
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <div className='row g-4'>
            <div className='col-md-6'>
                <div className="input-group mb-3">
                  <span className="input-group-text bg-primary text-white" id="inputGroup-sizing-default">First Name</span>
                  <input {...bindFirstName} type="text" className="form-control" required />
                    <div className="valid-feedback">
                        Looks good!
                    </div>
                    <div className="invalid-feedback">
                        incorrect name
                    </div>
                </div>

                <div className="input-group mb-3">
                  <span className="input-group-text bg-primary text-white" id="inputGroup-sizing-default">Middle Name</span>
                  <input {...bindMiddleName} type="text" className="form-control"  />
                    <div className="valid-feedback">
                        Looks good!
                    </div>
                    <div className="invalid-feedback">
                        incorrect name
                    </div>
                </div>

                <div className="input-group mb-3">
                  <span className="input-group-text bg-primary text-white" id="inputGroup-sizing-default">Last Name</span>
                  <input {...bindLastName} type="text" className="form-control" required />
                    <div className="valid-feedback">
                        Looks good!
                    </div>
                    <div className="invalid-feedback">
                        incorrect name
                    </div>
                </div>

                <div className="input-group mb-3">
                  <span className="input-group-text bg-primary text-white" id="inputGroup-sizing-default">Nrc</span>
                  <input {...bindNrc} type="text" className="form-control" required />
                    <div className="valid-feedback">
                        Looks good!
                    </div>
                    <div className="invalid-feedback">
                        incorrect NRC
                    </div>
                </div>

                <div className="input-group mb-3">
                  <span className="input-group-text bg-primary text-white" id="inputGroup-sizing-default">Address</span>
                  <textarea {...bindAddress} type="text" className="form-control" required />
                    <div className="valid-feedback">
                        Looks good!
                    </div>
                    <div className="invalid-feedback">
                        incorrect address
                    </div>
                </div>
  
            </div>





            <div className='col-md-6'>
            <div className="input-group mb-3">
                  <span className="input-group-text bg-primary text-white" id="inputGroup-sizing-default">Phone Number</span>
                  <input {...bindPhoneNumber} type="text" className="form-control" required />
                    <div className="valid-feedback">
                        Looks good!
                    </div>
                    <div className="invalid-feedback">
                        incorrect 
                    </div>
              </div>
             
            <div className="input-group mb-3">
                  <span className="input-group-text bg-primary text-white" id="inputGroup-sizing-default">Password</span>
                  <input {...bindPassword} type="text" className="form-control" required />
                    <div className="valid-feedback">
                        Looks good!
                    </div>
                    <div className="invalid-feedback">
                        incorrect 
                    </div>
              </div>
              <div className="input-group mb-3">
                  <span className="input-group-text bg-primary text-white" id="inputGroup-sizing-default">Confirm Password</span>
                  <input {...bindConfirmPassword} type="text" className="form-control" required />
                    <div className="valid-feedback">
                        Looks good!
                    </div>
                    <div className="invalid-feedback">
                        incorrect 
                    </div>
              </div>

            </div>

            

          </div>
      

        

   








  




          <div className="d-flex justify-content-center my-2">
            <button className="text-center btn btn-primary rounded-0 fw-bold w-25" type="submit">Register</button>  
          </div> 
        </Form>
    </div>
  )
}

export default Register




