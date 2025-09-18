import React from "react";
import { useTranslation } from "react-i18next";

const CoursPage = () => {
  const { t } = useTranslation();
  return (
    <main className="page page-cours container" style={{ padding: "80px 0" }}>
      <h1>{t("pages.cours.title")}</h1>
      <nav className="cours-subnav" style={{ margin: "16px 0" }}>
        <a href="#kizomba">{t("pages.cours.kizomba")}</a> ·
        <a href="#semba" style={{ marginLeft: 8 }}>
          {t("pages.cours.semba")}
        </a>{" "}
        ·
        <a href="#afro" style={{ marginLeft: 8 }}>
          {t("pages.cours.afro")}
        </a>
      </nav>
      <section id="kizomba" style={{ padding: "24px 0" }}>
        <h2>{t("pages.cours.kizomba")}</h2>
        <p>{t("pages.cours.kizomba_desc")}</p>
      </section>
      <section id="semba" style={{ padding: "24px 0" }}>
        <h2>{t("pages.cours.semba")}</h2>
        <p>{t("pages.cours.semba_desc")}</p>
      </section>
      <section id="afro" style={{ padding: "24px 0" }}>
        <h2>{t("pages.cours.afro")}</h2>
        <p>{t("pages.cours.afro_desc")}</p>
      </section>
    </main>
  );
};

export default CoursPage;
