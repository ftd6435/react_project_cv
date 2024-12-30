import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

function Home() {
  return (
    <header className="header">
      <div className="container home_container">
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="profile"
        >
          <img src="/profile.png" alt="profile picture" />
        </motion.div>
        <div className="profile_content">
          <motion.h2
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="name"
          >
            Mamadou Pathé Diallo
          </motion.h2>
          <motion.p
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="title"
          >
            Devéloppeur Web
          </motion.p>
          <motion.p
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="description"
          >
            Je suis un devéloppeur web motivé et determiné, maîtrisant les
            langages du fondation du web tel que le <span>HTML</span>,{" "}
            <span>CSS</span> et <span>JavaScript</span>, avec quelques
            expériences en création de sites web réactifs et dymanique avec le
            langage Back-End <span>PHP</span> et son framework{" "}
            <span>Laravel</span>. Autonome, rapide à apprendre et capable de
            collaborer efficacement. En recherche d&apos;un stage dans mon
            domaine pour apprendre auprès d&apos;une équipe expérimenté et
            devélopper mes compétences dans un environnement professionnel.
          </motion.p>

          <Link className="btn btn_exp" to="/experiences-professionnelles">
            Découvrez Mes Expériences
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Home;
