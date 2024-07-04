import React from "react";
import "./ContactFormSection.css";
import ImageContainer from "./ImageContainer/ImageContainer";
import FormContainer from "./FormContainer/FormContainer";

const ContactFormSection = () => {
  return (
    <>
      <section class="formWrapper">
        <p className="formWrapper_text">
          Want to try out our software solutions? Or speak to one of our sales
          representatives who can quickly understand your requirements?
          <strong> Fill out the form below to register your interest!</strong>
        </p>
        <div className="formWrapper_container">
          <ImageContainer />
          <FormContainer />
        </div>
      </section>
    </>
  );
};

export default ContactFormSection;
