import React from "react";
import { motion } from "framer-motion";
import {
  FaInstagram,
  FaFacebook,
  FaYoutube,
  FaTrophy,
  FaAward,
  FaHeart,
} from "react-icons/fa";

const Instructors = () => {
  const instructors = [
    {
      id: 1,
      name: "Carlos Mendes",
      specialty: "Kizomba & Semba",
      experience: "15 ans",
      origin: "Luanda, Angola",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop&crop=face",
      bio: "Originaire de Luanda, Carlos a grandi avec la Kizomba dans les rues d'Angola. Champion national de danse, il transmet avec passion l'authenticité de cette danse.",
      achievements: [
        "Champion Angola 2018",
        "Formateur certifié",
        "500+ élèves formés",
      ],
      social: {
        instagram: "#",
        facebook: "#",
        youtube: "#",
      },
    },
    {
      id: 2,
      name: "Isabella Santos",
      specialty: "Kizomba Sensuelle",
      experience: "12 ans",
      origin: "Lisbonne, Portugal",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=400&fit=crop&crop=face",
      bio: "Isabella a découvert la Kizomba à Lisbonne et s'est spécialisée dans l'aspect sensuel et artistique de la danse. Elle enseigne la connexion et l'expression.",
      achievements: [
        "Championne Europe 2019",
        "Spécialiste connexion",
        "Artiste chorégraphe",
      ],
      social: {
        instagram: "#",
        facebook: "#",
        youtube: "#",
      },
    },
    {
      id: 3,
      name: "Miguel Rodrigues",
      specialty: "Semba Traditionnel",
      experience: "18 ans",
      origin: "Benguela, Angola",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=400&fit=crop&crop=face",
      bio: "Miguel est un gardien de la tradition. Il enseigne le Semba authentique tel qu'il se danse dans les quartiers populaires d'Angola.",
      achievements: [
        "Maître Semba",
        "Préservateur culturel",
        "Historien de la danse",
      ],
      social: {
        instagram: "#",
        facebook: "#",
        youtube: "#",
      },
    },
  ];

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
          <h2>Nos Maîtres de Danse</h2>
          <p>
            Des professeurs passionnés et expérimentés pour vous guider dans
            l'art de la Kizomba
          </p>
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
                  <h4>Réalisations</h4>
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
                  <span>5.0/5</span>
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
