import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

function Educations() {
  const [educations, setEducations] = useState([]);

  useEffect(function () {
    const getEducations = async () => {
      const res = await fetch("http://localhost:9999/educations");
      const data = await res.json();

      setEducations(data);
    };

    getEducations();
  }, []);

  return (
    <div className="container container_education">
      {educations.map((education) => (
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.5 }}
          className="card card_edu"
        >
          <EduCard education={education} key={education.id} />
        </motion.div>
      ))}
    </div>
  );
}

function EduCard({ education }) {
  return (
    <>
      <h2 className="position">{education.program}</h2>
      <h3 className="company">{education.institute}</h3>
      <div className="date_city">
        <span className="date">
          {education.date.debut_date}{" "}
          {education.date.end_date !== "" ? `- ${education.date.end_date}` : ""}
        </span>
        <span className="city">{education.city}</span>
      </div>
      <ul className="tasks">
        <Details details={education.details} />
      </ul>
    </>
  );
}

function Details({ details }) {
  return (
    <>
      {details.map((detail) => (
        <li>{detail}</li>
      ))}
    </>
  );
}

export default Educations;
