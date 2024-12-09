"use client";

import React, { useState, useEffect, Suspense } from "react";
import { forwardRef } from "react";
const Contact = forwardRef(({}, ref) => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.target);

    data.firstName = data.get("firstName");
    data.lastName = data.get("lastName");
    data.email = data.get("email");
    data.message = data.get("message");

    fetch("/api/email", { method: "POST", body: JSON.stringify({ data }) })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.message) {
          setSuccess(true);
        } else {
          setError(true);
        }
      });
  };

  return (
    <section
      id="contact"
      className="strip alt"
      ref={ref}
      style={{ minHeight: "20vh" }}
    >
      <h1 className="sectionTitle">Contact Me</h1>
      <div>
        {success && <h2>Thank you for your message!</h2>}
        {error && <h2>There was an error sending your message.</h2>}
        {!success && !error && (
          <form onSubmit={handleSubmit}>
            <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
              <label>First Name:</label>
              <input type="text" name="firstName" />
              <br />
              <label>Last Name:</label>
              <input type="text" name="lastName" />
            </div>

            <label>Email:</label>
            <input type="email" name="email" />
            <br />
            <label>Message:</label>
            <textarea name="message" rows="4" cols="50" />
            <br />
            <button className="button" type="submit" value="Submit">
              Submit
            </button>
          </form>
        )}
      </div>
    </section>
  );
});

export default Contact;
