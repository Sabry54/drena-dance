import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { FaClock, FaUsers, FaStar, FaArrowRight } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Courses = () => {
  const { t, i18n } = useTranslation();

  const courses = useMemo(
    () => [
      {
        id: 1,
        title: t("courses.items.1.title"),
        description: t("courses.items.1.description"),
        price: "45€",
        duration: "1h30",
        level: t("courses.items.1.level"),
        students: "8-12",
        image:
          "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=400&h=300&fit=crop&crop=center",
        features: [
          t("courses.items.1.features.0"),
          t("courses.items.1.features.1"),
          t("courses.items.1.features.2"),
          t("courses.items.1.features.3"),
        ],
      },
      {
        id: 2,
        title: t("courses.items.2.title"),
        description: t("courses.items.2.description"),
        price: "50€",
        duration: "1h30",
        level: t("courses.items.2.level"),
        students: "6-10",
        image:
          "https://images.unsplash.com/photo-1504609813442-a8924e83f76e?w=400&h=300&fit=crop&crop=center",
        features: [
          t("courses.items.2.features.0"),
          t("courses.items.2.features.1"),
          t("courses.items.2.features.2"),
          t("courses.items.2.features.3"),
        ],
      },
      {
        id: 3,
        title: t("courses.items.3.title"),
        description: t("courses.items.3.description"),
        price: "55€",
        duration: "2h",
        level: t("courses.items.3.level"),
        students: "4-8",
        image:
          "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop&crop=center",
        features: [
          t("courses.items.3.features.0"),
          t("courses.items.3.features.1"),
          t("courses.items.3.features.2"),
          t("courses.items.3.features.3"),
        ],
      },
      {
        id: 4,
        title: t("courses.items.4.title"),
        description: t("courses.items.4.description"),
        price: "40€",
        duration: "1h30",
        level: t("courses.items.4.level"),
        students: "10-15",
        image:
          "https://images.unsplash.com/photo-1518611012118-460560d0b4b0?w=400&h=300&fit=crop&crop=center",
        features: [
          t("courses.items.4.features.0"),
          t("courses.items.4.features.1"),
          t("courses.items.4.features.2"),
          t("courses.items.4.features.3"),
        ],
      },
    ],
    [i18n.language]
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="cours" className="courses">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2>{t("courses.title")}</h2>
          <p>{t("courses.subtitle")}</p>
        </motion.div>

        <motion.div
          className="courses-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {courses.map((course) => (
            <motion.div
              key={course.id}
              className="course-card"
              variants={cardVariants}
              whileHover={{
                y: -10,
                transition: { duration: 0.3 },
              }}
            >
              <div className="course-image">
                <img src={course.image} alt={course.title} />
                <div className="course-level">{course.level}</div>
                <div className="course-price">{course.price}</div>
              </div>

              <div className="course-content">
                <h3>{course.title}</h3>
                <p>{course.description}</p>

                <div className="course-info">
                  <div className="info-item">
                    <FaClock />
                    <span>{course.duration}</span>
                  </div>
                  <div className="info-item">
                    <FaUsers />
                    <span>
                      {course.students} {t("courses.students_suffix")}
                    </span>
                  </div>
                </div>

                <ul className="course-features">
                  {course.features.map((feature, index) => (
                    <li key={index}>
                      <FaStar />
                      {feature}
                    </li>
                  ))}
                </ul>

                <a href="#contact" className="course-btn">
                  {t("courses.enroll")}
                  <FaArrowRight />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Courses;
