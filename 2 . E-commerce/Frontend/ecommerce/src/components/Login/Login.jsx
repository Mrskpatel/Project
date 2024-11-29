import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    console.log({ email, password })
    e.preventDefault()
    await axios.post('http://localhost:1085/login', { email, password }, { withCredentials: true })
      .then((res) => {
        console.log(res);
        navigate('/');
      })
      .catch((err) => {
        console.log(err);
      })
  }
  return (
    <div>
      <link rel="stylesheet" href="../../../public/assets/css/styles.min.css" />
       <script src="../../../public/assets/libs/jquery/dist/jquery.min.js"></script>
       <script src="../../../public/assets/libs/bootstrap/dist/js/bootstrap.bundle.min.js"></script>
      <div className="page-wrapper" id="main-wrapper" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full"
    data-sidebar-position="fixed" data-header-position="fixed">
    <div
      className="position-relative overflow-hidden radial-gradient min-vh-100 d-flex align-items-center justify-content-center">
      <div className="d-flex align-items-center justify-content-center w-100">
        <div className="row justify-content-center w-100">
          <div className="col-md-8 col-lg-6 col-xxl-3">
            <div className="card mb-0">
              <div className="card-body">
                <a href="./index.html" className="text-nowrap logo-img text-center d-block py-3 w-100">
                  <img src="../../../public/assets/images/logos/logo.svg" width="180" alt=""/>
                </a>
                <p className="text-center">Your Social Campaigns</p>
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label className="form-label">Email Address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => setEmail(e.target.value)} />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => setPassword(e.target.value)} />
                  </div>
                  <div className="d-flex align-items-center justify-content-between mb-4">
                    <div className="form-check">
                      <input className="form-check-input primary" type="checkbox" value="" id="flexCheckChecked" checked />
                      <label className="form-check-label text-dark" for="flexCheckChecked">
                        Remeber this Device
                      </label>
                    </div>
                    <a className="text-primary fw-bold" href="./index.html">Forgot Password ?</a>
                  </div>
                  <button  type='submit' className="btn btn-primary w-100 py-8 fs-4 mb-4 rounded-2">Sign In</button>
                  <div className="d-flex align-items-center justify-content-center">
                    <p className="fs-4 mb-0 fw-bold">New to Modernize?</p>
                    <a className="text-primary fw-bold ms-2" href="./authentication-register.html">Create an account</a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    </div>
  )
}

export default Login