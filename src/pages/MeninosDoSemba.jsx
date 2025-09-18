import React from "react";
import { useTranslation } from "react-i18next";

const MeninosDoSemba = () => {
  const { t } = useTranslation();
  return (
    <main className="page page-meninos container" style={{ padding: "80px 0" }}>
      <h1>{t("pages.meninos.title")}</h1>
      <p>{t("pages.meninos.intro")}</p>
    </main>
  );
};

export default MeninosDoSemba;
