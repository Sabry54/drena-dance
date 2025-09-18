import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
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

  // Fermer le menu déroulant de langue quand on clique ailleurs
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isLanguageDropdownOpen &&
        !event.target.closest(".language-dropdown")
      ) {
        setIsLanguageDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isLanguageDropdownOpen]);

  const navItems = [
    { name: t("home"), href: "/" },
    { name: t("menu.histoire"), href: "/histoire" },
    { name: t("menu.meninos"), href: "/meninos-do-semba" },
    { name: t("courses"), href: "/cours" },
    { name: t("menu.afterwork"), href: "/after-work" },
    { name: t("menu.gallerie"), href: "/gallerie" },
    { name: t("menu.agenda"), href: "/agenda" },
    { name: t("instructors"), href: "#professeurs" },
    { name: t("contact"), href: "#contact" },
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
          <div className="navbar-left">
            {/* Sélecteur de langue desktop (icônes images pour compatibilité Windows) */}
            <div className="language-switcher desktop-only">
              <div className="flags-container">
                <span
                  className={`flag-btn ${
                    i18n.language === "fr" ? "active" : ""
                  }`}
                  onClick={() => i18n.changeLanguage("fr")}
                  title="Français"
                  style={{ cursor: "pointer" }}
                >
                  <img
                    className="flag-icon"
                    src="https://flagcdn.com/w20/fr.png"
                    srcSet="https://flagcdn.com/w40/fr.png 2x"
                    width="20"
                    height="15"
                    alt="Français"
                    loading="lazy"
                  />
                </span>
                <span
                  className={`flag-btn ${
                    i18n.language === "en" ? "active" : ""
                  }`}
                  onClick={() => i18n.changeLanguage("en")}
                  title="English"
                  style={{ cursor: "pointer" }}
                >
                  <img
                    className="flag-icon"
                    src="https://flagcdn.com/w20/gb.png"
                    srcSet="https://flagcdn.com/w40/gb.png 2x"
                    width="20"
                    height="15"
                    alt="English"
                    loading="lazy"
                  />
                </span>
                <span
                  className={`flag-btn ${
                    i18n.language === "pt" ? "active" : ""
                  }`}
                  onClick={() => i18n.changeLanguage("pt")}
                  title="Português"
                  style={{ cursor: "pointer" }}
                >
                  <img
                    className="flag-icon"
                    src="https://flagcdn.com/w20/pt.png"
                    srcSet="https://flagcdn.com/w40/pt.png 2x"
                    width="20"
                    height="15"
                    alt="Português"
                    loading="lazy"
                  />
                </span>
              </div>
            </div>

            {/* Sélecteur de langue mobile - menu déroulant */}
            <div className="language-dropdown mobile-only">
              <button
                className="language-dropdown-trigger"
                onClick={() =>
                  setIsLanguageDropdownOpen(!isLanguageDropdownOpen)
                }
              >
                {i18n.language === "fr"
                  ? "🇫🇷"
                  : i18n.language === "en"
                  ? "🇬🇧"
                  : "🇵🇹"}
                <span className="dropdown-arrow">▼</span>
              </button>
              {isLanguageDropdownOpen && (
                <div className="language-dropdown-menu">
                  <button
                    className={`dropdown-item ${
                      i18n.language === "fr" ? "active" : ""
                    }`}
                    onClick={() => {
                      i18n.changeLanguage("fr");
                      setIsLanguageDropdownOpen(false);
                    }}
                  >
                    🇫🇷 Français
                  </button>
                  <button
                    className={`dropdown-item ${
                      i18n.language === "en" ? "active" : ""
                    }`}
                    onClick={() => {
                      i18n.changeLanguage("en");
                      setIsLanguageDropdownOpen(false);
                    }}
                  >
                    🇬🇧 English
                  </button>
                  <button
                    className={`dropdown-item ${
                      i18n.language === "pt" ? "active" : ""
                    }`}
                    onClick={() => {
                      i18n.changeLanguage("pt");
                      setIsLanguageDropdownOpen(false);
                    }}
                  >
                    🇵🇹 Português
                  </button>
                </div>
              )}
            </div>
          </div>

          <motion.div className="nav-brand" whileHover={{ scale: 1.05 }}>
            <a href="/" className="brand-link" aria-label="Accueil Drena Dance">
              <img
                src="/images/logo_drena_3.png"
                alt="Drena Dance Luxembourg"
                className="brand-logo"
              />
            </a>
          </motion.div>

          <div
            className="navbar-right"
            style={{ display: "flex", alignItems: "center", gap: 8 }}
          >
            <button
              className="menu-label"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Ouvrir le menu"
            >
              {t("menu")}
            </button>
            <motion.button
              className="hamburger"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.05 }}
              aria-label="Bouton menu"
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
          </div>

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
