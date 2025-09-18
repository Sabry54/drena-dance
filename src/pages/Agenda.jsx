import React from "react";
import { useTranslation } from "react-i18next";

const Agenda = () => {
  const { t } = useTranslation();
  return (
    <main className="page page-agenda container" style={{ padding: "80px 0" }}>
      <h1>{t("pages.agenda.title")}</h1>
      <p>{t("pages.agenda.intro")}</p>
    </main>
  );
};

export default Agenda;
