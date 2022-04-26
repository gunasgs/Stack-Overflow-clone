import React from "react";
import { Link } from "react-router-dom";
import Qimg from "../Images/question.png";

const sideTabs = [
  { name: "Home", icon: <i class="fas fa-home mr-2"></i> },
 
  { name: "Questions", icon: <i class="fas fa-globe-asia mr-2"></i> },
  { name: "Tags", icon: <i class="fas fa-hashtag mr-2"></i> },
  { name: "Users", icon: <i class="fas fa-users-cog mr-2"></i> },
 

  { name: "Companies", icon: <i class="fas fa-laptop-house mr-2"></i> },
 
];

const LeftSidebar = () => {
  return (
    <>
    {/* Left sidebar started */}

      {sideTabs.map((tab) => {
        return (
          <button
            className=" btn text-muted  mt-4 list-group-item list-group-item-action my-0 border-0"
            href="#list-item-1"
            style={{ fontSize: "12px" }}
          >
            {tab.icon}
            {tab.name}
          </button>
        );
      })}

{/* Collaborate card started */}
      <div className="card text-left ">
        <div className="card-body">
          <p>
            <b>Stack Overflow for Teams -</b>Start Collaborating and sharing organoizational knowledge
          
          </p>
          <img src={Qimg} alt="IMG" width="120px" />
          <button className="btn btn-warning btn-sm my-2">
            <small> Create a free Team</small>
          </button><br/>
          <Link className="text-muted mx-4 text-center" to="/">
            <small>Why Teams?</small>
          </Link>
        </div>
      </div>
      
{/* Collaborate card Ends */}
       {/* Left sidebar Ends */}
    </>
  );
};

export default LeftSidebar;
