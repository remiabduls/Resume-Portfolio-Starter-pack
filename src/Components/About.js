import React from "react";

const About = ({ data }) => {
  if (data) {
    var name = data.name;
    var profilepic = "images/" + data.image;
    var bio = data.bio;
    var street = data.address.street;
    var city = data.address.city;
    var state = data.address.state;
    var zip = data.address.zip;
    var phone = data.phone;
    var email = data.email;
    var resumeDownload = data.resumedownload;
  }

  return (
    <section id="about">
      <div className="row">
        <div className="three columns">
          <img
            className="profile-pic"
            src="https://mir-s3-cdn-cf.behance.net/user/100/8dfed41035857129.610aeddd588ba.jpg"
            alt="Remilekun's Profile Pic"
          />
        </div>
        <div className="nine columns main-col">
          <h2>About Me</h2>

          <p>{bio}</p>
          <div className="row">
            <div className="columns contact-details">
              <h2>Contact Details</h2>
              <p className="address">
                <span>5,oguntuase close</span>
                <br />
                <span>
                  Lagos
                  <br />
                  Ayobo,Lagos, 100278
                </span>
                <br />
                <span>09020531002</span>
                <br />
                <span>remiabduls@gmail.com</span>
              </p>
            </div>
            <div className="columns download">
              <p>
                <a href={resumeDownload} className="button">
                  <i className="-download"></i>Download Resume
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
