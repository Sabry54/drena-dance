import React, { useMemo } from "react";
import { motion } from "framer-motion";
import {
  FaInstagram,
  FaFacebook,
  FaYoutube,
  FaTrophy,
  FaAward,
  FaHeart,
} from "react-icons/fa";

import { useTranslation } from "react-i18next";

const Instructors = () => {
  const { t, i18n } = useTranslation();
  const instructors = useMemo(
    () => [
      {
        id: 1,
        name: t("instructors.items.1.name"),
        specialty: t("instructors.items.1.specialty"),
        experience: t("instructors.items.1.experience"),
        origin: t("instructors.items.1.origin"),
        image:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop&crop=face",
        bio: t("instructors.items.1.bio"),
        achievements: [
          t("instructors.items.1.achievements.0"),
          t("instructors.items.1.achievements.1"),
          t("instructors.items.1.achievements.2"),
        ],
        social: {
          instagram: "#",
          facebook: "#",
          youtube: "#",
        },
      },
      {
        id: 2,
        name: t("instructors.items.2.name"),
        specialty: t("instructors.items.2.specialty"),
        experience: t("instructors.items.2.experience"),
        origin: t("instructors.items.2.origin"),
        image:
          "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=400&fit=crop&crop=face",
        bio: t("instructors.items.2.bio"),
        achievements: [
          t("instructors.items.2.achievements.0"),
          t("instructors.items.2.achievements.1"),
          t("instructors.items.2.achievements.2"),
        ],
        social: {
          instagram: "#",
          facebook: "#",
          youtube: "#",
        },
      },
      {
        id: 3,
        name: t("instructors.items.3.name"),
        specialty: t("instructors.items.3.specialty"),
        experience: t("instructors.items.3.experience"),
        origin: t("instructors.items.3.origin"),
        image:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=400&fit=crop&crop=face",
        bio: t("instructors.items.3.bio"),
        achievements: [
          t("instructors.items.3.achievements.0"),
          t("instructors.items.3.achievements.1"),
          t("instructors.items.3.achievements.2"),
        ],
        social: {
          instagram: "#",
          facebook: "#",
          youtube: "#",
        },
      },
    ],
    [i18n.language]
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="professeurs" className="instructors">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2>{t("instructors.title")}</h2>
          <p>{t("instructors.subtitle")}</p>
        </motion.div>

        <motion.div
          className="instructors-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {instructors.map((instructor) => (
            <motion.div
              key={instructor.id}
              className="instructor-card"
              variants={cardVariants}
              whileHover={{
                y: -15,
                transition: { duration: 0.3 },
              }}
            >
              <div className="instructor-image">
                <img src={instructor.image} alt={instructor.name} />
                <div className="instructor-overlay">
                  <div className="social-links">
                    <a href={instructor.social.instagram}>
                      <FaInstagram />
                    </a>
                    <a href={instructor.social.facebook}>
                      <FaFacebook />
                    </a>
                    <a href={instructor.social.youtube}>
                      <FaYoutube />
                    </a>
                  </div>
                </div>
              </div>

              <div className="instructor-content">
                <h3>{instructor.name}</h3>
                <p className="specialty">{instructor.specialty}</p>
                <p className="origin">{instructor.origin}</p>

                <div className="instructor-info">
                  <div className="info-item">
                    <FaAward />
                    <span>{instructor.experience} d'expérience</span>
                  </div>
                </div>

                <p className="bio">{instructor.bio}</p>

                <div className="achievements">
                  <h4>{t("instructors.achievements")}</h4>
                  <ul>
                    {instructor.achievements.map((achievement, index) => (
                      <li key={index}>
                        <FaTrophy />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="instructor-rating">
                  <div className="stars">
                    {[...Array(5)].map((_, i) => (
                      <FaHeart key={i} />
                    ))}
                  </div>
                  <span>{t("instructors.rating")}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Instructors;
