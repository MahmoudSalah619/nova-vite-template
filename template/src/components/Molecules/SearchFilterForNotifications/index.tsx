import { useSearchParams } from "react-router-dom";
import { ChangeEvent } from "react";
import styles from "./styles.module.scss";
import SearchIcon from "@/src/assets/icons/home/search-orange-icon.svg";
import TextInput from "../../Atoms/TextInput";
import useAutoCompleteTranslation from "@/template/hooks/useAutoCompleteTranslation";

function SearchFilterBarForNotifications() {
  const { t } = useAutoCompleteTranslation();
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchParams((prevParams) => {
      const newParams = new URLSearchParams(prevParams);
      newParams.set("search", e.target.value);
      return newParams;
    });
  };

  return (
    <section className={styles.container}>
      <TextInput
        inputStyle={styles.searchInput}
        prefixIcon={SearchIcon}
        placeholder={t("Search")}
        onChange={handleSearchChange}
        value={searchParams.get("search") || ""}
      />
    </section>
  );
}

export default SearchFilterBarForNotifications;
