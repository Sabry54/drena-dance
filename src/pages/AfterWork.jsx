import React from "react";
import { useTranslation } from "react-i18next";

const AfterWork = () => {
  const { t } = useTranslation();
  return (
    <main
      className="page page-afterwork container"
      style={{ padding: "80px 0" }}
    >
      <h1>{t("pages.afterwork.title")}</h1>
      <p>{t("pages.afterwork.intro")}</p>
    </main>
  );
};

export default AfterWork;
