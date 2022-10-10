import React from 'react'
import { Formik, Form } from "formik"
import TextField from './TextField'
import * as Yup from "yup"

function SignUp() {
    const validate = Yup.object({
        firstName: Yup.string()
        .max(15, "Must be 15 charackters or less")
        .required("Required"),
        lastName: Yup.string()
        .max(20, "Must be 20 charackters or less")
        .required("Required"),
        email: Yup.string()
        .email("Email is invalid")
        .required("Email is Required"),
        password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is Required"),
        confirmPassword: Yup.string()
        .oneOf([Yup.ref("password")], "Password must match")
        .required("Confirm password is required")
    })
  return (
    <Formik 
        initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            confirmPassword: ""
        }}
        validationSchema = {validate}
        onSubmit={values => console.log(values)}
    >
        { formik => (
            <div>
                <h1 className="my-4 fw-semibold display-4 mb-5">Sign Up</h1>
                <Form>
                    <TextField label="First Name" name="firstName" type="text" />
                    <TextField label="Last Name" name="lastName" type="text" />
                    <TextField label="Email" name="email" type="email" />
                    <TextField label="Password" name="password" type="password" />
                    <TextField label="Confirm Password" name="confirmPassword" type="password" />
                    <div className='d-flex justify-content-end'>
                    <button className="btn btn-dark mt-3 px-3 " type='reset'>Reset</button>
                    <button className="btn btn-primary mt-3 ms-3 px-4" type='submit'>Register</button>                           
                    </div>
                    
                </Form>
            </div>
        )}
    </Formik>
  )
}

export default SignUp