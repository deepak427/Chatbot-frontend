import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <div className="contact">
      <form action="#" method="post">
        <h1>Contact Us</h1>
        <p>
          Please take a moment to get in touch; we will get back to you shortly.
        </p>

        <div className="column">
          <label htmlFor="the-name">Your Name</label>
          <input type="text" name="name" id="the-name" />

          <label htmlFor="the-email">Email Address</label>
          <input type="email" name="email" id="the-email" />

          <label htmlFor="the-phone">Phone Number</label>
          <input type="tel" name="phone" id="the-phone" />

        </div>

        <div className="column">
          <label htmlFor="the-message">Message</label>
          <textarea name="message" id="the-message"></textarea>
          <input type="submit" value="Send Message" />
        </div>
      </form>
    </div>
  );
};

export default Contact;
