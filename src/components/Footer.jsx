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

import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
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
            <h3>{t("footer.brand")}</h3>
            <p>{t("footer.description")}</p>
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
            <h4>{t("footer.courses")}</h4>
            <ul>
              <li>
                <a href="#cours">{t("footer.course_beginner")}</a>
              </li>
              <li>
                <a href="#cours">{t("footer.course_intermediate")}</a>
              </li>
              <li>
                <a href="#cours">{t("footer.course_advanced")}</a>
              </li>
              <li>
                <a href="#cours">{t("footer.course_semba")}</a>
              </li>
              <li>
                <a href="#cours">{t("footer.course_private")}</a>
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
            <h4>{t("footer.info")}</h4>
            <ul>
              <li>
                <a href="#professeurs">{t("footer.info_teachers")}</a>
              </li>
              <li>
                <a href="#contact">{t("footer.info_contact")}</a>
              </li>
              <li>
                <a href="#">{t("footer.info_prices")}</a>
              </li>
              <li>
                <a href="#">{t("footer.info_schedule")}</a>
              </li>
              <li>
                <a href="#">{t("footer.info_events")}</a>
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
            <h4>{t("footer.contact")}</h4>
            <div className="contact-info">
              <div className="contact-item">
                <FaMapMarkerAlt />
                <span>{t("footer.address")}</span>
              </div>
              <div className="contact-item">
                <FaPhone />
                <span>{t("footer.phone")}</span>
              </div>
              <div className="contact-item">
                <FaEnvelope />
                <span>{t("footer.email")}</span>
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
            <p>
              &copy; {currentYear} {t("footer.rights_prefix")} Drena Dance. {t("footer.rights")}
            </p>
            <div className="footer-links">
              <a href="#">{t("footer.legal")}</a>
              <a href="#">{t("footer.privacy")}</a>
              <a href="#">{t("footer.terms")}</a>
            </div>
          </div>
          <div className="footer-heart">
            <p>{t("footer.made_with")} <FaHeart /> {t("footer.in_france")}</p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
