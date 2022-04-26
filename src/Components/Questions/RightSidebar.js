import React from "react";
// import RelatedQuestion from "./RelatedQuestion";
// import RelatedTags from "./RelatedTags";
import cloud from "../Images/cloud.png";
const RightSidebar = () => {
  return (
    <>
      {/* Blog card started */}
      <div className="card shadow-sm ">
        <div
          className="card-header "
          style={{ backgroundColor: "rgb(241, 229, 188)" }}
        >
          <b>The Overflow Blog</b>
        </div>
        <div
          className="card-body"
          style={{ backgroundColor: "rgb(251, 243, 213)" }}
        >
          {blog.map((content) => {
            return (
              <div className="d-flex">
                <i class="fas fa-pen mr-2"></i>
                <p>{content}</p>
              </div>
            );
          })}
        </div>
        <div
          className="card-header"
          style={{ backgroundColor: "rgb(241, 229, 188)" }}
        >
          <b>Featured on Meta</b>
        </div>
        <div
          className="card-body border-bottom"
          style={{ backgroundColor: "rgb(251, 243, 213)" }}
        >
          {meta.map((content) => {
            return (
              <div className="d-flex">
                <i
                  class="far fa-comment-alt mr-2"
                  style={{ color: "rgb(122, 167, 199)" }}
                ></i>
                <p>{content}</p>
              </div>
            );
          })}
        </div>
      </div>
      {/* Blog card ends */}

      {/* Collectives card started */}
      <div className="card my-3 shadow-sm">
        <div className="card-header">Collectives</div>
        {apps.map((app) => {
          return (
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <div className="d-flex ">
                  <img
                    src={ cloud}
                    alt="img"
                    width="35px"
                    height="30px"
                    className="mr-2"
                  />
                  <div>
                    <p style={{ fontSize: "18px", fontWeight: "100" }}>
                      <b>{app.name}</b>
                    </p>
                    <p>{app.member}</p>
                  </div>
                </div>
                <button className="btn btn-outline-info btn-sm mb-4 ">
                  Join
                </button>
              </div>
              <p>{app.content}</p>
            </div>
          );
        })}
      </div>
      {/* Collectives card ends */}

      {/* Relative Tags part added */}
      {/* <RelatedTags /> */}

      {/* Network Questions added */}
      {/* <RelatedQuestion /> */}
    </>
  );
};

export default RightSidebar;

const meta = [
  `How might the Staging Ground & the new Ask Wizard work on the Stack Exchange...`,
  `Question Close Reasons project - Introduction and Feedback`,
  `An A/B test has gone live for a "Trending" sort option for answers`,
  `Overhauling our community's closure reasons and guidance`
];

const blog = [
  `Episode 435: How a college extra-credit project became PHP3, still the...`,
  ` Empathy for the Dev: Avoiding common pitfalls when communicating with developers`,
];

const apps = [
  {
    img: `cloud`,
    name: "Go Language",
    member: "22k Members",
    content: `The official Q&A channel for Google's Go Programming Language.`,
  },
  {
    img: `../Images/cloud.png`,
    name: "Google Cloud",
    member: "21k Members",
    content: `Google Cloud provides organizations with leading infrastructure, platform ...`,
  },
  {
    img: `../Images/githubLab.png`,
    name: "Twilio",
    member: "1k Members",
    content: `Twilio has democratized channels like voice, text, chat, video, and email...`,
  },
];
