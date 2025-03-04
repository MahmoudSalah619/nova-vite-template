import styles from "./styles.module.scss";

export default function NavbarChangeLang() {
  const language = localStorage.getItem("lang");

  const changeLanguage = (lang: string) => () => {
    localStorage.setItem("lang", lang);
    window.location.reload();
  };
  const isAR = language === "ar";

  return (
    <div>
      <div className={styles.langCon}>
        <button
          className={styles.langBtn}
          onClick={isAR ? changeLanguage("en") : changeLanguage("ar")}
        >
          {isAR ? "English" : " العربية"}
        </button>
      </div>
    </div>
  );
}
