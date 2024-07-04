import React, { useState } from "react";
import "./FormContainer.css";

const FormContainer = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");

  const handleInput = (e, inputname) => {
    if (inputname === "name") {
      setName(e.target.value);
    } else if (inputname === "email") {
      setEmail(e.target.value);
    } else if (inputname === "phone") {
      setPhone(e.target.value);
    } else if (inputname === "company") {
      setCompany(e.target.value);
    } else if (inputname === "message") {
      setMessage(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === "" || undefined) {
      alert("Please enter your name");
    } else if (email === "" || undefined) {
      alert("Please enter your email");
    } else if (phone === "" || undefined) {
      alert("Please enter your phone");
    } else if (company === "" || undefined) {
      alert("Please enter your company");
    } else if (company === "" || undefined) {
      alert("Please enter your company");
    } else {
      // console.log(name);
      // console.log(email);
      // console.log(phone);
      // console.log(company);
      // console.log(message);
      // alert("Your Details Submited");

      const userInput =
        "Name: " +
        name +
        "; Email: " +
        email +
        "; Phone: " +
        phone +
        "; Company: " +
        company +
        "; Message: " +
        message;

      const submitSpan = document.getElementById("formInput");
      submitSpan.innerHTML = userInput;
    }
  };

  return (
    <>
      <div className="formContainer">
        <h2 className="formContainer_heading">Contact Us</h2>
        <form>
          <div className="inputWrapper">
            <input
              type="text"
              id="txtName"
              onChange={(e) => handleInput(e, "name")}
            />
            <label>Name</label>
          </div>
          <div className="inputWrapper">
            <input
              type="text"
              id="txtEmail"
              onChange={(e) => handleInput(e, "email")}
            />
            <label>Email Address</label>
          </div>
          <div className="inputWrapper">
            <input
              type="text"
              id="txtPhone"
              onChange={(e) => handleInput(e, "phone")}
            />
            <label>Phone Number</label>
          </div>
          <div className="inputWrapper">
            <input
              type="text"
              id="txtCompanyName"
              onChange={(e) => handleInput(e, "company")}
            />
            <label>Company Name</label>
          </div>
          <div className="inputWrapper">
            <textarea
              name="message"
              id="message"
              onChange={(e) => handleInput(e, "message")}
              cols="30"
              rows="1"
            ></textarea>
            <label>Message</label>
          </div>
          <div className="inputWrapper">
            <button
              id="cmdSubmit"
              className="btn whiteBtn"
              onClick={(e) => handleSubmit(e)}
            >
              REQUEST FREE TRIAL
            </button>
          </div>
          <span id="formInput" className="text">
            Form Input:
          </span>
        </form>
      </div>
    </>
  );
};

export default FormContainer;
