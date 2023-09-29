import React, { Component } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import {MDBContainer, MDBCol, MDBRow, MDBCard, MDBCardBody, MDBBtn } from 'mdb-react-ui-kit';
import AuthService from "../Service/auth.service";
import { BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { FaLinkedinIn } from "react-icons/fa";
import { withRouter } from '../common/with-router';


const required = value => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

class Login extends Component {
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);

    this.state = {
      username: "",
      password: "",
      loading: false,
      message: ""
    };
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value
    });
  }

  handleLogin(e) {
    e.preventDefault();

    this.setState({
      message: "",
      loading: true
    });

    this.form.validateAll();

    if (this.checkBtn.context._errors.length === 0) {
      AuthService.login(this.state.username, this.state.password).then(
        () => {
          this.props.router.navigate("/profile");
          window.location.reload();
        },
        error => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          this.setState({
            loading: false,
            message: resMessage
          });
        }
      );
    } else {
      this.setState({
        loading: false
      });
    }
  }

  render() {
    return (
      <MDBContainer fluid>

      <MDBRow className='d-flex justify-content-center align-items-center h-100'>

  
      

          <Form
            onSubmit={this.handleLogin}
            ref={c => {
              this.form = c;
            }}
          >

          <MDBCol col='12'>
          <MDBCard className='bg-transparent text-white my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '400px'}}>
          <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100'>

          <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
          <p className="text-white-50 mb-5">Please enter your login and password!</p>


            <div className="form-group mb-4 mx-5 w-100">
              <label htmlFor="username">Username</label>
              <Input
                type="text"
                className="form-control"
                name="username"
                value={this.state.username}
                onChange={this.onChangeUsername}
                validations={[required]}
              />
            </div>

            <div className="form-group mb-4 mx-5 w-100">
              <label htmlFor="password">Password</label>
              <Input
                type="password"
                className="form-control"
                name="password"
                value={this.state.password}
                onChange={this.onChangePassword}
                validations={[required]}
              /> 
            </div>

            <p className="small mb-3 pb-lg-2"><a class="text-white-50" href="#!">Forgot password?</a></p>
            <div className="form-group">
              <button
                className="btn btn-primary btn-block"
                disabled={this.state.loading}
              >
                {this.state.loading && (
                  <span className="spinner-border spinner-border-sm"></span>
                )}
                <span>Login</span>
              </button>
            </div>




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
            <p className="mb-0">Don't have an account? <a href="/register" class="text-white-50 fw-bold">Signup / Register</a></p>

          </div>







            {this.state.message && (
              <div className="form-group">
                <div className="alert alert-danger" role="alert">
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

export default withRouter(Login);