import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    let ticking = false;
    let lastTime = 0;

    const handleScroll = () => {
      const now = performance.now();

      if (!ticking && now - lastTime > 16) {
        // Throttle à 60fps max
        requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          const scrollDifference = Math.abs(currentScrollY - lastScrollY);
          const scrollVelocity =
            Math.abs(currentScrollY - lastScrollY) / (now - lastTime);

          // Header disparaît quand on scroll vers le bas (avec seuil adaptatif)
          if (
            currentScrollY > lastScrollY &&
            currentScrollY > 100 &&
            scrollDifference > (window.innerWidth <= 768 ? 3 : 5) // Seuil plus bas sur mobile
          ) {
            setIsVisible(false);
          }
          // Header réapparaît quand on scroll vers le haut (avec seuil adaptatif)
          else if (
            currentScrollY < lastScrollY &&
            scrollDifference > (window.innerWidth <= 768 ? 2 : 5) // Seuil plus bas sur mobile
          ) {
            setIsVisible(true);
          }

          // Header devient opaque quand on scroll
          setIsScrolled(currentScrollY > 50);
          setLastScrollY(currentScrollY);
          lastTime = now;
          ticking = false;
        });
        ticking = true;
      }
    };

    // Utiliser un listener optimisé pour mobile
    const scrollOptions = {
      passive: true,
      capture: false,
    };

    window.addEventListener("scroll", handleScroll, scrollOptions);
    return () =>
      window.removeEventListener("scroll", handleScroll, scrollOptions);
  }, [lastScrollY]);

  const navItems = [
    { name: "Accueil", href: "#accueil" },
    { name: "Cours", href: "#cours" },
    { name: "Professeurs", href: "#professeurs" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.header
      className={`header ${isScrolled ? "scrolled" : ""}`}
      initial={{ y: -100 }}
      animate={{
        y: isVisible ? 0 : -100,
        opacity: isVisible ? 1 : 0,
      }}
      transition={{
        duration: isVisible ? 0.3 : 0.5, // Plus rapide quand on remonte
        ease: isVisible ? [0.25, 0.1, 0.25, 1] : [0.25, 0.46, 0.45, 0.94], // Easing différent pour remonter
        opacity: { duration: isVisible ? 0.25 : 0.4 },
        y: { duration: isVisible ? 0.3 : 0.5 },
      }}
    >
      <div className="container">
        <nav className="navbar">
          <motion.div className="nav-brand" whileHover={{ scale: 1.05 }}>
            <h1>Drena Dance</h1>
            <span className="brand-subtitle">Danse Angolaise</span>
          </motion.div>

          <motion.button
            className="hamburger"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="hamburger-lines">
              <span
                className={`line line1 ${isMenuOpen ? "active" : ""}`}
              ></span>
              <span
                className={`line line2 ${isMenuOpen ? "active" : ""}`}
              ></span>
              <span
                className={`line line3 ${isMenuOpen ? "active" : ""}`}
              ></span>
            </div>
          </motion.button>

          <ul className={`nav-menu ${isMenuOpen ? "active" : ""}`}>
            {navItems.map((item, index) => (
              <motion.li
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <a
                  href={item.href}
                  className="nav-link"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              </motion.li>
            ))}
          </ul>
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;
