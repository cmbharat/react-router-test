import React from "react";
import { useNavigate } from "react-router-dom";
// import Header from "./Header";

const Contact = () => {
  const navigate = useNavigate();
  const goToHome = () => {
    navigate(-1);
  };

  return (
    <>
      <section>
        <h1>Contact Page</h1>
        <button onClick={goToHome}>Go Back</button>
      </section>
    </>
  );
};

export default Contact;
