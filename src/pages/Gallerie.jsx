import React from "react";
import { useTranslation } from "react-i18next";

const Gallerie = () => {
  const { t } = useTranslation();
  return (
    <main
      className="page page-gallerie container"
      style={{ padding: "80px 0" }}
    >
      <h1>{t("pages.gallerie.title")}</h1>
      <p>{t("pages.gallerie.intro")}</p>
    </main>
  );
};

export default Gallerie;
