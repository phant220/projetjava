import { useTranslation } from "react-i18next";

const HotelDescription = () => {
  const { t } = useTranslation();

  return (
    <section style={styles.container}>
      <h1>{t("title")}</h1>
      <p>{t("description")}</p>

      <ul>
        <li>📍 {t("location")}</li>
        <li>⭐ {t("rating")}</li>
        <li>📞 {t("contact")}</li>
        <li>🏊 {t("services")}</li>
      </ul>
    </section>
  );
};

const styles = {
  container: {
    padding: "30px",
  },
};

export default HotelDescription;
