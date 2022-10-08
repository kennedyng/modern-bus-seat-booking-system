import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import useInput from '../../hooks/useInput';
import axios from "axios";
import { toast } from "react-toastify"
const namePattern = "^[a-zA-Z]{2,20}$"
function Register() {
    const [validated, setValidated] = useState(false);
    const [firstName, bindFirstName] = useInput();
    const [lastName, bindLastName] = useInput();
    const [middleName, bindMiddleName] = useInput();
    const [nrc, bindNrc] = useInput();
    const [address, bindAddress] = useInput();
    const [phoneNumber, bindPhoneNumber] = useInput();
    const [password, bindPassword] = useInput();
    const [isPosting, setIsPosting ] = useState(false)

    const register = async () => {
      
      setIsPosting(true)
      const data = {
        first_name: firstName.toLowerCase(),
        middle_name: middleName.toLowerCase(),
        last_name: lastName.toLowerCase(),
        address: address.toLowerCase(),
        phone_number: phoneNumber,
        password: password,
        nrc: nrc
      }

      axios.post( process.env.NEXT_PUBLIC_BACKEND_URL + "/auth/passenger/register", data)
      .then( response => {
          setIsPosting(false)
          toast.success(`${data.first_name} ${data.last_name} you are now registered use the USSD App to buy bus tickets`)
      })
      .catch( error => {
        setIsPosting(false)
        try {
          const { status } = error.response
          if( status == 409){
            toast.warning(`${data.phone_number}. This Phone Number is already registered`)
          }else{
            toast.error(`something went wrong. ${error.message}. \n try again`)
          }  
        } catch (error) {
          toast.error("Failed Error try letter")
        }
        
      })

    }
    



    const handleSubmit = (event) => {
      const form = event.currentTarget;
      event.preventDefault();

      if (form.checkValidity() === false) {
        event.stopPropagation();
        toast.warn("invalid inputs. double check the registration form")
      }else{
        //registration is valid
        register()
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
                  <input {...bindFirstName} type="text" className="form-control" pattern={namePattern} required placeholder="alice"/>
                    <div className="valid-feedback">
                        Looks good!
                    </div>
                    <div className="invalid-feedback">
                        incorrect name
                    </div>
                </div>

                <div className="input-group mb-3">
                  <span className="input-group-text bg-primary text-white" id="inputGroup-sizing-default">Middle Name</span>
                  <input {...bindMiddleName} type="text" className="form-control" pattern={namePattern}  placeholder="chongo" />
                    <div className="valid-feedback">
                        Looks good!
                    </div>
                    <div className="invalid-feedback">
                        incorrect name
                    </div>
                </div>

                <div className="input-group mb-3">
                  <span className="input-group-text bg-primary text-white" id="inputGroup-sizing-default">Last Name</span>
                  <input {...bindLastName} type="text" className="form-control" required pattern={namePattern} placeholder="banda" />
                    <div className="valid-feedback">
                        Looks good!
                    </div>
                    <div className="invalid-feedback">
                        incorrect name
                    </div>
                </div>

                <div className="input-group mb-3">
                  <span className="input-group-text bg-primary text-white" id="inputGroup-sizing-default">Nrc</span>
                  <input {...bindNrc} type="text" className="form-control" required pattern='[0-9]{6}/[0-9]{1,2}/[0-9]{1,2}' placeholder='101010/10/1'/>
                    <div className="valid-feedback">
                        Looks good!
                    </div>
                    <div className="invalid-feedback">
                        incorrect NRC
                    </div>
                </div>

                <div className="input-group mb-3">
                  <span className="input-group-text bg-primary text-white" id="inputGroup-sizing-default">Address</span>
                  <input 
                    {...bindAddress} 
                    type="text" 
                    className="form-control" 
                    required 
                    height={200}
                    pattern=".{5,255}"
                    placeholder='50/43 lusaka' 
                  
                  />
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
                  <input {...bindPhoneNumber} type="text" className="form-control" required pattern='[0-9]{10}' />
                    <div className="valid-feedback">
                        Looks good!
                    </div>
                    <div className="invalid-feedback">
                        incorrect 
                    </div>
              </div>
             
            <div className="input-group mb-3">
                  <span className="input-group-text bg-primary text-white" id="inputGroup-sizing-default">Password</span>
                  <input {...bindPassword} type="password" className="form-control" required pattern='[0-9]{4}' />
                    <div className="valid-feedback">
                        Looks good!
                    </div>
                    <div className="invalid-feedback">
                        the password must contain only 4 digits 
                    </div>
              </div>
              <div className="input-group mb-3">
                  <span className="input-group-text bg-primary text-white" id="inputGroup-sizing-default">Confirm Password</span>
                  <input  type="password" className="form-control" required pattern={password} />
                    <div className="valid-feedback">
                        Looks good!
                    </div>
                    <div className="invalid-feedback">
                        incorrect
                    </div>
              </div>

            </div>

            

          </div>
      


          <div className="d-flex justify-content-center my-2" >
          <button className="btn btn-primary w-25" type="submit" disabled={isPosting}>
              <span className="spinner-grow spinner-grow-sm spinner-primary" role="status" hidden={!isPosting}></span>
              Register
            </button>  
          </div> 
        </Form>
    </div>
  )
}

export default Register




