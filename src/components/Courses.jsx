import React from "react";
import { motion } from "framer-motion";
import { FaClock, FaUsers, FaStar, FaArrowRight } from "react-icons/fa";

const Courses = () => {
  const courses = [
    {
      id: 1,
      title: "Kizomba Débutant",
      description:
        "Découvrez les bases de la Kizomba avec nos professeurs expérimentés. Apprenez les pas fondamentaux et la connexion avec votre partenaire.",
      price: "45€",
      duration: "1h30",
      level: "Débutant",
      students: "8-12",
      image:
        "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=400&h=300&fit=crop&crop=center",
      features: [
        "Pas de base",
        "Connexion",
        "Musique angolaise",
        "Technique de guidage",
      ],
    },
    {
      id: 2,
      title: "Kizomba Intermédiaire",
      description:
        "Perfectionnez votre technique et explorez des figures plus complexes. Développez votre style personnel et votre musicalité.",
      price: "50€",
      duration: "1h30",
      level: "Intermédiaire",
      students: "6-10",
      image:
        "https://images.unsplash.com/photo-1504609813442-a8924e83f76e?w=400&h=300&fit=crop&crop=center",
      features: [
        "Figures avancées",
        "Musicalité",
        "Style personnel",
        "Improvisation",
      ],
    },
    {
      id: 3,
      title: "Kizomba Avancé",
      description:
        "Maîtrisez l'art de la Kizomba avec des techniques professionnelles. Développez votre créativité et votre expression artistique.",
      price: "55€",
      duration: "2h",
      level: "Avancé",
      students: "4-8",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop&crop=center",
      features: ["Techniques pro", "Créativité", "Expression", "Chorégraphies"],
    },
    {
      id: 4,
      title: "Semba Traditionnel",
      description:
        "Explorez les racines de la Kizomba avec le Semba, la danse traditionnelle angolaise. Découvrez l'histoire et la culture.",
      price: "40€",
      duration: "1h30",
      level: "Tous niveaux",
      students: "10-15",
      image:
        "https://images.unsplash.com/photo-1518611012118-460560d0b4b0?w=400&h=300&fit=crop&crop=center",
      features: [
        "Culture angolaise",
        "Histoire",
        "Tradition",
        "Musique authentique",
      ],
    },
  ];

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
          <h2>Nos Cours de Kizomba</h2>
          <p>
            Découvrez notre gamme complète de cours adaptés à tous les niveaux
          </p>
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
                    <span>{course.students} élèves</span>
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
                  S'inscrire
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
