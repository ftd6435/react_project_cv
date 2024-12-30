import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

function Experiences() {
  const [experiences, setExperiences] = useState([]);

  useEffect(function () {
    const getExperiences = async () => {
      const res = await fetch("http://localhost:9000/experiences");
      const data = await res.json();

      setExperiences(data);
    };

    getExperiences();
  }, []);


  return (
    <div className="container exp_container">
      {experiences.map((experience) => (
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.5 }}
          className="card card_exp"
        >
          <Card experience={experience} key={experience.id} />
        </motion.div>
      ))}
    </div>
  );
}

function Card({ experience }) {
  return (
    <>
      <h2 className="position">{experience.position}</h2>
      <h3 className="company">{experience.company}</h3>
      <div className="date_city">
        <span className="date">
          {experience.date.debut_date}{" "}
          {experience.date.end_date !== ""
            ? `- ${experience.date.end_date}`
            : ""}
        </span>
        <span className="city">{experience.address}</span>
      </div>
      <ul className="tasks">
        <Tasks tasks={experience.tasks} />
      </ul>
    </>
  );
}

function Tasks({ tasks }) {
  return (
    <>
      <li>{tasks.task_1}</li>
      <li>{tasks.task_2}</li>
      <li>{tasks.task_3}</li>
      {tasks.task_4 && <li>{tasks.task_4}</li>}
    </>
  );
}

export default Experiences;
