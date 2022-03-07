import React from "react";
import emailjs from "emailjs-com";
import "../components/styles/contactStyles.css";

const Contact = () => {
  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_kalc6o1",
        "template_f436riy",
        e.target,
        "AHsXAXaYMPUdS-pLd"
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="contact">
      <div className="container">
        <div className="row align-items-center my-5">
          <div className="col-lg-6">
            <img
              src="https://i.imgur.com/dF8Ohsu.png"
              alt="Snorlax Buddha"
            />
          </div>
          <div className="col-lg-4">
              <form onSubmit={sendEmail}>
                <ul>
                  <h2>Contact</h2>
                  <li>
                    <label htmlFor="nameTextInput">
                      Name <span>(required)</span>
                    </label><br />
                    <input type="text" name="name" required></input>
                  </li>

                  <li>
                    <label htmlFor="emailTextInput">
                      Email <span>(required)</span>
                    </label><br />
                    <input type="email" name="email" required></input>
                  </li>
                  <li>
                    <label htmlFor="commentsTextArea">Message</label><br />
                    <textarea name="message" rows="4"></textarea>
                  </li>
                  <li>
                    <button id="btn-primary">Submit</button>
                    <button className="btn-secondary">Reset</button>
                  </li>
                  <br />
                  <p>Please, don't bother me. I'm probably sleeping.</p>
                </ul>
              </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
