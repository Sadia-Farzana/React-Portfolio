import React from "react";
import Typical from "react-typical"
import background from "../Home/bg.jpg"

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="colz">
            <div className="colz-icon">
          <a href="https://www.facebook.com/">
            <i className="fa fa-facebook-square"></i>
          </a>
          <a href="https://www.google.com">
            <i className="fa fa-google-plus-square"></i>
          </a>
          <a href="https://www.github.com">
            <i className="fa fa-github-square"></i>
          </a>
          <a href="https://www.linkedin.com"> 
            <i className="fa fa-linkedin-square"></i>
          </a>
          </div>
        </div>
        <div className="profile-details-name">
            <span className="primary-text">
                {" "}
                Hello, I'm <span className="highlighted-text">Sadia Farzana</span>
            </span>
        </div>
        <div className="profile-details-role">
            <span className="primary-text">
            {""}
            <h1>
            <Typical
               loop = {Infinity}
               steps={
               [  "Sadia Farzana ",
                   1000,
                   "Software Developer,Akij",
                   1000
               
               
               ]}
            />
            </h1>
            <span className="profile-role-tagname" width="50%">
            I have just over a year of experience as a junior software engineer with First Technology. 
            In my short time there, I've already contributed to over a dozen projects and assisted with
             managing one project for one of the firm's long-time clients
            </span>
            </span>
        </div>
        <div className="profile-options">
            <button className="btn primary-btn">
                {""}
                Hire Me{""}
            </button>
            <a href="/reactjs/src/Sadia Farzana.docx" download="CV.pdf">
                <button className="btn highlighted-btn">Get Resume</button>
            </a>
        </div>
        <div className="profile-picture">
            <div className="profile-picture-backgound">
              <background/>

            </div>

        </div>
      </div>
    </div>
  );
}
