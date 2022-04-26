import React from "react";
import "./Homepage.css";
import secure from "../Images/secure.png";
import search from "../Images/search.png";

import blue from "../Images/blue.png";

// import PublicPlatform from "./PublicPlatform";
// import Brand from "./Brand";
// import TurmsAndCondition from "./TurmsAndCondition";
// import AdditionalProducts from "./AdditionalProducts";
// import Management from "./Management";
// import Footer from "../Footer/Footer"
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <>
    <div className="container-fluid bg-dark mt-5">
      <div className="row">
      <div className="col-lg-6 col-md-12 mt-5">
      <div className=" homePage--innerDiv--box mx-5">
            <div className="homePage--innerDiv--box--find">
              <img src={search} alt="search" />
              <p>
                Find the best answer to your technical question, help others
                answer theirs
              </p>
              <button
                type="button"
                className="homePage--innerDiv--box--find--btn btn"
              >
                Join the Community
              </button>
              <br />
              <small style={{ color: "gray" }}>
                or 
                <Link to="/"
                  style={{ color: "black", textDecoration: "underline" }}
               
                >
                   search content
                </Link>
              </small>
            </div>
            {/* orange cards ends */}

            {/* Blue cards started */}
            
           
          
          </div>
      </div>
    
          <div className="col-lg-6 col-md-12 mt-5">
            <div className=" homePage--innerDiv--box--secure mx-5 me-5">
              <img src={secure} alt="search" />
              <p>Want a secure, private space for your technical knowledge?</p>

              <p >Get started</p>
              <hr text-primary />
              <button type="button" className="btn btn-primary mx-2">
                For large orginations<i class="fas fa-dice-d20"></i>
              </button>
              <button type="button" className="btn btn-primary">
                For Small teams <i class="fas fa-user-friends"></i>
              </button>
            </div>
              </div>
             
      <div className="row">
        <div className="col-lg-12 ">
        <img src={blue} alt="squre" />
        <h1 className="homePage--innerDiv--header text-light">
            Every has a data <span> Developer</span> tab open to Stack Overflow
          </h1>
          <div className="row">
            <div >
            <div className="homePage--innerDiv--reach ">
            {details.map((det) => {
              return (
                <>
                  <div className=" mt-5 col-lg-3 mb-5">
                    <p>{det.reach}</p>
                    <p>{det.detail1}</p>
                    <p>{det.detail2}</p>
                  </div>
                </>
              );
            })}
          </div>
            </div>
          </div>
      
        </div>
      </div>
     
    </div>
      </div>
      </>
  );
};

export default HomePage;

const details = [
  {
    reach: "100+ million",
    detail1: "monthly visitors to Stack",
    detail2: "Overflow & Stack Exchange",
  },
  {
    reach: "45.1+ billion",
    detail1: "Times a developer got help",
    detail2: "since 2008",
  },
  {
    reach: "179% ROI",
    detail1: "from companies using Stack",
    detail2: "Overflow for Teams",
  },
  {
    reach: "5,000+",
    detail1: "Stack Overflow for Teams",
    detail2: "instances active every day",
  },
];
