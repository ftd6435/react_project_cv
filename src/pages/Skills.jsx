import { motion } from "framer-motion";

const skills = [
  { name: "HTML/CSS", level: 95 },
  { name: "JavaScript", level: 80 },
  { name: "BootStrap & TaiwindCSS", level: 80 },
  { name: "PHP/Laravel", level: 70 },
  { name: "MySQL", level: 80 },
  { name: "React Js", level: 50 },
  { name: "Supabase", level: 50 },
  { name: "Langage C", level: 80 },
  { name: "Structure Des Donées", level: 90 },
  { name: "CSI", level: 95 },
  { name: "Git & GitHub", level: 70 },
];

function Skills() {
  return (
    <div className="container skills_container">
      {skills.map((skill) => (
        <SkillBar
          key={skill.name}
          skill={skill.name}
          percentage={skill.level}
        />
      ))}
    </div>
  );
}

function SkillBar({ skill, percentage }) {
  return (
    <div className="skill-bar">
      <div className="skill-info">
        <span className="skill-name">{skill}</span>
        <span className="skill-percentage">{percentage}%</span>
      </div>
      <div className="progress-line">
        <motion.span
          className="progress-fill"
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
        ></motion.span>
      </div>
    </div>
  );
}

export default Skills;
