import React from "react";
import "../styles/Section.css";

const Section = ({ title, id }) => {
  return (
    <section id={id} className="section">
      <h1>{title}</h1>
      <p>
        Passionate Software Developer eager to keep learning and grow in the
        professional scene. Seeking to use my knowledge and committed to
        becoming a dependable and valuable team member. I have worked with
        programming languages and frameworks such as:
      </p>
    </section>
  );
};

export default Section;
