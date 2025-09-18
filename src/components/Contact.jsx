import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaClock,
  FaInstagram,
  FaFacebook,
  FaYoutube,
  FaPaperPlane,
} from "react-icons/fa";

import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ici vous pouvez ajouter la logique d'envoi du formulaire
    console.log("Formulaire soumis:", formData);
    alert("Message envoyé avec succès !");
  };

  const courses = [
    "Kizomba Débutant",
    "Kizomba Intermédiaire",
    "Kizomba Avancé",
    "Semba Traditionnel",
    "Cours privé",
    "Autre",
  ];

  return (
    <section id="contact" className="contact">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2>{t("contact.title")}</h2>
          <p>{t("contact.subtitle")}</p>
        </motion.div>

        <div className="contact-content">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3>{t("contact.info.title")}</h3>

            <div className="info-item">
              <FaMapMarkerAlt className="info-icon" />
              <div>
                <h4>{t("contact.info.address")}</h4>
                <p>
                  123 Rue de la Danse
                  <br />
                  75001 Paris, France
                </p>
              </div>
            </div>

            <div className="info-item">
              <FaPhone className="info-icon" />
              <div>
                <h4>{t("contact.info.phone")}</h4>
                <p>+33 1 23 45 67 89</p>
              </div>
            </div>

            <div className="info-item">
              <FaEnvelope className="info-icon" />
              <div>
                <h4>{t("contact.info.email")}</h4>
                <p>contact@drenadance.fr</p>
              </div>
            </div>

            <div className="info-item">
              <FaClock className="info-icon" />
              <div>
                <h4>{t("contact.info.hours")}</h4>
                <p>
                  Lun - Ven: 18h00 - 22h00
                  <br />
                  Sam - Dim: 14h00 - 20h00
                </p>
              </div>
            </div>

            <div className="social-links">
              <h4>{t("contact.follow")}</h4>
              <div className="social-icons">
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
            </div>
          </motion.div>

          <motion.div
            className="contact-form-container"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <form className="contact-form" onSubmit={handleSubmit}>
              <h3>{t("contact.form.title")}</h3>

              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder={t("contact.form.name")}
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder={t("contact.form.email")}
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <input
                  type="tel"
                  name="phone"
                  placeholder={t("contact.form.phone")}
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <select
                  name="course"
                  value={formData.course}
                  onChange={handleChange}
                  required
                >
                  <option value="">{t("contact.form.select_course")}</option>
                  {courses.map((course, index) => (
                    <option key={index} value={course}>
                      {course}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <textarea
                  name="message"
                  placeholder={t("contact.form.message")}
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>

              <motion.button
                type="submit"
                className="btn btn-primary submit-btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaPaperPlane />
                {t("contact.form.submit")}
              </motion.button>
            </form>
          </motion.div>
        </div>

        <motion.div
          className="map-container"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="map-placeholder">
            <FaMapMarkerAlt className="map-icon" />
            <p>{t("contact.map.caption")}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
