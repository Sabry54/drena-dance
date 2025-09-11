import React from "react";
import { motion } from "framer-motion";
import { FaPlay, FaHeart, FaUsers } from "react-icons/fa";

const Hero = () => {
  return (
    <section id="accueil" className="hero">
      <div className="hero-background">
        <div className="hero-overlay"></div>
        <div className="hero-pattern"></div>
      </div>

      <div className="container">
        <div className="hero-content">
          <motion.div
            className="hero-text"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h1
              className="hero-title"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Découvrez la <span className="highlight">Kizomba</span>
              <br />
              <span className="subtitle">Danse Sensuelle d'Angola</span>
            </motion.h1>

            <motion.p
              className="hero-description"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Plongez dans l'univers envoûtant de la Kizomba, cette danse
              angolaise qui allie sensualité, connexion et passion. Rejoignez
              notre communauté de danseurs passionnés et découvrez l'art de la
              connexion parfaite.
            </motion.p>

            <motion.div
              className="hero-buttons"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <a href="#cours" className="btn btn-primary">
                <FaPlay className="btn-icon" />
                Commencer maintenant
              </a>
              <a href="#professeurs" className="btn btn-secondary">
                Découvrir nos professeurs
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            className="hero-stats"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <div className="stat-item">
              <FaUsers className="stat-icon" />
              <div className="stat-content">
                <span className="stat-number">500+</span>
                <span className="stat-label">Élèves</span>
              </div>
            </div>
            <div className="stat-item">
              <FaHeart className="stat-icon" />
              <div className="stat-content">
                <span className="stat-number">15+</span>
                <span className="stat-label">Années d'expérience</span>
              </div>
            </div>
            <div className="stat-item">
              <FaPlay className="stat-icon" />
              <div className="stat-content">
                <span className="stat-number">50+</span>
                <span className="stat-label">Cours par semaine</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="scroll-indicator"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="scroll-arrow"></div>
      </motion.div>
    </section>
  );
};

export default Hero;
