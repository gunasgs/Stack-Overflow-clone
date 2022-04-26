import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Images/logo1.png";
import gLogo from "../Images/g.png";

const info = [
  {
    icon: (
      <i
        class="fas fa-question-circle text-primary mr-2"
        style={{ fontSize: "20px", color: "rgb(10, 149, 255)" }}
      ></i>
    ),
    text: "Get unstuck — ask a question",
  },
  {
    icon: (
      <i
        class="fas fa-sort text-primary mr-2"
        style={{ fontSize: "25px", color: "rgb(10, 149, 255)" }}
      ></i>
    ),
    text: "Unlock new privileges like voting and commenting",
  },
  {
    icon: (
      <i
        class="fas fa-tags text-primary mr-2"
        style={{ fontSize: "20px", color: "rgb(10, 149, 255)" }}
      ></i>
    ),
    text: "Unlock new privileges like voting and commenting",
  },
  {
    icon: (
      <i
        class="fas fa-trophy text-primary mr-2"
        style={{ fontSize: "20px", color: "rgb(10, 149, 255)" }}
      ></i>
    ),
    text: "Unlock new privileges like voting and commenting",
  },
];

const SignupPage = () => {
  return (
    <>
      <div classNameName="loginPage ">
        <section className="vh-100">
          <div className="container py-4  ">
            <div className="row d-flex align-items-center justify-content-center h-100 mt-3">
              {/* left Side Stack Overflow community part started*/}
              <div className="col-md-8 col-lg-7 col-xl-6 ml-3">
              
                <h3 className="font-weight-normal my-3">
                  Join the Stack Overflow community
                </h3>

                {info.map((text) => {
                  return (
                    <div className="my-3">
                      {text.icon}
                      {text.text}
                    </div>
                  );
                })}
                <div className="mt-4">
                  <small>
                    Collaborate and share knowledge with a private group for
                    FREE. <br />
                    <Link to="/" style={{ textDecoration: 'none'}}>
                      Get Stack Overflow for Teams free for up to 50 users.
                    </Link>
                  </small>
                </div>
              </div>
              {/* left Side Stack Overflow community part Ends*/}

              {/* Signup form started */}
              <div className="col-md-7 col-lg-5 col-xl-5 bt-light border p-5 pb-0">
                   
<div className="d-flex flex-column gap-3 mb-3">


<button class="btn btn-lg btn-block btn-light" 
  type="submit"><i class="fab fa-google me-2"></i> Sign up with Google</button>
<button class="btn btn-lg btn-block btn-dark " 
  type="submit"><i class="fab fa-facebook-f me-2"></i>Sign up with Github</button>
<button class="btn btn-lg btn-block btn-primary mb-2" 
  type="submit"><i class="fab fa-facebook-f me-2"></i>Sign up  with Facebook</button>
</div>
             
                <form>
                  <div className="form-outline mb-2">
                    <label className="form-label" for="form1Example13">
                      Display Name
                    </label>
                    <div class="input-group flex-nowrap">
                      
                      <input
                        type="text"
                        class="form-control"
                        
                        aria-label="Username"
                        aria-describedby="addon-wrapping"
                      
                      />
                    </div>
                  </div>
                  <div className="form-outline mb-4">
                    <label className="form-label" for="form1Example23">
                      Email
                    </label>
                    <div class="input-group flex-nowrap">
                      
                      <input
                        type="text"
                        class="form-control"
                       
                        aria-label="gmail"
                        aria-describedby="addon-wrapping"
                      />
                    </div>
                  </div>
                  <div className="form-outline mb-4">
                    <label className="form-label" for="form1Example23">
                      Password
                    </label>
                    <div class="input-group flex-nowrap">
                      
                      <input
                        type="text"
                        class="form-control"
                       
                        aria-label="Username"
                        aria-describedby="addon-wrapping"
                      />
                    </div>
                  </div>

                  <div className="form-check  d-flex justify-content-center">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="form1Example3"
                    />
                    <label className="form-check-label" for="form1Example3">
                   
                      I'm mot a robot
                    </label>
                  </div>
                  <div className="d-flex flex-column mb-3 mt-1">
                  <button
                    type="button"
                    className="btn btn-md btn-block btn-primary "
                    
                  >
                    Sign up
                  </button>
                 
                  </div>
                  
                </form>
              
              </div>
              
              {/* Signup form Ends */}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default SignupPage;
