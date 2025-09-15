import React from "react";
import { motion } from "framer-motion";
import {
  FaInstagram,
  FaFacebook,
  FaYoutube,
  FaHeart,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <motion.div
            className="footer-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3>Drena Dance</h3>
            <p>
              Découvrez la passion de la Kizomba avec Drena Dance dans une
              ambiance chaleureuse et professionnelle. Rejoignez notre
              communauté de danseurs passionnés.
            </p>
            <div className="social-links">
              <a href="#" className="social-link">
                <FaInstagram />
              </a>
              <a href="#" className="social-link">
                <FaFacebook />
              </a>
              <a href="#" className="social-link">
                <FaYoutube />
              </a>
            </div>
          </motion.div>

          <motion.div
            className="footer-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4>Nos Cours</h4>
            <ul>
              <li>
                <a href="#cours">Kizomba Débutant</a>
              </li>
              <li>
                <a href="#cours">Kizomba Intermédiaire</a>
              </li>
              <li>
                <a href="#cours">Kizomba Avancé</a>
              </li>
              <li>
                <a href="#cours">Semba Traditionnel</a>
              </li>
              <li>
                <a href="#cours">Cours Privés</a>
              </li>
            </ul>
          </motion.div>

          <motion.div
            className="footer-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4>Informations</h4>
            <ul>
              <li>
                <a href="#professeurs">Nos Professeurs</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
              <li>
                <a href="#">Tarifs</a>
              </li>
              <li>
                <a href="#">Horaires</a>
              </li>
              <li>
                <a href="#">Événements</a>
              </li>
            </ul>
          </motion.div>

          <motion.div
            className="footer-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4>Contact</h4>
            <div className="contact-info">
              <div className="contact-item">
                <FaMapMarkerAlt />
                <span>
                  123 Rue de la Danse
                  <br />
                  75001 Paris, France
                </span>
              </div>
              <div className="contact-item">
                <FaPhone />
                <span>+33 1 23 45 67 89</span>
              </div>
              <div className="contact-item">
                <FaEnvelope />
                <span>contact@drenadance.fr</span>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="footer-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="footer-bottom-content">
            <p>&copy; {currentYear} Drena Dance. Tous droits réservés.</p>
            <div className="footer-links">
              <a href="#">Mentions légales</a>
              <a href="#">Politique de confidentialité</a>
              <a href="#">CGV</a>
            </div>
          </div>
          <div className="footer-heart">
            <p>
              Fait avec <FaHeart /> en France
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
