import React, { Component } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import {MDBContainer, MDBCol, MDBRow, MDBCard, MDBCardBody, MDBBtn} from 'mdb-react-ui-kit';
import { isEmail } from "validator";
import { BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { FaLinkedinIn } from "react-icons/fa";

import AuthService from "../Service/auth.service";

const required = value => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

const email = value => {
  if (!isEmail(value)) {
    return (
      <div className="alert alert-danger" role="alert">
        This is not a valid email.
      </div>
    );
  }
};

const vusername = value => {
  if (value.length < 3 || value.length > 20) {
    return (
      <div className="alert alert-danger" role="alert">
        The username must be between 3 and 20 characters.
      </div>
    );
  }
};

const vpassword = value => {
  if (value.length < 6 || value.length > 40) {
    return (
      <div className="alert alert-danger" role="alert">
        The password must be between 6 and 40 characters.
      </div>
    );
  }
};

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.handleRegister = this.handleRegister.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);

    this.state = {
      username: "",
      email: "",
      password: "",
      successful: false,
      message: ""
    };
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    });
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value
    });
  }

  handleRegister(e) {
    e.preventDefault();

    this.setState({
      message: "",
      successful: false
    });

    this.form.validateAll();

    if (this.checkBtn.context._errors.length === 0) {
      AuthService.register(
        this.state.username,
        this.state.email,
        this.state.password
      ).then(
        response => {
          this.setState({
            message: response.data.message,
            successful: true
          });
        },
        error => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          this.setState({
            successful: false,
            message: resMessage
          });
        }
      );
    }
  }

  render() {
    return (

      <MDBContainer fluid>
   
      <MDBRow className='d-flex justify-content-center align-items-center h-100'>

          <Form
            onSubmit={this.handleRegister}
            ref={c => {
              this.form = c;
            }}
          >




          <MDBCol col='12'>
          <MDBCard className='bg-transparent text-white my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '400px'}}>
          <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100'>

          <h2 className="fw-bold mb-2 text-uppercase">Signup</h2>
          <p className="text-white-50 mb-5">Please enter your details!</p>

            {!this.state.successful && (
              <div className="form-group mb-4 mx-5 w-100">
                <div className="form-group">
                  <label htmlFor="username">Username</label>
                  <Input
                    type="text"
                    className="form-control mb-3"
                    name="username"
                    value={this.state.username}
                    onChange={this.onChangeUsername}
                    validations={[required, vusername]}
                  />
                </div>

                <div className="form-group mb-3">
                  <label htmlFor="email">Email</label>
                  <Input
                    type="text"
                    className="form-control"
                    name="email"
                    value={this.state.email}
                    onChange={this.onChangeEmail}
                    validations={[required, email]}
                  />
                </div>

                <div className="form-group mb-3">
                  <label htmlFor="password">Password</label>
                  <Input
                    type="password"
                    className="form-control"
                    name="password"
                    value={this.state.password}
                    onChange={this.onChangePassword}
                    validations={[required, vpassword]}
                  />
                </div>

                <div className="form-group  text-center" >
                  <button className="btn btn-primary btn-block">Sign Up</button>
                </div>
              </div>
            )}



            <div className='d-flex flex-row mt-3 mb-5'> 
            <MDBBtn tag='a' color='none' className='m-3' style={{ color: 'white' }} href='https://www.facebook.com'>
            <BsFacebook color="white" size={25}/>
            </MDBBtn>

            <MDBBtn tag='a' color='none' className='m-3' style={{ color: 'white' }} href='https://www.google.com'>
            <FcGoogle color="white" size={25}/>
            </MDBBtn>

            <MDBBtn tag='a' color='none' className='m-3' style={{ color: 'white' }} href='https://www.linkedin.com'>
            <FaLinkedinIn color="white" size={25}/>
            </MDBBtn>
          </div>

          <div>
            <p className="mb-0">Already Signup/Register? <a href="/login" class="text-white-50 fw-bold">Login / Signin</a></p>

          </div>







            {this.state.message && (
              <div className="form-group">
                <div
                  className={
                    this.state.successful
                      ? "alert alert-success"
                      : "alert alert-danger"
                  }
                  role="alert"
                >
                  {this.state.message}
                </div>
              </div>
            )}
            <CheckButton
              style={{ display: "none" }}
              ref={c => {
                this.checkBtn = c;
              }}
            />


            </MDBCardBody>
            </MDBCard>
          </MDBCol>


          </Form>
          </MDBRow>
        </MDBContainer>
    );
  }
}
