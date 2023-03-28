import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  const gotoContact = () => {
    navigate("/contact");
  };

  return (
    <>
      <section>
        <h1>About Page</h1>
        <button onClick={() => gotoContact()}>Goto Contacts</button>
      </section>
    </>
  );
};

export default About;
