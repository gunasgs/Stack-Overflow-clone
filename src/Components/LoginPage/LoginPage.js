import React from "react";
import "./LoginPage.css";
import { Link } from "react-router-dom";
import Logo from "../Images/logo2.png";
import gLogo from "../Images/g.png";

const LoginPage = () => {
  return (
    <>
    
      <section class="vh-100">
  <div class="container vh-100">
    <div class="row d-flex justify-content-center align-items-center vh-100">
      <div class="col-12 col-md-8 col-lg-6 col-xl-5">
        
          <img src={Logo} class="rounded mx-auto d-block mt-3" alt="" width="120px" />
         
<div className="d-flex flex-column gap-3">


            <button class="btn btn-lg btn-block btn-light" 
              type="submit"><i class="fab fa-google me-2"></i> Log in with Google</button>
            <button class="btn btn-lg btn-block btn-dark " 
              type="submit"><i class="fab fa-facebook-f me-2"></i>Log in with Github</button>
 <button class="btn btn-lg btn-block btn-primary mb-2" 
              type="submit"><i class="fab fa-facebook-f me-2"></i>log in with Facebook</button>
           </div>
           
              <div class="card shadow-2-strong" >
          <div class="card-body  text-center">
            <div class="form-outline  ">
            <label class="form-label d-flex justify-content-start" for="typeEmailX-2">Email</label>
              <input type="email" id="typeEmailX-2" class="form-control form-control-lg" />
              
            </div>

            <div class="form-outline">
            <label class="form-label d-flex justify-content-start" for="typePasswordX-2">Password</label>
              <input type="password" id="typePasswordX-2" class="form-control form-control-lg" />
             
              <div class="form-check d-flex justify-content-start mt-2">
              <input class="form-check-input" type="checkbox" value="" id="form1Example3" />
              <label class="form-check-label" for="form1Example3"> Remember password </label>
            </div>
           
            </div>


          </div>
          <button class="btn btn-primary btn-lg btn-block mx-2 my-2" type="button">Login</button>
        </div>
      </div>
    </div>
  </div>
 
</section>
    </>
  );
};

export default LoginPage;
