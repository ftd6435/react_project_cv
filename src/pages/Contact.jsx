import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

function Contact() {
  return (
    <div className="container contact_container">
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="contact_form"
      >
        <form>
          <h1>Laissez moi un message</h1>
          <div>
            <input type="text" placeholder="Nom et Prénom" />
            <input type="text" placeholder="Adresse Email" />
            <textarea>Votre message ici...</textarea>
          </div>
          <input type="submit" value="Envoyer" className="btn" />
        </form>
      </motion.div>
      <motion.div
        variants={fadeIn("left", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="contact_info"
      >
        <div className="language">
          <h2>Langues Internationale</h2>
          <ul>
            <li>
              <span>Français</span>
              <span className="niveau">Niveau Avancé</span>
            </li>
            <li>
              <span>Anglais</span>
              <span className="niveau">Niveau Avancé</span>
            </li>
          </ul>
        </div>
        <div className="center">
          <h2>Centre d'interêt</h2>
          <ul>
            <li>
              <span>Lecture</span>
            </li>
            <li>
              <span>Football</span>
            </li>
            <li>
              <span>Musique</span>
            </li>
          </ul>
        </div>
        <div className="social_icons">
          <h2>Suivez moi sur</h2>
          <ul>
            <li>
              <Link to={""} className="social_link">
                <span>
                  <i class="fa-brands fa-github"></i>
                </span>
                <span>GitHub</span>
              </Link>
            </li>
            <li>
              <Link to={""} className="social_link">
                <span>
                  <i class="fa-brands fa-facebook"></i>
                </span>
                <span>Facebook</span>
              </Link>
            </li>
            <li>
              <Link to={""} className="social_link">
                <span>
                  <i class="fa-brands fa-linkedin"></i>
                </span>
                <span>LinkedIn</span>
              </Link>
            </li>
            <li>
              <Link to={""} className="social_link">
                <span>
                  <i class="fa-brands fa-x-twitter"></i>
                </span>
                <span>Twitter</span>
              </Link>
            </li>
          </ul>
        </div>
      </motion.div>
    </div>
  );
}

export default Contact;
