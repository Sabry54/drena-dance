import React, { useEffect, useMemo, useRef, useState } from "react";
import { FaVolumeUp, FaVolumeMute } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();
  // ID de la vidéo YouTube (surchargé par ?vid=<ID> dans l'URL pour tests rapides)
  const urlVideoId =
    typeof window !== "undefined"
      ? new URLSearchParams(window.location.search).get("vid")
      : null;
  const videoId =
    urlVideoId && /^[\w-]{6,20}$/.test(urlVideoId) ? urlVideoId : "z8r9teZNWUo";

  // Démarrer muet partout pour garantir l'autoplay (les navigateurs exigent le mute)
  const [isMuted, setIsMuted] = useState(true);

  const iframeRef = useRef(null);

  // URL vidéo: autoplay + loop + playlist + jsapi, toujours muet au chargement
  const videoSrc = useMemo(() => {
    const base = `https://www.youtube.com/embed/${videoId}`;
    const currentOrigin =
      typeof window !== "undefined" ? window.location.origin : "";
    const params = new URLSearchParams({
      autoplay: "1",
      mute: "1",
      controls: "0",
      loop: "1",
      playlist: videoId,
      modestbranding: "1",
      rel: "0",
      playsinline: "1",
      enablejsapi: "1",
      origin: currentOrigin,
    }).toString();
    return `${base}?${params}`;
  }, [videoId]);

  // Appliquer mute/unmute via postMessage, sans relancer la vidéo
  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe || !iframe.contentWindow) return;
    const command = isMuted ? "mute" : "unMute";
    const message = JSON.stringify({
      event: "command",
      func: command,
      args: [],
    });
    iframe.contentWindow.postMessage(message, "*");
  }, [isMuted]);

  return (
    <section id="accueil" className="hero">
      <div className="container">
        <div className="hero-content two-col">
          <div className="hero-left">
            <h1 className="hero-title">
              <span className="brand-flag">DRENA DANCE LUXEMBOURG</span>
              <span className="title-sep"> — </span>
              <span className="keyword keyword-1">KIZOMBA</span>
              <span className="title-comma">, </span>
              <span className="keyword keyword-2">SEMBA</span>
              <span className="title-comma">, </span>
              <span className="keyword keyword-3">AFRO</span>
            </h1>
            <p className="hero-description">{t("hero.description")}</p>
            <a href="/histoire" className="btn btn-primary">
              {t("hero.button")}
            </a>
          </div>
          <div className="hero-right">
            <div className="hero-video-box">
              <iframe
                className="hero-video-iframe"
                ref={iframeRef}
                src={videoSrc}
                title="Kizomba background video"
                frameBorder="0"
                allow="autoplay; encrypted-media; picture-in-picture;"
                allowFullScreen
              ></iframe>
              <button
                className="sound-toggle-icon inside"
                onClick={() => setIsMuted((v) => !v)}
                aria-label={isMuted ? t("hero.sound_on") : t("hero.sound_off")}
                title={isMuted ? t("hero.sound_on") : t("hero.sound_off")}
              >
                {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
