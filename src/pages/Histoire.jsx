import React from "react";
import { useTranslation } from "react-i18next";

const Histoire = () => {
  const { t } = useTranslation();
  return (
    <main
      className="page page-histoire container"
      style={{ padding: "80px 0" }}
    >
      <h1>{t("pages.histoire.title")}</h1>
      <p>{t("pages.histoire.intro")}</p>
    </main>
  );
};

export default Histoire;
