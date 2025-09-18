import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import "./Histoire.css";
import { histoireImages } from "../data/images";
import { marcioImages } from "../data/marcioImages";

const Histoire = () => {
  const { t } = useTranslation();
  const [photos, setPhotos] = useState([]);
  const [marcioPhotos, setMarcioPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Fonction pour charger les images depuis la liste définie
  useEffect(() => {
    const loadImages = async () => {
      try {
        const loadedPhotos = [];

        // Charger chaque image de la liste
        for (const imageName of histoireImages) {
          const imagePath = `/images/histoire/${imageName}`;

          // Créer une promesse pour tester si l'image existe
          const imageExists = new Promise((resolve) => {
            const img = new Image();
            img.onload = () => resolve(true);
            img.onerror = () => resolve(false);
            img.src = imagePath;
          });

          if (await imageExists) {
            loadedPhotos.push({
              src: imagePath,
              alt: `Photo ${loadedPhotos.length + 1} - Drena Dance`,
            });
          }
        }

        // Mélanger aléatoirement les photos trouvées
        const shuffledPhotos = loadedPhotos.sort(() => Math.random() - 0.5);
        setPhotos(shuffledPhotos);

        // Charger les photos de Marcio
        const marcioLoadedPhotos = [];
        for (const imageName of marcioImages) {
          const imagePath = `/images/marcio/${imageName}`;

          const imageExists = new Promise((resolve) => {
            const img = new Image();
            img.onload = () => resolve(true);
            img.onerror = () => resolve(false);
            img.src = imagePath;
          });

          if (await imageExists) {
            marcioLoadedPhotos.push({
              src: imagePath,
              alt: `Marcio Adilson Junqueira - Photo ${
                marcioLoadedPhotos.length + 1
              }`,
            });
          }
        }

        // Prendre 3 photos aléatoires de Marcio
        const shuffledMarcioPhotos = marcioLoadedPhotos.sort(
          () => Math.random() - 0.5
        );
        const selectedMarcioPhotos = shuffledMarcioPhotos.slice(0, 3);
        setMarcioPhotos(selectedMarcioPhotos);
      } catch (error) {
        console.log("Erreur lors du chargement des images:", error);
        // Photos de fallback si aucune image n'est trouvée
        setPhotos([
          { src: "/images/logo_drena_3.png", alt: "Drena Dance - Logo" },
        ]);
      } finally {
        setLoading(false);
      }
    };

    loadImages();
  }, []);

  // Fonction pour ouvrir la photo en grand
  const openPhotoModal = (photo, index) => {
    // Trouver l'index de cette photo dans toutes les photos de Marcio
    const allPhotosIndex = allMarcioPhotos.findIndex(
      (p) => p.src === photo.src
    );
    setSelectedPhoto(photo);
    setSelectedPhotoIndex(allPhotosIndex >= 0 ? allPhotosIndex : index);
    setIsModalOpen(true);
  };

  // Fonction pour fermer la modal
  const closePhotoModal = () => {
    setIsModalOpen(false);
    setSelectedPhoto(null);
    setSelectedPhotoIndex(0);
  };

  // Charger toutes les photos de Marcio pour la navigation
  const [allMarcioPhotos, setAllMarcioPhotos] = useState([]);

  // Charger toutes les photos de Marcio au démarrage
  useEffect(() => {
    const loadAllMarcioPhotos = async () => {
      const allPhotos = [];
      for (const imageName of marcioImages) {
        const imagePath = `/images/marcio/${imageName}`;

        const imageExists = new Promise((resolve) => {
          const img = new Image();
          img.onload = () => resolve(true);
          img.onerror = () => resolve(false);
          img.src = imagePath;
        });

        if (await imageExists) {
          allPhotos.push({
            src: imagePath,
            alt: `Marcio Adilson Junqueira - Photo ${allPhotos.length + 1}`,
          });
        }
      }
      setAllMarcioPhotos(allPhotos);
    };

    loadAllMarcioPhotos();
  }, []);

  // Fonction pour naviguer vers la photo précédente
  const goToPreviousPhoto = () => {
    const newIndex =
      selectedPhotoIndex > 0
        ? selectedPhotoIndex - 1
        : allMarcioPhotos.length - 1;
    setSelectedPhotoIndex(newIndex);
    setSelectedPhoto(allMarcioPhotos[newIndex]);
  };

  // Fonction pour naviguer vers la photo suivante
  const goToNextPhoto = () => {
    const newIndex =
      selectedPhotoIndex < allMarcioPhotos.length - 1
        ? selectedPhotoIndex + 1
        : 0;
    setSelectedPhotoIndex(newIndex);
    setSelectedPhoto(allMarcioPhotos[newIndex]);
  };

  // Navigation au clavier
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        closePhotoModal();
      } else if (e.key === "ArrowLeft") {
        goToPreviousPhoto();
      } else if (e.key === "ArrowRight") {
        goToNextPhoto();
      }
    };

    if (isModalOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden"; // Empêcher le scroll
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isModalOpen, selectedPhotoIndex, allMarcioPhotos]);

  return (
    <main className="page page-histoire">
      <div className="container">
        {/* Section générale */}
        <section className="histoire-intro">
          <h1 className="page-title">{t("pages.histoire.title")}</h1>
          <div className="intro-content">
            <p className="intro-text">{t("pages.histoire.intro")}</p>
          </div>
        </section>

        {/* Section Marcio - Structure comme Hero */}
        <section className="marcio-section">
          <h2 className="section-title">{t("pages.histoire.marcio_title")}</h2>
          <div className="marcio-content two-col">
            <div className="marcio-left">
              <p className="marcio-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            <div className="marcio-right">
              <div className="marcio-photos-grid">
                {marcioPhotos.map((photo, index) => (
                  <div
                    key={`marcio-${index}`}
                    className={`marcio-photo-item marcio-photo-item-${
                      index + 1
                    }`}
                    onClick={() => openPhotoModal(photo, index)}
                  >
                    <img
                      src={photo.src}
                      alt={photo.alt}
                      className="marcio-photo-small"
                      loading="lazy"
                    />
                    <div className="photo-overlay-small">
                      <span className="zoom-icon">🔍</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Mosaïque de photos */}
        <section className="photos-mosaic">
          <h2 className="section-title">{t("pages.histoire.photos_title")}</h2>

          {loading ? (
            <div className="loading-photos">
              <div className="loading-spinner"></div>
              <p>{t("pages.histoire.loading")}</p>
            </div>
          ) : photos.length > 0 ? (
            <div className="mosaic-grid">
              {photos.map((photo, index) => (
                <div
                  key={`${photo.src}-${index}`}
                  className={`mosaic-item mosaic-item-${index + 1}`}
                >
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="mosaic-photo"
                    loading="lazy"
                  />
                  <div className="photo-overlay">
                    <span className="photo-caption">{photo.alt}</span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="no-photos">
              <p>{t("pages.histoire.no_photos_found")}</p>
              <p>{t("pages.histoire.add_photos_instruction")}</p>
            </div>
          )}
        </section>
      </div>

      {/* Modal pour afficher la photo en grand */}
      {isModalOpen && selectedPhoto && (
        <div className="photo-modal" onClick={closePhotoModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closePhotoModal}>
              ✕
            </button>

            {/* Bouton précédent */}
            <button
              className="modal-nav modal-nav-prev"
              onClick={goToPreviousPhoto}
            >
              ‹
            </button>

            {/* Photo */}
            <img
              src={selectedPhoto.src}
              alt={selectedPhoto.alt}
              className="modal-photo"
            />

            {/* Bouton suivant */}
            <button
              className="modal-nav modal-nav-next"
              onClick={goToNextPhoto}
            >
              ›
            </button>

            {/* Indicateur de position */}
            <div className="modal-counter">
              {selectedPhotoIndex + 1} / {allMarcioPhotos.length}
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default Histoire;
