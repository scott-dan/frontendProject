import React from "react";
import emailjs from "emailjs-com";

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
          <div className="col-lg-7">
            <img
              className="img-fluid rounded mb-4 mb-lg-0"
              src="https://cutewallpaper.org/21/snorlax-images/Pokemon-Snorlax-Not-Today-T-Shirt-GameStop.jpg"
              alt=""
              height="600"
              width="600"
            />
            <p>Please, don't bother me. I'm probably sleeping.</p>
          </div>
          <div className="col-lg-5 container border bg-dark">
            <div className="col-lg-5">
              <form onSubmit={sendEmail}>
                <ul>
                  <h2>Contact</h2>
                  <li>
                    <label htmlFor="nameTextInput">
                      Name <span>(required)</span>
                    </label>
                    <input type="text" name="name" required></input>
                  </li>

                  <li>
                    <label htmlFor="emailTextInput">
                      Email <span>(required)</span>
                    </label>
                    <input type="email" name="email" required></input>
                  </li>
                  <li>
                    <label htmlFor="commentsTextArea">Message</label>
                    <textarea name="message"></textarea>
                  </li>
                  <li>
                    <button id="btn-primary">Submit</button>
                    <button className="btn-secondary">Reset</button>
                  </li>
                  <br />
                </ul>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
